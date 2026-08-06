import subprocess, sys, os, time
S = r"C:/Users/14053/hermes-projects/badlands-substack/scripts"
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
slugs = [f[:-3] for f in os.listdir(os.path.join(S, "sec/d50")) if f.endswith(".md")]
todo = []
for s in slugs:
    p = os.path.join(W, "entities", s + ".md")
    if not os.path.exists(p):
        p = os.path.join(W, "concepts", s + ".md")
    if "badlands-news-brief-d50" not in open(p, encoding="utf-8").read():
        todo.append(s)
print("todo:", todo)
for s in todo:
    for attempt in range(10):
        r = subprocess.run([sys.executable, os.path.join(S, "wiki_page_lock.py"), "acquire", s], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        print("LOCKED", s); continue
    try:
        m = subprocess.run([sys.executable, os.path.join(S, "merge_d50.py"), s, os.path.join(S, "sec/d50", s + ".md")], capture_output=True, text=True)
        print((m.stdout + m.stderr).strip())
    finally:
        subprocess.run([sys.executable, os.path.join(S, "wiki_page_lock.py"), "release", s], capture_output=True, text=True)
