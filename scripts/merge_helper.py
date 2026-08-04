import sys, re, io, os, json

BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-brief-311.md"
TODAY = "2026-08-03"

def merge(relpath, section):
    p = os.path.join(BASE, relpath)
    with io.open(p, encoding="utf-8") as f:
        t = f.read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t2 = t.replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n", t2, re.S)
    if not m:
        print("NO FRONTMATTER", relpath); return
    fm = m.group(1)
    sm = re.search(r"^sources: \[(.*?)\]$", fm, re.M)
    if not sm:
        print("BAD SOURCES", relpath); return
    items = [x.strip() for x in sm.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    fm2 = fm[:sm.start()] + "sources: [" + ", ".join(items) + "]" + fm[sm.end():]
    fm2 = re.sub(r"^updated: .*$", "updated: " + TODAY, fm2, flags=re.M)
    body = t2[m.end():].rstrip("\n")
    out = "---\n" + fm2 + "\n---\n" + body + "\n\n" + section.strip() + "\n"
    with io.open(p, "w", encoding="utf-8", newline=nl) as f:
        f.write(out)
    print("merged", relpath)

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for k, v in data.items():
        merge(k, v)
