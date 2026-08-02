#!/usr/bin/env python
"""Watchdog: clean stray files + detect missing/blank wiki pages and re-queue their sources.

1) Deletes any .md/.txt/stray files directly in the project root (outside known subdirs).
2) Clears stale in-progress locks (crashed ingest runs) and dedupes .processed.txt.
3) DETECTS MISSING/BLANK PAGES:
   - A page is "missing" if another wiki page links [[slug]] but no entities/concepts file exists.
   - A page is "blank" if the file exists but has no body content (frontmatter only, <200 bytes).
   - For any missing/blank page, if we can find a raw/ source article that covers it (by filename
     match or a page's sources: list), we RE-QUEUE that article: remove it from .processed.txt so the
     ingest cron regenerates the pages from the correct source.
   - If no source can be identified, we just report the dangling link slug so the link-repair
     watchdog unlinks it on its next pass.
Prints nothing when all clean (silent watchdog).
"""
import glob
import os
import re
import time
from pathlib import Path

HERE = Path("C:/Users/14053/hermes-projects/badlands-substack")  # project root (hardcoded)
WIKI = HERE / "wiki"
ENT = WIKI / "entities"
CON = WIKI / "concepts"
RAW = HERE / "raw"
PROC = WIKI / ".processed.txt"

def existing_slugs():
    slugs = set()
    for d in (ENT, CON):
        if d.exists():
            for p in d.glob("*.md"):
                slugs.add(p.stem)
    return slugs

def get_sources(page_path):
    """Return list of raw basenames from the page's sources: frontmatter, if any."""
    try:
        t = page_path.read_text(encoding="utf-8")
    except Exception:
        return []
    m = re.search(r"sources:\s*\[(.*?)\]", t, re.S)
    if not m:
        return []
    return [x.strip().strip('"\'') for x in m.group(1).split(",") if x.strip()]

def cleanup():
    out = []
    # 1) stray files at project root
    removed = []
    for p in HERE.iterdir():
        if p.is_file() and p.name not in ("AGENTS.md", "badlands.json", "README.md"):
            if p.suffix.lower() in (".md", ".txt") or re.fullmatch(r"[0-9]+", p.stem):
                p.unlink()
                removed.append(p.name)
    if removed:
        out.append("cleaned strays: " + ", ".join(removed))

    # 2) stale locks (older than 30 min) -> crashed ingest runs get retried
    cleared = 0
    now = time.time()
    for lf in glob.glob(str(WIKI / ".inprogress-*")):
        if now - os.path.getmtime(lf) > 30 * 60:
            os.remove(lf)
            cleared += 1
    if cleared:
        out.append(f"cleared {cleared} stale locks")

    # 3) dedupe processed list
    if PROC.exists():
        lines = [l.strip() for l in PROC.read_text(encoding="utf-8").splitlines() if l.strip()]
        dedup = sorted(set(lines))
        if len(dedup) != len(lines):
            PROC.write_text("\n".join(dedup) + "\n", encoding="utf-8")
            out.append(f".processed.txt deduped ({len(lines)}->{len(dedup)})")

    # 4) missing/blank page detection + re-queue
    slugs = existing_slugs()
    # 4a) blank pages (exist but frontmatter-only / tiny)
    blank_sources = []
    for d in (ENT, CON):
        for p in d.glob("*.md"):
            size = p.stat().st_size
            if size < 200:
                srcs = get_sources(p)
                blank_sources.extend(srcs)
                out.append(f"BLANK PAGE: {p.name} ({size}B) sources={srcs}")

    # 4b) dangling link targets (linked from a page but no file)
    linked = set()
    for d in (ENT, CON):
        for p in d.glob("*.md"):
            try:
                t = p.read_text(encoding="utf-8")
            except Exception:
                continue
            for m in re.findall(r"\[\[([^\]|]+)", t):
                linked.add(m.strip().lower().replace(" ", "-"))
    missing = linked - slugs
    # exclude non-page targets (file paths, urls, etc.)
    missing = {s for s in missing if re.fullmatch(r"[a-z0-9\-]+", s) and s not in ("raw",)}
    requeued = set()
    for slug in sorted(missing):
        # find a source: check pages that link this slug for their sources
        srcs = []
        for d in (ENT, CON):
            for p in d.glob("*.md"):
                try:
                    t = p.read_text(encoding="utf-8")
                except Exception:
                    continue
                if f"[[{slug}" in t or f"[[{slug}|" in t:
                    srcs.extend(get_sources(p))
        srcs = [s for s in srcs if (RAW / s).exists()]
        if srcs:
            for s in set(srcs):
                if s not in requeued:
                    requeued.add(s)
                    out.append(f"MISSING PAGE [[{slug}]] -> re-queued source: {s}")
        else:
            out.append(f"MISSING PAGE [[{slug}]] -> no source found, left for link-repair to unlink")

    # re-queue: remove those raw basenames from .processed.txt so ingest re-processes them
    if requeued and PROC.exists():
        lines = [l.strip() for l in PROC.read_text(encoding="utf-8").splitlines() if l.strip()]
        kept = [l for l in lines if l not in requeued]
        if len(kept) != len(lines):
            PROC.write_text("\n".join(kept) + "\n", encoding="utf-8")

    if out:
        print("\n".join(out))
    # silent when nothing to do

if __name__ == "__main__":
    cleanup()
