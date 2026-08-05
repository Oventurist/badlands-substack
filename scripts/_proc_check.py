import subprocess, re

r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
lines = r.stdout.splitlines()
driver = [l for l in lines if 'parallel_ingest' in l]
workers = [l for l in lines if 'spawn_main' in l or 'hermes.exe" -z' in l or 'hermes -z' in l]
print(f"driver procs: {len(driver)} | worker/hermes procs: {len(workers)}")
# count distinct pids
pids = set()
for l in lines:
    m = re.search(r'(\d{4,6})\s*$', l.strip())
    if m:
        pids.add(m.group(1))
print(f"total python pids: {len(pids)}")
