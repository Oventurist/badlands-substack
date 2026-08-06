import io, sys, re, json, os
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/"
RAW = "raw/badlands-news-brief-889.md"
REFTITLE = 'Badlands Brief — "Harris Speaks as Law and Order Top the Public Mind", URL: https://badlands.substack.com/p/badlands-news-brief-889'

def merge(slug, section_tmpl):
    p = W + "entities/" + slug + ".md"
    if not os.path.exists(p):
        p = W + "concepts/" + slug + ".md"
    txt = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    t = txt.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    n = items.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section_tmpl.replace("[n]", "[%d]" % n).strip() + "\n"
    if "## References" in t:
        head, refs = t.split("## References", 1)
        refline = "%d. %s\n" % (n, REFTITLE)
        if "badlands-news-brief-889" not in refs:
            refs = refs.rstrip("\n") + "\n" + refline
        t = head.rstrip("\n") + "\n\n" + body + "\n## References" + refs
    else:
        t = t.rstrip("\n") + "\n\n" + body + "\n## References\n%d. %s\n" % (n, REFTITLE)
    io.open(p, "w", encoding="utf-8", newline=nl).write(t)
    print("updated", slug, "as [%d]" % n)

data = json.load(io.open(sys.argv[1], encoding="utf-8"))
for slug, sec in data.items():
    merge(slug, sec)
