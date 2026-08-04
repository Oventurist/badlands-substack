import os, re, sys
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-577.md"
DATE = "2026-08-06"
names = sys.argv[1:]
for n in names:
    p = None
    for d in ("entities", "concepts"):
        c = os.path.join(W, d, n + ".md")
        if os.path.exists(c):
            p = c; break
    if not p:
        print("NOTFOUND", n); continue
    t = open(p, encoding="utf-8").read()
    if SRC in t:
        print("HAS", n); continue
    def fix(m):
        inner = m.group(1).strip()
        items = [x.strip() for x in inner.split(",") if x.strip()]
        items.append(SRC)
        items = sorted(set(items))
        return "sources: [" + ", ".join(items) + "]"
    t2, k = re.subn(r"^sources: \[(.*?)\]", fix, t, count=1, flags=re.M)
    if not k:
        print("NOSRC", n); continue
    t2 = re.sub(r"^updated:.*$", "updated: " + DATE, t2, count=1, flags=re.M)
    open(p, "w", encoding="utf-8", newline="").write(t2)
    print("OK", n)
