import sys, io, re, os
RAW = "raw/mirror-mirror.md"
REFLINE = 'Badlands Brief — "Mirror, Mirror", URL: https://badlands.substack.com/p/mirror-mirror'

def run(path, body):
    with io.open(path, encoding="utf-8") as f:
        t = f.read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    n = items.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    add = body.replace("[N]", "[%d]" % n).rstrip() + "\n\n%d. %s\n" % (n, REFLINE)
    if not t.endswith("\n"):
        t += "\n"
    t += "\n" + add
    with io.open(path, "w", encoding="utf-8", newline="") as f:
        f.write(t)
    print("updated", path, "cite", n)

if __name__ == "__main__":
    p = sys.argv[1]
    body = io.open(sys.argv[2], encoding="utf-8").read()
    run(p, body)
