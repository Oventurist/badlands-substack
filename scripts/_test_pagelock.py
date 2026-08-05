"""Test wiki_page_lock: two workers contend for the same page lock.
Worker A holds it; worker B must wait (acquire blocks with retry), then
succeed after A releases. Also test stale-lock stealing."""
import subprocess, os, time

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
os.chdir(PROJ)

def run(*args, timeout=30):
    r = subprocess.run(['python', 'scripts/wiki_page_lock.py', *args],
                       capture_output=True, text=True, timeout=timeout)
    return r.returncode, (r.stdout + r.stderr).strip()

# 1. acquire + release roundtrip
rc, out = run('acquire', 'test-page', '--timeout-sec', '5')
print(f"acquire: rc={rc} {out}")
rc, out = run('release', 'test-page')
print(f"release: rc={rc} {out}")

# 2. contention: hold the lock, try to re-acquire in a thread/process
#    (simulate worker B waiting while A holds)
import threading
holder_lock = os.path.join('wiki', '.page-locks', 'test-page.md.lock')
os.makedirs(os.path.dirname(holder_lock), exist_ok=True)
open(holder_lock, 'w').close()  # A holds

t0 = time.time()
rc, out = run('acquire', 'test-page', '--timeout-sec', '3')
dt = time.time() - t0
print(f"contended acquire (should FAIL after ~3s): rc={rc} dt={dt:.1f}s {out}")

# 3. stale steal: old lock gets stolen
os.utime(holder_lock, (time.time()-20*60, time.time()-20*60))  # 20 min old
rc, out = run('acquire', 'test-page', '--timeout-sec', '5', '--ttl-min', '15')
print(f"stale acquire (should SUCCEED, steal): rc={rc} {out}")
run('release', 'test-page')

# 4. cleanup
rc, out = run('cleanup', '5')
print(f"cleanup: rc={rc} {out}")
