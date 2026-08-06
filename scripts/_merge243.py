import io, os, sys, json
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-243.md"
REF = '. Badlands Brief — "Badlands News Brief #243: Tariffs Back On & Trump: Best Friend of Animals", URL: https://badlands.substack.com/p/badlands-news-brief-243'

def merge(path, body):
    p = os.path.join(BASE, path)
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t = t.replace("\r\n", "\n")
    lines = t.split("\n")
    # sources
    n = None
    for i, l in enumerate(lines):
        if l.startswith("sources:"):
            inner = l[l.index("[")+1:l.rindex("]")].strip()
            items = [x.strip() for x in inner.split(",") if x.strip()]
            if RAW not in items:
                items.append(RAW)
            n = items.index(RAW) + 1
            lines[i] = "sources: [" + ", ".join(items) + "]"
        elif l.startswith("updated:"):
            lines[i] = "updated: 2026-08-06"
    t = "\n".join(lines)
    assert n, path
    body = body.replace("[n]", "[%d]" % n).rstrip()
    if "## References" in t:
        head, refs = t.split("## References", 1)
        refs = refs.rstrip()
        newref = "%d%s" % (n, REF)
        if "news-brief-243" not in refs:
            refs = refs + "\n" + newref
        t = head.rstrip() + "\n\n" + body + "\n\n## References" + refs + "\n"
    else:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n" + "%d%s" % (n, REF) + "\n"
    io.open(p, "w", encoding="utf-8", newline=nl).write(t)
    print("updated", path, "as [%d]" % n)
