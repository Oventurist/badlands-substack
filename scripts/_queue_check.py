"""Check queue state: which articles failed with content_policy, and are they
still queued (not in .processed.txt, no stale lock)?"""
import os, re, glob, time

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
OUT = 'C:/Users/14053/AppData/Local/hermes/cron/output/85b1758451ba'

processed = set()
pf = os.path.join(PROJ, 'wiki', '.processed.txt')
if os.path.exists(pf):
    for line in open(pf, encoding='utf-8'):
        line = line.strip()
        if line:
            processed.add(line)

locks = set()
for lf in glob.glob(os.path.join(PROJ, 'wiki', '.inprogress-*')):
    locks.add(lf.split('.inprogress-')[1])

# failed runs: parse which article they were working on.
# The failed output file has no 'done:' line; the raw-slug may appear in the
# file as the locked article. Look for the lock pattern or the brief slug.
policy_files = []
trunc_files = []
for f in sorted(glob.glob(os.path.join(OUT, '*.md'))):
    t = open(f, encoding='utf-8', errors='replace').read()
    if 'content_policy_blocked' in t:
        policy_files.append(os.path.basename(f))
    elif 'Response truncated' in t:
        trunc_files.append(os.path.basename(f))

print(f"content_policy failures: {len(policy_files)}")
print(f"truncation failures:     {len(trunc_files)}")

# which articles were these runs processing? run the queue 'next' preview logic:
# the article is the first unprocessed/unlocked basename at that time — not
# recoverable from file alone. Instead, check current queue status of ALL
# briefs: are there many queued articles?
raw = set(f for f in os.listdir(os.path.join(PROJ, 'raw')) if f.endswith('.md'))
queued = sorted(raw - processed - locks)
print(f"\nTotal raw: {len(raw)} | processed: {len(processed)} | locked now: {len(locks)}")
print(f"Still queued: {len(queued)}")
print(f"\nSample of queued (first 20):")
for q in queued[:20]:
    print(f"  {q}")
