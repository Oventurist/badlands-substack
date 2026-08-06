import sys, io, re, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-a82.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: Everyone\'s Got a Plan ... Until They Get Trump\'d", URL: https://badlands.substack.com/p/badlands-news-brief-a82'

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(BASE, d, slug + ".md")
        if os.path.exists(p):
            return p
    raise SystemExit("missing " + slug)

def main():
    slug = sys.argv[1]
    body = sys.stdin.read()
    p = find(slug)
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW)
        n = len(srcs)
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = body.replace("[N]", "[%d]" % n).strip()
    idx = t.find("\n## References")
    refline = "%d. %s\n" % (n, REFTITLE)
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n" + refline
    else:
        t = t[:idx] + "\n" + body + "\n" + t[idx:]
        if REFTITLE not in t:
            t = t.rstrip() + "\n" + refline
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("MERGED %s n=%d -> %s" % (slug, n, p))

main()
