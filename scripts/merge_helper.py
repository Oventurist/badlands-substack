import sys, re, os, json, datetime
WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-1cd.md"
TODAY = "2026-08-05"

def merge(relpath, section):
    p = os.path.join(WIKI, relpath)
    with open(p, encoding="utf-8") as f:
        t = f.read()
    m = re.match(r"^---\n(.*?)\n---\n", t, re.S)
    if not m:
        print("NO FRONTMATTER", relpath); return
    fm = m.group(1)
    # sources
    sm = re.search(r"^sources:\s*\[(.*?)\]\s*$", fm, re.M)
    if sm:
        items = [x.strip() for x in sm.group(1).split(",") if x.strip()]
        if SRC not in items:
            items.append(SRC)
        fm2 = fm[:sm.start()] + "sources: [" + ", ".join(items) + "]" + fm[sm.end():]
    else:
        print("SOURCES NOT INLINE:", relpath)
        return
    fm2 = re.sub(r"^updated:.*$", "updated: " + TODAY, fm2, flags=re.M)
    body = t[m.end():].rstrip("\n")
    # insert before trailing "## Sources" section if present
    idx = body.rfind("\n## Sources")
    if idx != -1:
        newbody = body[:idx] + "\n\n" + section.strip() + "\n" + body[idx:]
    else:
        newbody = body + "\n\n" + section.strip() + "\n"
    with open(p, "w", encoding="utf-8", newline="\n") as f:
        f.write("---\n" + fm2 + "\n---\n" + newbody + "\n")
    print("merged", relpath)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for rel, sec in data.items():
        merge(rel, sec)
