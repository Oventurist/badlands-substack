import sys, re, os, subprocess, datetime, io

BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "badlands-news-brief-8c6.md"
TITLE = 'Badlands Brief — "Badlands News Brief: Bidens on Parade, Trump on Campaign & Obama in the Basement", URL: https://badlands.substack.com/p/badlands-news-brief-8c6'
TODAY = "2026-08-06"
LOCK = BASE + "/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{BASE}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def merge(slug, section):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
    if r.returncode != 0:
        print("BUSY", slug); return
    try:
        t = io.open(p, encoding="utf-8").read()
        m = re.search(r"^sources:\s*\[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSRC", slug); return
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        tag = "raw/" + RAW
        if tag in items:
            n = items.index(tag) + 1
            newref = False
        else:
            items.append(tag); n = len(items); newref = True
            t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
        t = re.sub(r"^updated:.*$", "updated: " + TODAY, t, count=1, flags=re.M)
        body = section.replace("{n}", f"[{n}]")
        if "## References" in t:
            head, refs = t.split("## References", 1)
            reflines = refs.rstrip("\n")
            if newref:
                reflines += f"\n{n}. {TITLE}\n"
            else:
                reflines += "\n"
            t = head.rstrip("\n") + "\n\n" + body.strip() + "\n\n## References" + reflines
        else:
            t = t.rstrip("\n") + "\n\n" + body.strip() + f"\n\n## References\n{n}. {TITLE}\n"
        io.open(p, "w", encoding="utf-8", newline="\n").write(t)
        print("OK", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    pass
