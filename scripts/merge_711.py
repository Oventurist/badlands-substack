import sys, re, io, subprocess, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-711.md"
REFLINE = 'Badlands Brief — "A Not so Brief Full of Sovereign SIGNAL", URL: https://badlands.substack.com/p/badlands-news-brief-711'

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{BASE}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def main():
    slug = sys.argv[1]
    body = sys.stdin.read()
    p = find(slug)
    if not p:
        print("MISSING", slug); return 2
    txt = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    txt = txt.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
    if not m:
        print("NOSRC", slug); return 3
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    txt = txt[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + txt[m.end():]
    txt = re.sub(r"^updated: .*$", "updated: 2026-08-06", txt, count=1, flags=re.M)
    body = body.replace("[n]", "[%d]" % n).strip()
    ref = "%d. %s" % (n, REFLINE)
    if "## References" in txt:
        head, tail = txt.split("## References", 1)
        tail = tail.rstrip("\n")
        if REFLINE not in tail:
            tail = tail + "\n" + ref
        txt = head.rstrip("\n") + "\n\n" + body + "\n\n## References" + tail + "\n"
    else:
        txt = txt.rstrip("\n") + "\n\n" + body + "\n\n## References\n" + ref + "\n"
    io.open(p, "w", encoding="utf-8", newline=nl).write(txt)
    print("OK", p, "cite", n)
    return 0

sys.exit(main())
