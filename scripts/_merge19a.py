import sys, os, re, subprocess, json, time

ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
WIKI = ROOT + "/wiki"
LOCK = ROOT + "/scripts/wiki_page_lock.py"
RAW = "raw/badlands-news-brief-19a.md"
REF = '1. Badlands Brief — "Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?", URL: https://badlands.substack.com/p/badlands-news-brief-19a'

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{WIKI}/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def merge(slug, body):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    for attempt in range(10):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(4)
    else:
        print("LOCKFAIL", slug); return
    try:
        txt = open(p, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
        if not m:
            print("NOSOURCES", slug); return
        items = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW in items:
            n = items.index(RAW) + 1
        else:
            items.append(RAW); n = len(items)
            txt = txt[:m.start()] + "sources: [" + ", ".join(items) + "]" + txt[m.end():]
        txt = re.sub(r"^updated: .*$", "updated: 2026-08-06", txt, count=1, flags=re.M)
        sec = body.replace("[n]", f"[{n}]").rstrip() + "\n"
        if "## References" in txt:
            head, refs = txt.split("## References", 1)
            reflines = [l for l in refs.strip().splitlines() if l.strip()]
            if not any("badlands-news-brief-19a" in l for l in reflines):
                reflines.append(f"{n}. " + REF[3:])
            txt = head.rstrip() + "\n\n" + sec + "\n## References\n" + "\n".join(reflines) + "\n"
        else:
            txt = txt.rstrip() + "\n\n" + sec + "\n## References\n" + f"{n}. " + REF[3:] + "\n"
        open(p, "w", encoding="utf-8").write(txt)
        print("OK", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, body in data.items():
        merge(slug, body)
