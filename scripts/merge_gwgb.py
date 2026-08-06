import io, os, re, sys, json

BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/get-woke-go-broke.md"
REFLINE = '. Badlands Brief — "Get Woke, Go Broke", URL: https://badlands.substack.com/p/get-woke-go-broke'

def merge(path, section):
    with io.open(path, encoding="utf-8") as f:
        t = f.read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t = t.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW)
        n = len(srcs)
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("{n}", "[%d]" % n)
    if "## References" in t:
        head, refs = t.rsplit("## References", 1)
        reflines = refs.rstrip("\n")
        if RAW.split("/")[-1] not in refs and "get-woke-go-broke" not in refs:
            reflines += "\n%d%s" % (n, REFLINE)
        t = head.rstrip("\n") + "\n\n" + body.strip() + "\n\n## References" + reflines + "\n"
    else:
        t = t.rstrip("\n") + "\n\n" + body.strip() + "\n\n## References\n%d%s\n" % (n, REFLINE)
    with io.open(path, "w", encoding="utf-8", newline=nl) as f:
        f.write(t)
    print("merged", path, "as [%d]" % n)

if __name__ == "__main__":
    spec = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for rel, sec in spec.items():
        merge(os.path.join(BASE, rel), sec)
