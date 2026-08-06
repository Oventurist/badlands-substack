import os, subprocess, sys, time

WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SEC = r"C:/Users/14053/AppData/Local/Temp/sec1a0"
LOCK = r"C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py"
MERGE = r"C:/Users/14053/hermes-projects/badlands-substack/scripts/merge_helper.py"

slugs = sorted(f[:-3] for f in os.listdir(SEC) if f.endswith(".md"))
py = sys.executable
for slug in slugs:
    d = None
    for cand in ("entities", "concepts"):
        if os.path.exists(os.path.join(WIKI, cand, slug + ".md")):
            d = cand
            break
    if d is None:
        print("MISSING_PAGE", slug); continue
    ok = False
    for _ in range(10):
        r = subprocess.run([py, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            ok = True; break
        time.sleep(4)
    if not ok:
        print("LOCK_FAIL", slug); continue
    try:
        r = subprocess.run([py, MERGE, d, slug, os.path.join(SEC, slug + ".md")], capture_output=True, text=True)
        print(slug, d, r.returncode, r.stdout.strip(), r.stderr.strip()[:200])
    finally:
        subprocess.run([py, LOCK, "release", slug], capture_output=True, text=True)
