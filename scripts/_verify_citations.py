"""Verify multi-source citation merge: find pages updated by 2+ articles in the
last test run (7b5, 7bf, 805) and check [1][2] citations + References."""
import os, glob, re

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')
test_slugs = ('badlands-brief-7b5', 'badlands-brief-7bf', 'badlands-brief-805')

multi = []
for d in ('entities', 'concepts'):
    for f in glob.glob(os.path.join(WIKI, d, '*.md')):
        t = open(f, encoding='utf-8', errors='replace').read()
        cited = [s for s in test_slugs if s in t]
        if len(cited) >= 2:
            multi.append((os.path.join(d, os.path.basename(f)), cited, t))

print(f"pages citing 2+ test articles: {len(multi)}")
for path, cited, t in multi[:5]:
    print(f"\n=== {path} cites {cited} ===")
    # check inline citations
    has_1 = bool(re.search(r'\[1\]', t))
    has_2 = bool(re.search(r'\[2\]', t))
    print(f"  inline [1]: {has_1} | inline [2]: {has_2}")
    # check references section
    m = re.search(r'## References\n(.*?)(?:\n##|\Z)', t, re.S)
    if m:
        print(f"  References section:\n{m.group(1).strip()[:400]}")
    else:
        print("  NO References section!")
