import subprocess, sys, os, time
S = r"C:/Users/14053/hermes-projects/badlands-substack/scripts"
slugs = [f[:-3] for f in os.listdir(os.path.join(S, "sec/d50")) if f.endswith(".md")]
ok, miss = [], []
for s in slugs:
    for attempt in range(10):
        r = subprocess.run([sys.executable, os.path.join(S, "wiki_page_lock.py"), "acquire", s], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(4)
    else:
        miss.append(s + " (locked)"); continue
    try:
        m = subprocess.run([sys.executable, os.path.join(S, "merge_d50.py"), s, os.path.join(S, "sec/d50", s + ".md")], capture_output=True, text=True)
        out = (m.stdout + m.stderr).strip()
        (ok if "merged" in out else miss).append(out or s)
    finally:
        subprocess.run([sys.executable, os.path.join(S, "wiki_page_lock.py"), "release", s], capture_output=True, text=True)
print("OK", len(ok))
for x in miss: print("PROBLEM:", x)
