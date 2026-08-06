import re, sys, io, json, pathlib
BASE = pathlib.Path("C:/Users/14053/hermes-projects/badlands-substack/wiki")
RAW = "raw/badlands-news-brief-f94.md"
REF = 'Badlands Brief — "Badlands News Brief: The Proof is in the Proxy ...", URL: https://badlands.substack.com/p/badlands-news-brief-f94'

def merge(relpath, section):
    p = BASE / relpath
    t = p.read_text(encoding="utf-8")
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW); n = len(srcs)
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("{n}", f"[{n}]")
    refline = f"{n}. {REF}"
    if "## References" in t:
        head, tail = t.split("## References", 1)
        tail = tail.rstrip("\n")
        if REF not in tail:
            tail = tail + "\n" + refline
        t = head.rstrip("\n") + "\n\n" + body.strip() + "\n\n## References\n" + tail.lstrip("\n") + "\n"
    else:
        t = t.rstrip("\n") + "\n\n" + body.strip() + "\n\n## References\n" + refline + "\n"
    p.write_text(t, encoding="utf-8", newline="\n")
    print("merged", relpath, "as", n)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for rel, sec in data.items():
        merge(rel, sec)
