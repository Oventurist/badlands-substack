#!/usr/bin/env python3
"""Mechanical merge for raw/badlands-brief-5ba.md into existing wiki pages."""
import re, io

BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/"
SRC = "raw/badlands-brief-5ba.md"
BULLET = "- [badlands brief 5ba](https://badlands.substack.com/p/badlands-brief-5ba)"
NEWDATE = "2026-08-05"

FILES = [
    "entities/mossad.md", "concepts/strait-of-hormuz.md", "entities/state-department.md",
    "entities/marco-rubio.md", "entities/gustavo-petro.md", "entities/department-of-justice.md",
    "entities/pentagon.md", "entities/pete-hegseth.md", "entities/new-york-times.md",
    "entities/patrick-byrne.md", "entities/iran.md", "entities/ashe-in-america.md",
    "entities/qassem-soleimani.md", "concepts/continuity-of-government.md",
    "concepts/operation-midnight-hammer.md", "concepts/twelve-day-war.md",
    "entities/candace-owens.md", "entities/charlie-kirk.md", "entities/tyler-robinson.md",
    "entities/ghost-of-based-patrick-henry.md", "entities/burning-bright.md",
    "entities/canncon.md", "concepts/culture-of-change.md", "concepts/great-american-restoration-tour.md",
    "entities/ben-shapiro.md", "entities/laura-loomer.md", "entities/tucker-carlson.md",
    "entities/lindsey-graham.md", "entities/qatar.md", "entities/donald-trump.md",
    "entities/joe-biden.md", "entities/vladimir-putin.md", "entities/ali-khamenei.md",
    "entities/islamic-revolutionary-guard-corps.md", "entities/truth-social.md",
    "entities/kristi-noem.md", "concepts/2020-united-states-presidential-election.md",
    "entities/israel.md", "concepts/brics.md", "concepts/joint-comprehensive-plan-of-action.md",
    "entities/elon-musk.md", "concepts/media-industrial-complex.md",
    "concepts/military-industrial-complex.md", "entities/jeffrey-epstein.md",
]

for f in FILES:
    path = BASE + f
    try:
        with io.open(path, encoding="utf-8") as fh:
            text = fh.read()
    except FileNotFoundError:
        print("MISSING:", f)
        continue
    orig = text
    # 1) frontmatter sources: append SRC
    m = re.search(r"^sources: (\[[^\n]*\])", text, flags=re.M)
    if m:
        lst = m.group(1)
        if SRC not in lst:
            new = lst[:-1] + ", " + SRC + "]"
            text = text.replace(lst, new, 1)
    # 2) bump updated date
    text = re.sub(r"^updated: \d{4}-\d{2}-\d{2}$", "updated: " + NEWDATE, text, count=1, flags=re.M)
    # 3) append bullet to Sources section list (after last "- [" line)
    if BULLET not in text:
        lines = text.split("\n")
        last_idx = None
        for i, ln in enumerate(lines):
            if ln.startswith("- [") and "](https://badlands.substack.com/p/" in ln:
                last_idx = i
        if last_idx is not None:
            lines.insert(last_idx + 1, BULLET)
            text = "\n".join(lines)
    if text != orig:
        with io.open(path, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(text)
        print("UPDATED:", f)
    else:
        print("NOCHANGE:", f)
