import sys, io, os, re
RAW = "raw/badlands-news-brief-6e6.md"
REF = 'Badlands Brief — "Badlands News Brief: Familiar Formulas, Blue Skies, & Antisemitic Nonchalance", URL: https://badlands.substack.com/p/badlands-news-brief-6e6'
for path in sys.argv[1:]:
    with io.open(path, encoding="utf-8") as f:
        txt = f.read()
    if RAW in txt:
        print("skip", path); continue
    lines = txt.split("\n")
    for i, l in enumerate(lines):
        if l.startswith("sources: ["):
            lines[i] = l.rstrip()[:-1] + ", " + RAW + "]"
            break
    nums = [int(m.group(1)) for m in re.finditer(r"(?m)^(\d+)\. Badlands", txt)]
    n = max(nums) + 1 if nums else 1
    while lines and lines[-1].strip() == "":
        lines.pop()
    lines.append("%d. %s" % (n, REF))
    lines.append("")
    with io.open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("ok", path, n)
