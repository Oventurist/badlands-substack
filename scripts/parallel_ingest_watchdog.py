#!/usr/bin/env python
"""Watchdog: restart the parallel ingest driver if it died before the queue
finished. Runs as a no_agent cron (every 5m). Silent when healthy.

Logic:
- If the driver process (parallel_ingest.py) is alive -> healthy, exit silent.
- If the driver is dead AND the queue still has unprocessed articles ->
  clear stale locks + relaunch the driver (append to a new launch log).
- If the queue is DONE -> nothing to do, exit silent.
"""
import glob
import os
import re
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

PROJ = Path(__file__).resolve().parent.parent
if str(PROJ) != "C:/Users/14053/hermes-projects/badlands-substack":
    PROJ = Path("C:/Users/14053/hermes-projects/badlands-substack")

QUEUE = ["python", str(PROJ / "scripts" / "wiki_queue.py")]
LOG = PROJ / "logs" / "parallel-ingest-watchdog.log"


def log(msg):
    line = f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {msg}"
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(line + "\n")
    print(line)


def driver_alive():
    """True if the DRIVER (parallel_ingest.py) is running. Must match the
    driver's module name specifically — a bare 'parallel_ingest' substring
    would match this watchdog's own command line (parallel_ingest_watchdog.py)
    and always report alive."""
    r = subprocess.run(
        ["wmic", "process", "where", "name='python.exe'", "get", "CommandLine"],
        capture_output=True, text=True)
    return any("parallel_ingest.py" in l for l in r.stdout.splitlines())


def queue_done():
    r = subprocess.run(QUEUE + ["next"], capture_output=True, text=True, cwd=str(PROJ))
    return "DONE" in r.stdout


def clear_stale_locks():
    n = 0
    for lf in glob.glob(str(PROJ / "wiki" / ".inprogress-*")) + \
             glob.glob(str(PROJ / "wiki" / ".page-locks" / "*.lock")):
        try:
            os.unlink(lf)
            n += 1
        except OSError:
            pass
    # stale driver lock
    dl = PROJ / "scripts" / ".parallel-ingest.lock"
    if dl.exists():
        try:
            dl.unlink()
            n += 1
        except OSError:
            pass
    return n


def relaunch():
    n = clear_stale_locks()
    log(f"relaunching driver (cleared {n} stale locks)")
    # launch detached so the cron's process death doesn't kill it
    launch_log = PROJ / "logs" / "parallel-ingest-watchdog-relaunch.log"
    with open(launch_log, "a", encoding="utf-8") as f:
        f.write(f"\n# relaunch at {datetime.now().isoformat()}\n")
    DETACH = (
        f'cd {PROJ} && python scripts/parallel_ingest.py '
        f'--workers 12 --model deepseek-v4-flash-0731 --provider nous '
        f'>> {launch_log} 2>&1 &'
    )
    subprocess.Popen(DETACH, shell=True, cwd=str(PROJ),
                     stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def main():
    if driver_alive():
        return  # healthy, silent
    if queue_done():
        return  # finished, silent
    # driver dead + queue not done -> relaunch
    relaunch()
    return 0


if __name__ == "__main__":
    sys.exit(main())
