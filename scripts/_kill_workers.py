import subprocess, re

# find all python processes whose command line contains hermes.exe -z (workers)
r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
pids = []
for line in r.stdout.splitlines():
    if 'hermes.exe" -z' in line or 'hermes -z' in line:
        m = re.search(r'(\d+)\s*$', line.strip())
        if m:
            pids.append(m.group(1))
            # also print the pid near the end of line
        # wmic puts PID at end; fallback: find trailing number
        if not m:
            nums = re.findall(r'\d{4,6}', line)
            if nums:
                pids.append(nums[-1])
print(f"worker PIDs to kill: {sorted(set(pids))}")
for pid in sorted(set(pids)):
    rc = subprocess.run(['taskkill', '/F', '/PID', pid], capture_output=True, text=True)
    print(f"  kill {pid}: {rc.stdout.strip() or rc.stderr.strip()}")
