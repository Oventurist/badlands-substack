"""Measure peak memory of the vitepress build without committing to disk
cleanup problems — run with generous heap, log peak RSS, exit fast on OOM."""
import subprocess, time, os, sys

# Monitor the npm build's peak memory
cmd = ["cmd", "/c", "set NODE_OPTIONS=--max-old-space-size=8192&& cd C:\\Users\\14053\\hermes-projects\\badlands-substack\\site && npm run build"]
proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

peak = 0
t0 = time.time()
while True:
    try:
        line = proc.stdout.readline()
        if not line:
            break
        print(line.rstrip()[:120])
        # check node memory periodically
        if int(time.time() - t0) % 5 == 0:
            r = subprocess.run(["tasklist", "/FI", "IMAGENAME eq node.exe", "/FO", "CSV"],
                               capture_output=True, text=True)
            for l in r.stdout.splitlines():
                if "node.exe" in l:
                    parts = l.split('","')
                    if len(parts) > 4:
                        try:
                            kb = int(parts[4].replace('"', '').replace(',', ''))
                            peak = max(peak, kb)
                        except ValueError:
                            pass
    except Exception:
        break
    if proc.poll() is not None and not line:
        break

print(f"\nPEAK node RSS: {peak/1024/1024:.1f} MB")
print(f"exit: {proc.returncode}")
