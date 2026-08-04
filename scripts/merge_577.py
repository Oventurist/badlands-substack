import sys, json, re, os, io

BASE = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-577.md"
DATE = "2026-08-04"

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(BASE, d, slug + ".md")
        if os.path.exists(p):
            return p
    return None

def merge(slug, heading, body):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    with open(p, "r", encoding="utf-8") as f:
        txt = f.read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    txt = txt.replace("\r\n", "\n")
    # sources
    m = re.search(r"^sources: \[(.*?)\]$", txt, re.M)
    if m:
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if SRC not in items:
            items.append(SRC)
            items = sorted(set(items))
            txt = txt[:m.start()] + "sources: [" + ", ".join(items) + "]" + txt[m.end():]
    else:
        print("NOSOURCES", slug)
    txt = re.sub(r"^updated: .*$", "updated: " + DATE, txt, count=1, flags=re.M)
    if not txt.endswith("\n"):
        txt += "\n"
    txt += "\n## " + heading + "\n\n" + body.strip() + "\n"
    with open(p, "w", encoding="utf-8", newline=nl) as f:
        f.write(txt)
    print("OK", slug, p)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, (heading, body) in data.items():
        merge(slug, heading, body)
