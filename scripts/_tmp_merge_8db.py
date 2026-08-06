import io, json, re, sys, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-brief-8db.md"
REFTITLE = 'Badlands Brief — "Hunters Become the Hunted as Traitors Reveal Themselves", URL: https://badlands.substack.com/p/badlands-brief-8db'

def merge(relpath, section):
    p = os.path.join(BASE, relpath)
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("{n}", str(n)).rstrip() + "\n"
    idx = t.find("\n## References")
    refline = "%d. %s\n" % (n, REFTITLE)
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n## References\n" + refline
    else:
        head, tail = t[:idx], t[idx:]
        if refline not in tail:
            tail = tail.rstrip() + "\n" + refline
        t = head.rstrip() + "\n\n" + body + "\n" + tail.lstrip("\n")
        t = t.replace("## References", "## References", 1)
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("merged", relpath, "as [%d]" % n)

edits = json.load(io.open(sys.argv[1], encoding="utf-8"))
for relpath, section in edits:
    merge(relpath, section)
