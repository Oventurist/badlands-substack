#!/usr/bin/env python
"""Append a progress row to logs/ingest-progress.log: processed, remaining,
pages, workers alive, and a rolling rate/ETA. Runs as a no_agent cron.

Row format (CSV):
    timestamp, processed, remaining, total, pages, workers, rate_per_hour, eta_hours
"""
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path

PROJ = Path(__file__).resolve().parent.parent
if str(PROJ) != "C:/Users/14053/hermes-projects/badlands-substack":
    PROJ = Path("C:/Users/14053/hermes-projects/badlands-substack")
WIKI = PROJ / "wiki"
RAW = PROJ / "raw"
LOG = PROJ / "logs" / "ingest-progress.log"

HEADER = "timestamp,processed,remaining,total,pages,workers,rate_per_hour,eta_hours"


def count_processed():
    pf = WIKI / ".processed.txt"
    if not pf.exists():
        return 0
    with open(pf, encoding="utf-8") as f:
        return sum(1 for l in f if l.strip())


def count_raw():
    return sum(1 for p in RAW.glob("*.md"))


def count_pages():
    return sum(1 for p in WIKI.glob("entities/*.md")) + \
           sum(1 for p in WIKI.glob("concepts/*.md"))


def count_workers():
    r = subprocess.run(
        ["wmic", "process", "where", "name='python.exe'", "get", "CommandLine"],
        capture_output=True, text=True)
    return sum(1 for l in r.stdout.splitlines()
               if "spawn_main" in l or "hermes -z" in l or 'hermes.exe" -z' in l)


def read_previous():
    """Return (timestamp, processed) of the last row, for rate/ETA."""
    if not LOG.exists():
        return None, None
    lines = [l for l in LOG.read_text(encoding="utf-8").splitlines()
             if l and not l.startswith("#") and l != HEADER]
    if not lines:
        return None, None
    last = lines[-1].split(",")
    try:
        return last[0], int(last[1])
    except (IndexError, ValueError):
        return None, None


def main():
    processed = count_processed()
    total = count_raw()
    remaining = total - processed
    pages = count_pages()
    workers = count_workers()

    # rate/ETA from previous row (only meaningful if we have history and time passed)
    prev_ts, prev_done = read_previous()
    rate = 0.0
    eta = 0.0
    if prev_ts and prev_done is not None and processed > prev_done:
        try:
            t0 = datetime.fromisoformat(prev_ts.replace("Z", "+00:00"))
            t1 = datetime.now()
            dt_h = max((t1 - t0).total_seconds() / 3600.0, 1 / 3600.0)
            rate = (processed - prev_done) / dt_h
            if rate > 0:
                eta = remaining / rate
        except (ValueError, TypeError):
            pass

    row = (f"{datetime.now().isoformat(timespec='seconds')},"
           f"{processed},{remaining},{total},{pages},{workers},"
           f"{rate:.1f},{eta:.1f}")

    first = not LOG.exists()
    with open(LOG, "a", encoding="utf-8") as f:
        if first:
            f.write("# Badlands wiki ingest progress (auto-logged every 15m)\n")
            f.write(HEADER + "\n")
        f.write(row + "\n")

    # one-line stdout for the cron record (deliver local so it's inspectable)
    print(f"processed={processed} remaining={remaining} pages={pages} "
          f"workers={workers} rate={rate:.1f}/h eta={eta:.1f}h")
    return 0


if __name__ == "__main__":
    sys.exit(main())
