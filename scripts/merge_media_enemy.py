import os, re, subprocess, sys, json, time

WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
LOCK = r"C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py"
RAW = "raw/the-media-is-the-enemy-of-the-people.md"
REFTXT = 'Badlands Brief \u2014 "The Media is the Enemy of the People", URL: https://badlands.substack.com/p/the-media-is-the-enemy-of-the-people'
TODAY = "2026-08-06"

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(WIKI, d, slug + ".md")
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

def merge(slug, heading, body):
    p = find(slug)
    if not p:
        print("MISSING", slug); return False
    if not acquire(slug):
        print("LOCKFAIL", slug); return False
    try:
        txt = open(p, encoding="utf-8").read()
        # sources line
        m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
        if not m:
            print("NOSOURCES", slug); return False
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW in items:
            n = items.index(RAW) + 1
        else:
            items.append(RAW)
            n = len(items)
            txt = txt[:m.start()] + "sources: [" + ", ".join(items) + "]" + txt[m.end():]
        txt = re.sub(r"^updated: .*$", "updated: " + TODAY, txt, count=1, flags=re.M)
        b = body.replace("[n]", "[%d]" % n)
        refline = "%d. %s" % (n, REFTXT)
        if refline not in txt:
            txt = txt.rstrip() + "\n\n## " + heading + "\n\n" + b.strip() + "\n\n" + refline + "\n"
        open(p, "w", encoding="utf-8").write(txt)
        print("UPDATED", slug, n)
        return True
    finally:
        release(slug)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    ok = 0
    for slug, (heading, body) in data.items():
        if merge(slug, heading, body):
            ok += 1
    print("total updated", ok)
