import sys, re, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/"
RAW = "raw/the-cia-is-being-thrown-under-the.md"
REF = 'Badlands Brief — "The CIA is Being Thrown Under the Bus", URL: https://badlands.substack.com/p/the-cia-is-being-thrown-under-the'

def merge(rel, nsrc, body_tmpl):
    p = BASE + rel + ".md"
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    m = re.search(r'sources: \[(.*?)\]', t, re.S)
    srcs = [x.strip() for x in m.group(1).split(',')]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    assert n == nsrc, (rel, n, nsrc)
    t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r'updated: \d{4}-\d{2}-\d{2}', 'updated: 2026-08-06', t, count=1)
    body = body_tmpl.replace("[n]", "[%d]" % n)
    t = t.rstrip() + nl + nl + body.strip().replace("\n", nl) + nl + nl + "%d. %s%s" % (n, REF, nl)
    io.open(p, "w", encoding="utf-8", newline="").write(t)
    print("MERGED", rel, n)
