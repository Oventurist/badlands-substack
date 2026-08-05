"""Check citation quality on the 3 test-run articles' pages."""
import os, glob, re

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')
test_slugs = ('badlands-brief-7b5', 'badlands-brief-7bf', 'badlands-brief-805')

pages = []
for d in ('entities', 'concepts'):
    for f in glob.glob(os.path.join(WIKI, d, '*.md')):
        t = open(f, encoding='utf-8', errors='replace').read()
        cited = [s for s in test_slugs if s in t]
        if cited:
            pages.append((os.path.join(d, os.path.basename(f)), cited, t))

print(f"pages citing test articles: {len(pages)}")
stat_ok = 0
for path, cited, t in pages:
    nums = sorted(set(int(x) for x in re.findall(r'\[(\d+)\]', t)))
    has_refs = bool(re.search(r'## References\n\d+\.', t))
    has_fm = 'created:' in t and 'confidence:' in t
    if nums and has_refs and has_fm:
        stat_ok += 1
    print(f"{path} [{','.join(s.replace('badlands-brief-','') for s in cited)}] nums={nums} refs={has_refs} frontmatter={has_fm}")

print(f"\nfully-compliant pages: {stat_ok}/{len(pages)}")
