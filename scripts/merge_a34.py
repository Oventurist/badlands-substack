import re, sys, io, os, json

RAW = "raw/badlands-news-brief-a34.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: Rising Demand for DC Defenders & A Sovereign Spring Social", URL: https://badlands.substack.com/p/badlands-news-brief-a34'
BASE = "C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/"

def merge(slug, section):
    p = BASE + slug + ".md"
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t = t.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("{N}", str(n)).strip()
    idx = t.find("\n## References")
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n%d. %s\n" % (n, REFTITLE)
    else:
        head = t[:idx].rstrip()
        refs = t[idx:].rstrip()
        if REFTITLE not in refs:
            refs = refs + "\n%d. %s" % (n, REFTITLE)
        t = head + "\n\n" + body + "\n\n" + refs.lstrip("\n") + "\n"
    io.open(p, "w", encoding="utf-8", newline=nl).write(t)
    print("merged %s as [%d]" % (slug, n))

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for slug, sec in data.items():
        merge(slug, sec)
