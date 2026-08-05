import subprocess, os, time, glob

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'

# count remaining hermes -z workers
r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
workers = [l for l in r.stdout.splitlines() if 'hermes.exe" -z' in l or 'hermes -z' in l]
print(f"hermes -z workers still running: {len(workers)}")
for w in workers[:3]:
    print("  PID line:", w[:120])

# wiki page count, sample twice 10s apart
def count():
    return len(glob.glob(os.path.join(PROJ, 'wiki', 'entities', '*.md'))) + \
           len(glob.glob(os.path.join(PROJ, 'wiki', 'concepts', '*.md')))

c1 = count()
time.sleep(10)
c2 = count()
print(f"wiki pages: {c1} -> {c2} (stable: {c1 == c2})")

# leftover pages from killed workers
leftover = glob.glob(os.path.join(PROJ, 'wiki', 'entities', '*.md')) + \
           glob.glob(os.path.join(PROJ, 'wiki', 'concepts', '*.md'))
print("leftover pages:", [os.path.basename(p) for p in leftover])
