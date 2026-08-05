"""Clean up ALL artifacts from the 2 live parallel tests (7b5/7bf/805/7c0/7ed).
Removes pages citing them, resets processed entries, clears locks."""
import os, glob

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')
test_slugs = ('badlands-brief-7b5', 'badlands-brief-7bf', 'badlands-brief-805',
              'badlands-brief-7c0', 'badlands-brief-7ed')

# only remove pages whose sources frontmatter cites a test slug (not pages that
# merely mention them in prose - but for a clean slate, cite check is enough)
removed = 0
for d in ('entities', 'concepts'):
    for f in glob.glob(os.path.join(WIKI, d, '*.md')):
        t = open(f, encoding='utf-8', errors='replace').read()
        if any(s in t for s in test_slugs):
            os.unlink(f)
            removed += 1
print(f"removed {removed} test pages")

pf = os.path.join(WIKI, '.processed.txt')
lines = [l for l in open(pf, encoding='utf-8').read().splitlines()
         if l.strip() and not any(s + '.md' in l for s in test_slugs)]
open(pf, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print(f"processed now: {len(lines)}")

n = 0
for lf in glob.glob(os.path.join(WIKI, '.inprogress-*')) + glob.glob(os.path.join(WIKI, '.page-locks', '*.lock')):
    os.unlink(lf)
    n += 1
print(f"cleared {n} locks")
