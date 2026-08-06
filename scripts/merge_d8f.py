import sys, re, subprocess, time, os, io

ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-d8f.md"
REFLINE = 'Badlands Brief — "Hunter Hunted as Metrics Turn Sharply on Establishment", URL: https://badlands.substack.com/p/badlands-news-brief-d8f'
LOCK = ROOT + "/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{ROOT}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def merge(slug, body_tmpl):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    for attempt in range(10):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        print("LOCKFAIL", slug); return
    try:
        with io.open(p, encoding="utf-8") as f:
            txt = f.read()
        nl = "\r\n" if "\r\n" in txt else "\n"
        t = txt.replace("\r\n", "\n")
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSRC", slug); return
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
        body = body_tmpl.replace("[n]", "[%d]" % n).strip()
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            refs = refs.rstrip()
            if REFLINE not in refs:
                refs += "\n%d. %s" % (n, REFLINE)
            t = head.rstrip() + "\n\n" + body + "\n\n## References" + refs + "\n"
        else:
            t = t.rstrip() + "\n\n" + body + "\n\n## References\n%d. %s\n" % (n, REFLINE)
        with io.open(p, "w", encoding="utf-8", newline=nl) as f:
            f.write(t)
        print("OK", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    import json
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, body in data.items():
        merge(slug, body)
