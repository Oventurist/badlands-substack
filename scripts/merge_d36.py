import io, os, re, sys, json

ROOT = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-d36.md"
REFTITLE = 'Badlands Brief — "Our Boy Blue, the Apprentice and the Art of the Deal", URL: https://badlands.substack.com/p/badlands-news-brief-d36'

def merge(relpath, section):
    p = os.path.join(ROOT, relpath)
    s = io.open(p, encoding="utf-8", newline="").read()
    nl = "\r\n" if "\r\n" in s else "\n"
    # sources
    m = re.search(r"^sources: \[(.*?)\]\s*$", s, re.M)
    if not m:
        print("NO-SOURCES", relpath); return
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    n = items.index(RAW) + 1
    s = s[:m.start()] + "sources: [" + ", ".join(items) + "]" + s[m.end():]
    s = re.sub(r"^updated: .*$", "updated: 2026-08-06", s, count=1, flags=re.M)
    nums = [int(x) for x in re.findall(r"^(\d+)\. ", s, re.M)]
    refnum = max(nums) + 1 if nums else 1
    body = section.replace("{n}", str(refnum)).replace("\n", nl)
    if "## References" not in s:
        s = s.rstrip() + nl + nl + body.strip() + nl + nl + "## References" + nl + f"{refnum}. {REFTITLE}" + nl
    else:
        s = s.rstrip() + nl + nl + body.strip() + nl + nl + f"{refnum}. {REFTITLE}" + nl
    io.open(p, "w", encoding="utf-8", newline="").write(s)
    print("MERGED", relpath, "cite", refnum, "srcpos", n)

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for rel, sec in data.items():
        merge(rel, sec)
