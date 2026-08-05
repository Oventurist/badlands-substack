"""Clean up the botched parallel test:
- remove pages that cite badlands-brief-7ed or 7c0 (the test's wrong ingest)
- remove 7c0/7ed from .processed.txt
- clear all claim locks and page locks
"""
import os, glob

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')

# 1. pages citing the test slugs
test_slugs = ('badlands-brief-7c0', 'badlands-brief-7ed')
removed = 0
for d in ('entities', 'concepts'):
    for f in glob.glob(os.path.join(WIKI, d, '*.md')):
        t = open(f, encoding='utf-8', errors='replace').read()
        if any(s in t for s in test_slugs):
            os.unlink(f)
            removed += 1
print(f"removed {removed} test pages")

# 2. processed entries
pf = os.path.join(WIKI, '.processed.txt')
lines = [l for l in open(pf, encoding='utf-8').read().splitlines()
         if l.strip() and not any(s + '.md' in l for s in test_slugs)]
open(pf, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print(f"processed now: {len(lines)} entries")

# 3. locks
n = 0
for lf in glob.glob(os.path.join(WIKI, '.inprogress-*')) + glob.glob(os.path.join(WIKI, '.page-locks', '*.lock')):
    os.unlink(lf)
    n += 1
print(f"cleared {n} locks")
