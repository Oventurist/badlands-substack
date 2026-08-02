#!/usr/bin/env python3
"""add_source_links.py — append a "Sources" section with links to the original
badlands.substack.com articles on every wiki page.

Mapping: each page's frontmatter `sources: [raw/<slug>.md, ...]` maps to
https://badlands.substack.com/p/<slug> (raw filename == substack slug).

Safe: idempotent (skips pages that already have a Sources section), preserves
each file's LF vs CRLF line endings, never touches frontmatter.
"""
import os, re, glob, sys

WIKI = "wiki"
URL = "https://badlands.substack.com/p/{slug}"
SECTION = "Sources"

def detect_eol(text):
    crlf = text.count("\r\n")
    lf = text.count("\n") - crlf
    return "\r\n" if crlf > lf else "\n"

def process(path):
    raw = open(path, "rb").read()
    text = raw.decode("utf-8", errors="replace")
    eol = detect_eol(text)
    text = text.replace("\r\n", "\n")

    if "\n## " + SECTION + "\n" in text:
        return 0

    fm = re.match(r"^---\n.*?\n---\n", text, re.S)
    if not fm:
        return 0
    fm_txt = fm.group(0)
    srcs = re.findall(r"raw/([a-zA-Z0-9_\-]+)\.md", fm_txt)
    if not srcs:
        return 0

    body = text[len(fm_txt):].strip("\n")

    lines = ["## " + SECTION, ""]
    if len(srcs) == 1:
        lines.append("[{}]({}/{})".format(srcs[0], URL, srcs[0]))
    else:
        lines.append("This page draws on multiple source articles:")
        lines.append("")
        for s in srcs:
            lines.append("- [{}]({}/{})".format(s.replace("-", " "), URL, s))
    block = "\n".join(lines).strip("\n")

    new_text = fm.group(0) + body.rstrip("\n") + "\n\n" + block + "\n"
    new_text = new_text.replace("\n", eol)
    open(path, "wb").write(new_text.encode("utf-8"))
    return len(srcs)

def main():
    pages = []
    for root, _, fnames in os.walk(WIKI):
        for fn in sorted(fnames):
            if fn.endswith(".md") and fn not in ("index.md", "log.md", "SCHEMA.md"):
                pages.append(os.path.join(root, fn))
    changed = linked = 0
    print("Scanning {} pages...".format(len(pages)), flush=True)
    for p in pages:
        n = process(p)
        if n:
            changed += 1
            linked += n
    print("Done. {} pages updated, {} source links added.".format(changed, linked))

if __name__ == "__main__":
    main()