import sys, re, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-745.md"
REF = 'Badlands Brief — "Trump Teases Saudi Trillions; Biden Bros Embezzled Billions", URL: https://badlands.substack.com/p/badlands-news-brief-745'
DATE = "2026-08-06"

target = sys.argv[1]  # entities/slug
body = sys.stdin.read()
p = os.path.join(BASE, target + ".md")
t = io.open(p, encoding="utf-8").read()

m = re.search(r"^sources: \[(.*)\]\s*$", t, re.M)
if not m:
    print("ERR no inline sources:", target); sys.exit(2)
items = [x.strip() for x in m.group(1).split(",") if x.strip()]
if RAW in items:
    n = items.index(RAW) + 1
else:
    items.append(RAW); n = len(items)
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]

t = re.sub(r"^updated:.*$", "updated: " + DATE, t, count=1, flags=re.M)

refline = "%d. %s" % (n, REF)
if "## References" in t:
    if RAW.split("/")[-1][:-3] not in t.split("## References")[-1]:
        t = t.rstrip() + "\n" + refline + "\n"
else:
    t = t.rstrip() + "\n\n## References\n" + refline + "\n"

# insert body before ## References
body = body.replace("{N}", str(n)).strip()
idx = t.index("## References")
t = t[:idx].rstrip() + "\n\n" + body + "\n\n" + t[idx:]
io.open(p, "w", encoding="utf-8", newline="\n").write(t)
print("merged", target, "as [%d]" % n)
