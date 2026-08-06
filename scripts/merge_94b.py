import re, sys, io, os

BASE = "C:/Users/14053/hermes-projects/badlands-substack/wiki/"
RAW = "raw/badlands-news-brief-94b.md"
REFLINE = 'Badlands Brief — "Posse Comitatus & Haggling with Hamas", URL: https://badlands.substack.com/p/badlands-news-brief-94b'

def merge(relpath, section):
    p = BASE + relpath
    with io.open(p, encoding="utf-8") as f:
        text = f.read()
    nl = "\r\n" if "\r\n" in text else "\n"
    t = text.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
        already = True
    else:
        srcs.append(RAW)
        n = len(srcs)
        already = False
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("{n}", str(n)).strip()
    idx = t.find("\n## References")
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n%d. %s\n" % (n, REFLINE)
    else:
        head = t[:idx].rstrip()
        tail = t[idx:].rstrip()
        if not already:
            tail = tail + "\n%d. %s" % (n, REFLINE)
        t = head + "\n\n" + body + "\n\n" + tail + "\n"
    with io.open(p, "w", encoding="utf-8", newline=nl) as f:
        f.write(t)
    print("merged %s as [%d]" % (relpath, n))

if __name__ == "__main__":
    pass
