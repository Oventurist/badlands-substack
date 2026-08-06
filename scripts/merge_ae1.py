import io, os, re, sys, json
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-ae1.md"
REFLINE = '{n}. Badlands News Brief — "Defiant Deportations & Canadian Freeloaders", URL: https://badlands.substack.com/p/badlands-news-brief-ae1'

def merge(relpath, section):
    p = os.path.join(BASE, relpath)
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    t2 = t.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]\s*$", t2, re.M)
    srcs = [s.strip() for s in m.group(1).split(",")]
    if RAW in srcs:
        n = srcs.index(RAW) + 1
    else:
        srcs.append(RAW); n = len(srcs)
        t2 = t2[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t2[m.end():]
    t2 = re.sub(r"^updated: .*$", "updated: 2026-08-06", t2, count=1, flags=re.M)
    body = section.replace("[n]", "[%d]" % n).rstrip()
    idx = t2.find("\n## References")
    ref = REFLINE.format(n=n)
    if idx == -1:
        t2 = t2.rstrip() + "\n\n" + body + "\n\n## References\n" + ref + "\n"
    else:
        head = t2[:idx].rstrip()
        tail = t2[idx:].rstrip()
        if "badlands-news-brief-ae1" not in tail:
            tail = tail + "\n" + ref
        t2 = head + "\n\n" + body + "\n\n" + tail + "\n"
    io.open(p, "w", encoding="utf-8", newline=nl).write(t2)
    print("merged", relpath, "as [%d]" % n)

if __name__ == "__main__":
    data = json.load(io.open(sys.argv[1], encoding="utf-8"))
    for rel, sec in data:
        merge(rel, sec)
