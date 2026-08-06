import re, subprocess, sys, json, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-c17.md"
REFTXT = 'Badlands Brief — "Badlands News Brief: Spy Meltdowns, SNAP Saviors, & Preemptive Coups", URL: https://badlands.substack.com/p/badlands-news-brief-c17'
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
        return f"MISSING {slug}"
    import time
    for _ in range(10):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        return f"LOCKFAIL {slug}"
    try:
        t = open(p, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        if not m:
            return f"NOSOURCES {slug}"
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW in items:
            n = items.index(RAW) + 1
        else:
            items.append(RAW)
            n = len(items)
            t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        body = section.replace("{n}", str(n)).rstrip() + "\n"
        refline = f"{n}. {REFTXT}"
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            reflines = [l for l in refs.strip().splitlines() if l.strip()]
            if not any(l.startswith(f"{n}.") for l in reflines):
                reflines.append(refline)
            t = head.rstrip() + "\n\n" + body + "\n## References\n" + "\n".join(reflines) + "\n"
        else:
            t = t.rstrip() + "\n\n" + body + "\n## References\n" + refline + "\n"
        open(p, "w", encoding="utf-8", newline="\n").write(t)
        return f"OK {slug} -> [{n}]"
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, sec in data.items():
        print(merge(slug, sec))
