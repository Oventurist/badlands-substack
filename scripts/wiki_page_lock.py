#!/usr/bin/env python
"""Per-page write gate for parallel wiki ingest.

Two parallel workers processing DIFFERENT articles can both want to update the
same entity page (e.g. donald-trump.md appears in many briefs). Without a gate,
last-writer-wins silently drops content. This script gives each page an
O_EXCL lock file: a worker must acquire the lock BEFORE reading/writing a page
and release it after. Contention is resolved by retry with timeout; locks
older than the TTL are stolen (crashed worker).

Usage:
  python wiki_page_lock.py acquire <slug> [--ttl-min 15] [--timeout-sec 120]
  python wiki_page_lock.py release <slug>
  python wiki_page_lock.py cleanup [minutes]     # watchdog: clear stale locks
Exit code 0 = acquired/released; 1 = acquire timed out (page busy).
"""
import os
import sys
import time
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent  # project root
LOCK_DIR = HERE / "wiki" / ".page-locks"
LOCK_DIR.mkdir(parents=True, exist_ok=True)

DEFAULT_TTL_MIN = 15
DEFAULT_TIMEOUT_SEC = 120
POLL_SEC = 5


def lock_path(slug: str) -> Path:
    slug = os.path.basename(slug).replace("/", "_").replace("\\", "_")
    if not slug.endswith(".md"):
        slug += ".md"
    return LOCK_DIR / f"{slug}.lock"


def is_stale(lf: Path, ttl_min: int) -> bool:
    return (time.time() - os.path.getmtime(lf)) > ttl_min * 60


def acquire(slug: str, ttl_min: int, timeout_sec: int) -> bool:
    lp = lock_path(slug)
    deadline = time.time() + timeout_sec
    while True:
        try:
            fd = os.open(lp, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            os.write(fd, f"pid={os.getpid()} time={time.time():.0f}\n".encode())
            os.close(fd)
            print(f"ACQUIRED {slug}")
            return True
        except FileExistsError:
            # steal stale locks (crashed worker)
            if is_stale(lp, ttl_min):
                try:
                    lp.unlink()
                    print(f"STOLEN stale lock {slug}", file=sys.stderr)
                    continue
                except OSError:
                    pass
            if time.time() > deadline:
                print(f"TIMEOUT {slug}", file=sys.stderr)
                return False
            time.sleep(POLL_SEC)
        except OSError as e:
            print(f"ERROR {slug}: {e}", file=sys.stderr)
            return False


def release(slug: str) -> bool:
    lp = lock_path(slug)
    try:
        lp.unlink()
        print(f"RELEASED {slug}")
        return True
    except FileNotFoundError:
        print(f"NO-LOCK {slug}", file=sys.stderr)
        return False


def cleanup(minutes: int) -> None:
    cleared = 0
    now = time.time()
    for lf in LOCK_DIR.glob("*.lock"):
        if now - os.path.getmtime(lf) > minutes * 60:
            lf.unlink()
            cleared += 1
    print(f"cleared {cleared} stale page locks")


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 2
    cmd = args[0]
    if cmd == "acquire":
        slug = args[1]
        ttl = DEFAULT_TTL_MIN
        timeout = DEFAULT_TIMEOUT_SEC
        for a in args[2:]:
            if a.startswith("--ttl-min"):
                ttl = int(a.split("=")[1] if "=" in a else args[args.index(a) + 1])
            elif a.startswith("--timeout-sec"):
                timeout = int(a.split("=")[1] if "=" in a else args[args.index(a) + 1])
        return 0 if acquire(slug, ttl, timeout) else 1
    elif cmd == "release":
        return 0 if release(args[1]) else 1
    elif cmd == "cleanup":
        minutes = int(args[1]) if len(args) > 1 else DEFAULT_TTL_MIN
        cleanup(minutes)
        return 0
    else:
        print(f"unknown command: {cmd}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    sys.exit(main())
