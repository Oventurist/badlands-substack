import re, sys, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-brief-774.md"
REFTITLE = '"Weaponization Woes & Bailing on the Bromance"'
REFURL = "https://badlands.substack.com/p/badlands-brief-774"

def merge(path, section):
    p = os.path.join(BASE, path)
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW)+1
    else:
        srcs.append(RAW); n = len(srcs)
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("[n]", "[%d]" % n).rstrip()
    refline = '%d. Badlands Brief — %s, URL: %s' % (n, REFTITLE, REFURL)
    idx = t.rfind("## References")
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n" + refline + "\n"
    else:
        head, tail = t[:idx], t[idx:]
        t = head.rstrip() + "\n\n" + body + "\n\n" + tail.rstrip() + "\n" + refline + "\n"
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("merged", path, "as [%d]" % n)
