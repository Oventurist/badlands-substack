#!/usr/bin/env python
"""Watchdog: clean stray files from the wiki project root + clear stale locks + dedupe processed list.

Deletes any .md/.txt/stray files directly in the project root (outside known subdirs).
Also clears stale in-progress locks (crashed ingest runs) and dedupes .processed.txt.
Prints nothing when all clean (silent watchdog).
"""
import glob
import os
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent  # project root
PROC = HERE / "wiki" / ".processed.txt"

KNOWN_DIRS = {"wiki", "raw", "articles", "transcripts", "posts-new", "scripts", "unprocessed", "cache"}

def cleanup():
    removed = []
    # 1) stray files at project root
    for p in HERE.iterdir():
        if p.is_file() and p.name not in ("AGENTS.md", "badlands.json", "README.md"):
            if p.suffix.lower() in (".md", ".txt") or re.fullmatch(r"[0-9]+", p.stem):
                p.unlink()
                removed.append(p.name)
    # 2) stale locks (older than 30 min) -> crashed ingest runs get retried
    cleared = 0
    now = __import__("time").time()
    for lf in glob.glob(str(HERE / "wiki" / ".inprogress-*")):
        if now - os.path.getmtime(lf) > 30 * 60:
            lf.unlink()
            cleared += 1
    # 3) dedupe processed list
    if PROC.exists():
        lines = [l.strip() for l in PROC.read_text(encoding="utf-8").splitlines() if l.strip()]
        dedup = sorted(set(lines))
        if len(dedup) != len(lines):
            PROC.write_text("\n".join(dedup) + "\n", encoding="utf-8")
            removed.append(f".processed.txt deduped ({len(lines)}->{len(dedup)})")
    if removed:
        print("cleaned:", ", ".join(removed))
    if cleared:
        print(f"cleared {cleared} stale locks")
    # silent when nothing to do

if __name__ == "__main__":
    cleanup()
