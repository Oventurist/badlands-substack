import re, io, os
base = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/"
RAW = "raw/badlands-news-brief-220.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: Tracking Trump & Rootin\' for Putin?", URL: https://badlands.substack.com/p/badlands-news-brief-220'
files = ["elon-musk","x-corp","claudine-gay","elise-stefanik","katie-hobbs","vladimir-putin","robert-f-kennedy-jr","united-nations-security-council"]
for f in files:
    p = base+f+".md"
    with open(p, encoding="utf-8", newline="") as fh:
        t = fh.read()
    nl = "\r\n" if "\r\n" in t else "\n"
    if RAW not in t:
        t = re.sub(r"(?m)^sources: \[(.*?)\]$", lambda m: "sources: ["+m.group(1)+", "+RAW+"]", t, count=1)
    nums = re.findall(r"(?m)^(\d+)\. ", t)
    n = max(int(x) for x in nums)+1 if nums else 1
    t = t.rstrip() + nl + "%d. %s" % (n, REFTITLE) + nl
    with open(p, "w", encoding="utf-8", newline="") as fh:
        fh.write(t)
    print(f, "->", n)
