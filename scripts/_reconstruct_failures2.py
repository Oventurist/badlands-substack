"""Accurate failure->article mapping using actual run success + queue replay.

Key fix: 'processed' at run time = processed_now MINUS articles marked done by
successful runs after that point... actually simpler: replay forward. For each
run in chronological order:
  - the article it picked = first raw file not yet in processed_at_that_time
  - if the run file has 'done: <slug>', add that slug to processed (it WAS
    processed by this run)
  - if the run failed, the picked article was NOT processed -> record it
"""
import os, re, glob

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
OUT = 'C:/Users/14053/AppData/Local/hermes/cron/output/85b1758451ba'

processed = set()
for line in open(os.path.join(PROJ, 'wiki', '.processed.txt'), encoding='utf-8'):
    line = line.strip()
    if line:
        processed.add(line)

raw = sorted(f for f in os.listdir(os.path.join(PROJ, 'raw')) if f.endswith('.md'))
runs = sorted(glob.glob(os.path.join(OUT, '*.md')), key=os.path.getmtime)

proc_at_time = set(processed)  # start from final state; we'll REMOVE articles
                               # that successful runs added, walking backwards.
# Walk backwards: at each successful run, remove its done-slug from the set to
# reconstruct the processed set as it was BEFORE that run.
done_slugs = {}
for f in runs:
    t = open(f, encoding='utf-8', errors='replace').read()
    dm = re.search(r'done:\s*([a-zA-Z0-9-]+\.md)', t)
    if dm:
        done_slugs[os.path.basename(f)] = dm.group(1)

failures = []
processed_rev = set(processed)
for f in reversed(runs):
    name = os.path.basename(f)
    if name in done_slugs:
        processed_rev.discard(done_slugs[name])
    else:
        t = open(f, encoding='utf-8', errors='replace').read()
        why = ('content_policy' if 'content_policy_blocked' in t
               else 'truncated' if 'Response truncated' in t else 'other')
        # article picked = first raw file not in processed_rev at this time
        cand = None
        for b in raw:
            if b not in processed_rev:
                cand = b
                break
        if cand:
            failures.append((name, cand, why))

print(f"Failed runs reconstructed: {len(failures)}")
for name, art, why in failures:
    print(f"  {name} -> {art}  [{why}]")
