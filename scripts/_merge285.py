import re, os, sys
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-285.md"
targets = sys.argv[1:]
new_pages = []
for t in targets:
    p = None
    for d in ("entities", "concepts"):
        f = os.path.join(W, d, t + ".md")
        if os.path.exists(f):
            p = f
            break
    if not p:
        print("MISSING", t); continue
    s = open(p, encoding="utf-8").read()
    if SRC in s:
        print("already", t); continue
    m = re.search(r"^sources: \[(.*?)\]\s*$", s, re.M)
    if not m:
        print("NOFM", t); continue
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    items.append(SRC)
    s = s[:m.start()] + "sources: [" + ", ".join(items) + "]" + s[m.end():]
    s = re.sub(r"^updated: .*$", "updated: 2026-08-03", s, count=1, flags=re.M)
    open(p, "w", encoding="utf-8", newline="").write(s)
    print("updated", t, len(items))
