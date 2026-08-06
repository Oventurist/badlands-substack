import re, io, os, json, sys
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-b39.md"
REFLINE = 'Badlands Brief — "Biden Says Stuff as Nazis Circle in Ukraine", URL: https://badlands.substack.com/p/badlands-news-brief-b39'

sections = json.load(io.open(sys.argv[1], encoding="utf-8"))

for rel, body in sections.items():
    path = os.path.join(BASE, rel)
    txt = io.open(path, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
        newsrcs = srcs
    else:
        srcs.append(RAW); n = len(srcs); newsrcs = srcs
        txt = txt[:m.start()] + "sources: [" + ", ".join(newsrcs) + "]" + txt[m.end():]
    txt = re.sub(r"^updated: .*$", "updated: 2026-08-06", txt, count=1, flags=re.M)
    body = body.replace("{N}", str(n)).strip() + "\n"
    idx = txt.find("\n## References")
    ref = "%d. %s\n" % (n, REFLINE)
    if idx == -1:
        txt = txt.rstrip() + "\n\n" + body + "\n## References\n" + ref
    else:
        head = txt[:idx].rstrip() + "\n\n" + body
        tail = txt[idx:].rstrip() + "\n" + ref
        txt = head + tail
    io.open(path, "w", encoding="utf-8", newline="").write(txt)
    print("merged", rel, "as [%d]" % n)
