import sys, re, io
path = sys.argv[1]
raw = "raw/throne-of-the-ivy-grid.md"
s = io.open(path, encoding="utf-8").read()
m = re.search(r"^sources: \[(.*?)\]\s*$", s, re.M)
items = [x.strip() for x in m.group(1).split(",") if x.strip()]
if raw in items:
    idx = items.index(raw) + 1
else:
    items.append(raw)
    idx = len(items)
    s = s[:m.start()] + "sources: [" + ", ".join(items) + "]" + s[m.end():]
s = re.sub(r"^updated: .*$", "updated: 2026-08-06", s, count=1, flags=re.M)
io.open(path, "w", encoding="utf-8", newline="").write(s)
print(idx)
