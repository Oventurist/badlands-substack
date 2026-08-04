#!/usr/bin/env python
"""Log how long each Badlands Wiki Ingest cycle takes (start -> finish).

Passive watchdog (no_agent cron, runs every 5m). The ingest cron leaves one
transcript file per run in its output dir, written at run COMPLETION
("Run Time" header == file mtime, and the file contains the agent's final
response). Ingest runs are strictly sequential, so:

    cycle_duration(run N) = mtime(run N) - mtime(run N-1)

is the full wall-clock time of one ingest cycle, from the previous run's
finish to this run's finish. This script appends one row per run to
logs/ingest-timings.log in the project. It backfills all existing runs on
first execution, then only appends new ones (idempotent, silent when
nothing new).

Output format (CSV):
    run_start, run_end, duration_sec, duration_hhmmss, article
"""
import glob
import os
import re
import sys
import time

INGEST_ID = "85b1758451ba"
OUTPUT_DIR = os.path.expanduser(f"~/AppData/Local/hermes/cron/output/{INGEST_ID}")
PROJ = "C:/Users/14053/hermes-projects/badlands-substack"
LOG = os.path.join(PROJ, "logs", "ingest-timings.log")

ARTICLE_RE = re.compile(r"Ingested \*\*([^*]+\.md)\*\*")
RAW_RE = re.compile(r"raw/([a-zA-Z0-9-]+\.md)")
SILENT_RE = re.compile(r"^\[SILENT\]\s*$", re.M)


def fmt_hms(secs):
    secs = int(round(secs))
    h, rem = divmod(secs, 3600)
    m, s = divmod(rem, 60)
    return f"{h:02d}:{m:02d}:{s:02d}"


def article_of(path):
    try:
        txt = open(path, encoding="utf-8", errors="replace").read()
    except Exception:
        return ""
    # Only the actual agent response matters — the prompt itself mentions
    # "[SILENT]" as an instruction, which would otherwise be a false positive.
    resp = txt.split("## Response", 1)[-1]
    m = ARTICLE_RE.search(resp)
    if m:
        return m.group(1)
    m = RAW_RE.search(resp)
    if m:
        return m.group(1)
    return "SILENT" if SILENT_RE.search(resp) else ""


def main():
    files = sorted(
        glob.glob(os.path.join(OUTPUT_DIR, "*.md")),
        key=lambda p: os.path.getmtime(p),
    )
    if len(files) < 2:
        return

    # rows already logged -> last run_end we've seen
    last_logged = None
    if os.path.exists(LOG):
        try:
            for line in open(LOG, encoding="utf-8", errors="replace"):
                line = line.strip()
                if line and not line.startswith("#") and not line.startswith("run_start"):
                    last_logged = line.split(",")[1].strip()
        except Exception:
            last_logged = None

    rows = []
    prev = files[0]
    for cur in files[1:]:
        start = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(os.path.getmtime(prev)))
        end = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(os.path.getmtime(cur)))
        if last_logged and end <= last_logged:
            prev = cur
            continue
        dur = os.path.getmtime(cur) - os.path.getmtime(prev)
        rows.append(f"{start},{end},{int(round(dur))},{fmt_hms(dur)},{article_of(cur)}")
        prev = cur

    if not rows:
        return  # silent

    os.makedirs(os.path.dirname(LOG), exist_ok=True)
    new_file = not os.path.exists(LOG)
    with open(LOG, "a", encoding="utf-8") as f:
        if new_file:
            f.write("# Badlands Wiki Ingest cycle durations (run_start,run_end,duration_sec,duration_hhmmss,article)\n")
            f.write("run_start,run_end,duration_sec,duration_hhmmss,article\n")
        for r in rows:
            f.write(r + "\n")
    # one-line summary so the cron's output file is inspectable
    print(f"logged {len(rows)} ingest cycle(s) -> {LOG}")


if __name__ == "__main__":
    sys.exit(main())
