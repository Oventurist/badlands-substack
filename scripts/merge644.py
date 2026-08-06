import sys, re, os, io
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-644.md"
REF = '. Badlands Brief — "J6 Exposure, Biden\'s Brain and Trump\'s Agenda", URL: https://badlands.substack.com/p/badlands-news-brief-644'

def find(slug):
    for d in ("entities","concepts"):
        p = os.path.join(W,d,slug+".md")
        if os.path.exists(p): return p
    return None

def merge(slug, section):
    p = find(slug)
    if not p: print("MISSING", slug); return
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs: srcs.append(RAW)
    n = srcs.index(RAW)+1
    t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("[N]", "[%d]" % n).rstrip()
    if "## References" in body: raise SystemExit("bad")
    if "\n## References" in t:
        head, tail = t.rsplit("\n## References", 1)
        if ("\n%d." % n) not in tail:
            tail = tail.rstrip() + "\n%d%s\n" % (n, REF)
        t = head.rstrip() + "\n\n" + body + "\n\n## References" + tail
    else:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n\n%d%s\n" % (n, REF)
    io.open(p,"w",encoding="utf-8").write(t)
    print("MERGED", slug, "as [%d]" % n)
