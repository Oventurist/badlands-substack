#!/usr/bin/env python
"""Merge helper: append a section to an existing wiki page, register this
article in sources: frontmatter and ## References, return citation number."""
import re, sys, io
from pathlib import Path

ROOT = Path("C:/Users/14053/hermes-projects/badlands-substack/wiki")
RAW = "raw/badlands-brief-774.md"
REF = '. Badlands Brief — "Weaponization Woes & Bailing on the Bromance", URL: https://badlands.substack.com/p/badlands-brief-774'
TODAY = "2026-08-06"

def find(slug):
    for d in ("entities", "concepts"):
        p = ROOT / d / f"{slug}.md"
        if p.exists():
            return p
    raise SystemExit(f"MISSING {slug}")

def num_for(text):
    m = re.search(r"^sources: \[(.*)\]\s*$", text, re.M)
    if not m:
        raise SystemExit("no sources line")
    items = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in items:
        return items.index(RAW) + 1, items, m
    return None, items, m

def merge(slug, section):
    p = find(slug)
    text = p.read_text(encoding="utf-8")
    n, items, m = num_for(text)
    if n is None:
        items.append(RAW)
        n = len(items)
        text = text[:m.start()] + "sources: [" + ", ".join(items) + "]" + text[m.end():]
    text = re.sub(r"^updated: .*$", f"updated: {TODAY}", text, count=1, flags=re.M)
    section = section.replace("[[N]]", f"[{n}]").rstrip() + "\n"
    idx = text.find("\n## References")
    refline = f"{n}{REF}"
    if idx == -1:
        text = text.rstrip() + "\n\n" + section + "\n## References\n" + refline + "\n"
    else:
        body, refs = text[:idx], text[idx:]
        if refline not in refs:
            refs = refs.rstrip() + "\n" + refline + "\n"
        text = body.rstrip() + "\n\n" + section + "\n" + refs.lstrip("\n")
    p.write_text(text, encoding="utf-8")
    print(f"OK {slug} -> [{n}] {p}")

if __name__ == "__main__":
    slug = sys.argv[1]
    section = sys.stdin.read()
    merge(slug, section)
