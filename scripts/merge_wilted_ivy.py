import re, sys, os, json, io

BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/wilted-ivy.md"
REF = '. Badlands Brief \u2014 "Wilted Ivy", URL: https://badlands.substack.com/p/wilted-ivy'
TODAY = "2026-08-06"

def merge(path, body):
    p = os.path.join(BASE, path)
    with open(p, "r", encoding="utf-8", newline="") as f:
        t = f.read()
    crlf = "\r\n" in t
    t = t.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    if not m:
        print("NO SOURCES", path); return
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    n = items.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: " + TODAY, t, count=1, flags=re.M)
    add = body.replace("{n}", str(n))
    if not t.endswith("\n"): t += "\n"
    t += "\n" + add.strip() + "\n\n" + str(n) + REF + "\n"
    if crlf: t = t.replace("\n", "\r\n")
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(t)
    print("updated", path, "as [%d]" % n)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for path, body in data.items():
        merge(path, body)
