import subprocess
# hermes workers may run under the venv python or the uv python; check both via tasklist for hermes.exe too
r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
n = 0
for line in r.stdout.splitlines():
    if '-z' in line and ('hermes' in line.lower() or 'wiki' in line.lower() or 'worker' in line.lower()):
        n += 1
        print(line.strip()[:200])
print(f"matched: {n}")

# also check python processes with large memory (active workers)
r2 = subprocess.run(['tasklist', '/FI', 'IMAGENAME eq python.exe'], capture_output=True, text=True)
print("\ntasklist python.exe:")
print(r2.stdout[:600])
