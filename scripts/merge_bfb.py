import re, sys, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-bfb.md"
REFLINE = 'Badlands Media \u2014 "Badlands News Brief: Bicameral Trump Cases & The Fettermen Speaketh", URL: https://badlands.substack.com/p/badlands-news-brief-bfb'

def merge(relpath, heading, body_tmpl):
    p = os.path.join(BASE, relpath)
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW); n = len(srcs)
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = body_tmpl.replace("[n]", "[%d]" % n)
    sec = "\n\n## " + heading + "\n\n" + body.strip() + "\n"
    if "## References" in t:
        i = t.index("## References")
        head, tail = t[:i].rstrip("\n"), t[i:]
        # next ref number
        nums = [int(x) for x in re.findall(r"^(\d+)\.", tail, re.M)]
        nxt = max(nums) + 1 if nums else 1
        if RAW not in t.split("## References")[0] or True:
            if REFLINE not in tail:
                tail = tail.rstrip("\n") + "\n%d. %s\n" % (nxt, REFLINE)
        t = head + sec + "\n" + tail
    else:
        t = t.rstrip("\n") + sec + "\n\n## References\n1. " + REFLINE + "\n"
    io.open(p, "w", encoding="utf-8").write(t)
    print("updated", relpath, "cite", n)
