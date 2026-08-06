import sys, re, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-c9a.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: The France Dance, Crime & J6 Reveals", URL: https://badlands.substack.com/p/badlands-news-brief-c9a'
TODAY = "2026-08-06"

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(BASE, d, slug + ".md")
        if os.path.exists(p):
            return p
    return None

def merge(slug, body_path):
    p = find(slug)
    txt = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW)
        n = len(srcs)
        txt = txt[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + txt[m.end():]
    txt = re.sub(r"^updated: .*$", "updated: " + TODAY, txt, count=1, flags=re.M)
    body = io.open(body_path, encoding="utf-8").read().replace("[n]", "[%d]" % n).rstrip()
    if "## References" in txt:
        head, refs = txt.split("## References", 1)
        reflines = [l for l in refs.strip().splitlines() if l.strip()]
        if not any("badlands-news-brief-c9a" in l for l in reflines):
            reflines.append("%d. %s" % (n, REFTITLE))
        txt = head.rstrip() + "\n\n" + body + "\n\n## References\n" + "\n".join(reflines) + "\n"
    else:
        txt = txt.rstrip() + "\n\n" + body + "\n\n## References\n%d. %s\n" % (n, REFTITLE)
    io.open(p, "w", encoding="utf-8", newline="\n").write(txt)
    print("merged", p, "as [%d]" % n)

merge(sys.argv[1], sys.argv[2])
