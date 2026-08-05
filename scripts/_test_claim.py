"""Test wiki_queue claim: 6 parallel workers each claim 3 articles via
subprocess; assert no article is claimed twice."""
import subprocess, sys, os

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
os.chdir(PROJ)

# clear any test locks
for f in os.listdir('wiki'):
    if f.startswith('.inprogress-'):
        os.unlink(os.path.join('wiki', f))

def claim():
    r = subprocess.run(['python', 'scripts/wiki_queue.py', 'claim'],
                       capture_output=True, text=True)
    return r.stdout.strip()

results = []
procs = []
for w in range(6):
    p = subprocess.Popen(
        ['python', '-c',
         'import subprocess,sys; [print(subprocess.run(["python","scripts/wiki_queue.py","claim"],capture_output=True,text=True).stdout.strip()) for _ in range(3)]'],
        stdout=subprocess.PIPE, text=True)
    procs.append(p)

for p in procs:
    out, _ = p.communicate()
    results.extend(out.strip().splitlines())

claimed = [l for l in results if l and l != 'DONE']
dupes = {c for c in claimed if claimed.count(c) > 1}
print(f"total claims: {len(claimed)} | unique: {len(set(claimed))} | dupes: {dupes if dupes else 'NONE'}")
# verify all claimed files are locked
import glob
locks = set(os.path.basename(f).split('.inprogress-')[1] for f in glob.glob('wiki/.inprogress-*'))
claimed_slugs = set(os.path.basename(c) for c in claimed)
print(f"claimed files locked: {claimed_slugs == locks} ({len(locks)} locks)")

# cleanup
for f in os.listdir('wiki'):
    if f.startswith('.inprogress-'):
        os.unlink(os.path.join('wiki', f))
print("test locks cleaned")
