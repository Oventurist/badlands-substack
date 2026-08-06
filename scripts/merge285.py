import sys, re, os, io

RAW = "raw/badlands-brief-285.md"
REFLINE = '. Badlands Brief — "Tuckabee Unites The Arab World As Mexico Courts Discombobulation", URL: https://badlands.substack.com/p/badlands-brief-285'
WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"

def find(slug):
    for d in ("entities", "concepts"):
        p = os.path.join(WIKI, d, slug + ".md")
        if os.path.exists(p):
            return p
    return None

def main(slug, body_path):
    p = find(slug)
    if not p:
        print("MISSING", slug); return 2
    txt = io.open(p, encoding="utf-8").read()
    body = io.open(body_path, encoding="utf-8").read().strip()
    m = re.search(r"^sources:\s*\[(.*?)\]\s*$", txt, re.M)
    if not m:
        print("NOSOURCES", slug); return 3
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW in items:
        n = items.index(RAW) + 1
        already = True
    else:
        items.append(RAW); n = len(items); already = False
        txt = txt[:m.start()] + "sources: [" + ", ".join(items) + "]" + txt[m.end():]
    txt = re.sub(r"^updated:.*$", "updated: 2026-08-06", txt, count=1, flags=re.M)
    body = body.replace("{n}", str(n))
    idx = txt.find("\n## References")
    ref = str(n) + REFLINE
    if idx == -1:
        txt = txt.rstrip() + "\n\n" + body + "\n\n## References\n" + ref + "\n"
    else:
        head, tail = txt[:idx], txt[idx:]
        if ref not in tail:
            tail = tail.rstrip() + "\n" + ref + "\n"
        txt = head.rstrip() + "\n\n" + body + "\n" + tail
    io.open(p, "w", encoding="utf-8", newline="\n").write(txt)
    print("OK", slug, "n=", n, "dup" if already else "")
    return 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1], sys.argv[2]))
