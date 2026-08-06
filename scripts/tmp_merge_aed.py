import sys, re, io

RAW = "raw/badlands-news-brief-aed.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: The Garbage Man Cometh to Take out the Trash", URL: https://badlands.substack.com/p/badlands-news-brief-aed'

def merge(path, section_tmpl):
    with io.open(path, encoding="utf-8") as f:
        txt = f.read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    t = txt.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW in items:
        n = items.index(RAW) + 1
    else:
        items.append(RAW)
        n = len(items)
        t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    section = section_tmpl.replace("{n}", str(n))
    idx = t.rfind("\n## References")
    if idx == -1:
        t = t.rstrip() + "\n\n" + section.strip() + "\n\n## References\n%d. %s\n" % (n, REFTITLE)
    else:
        t = t[:idx] + "\n" + section.strip() + "\n" + t[idx:]
        t = t.rstrip() + "\n%d. %s\n" % (n, REFTITLE)
    with io.open(path, "w", encoding="utf-8", newline=nl) as f:
        f.write(t)
    print("merged %s as [%d]" % (path, n))

if __name__ == "__main__":
    path = sys.argv[1]
    section = io.open(sys.argv[2], encoding="utf-8").read()
    merge(path, section)
