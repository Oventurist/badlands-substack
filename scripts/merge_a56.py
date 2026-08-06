import re, sys, io, os, json, subprocess
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-a56.md"
REFTXT = 'Badlands Brief \u2014 "Badlands News Brief: Corruption Probes, Client Lists & Mud Pits", URL: https://badlands.substack.com/p/badlands-news-brief-a56'
LOCK = BASE + "/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{BASE}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def merge(slug, body_template, heading):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
    if r.returncode != 0:
        print("BUSY", slug); return
    try:
        txt = io.open(p, encoding="utf-8").read()
        nl = "\r\n" if "\r\n" in txt else "\n"
        t = txt.replace("\r\n", "\n")
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs:
            srcs.append(RAW)
        n = srcs.index(RAW) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        body = body_template.replace("[n]", "[%d]" % n)
        refline = "%d. %s" % (n, REFTXT)
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            refs = refs.rstrip("\n")
            if "badlands-news-brief-a56" not in refs:
                refs = refs + "\n" + refline
            t = head + "## References" + refs + "\n"
            t = t.replace("## References", "## " + heading + "\n\n" + body.strip() + "\n\n## References", 1)
        else:
            t = t.rstrip("\n") + "\n\n## " + heading + "\n\n" + body.strip() + "\n\n## References\n" + refline + "\n"
        io.open(p, "w", encoding="utf-8", newline=nl).write(t)
        print("UPDATED", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for item in data:
        merge(item["slug"], item["body"], item["heading"])
