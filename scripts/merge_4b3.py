import re, sys, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-4b3.md"
REFLINE = 'Badlands Brief — "Israel Goes Hot (or Not?) as the Info War Accelerates", URL: https://badlands.substack.com/p/badlands-news-brief-4b3'

def merge(relpath, body_tmpl):
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
    if "## References" in t:
        idx = t.index("## References")
        head, refs = t[:idx], t[idx:]
        if REFLINE not in refs:
            refs = refs.rstrip() + "\n%d. %s\n" % (n, REFLINE)
        t = head.rstrip() + "\n\n" + body.strip() + "\n\n" + refs
    else:
        t = t.rstrip() + "\n\n" + body.strip() + "\n\n## References\n%d. %s\n" % (n, REFLINE)
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("updated", relpath, n)
