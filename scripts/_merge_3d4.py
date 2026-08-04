import re, os, json, sys, io

WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-3d4.md"
TODAY = "2026-08-03"

def merge(relpath, section):
    p = os.path.join(WIKI, relpath)
    if not os.path.exists(p):
        print("MISSING", relpath); return
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t = t.replace("\r\n", "\n")
    # frontmatter
    m = re.match(r"^---\n(.*?)\n---\n", t, re.S)
    if not m:
        print("NOFM", relpath); return
    fm = m.group(1)
    if SRC not in fm:
        def rep(mm):
            inner = mm.group(1).strip()
            return "sources: [" + (inner + ", " if inner else "") + SRC + "]"
        fm2, n = re.subn(r"sources:\s*\[(.*?)\]", rep, fm, count=1, flags=re.S)
        if n == 0:
            print("NOSOURCES", relpath); return
        fm = fm2
    fm = re.sub(r"updated:.*", "updated: " + TODAY, fm, count=1)
    t = "---\n" + fm + "\n---\n" + t[m.end():]
    if t.rstrip().endswith(section.strip().split("\n")[0]):
        pass
    t = t.rstrip("\n") + "\n\n" + section.strip() + "\n"
    io.open(p, "w", encoding="utf-8", newline=nl).write(t)
    print("OK", relpath)

data = json.load(io.open(sys.argv[1], encoding="utf-8"))
for rel, sec in data:
    merge(rel, sec)
