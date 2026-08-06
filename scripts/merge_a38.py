import re, sys, os, json, subprocess, time
ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-a38.md"
REFLINE = 'Badlands Brief — "Badlands News Brief: Trump Baits Biden as Ukraine and Israel Posture", URL: https://badlands.substack.com/p/badlands-news-brief-a38'
LOCK = ROOT + "/scripts/wiki_page_lock.py"

def path_for(slug):
    for d in ("entities", "concepts"):
        p = f"{ROOT}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def acquire(slug):
    for _ in range(20):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            return True
        time.sleep(3)
    return False

def release(slug):
    subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

def merge(slug, body):
    p = path_for(slug)
    if not p:
        print("MISSING", slug); return
    if not acquire(slug):
        print("LOCKFAIL", slug); return
    try:
        t = open(p, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSOURCES", slug); return
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW in items:
            n = items.index(RAW) + 1
            newsrc = m.group(0)
        else:
            items.append(RAW)
            n = len(items)
            newsrc = "sources: [" + ", ".join(items) + "]"
        t = t[:m.start()] + newsrc + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        sec = body.replace("[n]", f"[{n}]").rstrip() + "\n"
        ref = f"{n}. {REFLINE}\n"
        idx = t.find("## References")
        if idx == -1:
            t = t.rstrip() + "\n\n" + sec + "\n## References\n" + ref
        else:
            t = t[:idx].rstrip() + "\n\n" + sec + "\n" + t[idx:].rstrip() + "\n" + ref
        open(p, "w", encoding="utf-8").write(t)
        print("OK", slug, n)
    finally:
        release(slug)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, body in data.items():
        merge(slug, body)
