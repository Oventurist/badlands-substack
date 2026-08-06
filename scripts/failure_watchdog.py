#!/usr/bin/env python
"""Failure watchdog for the parallel ingest: detects NEW failures since the
last check, classifies them, and auto-corrects. Runs as a no_agent cron.

Actions it can take:
  1. RATE-LIMIT STORM  (>=3 rate_limit=True failures within a short window,
     or >=5 any-failures in one window) -> the provider is throttling. It
     writes a "cooldown" marker that the driver's workers read before
     claiming (sleeps instead of hammering). The marker expires after 10 min.
  2. PROBLEM ARTICLE   (same slug failed >=3 times) -> quarantines it by
     adding it to wiki/.quarantine.txt. The queue skips quarantined slugs,
     so it stops burning retries. (Manual review later; alert the user.)
  3. DRIVER STALLED    (no new OK/FAIL/STATUS line in 10 min while workers
     are claimed) -> the driver is wedged; kill it (watchdog cron will
     relaunch).

It also delivers a concise alert ONLY when it takes action, so the user
isn't spammed every 5 minutes.
"""
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

LOG = PROJ / "logs" / "parallel-ingest.log"
STATE = PROJ / "scripts" / ".failure-watchdog.state"
QUARANTINE = PROJ / "wiki" / ".quarantine.txt"
COOLDOWN = PROJ / "scripts" / ".rate-limit-cooldown"
COOLDOWN_MINUTES = 10
PROBLEM_THRESHOLD = 3  # same slug failed N times -> quarantine

# slug -> failure count, persisted in STATE (json)
import json


def load_state():
    if STATE.exists():
        try:
            return json.loads(STATE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {"seen_line": 0, "fail_counts": {}, "actions": []}


def save_state(state):
    STATE.write_text(json.dumps(state), encoding="utf-8")


def get_log_lines():
    if not LOG.exists():
        return []
    return LOG.read_text(encoding="utf-8", errors="replace").splitlines()


def parse_failure(line):
    """Return (slug, is_rate_limit) or None."""
    m = re.search(r"FAIL ([\w.-]+\.md) in \d+s .*?rate_limit=(True|False)", line)
    if m:
        return m.group(1), m.group(2) == "True"
    m = re.search(r"TIMEOUT ([\w.-]+\.md) after \d+s", line)
    if m:
        return m.group(1), False
    return None


def write_cooldown():
    COOLDOWN.write_text(str(time.time()), encoding="utf-8")


def clear_cooldown():
    if COOLDOWN.exists():
        COOLDOWN.unlink()


def cooldown_active():
    if not COOLDOWN.exists():
        return False
    try:
        ts = float(COOLDOWN.read_text(encoding="utf-8").strip())
        return (time.time() - ts) < COOLDOWN_MINUTES * 60
    except Exception:
        return False


def quarantine(slug):
    if QUARANTINE.exists():
        q = QUARANTINE.read_text(encoding="utf-8").splitlines()
    else:
        q = []
    if slug not in q:
        q.append(slug)
        QUARANTINE.write_text("\n".join(q) + "\n", encoding="utf-8")
        return True
    return False


def driver_stalled():
    """True if the log hasn't advanced (no new line) in 10 min."""
    if not LOG.exists():
        return False
    mtime = os.path.getmtime(LOG)
    return (time.time() - mtime) > 600


def kill_driver():
    """Kill the parallel_ingest driver (watchdog cron will relaunch)."""
    r = subprocess.run(["wmic", "process", "where", "name='python.exe'", "get", "ProcessId,CommandLine"],
                       capture_output=True, text=True)
    for line in r.stdout.splitlines():
        if "parallel_ingest" in line:
            m = re.search(r"(\d+)\s*$", line.strip())
            if m:
                subprocess.run(["taskkill", "/F", "/T", "/PID", m.group(1)],
                               capture_output=True, text=True)
                return True
    return False


def main():
    state = load_state()
    lines = get_log_lines()
    actions = []
    now_line = len(lines)

    # only scan lines newer than last check
    new_lines = lines[state["seen_line"]:] if state["seen_line"] < len(lines) else []
    state["seen_line"] = now_line

    failures = []
    for l in new_lines:
        f = parse_failure(l)
        if f:
            failures.append(f)

    if failures:
        # 1. rate-limit storm check
        rl = [f for f in failures if f[1]]
        if len(rl) >= 3 or len(failures) >= 5:
            write_cooldown()
            actions.append(f"rate-limit storm ({len(rl)} throttled / {len(failures)} failures) -> 10-min cooldown set")

        # 2. problem-article check (cumulative)
        newly_quarantined = []
        for slug, _ in failures:
            state["fail_counts"][slug] = state["fail_counts"].get(slug, 0) + 1
            if state["fail_counts"][slug] >= PROBLEM_THRESHOLD:
                if quarantine(slug):
                    newly_quarantined.append(slug)
        if newly_quarantined:
            actions.append(f"quarantined problem article(s): {', '.join(newly_quarantined)}")

    # 3. stalled driver check
    if driver_stalled():
        if kill_driver():
            actions.append("driver stalled 10+ min -> killed (auto-relaunch watchdog will restart)")

    save_state(state)

    if actions:
        msg = " | ".join(actions)
        print(f"WIKI INGEST WATCHDOG: {msg}")
        # also append to a watchdog log for the record
        with open(PROJ / "logs" / "parallel-ingest-watchdog.log", "a", encoding="utf-8") as f:
            f.write(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {msg}\n")
        return 0
    # silent when healthy
    return 0


if __name__ == "__main__":
    sys.exit(main())
