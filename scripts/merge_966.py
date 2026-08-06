import sys, re, io, os
BASE = "raw/badlands-news-brief-966.md"
REF = 'Badlands Brief — "Badlands News Brief: Mockingbird Meltdowns & DOGE-Driven Dreams", URL: https://badlands.substack.com/p/badlands-news-brief-966'
ROOT = "C:/Users/14053/hermes-projects/badlands-substack/wiki"

def merge(path, section_template):
    with io.open(path, encoding="utf-8") as f:
        t = f.read()
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if BASE in items:
        n = items.index(BASE) + 1
    else:
        items.append(BASE); n = len(items)
        t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    section = section_template.replace("[n]", "[%d]" % n)
    if "## References" in t:
        idx = t.rindex("## References")
        head, tail = t[:idx], t[idx:]
        head = head.rstrip() + "\n\n" + section.strip() + "\n\n"
        # append ref line
        lines = tail.rstrip().split("\n")
        if not any(("badlands-news-brief-966" in l) for l in lines):
            lines.append("%d. %s" % (n, REF))
        t = head + "\n".join(lines) + "\n"
    else:
        t = t.rstrip() + "\n\n" + section.strip() + "\n\n## References\n%d. %s\n" % (n, REF)
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(t)
    print("merged", path, "as [%d]" % n)

if __name__ == "__main__":
    import json
    spec = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, sec in spec.items():
        d = "concepts" if os.path.exists(os.path.join(ROOT, "concepts", slug + ".md")) else "entities"
        merge(os.path.join(ROOT, d, slug + ".md"), sec)
