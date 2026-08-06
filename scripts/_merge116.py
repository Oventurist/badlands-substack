import sys, re, subprocess, os
base = "C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-116.md"
REF = 'Badlands Brief — "Badlands News Brief: A Splintered Establishment & Tension Tightropes", URL: https://badlands.substack.com/p/badlands-news-brief-116'
slug, folder, body_file = sys.argv[1], sys.argv[2], sys.argv[3]
p = os.path.join(base, "wiki", folder, slug + ".md")
r = subprocess.run(["python", os.path.join(base, "scripts", "wiki_page_lock.py"), "acquire", slug])
if r.returncode != 0:
    print("BUSY", slug); sys.exit(1)
try:
    raw = open(p, "rb").read().decode("utf-8")
    crlf = "\r\n" in raw
    t = raw.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW not in items:
        items.append(RAW)
    n = items.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = open(os.path.join(base, body_file), encoding="utf-8").read().replace("[N]", "[%d]" % n)
    if "## References" in t:
        i = t.rindex("## References")
        t = t[:i] + body + "\n" + t[i:]
        t = t.rstrip("\n") + "\n%d. %s\n" % (n, REF)
    else:
        t = t.rstrip("\n") + "\n\n" + body + "\n## References\n%d. %s\n" % (n, REF)
    if crlf:
        t = t.replace("\n", "\r\n")
    open(p, "wb").write(t.encode("utf-8"))
    print("MERGED", slug, "as [%d]" % n)
finally:
    subprocess.run(["python", os.path.join(base, "scripts", "wiki_page_lock.py"), "release", slug])
