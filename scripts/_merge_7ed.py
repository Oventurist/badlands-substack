import sys, re, io, os, json
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-7ed.md"
REFLINE = 'Badlands Brief — "Badlands News Brief: Unlikely Ambassadors, The Ceasefire Accords, & Predatory Cartoonist", URL: https://badlands.substack.com/p/badlands-news-brief-7ed'

def merge(path, heading, body):
    p = os.path.join(BASE, path)
    with io.open(p, encoding="utf-8") as f:
        t = f.read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    if not m:
        print("NOSRC", path); return
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
        newsrcs = srcs
    else:
        srcs.append(RAW); newsrcs = srcs; n = len(srcs)
    t = t[:m.start()] + "sources: [" + ", ".join(newsrcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    txt = body.replace("[n]", "[%d]" % n)
    sec = "\n## " + heading + "\n\n" + txt.strip() + "\n"
    if "## References" in t:
        i = t.index("## References")
        head = t[:i].rstrip("\n")
        tail = t[i:]
        t = head + "\n" + sec + "\n" + tail
        # add ref line if missing
        if REFLINE not in t:
            t = t.rstrip("\n") + "\n%d. %s\n" % (n, REFLINE)
    else:
        t = t.rstrip("\n") + "\n" + sec + "\n## References\n%d. %s\n" % (n, REFLINE)
    with io.open(p, "w", encoding="utf-8", newline="") as f:
        f.write(t)
    print("OK", path, "cite", n)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for item in data:
        merge(item["path"], item["heading"], item["body"])
