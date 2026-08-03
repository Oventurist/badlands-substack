import sys, re, os, json

WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-174.md"
TODAY = "2026-08-03"

def merge(relpath, section):
    p = os.path.join(WIKI, relpath)
    with open(p, encoding="utf-8") as f:
        t = f.read()
    # sources
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    if not m:
        print("NO SOURCES LINE:", relpath); return
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if SRC not in items:
        items.append(SRC)
        t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: " + TODAY, t, count=1, flags=re.M)
    if not t.endswith("\n"):
        t += "\n"
    t += "\n" + section.strip() + "\n"
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(t)
    print("merged", relpath)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for k, v in data.items():
        merge(k, v)
