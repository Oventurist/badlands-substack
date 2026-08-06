import subprocess, os, time, glob
from datetime import datetime

r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
lines = r.stdout.splitlines()

drivers = [l for l in lines if 'parallel_ingest' in l]
workers = [l for l in lines if 'spawn_main' in l]
hermes = [l for l in lines if 'hermes -z' in l or 'hermes.exe" -z' in l]
print(f"now: {datetime.now().strftime('%H:%M:%S')}")
print(f"driver: {len(drivers)} | spawn workers: {len(workers)} | hermes calls: {len(hermes)}")

# log last modified
log = 'C:/Users/14053/hermes-projects/badlands-substack/logs/parallel-ingest.log'
print(f"log mtime: {datetime.fromtimestamp(os.path.getmtime(log)).strftime('%H:%M:%S')}")
lines2 = open(log, encoding='utf-8').read().splitlines()
print("last 4 log lines:")
for l in lines2[-4:]:
    print(f"  {l[:110]}")

# how many in-progress claims
PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
locks = glob.glob(os.path.join(PROJ, 'wiki', '.inprogress-*'))
print(f"active claims: {len(locks)}")
