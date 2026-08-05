#!/usr/bin/env python
"""Make inline citation markers clickable: [1] -> [[1]](original-article-url).

Reads each wiki page's `## References` section to build a number -> URL map
(e.g. "1. Badlands Brief — \"Title\", URL: https://badlands.substack.com/p/x"),
then rewrites inline [n] markers in the page body as markdown links pointing
at the original article. Idempotent (already-linked [[n]](url) is untouched).
Preserves CRLF line endings; never touches frontmatter.

Usage:
  python citation_links.py [--dry-run]
"""
import glob
import os
import re
import sys
from pathlib import Path

PROJ = Path(__file__).resolve().parent.parent
WIKI = PROJ / "wiki"

REF_LINE_RE = re.compile(r"^(\d+)\.\s+.*URL:\s*(https?://\S+)", re.M)
CITE_RE = re.compile(r"(?<!\[)\[(\d+)\](?!\])")  # [n] but not [[n]] or [n]]
FRONTMATTER_RE = re.compile(r"^---\n.*?\n---\n", re.S)


def process_file(path: Path, dry_run: bool) -> tuple:
    """Return (changed: bool, n_linked: int, n_skipped: int)."""
    raw = path.read_bytes()
    text = raw.decode("utf-8", errors="replace")
    has_crlf = "\r\n" in text

    # split frontmatter
    fm = FRONTMATTER_RE.match(text)
    body_start = fm.end() if fm else 0

    # find References section
    ref_idx = text.find("## References", body_start)
    if ref_idx == -1:
        return False, 0, 0

    body = text[body_start:ref_idx]
    refs = text[ref_idx:]

    # number -> URL map from References
    url_map = {}
    for m in REF_LINE_RE.finditer(refs):
        url_map[int(m.group(1))] = m.group(2)
    if not url_map:
        return False, 0, 0

    n_linked = 0
    n_skipped = 0

    def repl(m):
        nonlocal n_linked, n_skipped
        num = int(m.group(1))
        url = url_map.get(num)
        if url:
            n_linked += 1
            return f"[[{num}]]({url})"
        n_skipped += 1
        return m.group(0)

    new_body = CITE_RE.sub(repl, body)
    if new_body == body:
        return False, 0, n_skipped

    new_text = text[:body_start] + new_body + refs
    if has_crlf:
        new_text = new_text.replace("\n", "\r\n")
    if not dry_run:
        path.write_bytes(new_text.encode("utf-8"))
    return True, n_linked, n_skipped


def main():
    dry = "--dry-run" in sys.argv
    total_changed = total_linked = 0
    for d in ("entities", "concepts"):
        for p in sorted(glob.glob(str(WIKI / d / "*.md"))):
            changed, linked, skipped = process_file(Path(p), dry)
            if changed:
                total_changed += 1
                total_linked += linked
                if dry:
                    print(f"  [dry] {os.path.relpath(p, PROJ)}: {linked} citations")
    mode = "DRY-RUN" if dry else "APPLIED"
    print(f"{mode}: {total_changed} pages updated, {total_linked} citations linked")


if __name__ == "__main__":
    main()
