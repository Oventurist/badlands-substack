import re, subprocess, sys, os, time
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-e79.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: Biden Commutations and Mossad Confessions", URL: https://badlands.substack.com/p/badlands-news-brief-e79'
LOCK = BASE + "/scripts/wiki_page_lock.py"

def merge(slug, folder, heading, body):
    path = f"{BASE}/wiki/{folder}/{slug}.md"
    for _ in range(20):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        print("LOCKFAIL", slug); return
    try:
        t = open(path, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs:
            srcs.append(RAW)
        n = srcs.index(RAW) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        sec = "\n\n## " + heading + "\n\n" + body.replace("[n]", f"[{n}]").strip() + "\n"
        idx = t.find("\n## References")
        refline = f"{n}. {REFTITLE}\n"
        if idx == -1:
            t = t.rstrip() + sec + "\n## References\n\n" + refline
        else:
            t = t[:idx] + sec + t[idx:].rstrip() + "\n" + refline
        open(path, "w", encoding="utf-8").write(t)
        print("UPDATED", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    import json
    for slug, folder, heading, body in json.load(open(sys.argv[1], encoding="utf-8")):
        merge(slug, folder, heading, body)
