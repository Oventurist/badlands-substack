import re, sys, io, os
WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-99e.md"
REFTXT = 'Badlands Brief \u2014 "Trumpamania, Maneuver Defense & Kanye\'s War", URL: https://badlands.substack.com/p/badlands-news-brief-99e'

def merge(slug, section):
    for d in ("entities", "concepts"):
        p = os.path.join(WIKI, d, slug + ".md")
        if os.path.exists(p):
            break
    else:
        raise SystemExit("missing " + slug)
    nl = "\r\n" if "\r\n" in open(p, encoding="utf-8", newline="").read() else "\n"
    t = open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW in items:
        n = items.index(RAW) + 1
    else:
        items.append(RAW)
        n = len(items)
        t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
        # add ref line
        t = t.rstrip("\n") + "\n%d. %s\n" % (n, REFTXT)
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    # insert section before ## References
    body = section.replace("[N]", "[%d]" % n).strip() + "\n\n"
    i = t.index("## References")
    t = t[:i] + body + t[i:]
    if nl == "\r\n":
        t = t.replace("\n", "\r\n")
    open(p, "w", encoding="utf-8", newline="").write(t)
    print("updated", slug, "as [%d]" % n)
