import subprocess
r = subprocess.run(['wmic', 'process', 'where', "name='python.exe'", 'get', 'ProcessId,CommandLine'],
                   capture_output=True, text=True)
for line in r.stdout.splitlines():
    if 'hermes -z' in line or 'hermes.exe" -z' in line:
        print(repr(line[-100:]))
