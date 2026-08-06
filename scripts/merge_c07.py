import sys, re, io, os
ART = "raw/badlands-brief-c07.md"
REF = '. Badlands Brief — "13 Germans, A Seized Smartwatch, & An American Tithe\'s Worth of Fraud", URL: https://badlands.substack.com/p/badlands-brief-c07'
base = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"

path = sys.argv[1]
body = sys.stdin.read()
full = os.path.join(base, path)
t = open(full, encoding="utf-8").read()
m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
if ART not in srcs:
    srcs.append(ART)
n = srcs.index(ART) + 1
t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
body = body.replace("{N}", str(n)).rstrip() + "\n"
if "## References" in t:
    head, refs = t.rsplit("## References", 1)
    reflines = refs.rstrip().split("\n")
    if not any("badlands-brief-c07" in l for l in reflines):
        reflines.append(str(n) + REF)
    t = head.rstrip() + "\n\n" + body + "\n## References\n" + "\n".join(l for l in reflines if l.strip()) + "\n"
else:
    t = t.rstrip() + "\n\n" + body + "\n## References\n" + str(n) + REF + "\n"
open(full, "w", encoding="utf-8").write(t)
print(path, "-> [" + str(n) + "]")
