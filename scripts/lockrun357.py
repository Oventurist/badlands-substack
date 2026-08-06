import re, subprocess, time, sys
from merge357 import run

SCRIPTS = r"C:/Users/14053/hermes-projects/badlands-substack/scripts"

def locked(path, body, tries=8):
    slug = path.split('/')[-1][:-3]
    for i in range(tries):
        r = subprocess.run([sys.executable, SCRIPTS + "/wiki_page_lock.py", "acquire", slug],
                           capture_output=True, text=True, timeout=200)
        if r.returncode == 0:
            try:
                run(path, body)
            finally:
                subprocess.run([sys.executable, SCRIPTS + "/wiki_page_lock.py", "release", slug],
                               capture_output=True, text=True)
            return True
        time.sleep(5)
    print("SKIPPED-BUSY", slug)
    return False
