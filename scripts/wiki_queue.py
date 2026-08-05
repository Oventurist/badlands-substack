#!/usr/bin/env python
"""Queue helper for the token-efficient wiki ingest.

Subcommands:
  next  -> print path of next pending article (raw/), or 'DONE'.
  done <basename> -> record a basename as processed.

State file: wiki/.processed.txt (one basename per line).
Source of truth: articles/ (master). raw/ is the ingest-ready copy.
"""
import glob
import os
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent  # scripts/.. -> project root
RAW = HERE / "raw"
PROC = HERE / "wiki" / ".processed.txt"


def processed():
    if not PROC.exists():
        return set()
    with open(PROC, encoding="utf-8") as f:
        return {line.strip() for line in f if line.strip()}


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "next"
    if cmd == "next":
        done = processed()
        # skip anything claimed by a lock file (in-progress from a crashed/prior run)
        locked = set()
        for lf in glob.glob(str(PROC.parent / ".inprogress-*")):
            locked.add(lf.split(".inprogress-")[1])
        for p in sorted(glob.glob(str(RAW / "*.md"))):
            b = os.path.basename(p)
            if b not in done and b not in locked:
                print(p)
                return
        print("DONE")
    elif cmd == "claim":
        # ATOMIC claim for parallel workers: pick the first unprocessed article
        # AND create its lock in one O_EXCL step, so two workers can never claim
        # the same article. Returns the path, or 'DONE'.
        done = processed()
        for p in sorted(glob.glob(str(RAW / "*.md"))):
            b = os.path.basename(p)
            if b in done:
                continue
            lf = PROC.parent / f".inprogress-{b}"
            try:
                fd = os.open(lf, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
                os.write(fd, f"pid={os.getpid()} time={time.time():.0f}\n".encode())
                os.close(fd)
                print(p)
                return
            except FileExistsError:
                continue  # claimed by another worker; try next
        print("DONE")
    elif cmd == "lock":
        b = os.path.basename(sys.argv[2])
        if not b.endswith(".md"):
            b += ".md"
        open(PROC.parent / f".inprogress-{b}", "w", encoding="utf-8").close()
        print("locked", b)
    elif cmd == "unlock":
        b = os.path.basename(sys.argv[2])
        if not b.endswith(".md"):
            b += ".md"
        lf = PROC.parent / f".inprogress-{b}"
        if lf.exists():
            lf.unlink()
        print("unlocked", b)
    elif cmd == "done":
        import os as _os
        b = sys.argv[2]
        # normalize: keep only basename, ensure .md suffix
        b = _os.path.basename(b)
        if not b.endswith(".md"):
            b += ".md"
        # only record if it actually exists in raw/
        if (RAW / b).exists():
            with open(PROC, "a", encoding="utf-8") as f:
                f.write(b + "\n")
            # clear any in-progress lock for this article
            lf = PROC.parent / f".inprogress-{b}"
            if lf.exists():
                lf.unlink()
            print("recorded", b)
        else:
            print("SKIP: not in raw/:", b)
    elif cmd == "fixdups":
        # dedupe .processed.txt in place (idempotent re-runs / races leave dup lines)
        done = processed()
        with open(PROC, "w", encoding="utf-8") as f:
            for b in sorted(done):
                f.write(b + "\n")
        print("deduped to", len(done), "entries")
    elif cmd == "clearlocks":
        # drop in-progress locks older than the cutoff minutes (crashed runs)
        import time as _t
        cutoff_min = int(sys.argv[2]) if len(sys.argv) > 2 else 30
        now = _t.time()
        cleared = 0
        for lf in glob.glob(str(PROC.parent / ".inprogress-*")):
            if now - os.path.getmtime(lf) > cutoff_min * 60:
                lf.unlink()
                cleared += 1
        print("cleared", cleared, "stale locks")
    else:
        print("unknown command:", cmd)


if __name__ == "__main__":
    main()
