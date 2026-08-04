import sys, re, io, os, json

WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-414.md"
TODAY = "2026-08-03"

def merge(relpath, section):
    p = os.path.join(WIKI, relpath)
    with io.open(p, encoding="utf-8") as f:
        t = f.read()
    m = re.search(r"^---\n(.*?)\n---\n", t, re.S)
    if not m:
        print("NOFM", relpath); return
    fm = m.group(1)
    sm = re.search(r"^sources: \[(.*?)\]$", fm, re.M)
    if not sm:
        print("NOSRC", relpath); return
    items = [x.strip() for x in sm.group(1).split(",") if x.strip()]
    if SRC not in items:
        items.append(SRC)
    fm2 = fm[:sm.start()] + "sources: [" + ", ".join(items) + "]" + fm[sm.end():]
    fm2 = re.sub(r"^updated: .*$", "updated: " + TODAY, fm2, count=1, flags=re.M)
    body = t[m.end():]
    # insert before trailing "## Sources" if present
    idx = body.find("\n## Sources")
    add = "\n" + section.strip() + "\n"
    if idx != -1:
        body = body[:idx] + "\n" + add + body[idx:]
    else:
        body = body.rstrip() + "\n" + add
    with io.open(p, "w", encoding="utf-8") as f:
        f.write("---\n" + fm2 + "\n---\n" + body)
    print("OK", relpath)

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for k, v in data.items():
        merge(k, v)
