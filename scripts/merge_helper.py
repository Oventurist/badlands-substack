import sys, re, os, io, json

RAW = "raw/badlands-brief-7c6.md"
TITLE = 'Badlands Brief — "The Democratization of Narrative Distribution. And a New War with Iran.", URL: https://badlands.substack.com/p/badlands-brief-7c6'
TODAY = "2026-08-06"
WIKI = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(WIKI, d, slug + ".md")
        if os.path.exists(p):
            return p
    return None

def main():
    payload = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, body in payload.items():
        p = find(slug)
        if not p:
            print("MISSING", slug); continue
        t = open(p, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSRC", slug); continue
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW not in items:
            items.append(RAW)
        n = items.index(RAW) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: " + TODAY, t, count=1, flags=re.M)
        sec = body.replace("{N}", str(n)).rstrip() + "\n"
        refline = "%d. %s" % (n, TITLE)
        if "## References" in t:
            head, tail = t.split("## References", 1)
            lines = [l for l in tail.strip().split("\n") if l.strip()]
            if refline not in lines:
                lines.append(refline)
            t = head.rstrip() + "\n\n" + sec + "\n## References\n" + "\n".join(lines) + "\n"
        else:
            t = re.split(r"^## Sources\s*$", t, flags=re.M)[0]
            refs = []
            for i, it in enumerate(items, 1):
                if it == RAW:
                    refs.append("%d. %s" % (i, TITLE))
                else:
                    b = it.split("/")[-1][:-3]
                    refs.append('%d. Badlands Brief — "%s", URL: https://badlands.substack.com/p/%s' % (i, b, b))
            t = t.rstrip() + "\n\n" + sec + "\n## References\n" + "\n".join(refs) + "\n"
        open(p, "w", encoding="utf-8").write(t)
        print("UPDATED", slug, "n=%d" % n)

main()
