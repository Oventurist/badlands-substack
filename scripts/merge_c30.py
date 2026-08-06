import sys, re, os, subprocess, json, time
WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
LOCK = r"C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py"
RAW = "raw/badlands-news-brief-c30.md"
REFLINE = 'Badlands News Brief — "Rumble at the White House & Fireworks at the Flotilla", URL: https://badlands.substack.com/p/badlands-news-brief-c30'

def find(slug):
    for d in ("entities","concepts"):
        p = os.path.join(WIKI,d,slug+".md")
        if os.path.exists(p): return p
    return None

def merge(slug, heading, body_tmpl):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    for attempt in range(10):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0: break
        time.sleep(4)
    else:
        print("LOCKFAIL", slug); return
    try:
        t = open(p, encoding="utf-8").read()
        m = re.search(r"^sources:\s*\[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSOURCES", slug); return
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW in srcs:
            n = srcs.index(RAW)+1
        else:
            srcs.append(RAW); n = len(srcs)
            t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated:.*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        body = body_tmpl.replace("[n]", "[%d]" % n)
        section = "\n## " + heading + "\n\n" + body.strip() + "\n"
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            reflines = [l for l in refs.strip().splitlines() if l.strip()]
            if REFLINE not in refs:
                reflines.append("%d. %s" % (n, REFLINE))
            t = head.rstrip() + "\n" + section + "\n## References\n" + "\n".join(reflines) + "\n"
        else:
            t = t.rstrip() + "\n" + section + "\n## References\n%d. %s\n" % (n, REFLINE)
        open(p,"w",encoding="utf-8").write(t)
        print("OK", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for item in data:
        merge(item["slug"], item["heading"], item["body"])
