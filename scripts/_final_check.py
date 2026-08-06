import subprocess, os, glob, time

# 1. what do the '2' matches actually look like?
r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
hits = [l for l in r.stdout.splitlines() if 'hermes -z' in l or 'hermes.exe" -z' in l or ' -z "' in l]
print(f"hermes -z hits: {len(hits)}")
for h in hits[:3]:
    print(f"  {h.strip()[:150]}")

# 2. wiki write activity: page count stable over 10s?
PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
def pages():
    return len(glob.glob(os.path.join(PROJ, 'wiki', 'entities', '*.md'))) + \
           len(glob.glob(os.path.join(PROJ, 'wiki', 'concepts', '*.md')))
c1 = pages()
time.sleep(10)
c2 = pages()
print(f"\nwiki pages: {c1} -> {c2} (stable: {c1==c2})")

# 3. locks
print(f"claim locks: {len(glob.glob(os.path.join(PROJ,'wiki','.inprogress-*')))}")
print(f"driver lock: {os.path.exists(os.path.join(PROJ,'scripts','.parallel-ingest.lock'))}")
