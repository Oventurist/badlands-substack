#!/usr/bin/env python
"""Auto-fix wiki pages with invalid YAML frontmatter (breaks VitePress build).

Fixes (in order, per page):
  1. Empty file (0 bytes) -> delete (the raw article stays queued and will
     be re-ingested by a later run).
  2. Missing frontmatter block -> leave (harmless for the build; VitePress
     renders the body as plain markdown).
  3. Unquoted title containing a colon  ->  quote the whole title.
  4. Title starting with a quote that never closes (e.g. '"Seditious Six"
     Video') -> replace with a single fully-quoted value.
  5. Any other YAML parse error -> report (no silent mangling).

Idempotent. Prints a one-line summary. Used by the hourly auto-commit so a
bad page can never break the Vercel deploy.
"""
import glob
import os
import re
import sys

try:
    import yaml
except ImportError:
    print("ERROR: pyyaml not installed")
    sys.exit(2)

PROJ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIKI = os.path.join(PROJ, "wiki")

FM_RE = re.compile(r"^---\n(.*?)\n---", re.S)
TITLE_RE = re.compile(r"^title:\s*(.*)$", re.M)


def fix_file(path):
    """Return (changed: bool, note: str)."""
    try:
        raw = open(path, "rb").read()
    except OSError:
        return False, "unreadable"
    if len(raw) == 0:
        os.unlink(path)
        return True, "deleted (empty file)"
    text = raw.decode("utf-8", errors="replace")
    fm = FM_RE.search(text)
    if not fm:
        return False, "no frontmatter (ok)"
    body = fm.group(1)
    try:
        yaml.safe_load(body)
        return False, "ok"
    except yaml.YAMLError as e:
        msg = str(e)
        # case: unquoted colon in title ("mapping values are not allowed")
        if "mapping values are not allowed" in msg or "incomplete explicit mapping" in msg:
            m = TITLE_RE.search(body)
            if m:
                val = m.group(1).strip()
                if val and not val.startswith('"') and not val.startswith("'"):
                    new_line = f'title: "{val.replace(chr(34), chr(39))}"'
                    new_body = body[:m.start(1)] + new_line[7:] + body[m.end(1):]
                    # simplest robust approach: rewrite just the title line
                    text2 = text.replace(
                        f"title: {val}", f'title: "{val.replace(chr(34), chr(39))}"', 1)
                    open(path, "w", encoding="utf-8", newline="").write(text2)
                    return True, f'quoted title "{val[:50]}"'
        # case: unclosed quote in title
        m = TITLE_RE.search(body)
        if m:
            val = m.group(1).strip()
            if val.startswith('"') and not val.endswith('"'):
                clean = val[1:].replace('"', "")
                text2 = text.replace(f"title: {val}", f'title: "{clean}"', 1)
                open(path, "w", encoding="utf-8", newline="").write(text2)
                return True, f'fixed unclosed quote "{clean[:50]}"'
        return False, f"unfixable: {msg.splitlines()[0][:80]}"


def main():
    changed = 0
    unfixable = []
    for d in ("entities", "concepts"):
        for p in sorted(glob.glob(os.path.join(WIKI, d, "*.md"))):
            c, note = fix_file(p)
            if c:
                changed += 1
                print(f"  FIXED {os.path.relpath(p, PROJ)}: {note}")
            elif note.startswith("unfixable"):
                unfixable.append((os.path.relpath(p, PROJ), note))
    print(f"frontmatter gate: {changed} page(s) fixed")
    if unfixable:
        print(f"UNFIXABLE ({len(unfixable)}) — these will break the build:")
        for path, note in unfixable:
            print(f"  {path}: {note}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
