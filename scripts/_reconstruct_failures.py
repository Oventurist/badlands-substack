"""Can we reconstruct WHICH articles the failed runs were processing?

Each failed run claimed a lock at start (wiki/.inprogress-<slug>) but the
root-stray watchdog clears stale locks, so they're gone. However, we can
reconstruct the queue order: wiki_queue 'next' picks the first unprocessed
unlocked basename alphabetically. If we replay the queue sequence and mark
which runs failed, we can map failures -> articles.
"""
import os, glob, re

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
OUT = 'C:/Users/14053/AppData/Local/hermes/cron/output/85b1758451ba'

processed = set()
for line in open(os.path.join(PROJ, 'wiki', '.processed.txt'), encoding='utf-8'):
    line = line.strip()
    if line:
        processed.add(line)

raw = sorted(f for f in os.listdir(os.path.join(PROJ, 'raw')) if f.endswith('.md'))

# runs in chronological order
runs = sorted(glob.glob(os.path.join(OUT, '*.md')), key=os.path.getmtime)

# replay queue: at each run start, the article picked = first raw file not
# processed and not previously picked. A 'done:' in the output = success.
# A failure means that article was NOT added to processed.
reconstructed = []
picked_so_far = set()
for f in runs:
    t = open(f, encoding='utf-8', errors='replace').read()
    dm = re.search(r'done:\s*([a-zA-Z0-9-]+\.md)', t)
    ok = bool(dm)
    # article for this run = first candidate at that time
    cand = None
    for b in raw:
        if b not in processed and b not in picked_so_far:
            cand = b
            break
    if cand:
        picked_so_far.add(cand)
        if not ok:
            reconstructed.append((os.path.basename(f), cand, 'content_policy' if 'content_policy_blocked' in t else 'truncated' if 'Response truncated' in t else 'failed-other'))

print(f"Reconstructed {len(reconstructed)} failed runs -> article mapping:")
for fname, art, why in reconstructed[-12:]:
    print(f"  {fname} -> {art}  [{why}]")
