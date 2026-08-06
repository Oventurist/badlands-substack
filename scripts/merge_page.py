"""Generic merge helper: append a section + source + reference to an existing wiki page.

Usage: python merge_page.py <path> <raw-basename> <ref-title> <ref-url> <section-file>
The section file text may contain the token {N} which is replaced by the citation number.
"""
import io, sys, re

path, rawname, ref_title, ref_url, secfile = sys.argv[1:6]
s = io.open(path, encoding="utf-8", newline="").read()
nl = "\r\n" if "\r\n" in s else "\n"

m = re.search(r"^sources: \[(.*?)\]\s*$", s, re.M)
if not m:
    raise SystemExit("no sources line in " + path)
items = [x.strip() for x in m.group(1).split(",") if x.strip()]
entry = "raw/%s.md" % rawname
if entry in items:
    n = items.index(entry) + 1
    already = True
else:
    items.append(entry)
    n = len(items)
    already = False
    s = s[:m.start()] + "sources: [" + ", ".join(items) + "]" + s[m.end():]

s = re.sub(r"^updated: .*$", "updated: 2026-08-06", s, count=1, flags=re.M)

sec = io.open(secfile, encoding="utf-8").read().replace("{N}", str(n))
sec = sec.strip().replace("\r\n", "\n").replace("\n", nl)

refline = '%d. Badlands Brief \u2014 "%s", URL: %s' % (n, ref_title, ref_url)

if "## References" in s:
    head, tail = s.split("## References", 1)
    body = head.rstrip() + nl + nl + sec + nl + nl + "## References" + tail.rstrip()
    if not already and refline not in body:
        body = body + nl + refline + nl
    else:
        body = body + nl
    s = body
else:
    s = s.rstrip() + nl + nl + sec + nl + nl + "## References" + nl + refline + nl

io.open(path, "w", encoding="utf-8", newline="").write(s)
print("merged %s as [%d]" % (path, n))
