import os, re, glob, datetime
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
idx = os.path.join(W, "index.md")
lines = open(idx, encoding="utf-8").read().split("\n")

def parse(p):
    txt = open(p, encoding="utf-8").read()
    body = txt
    if txt.startswith("---"):
        body = txt.split("---", 2)[2]
    # first real sentence of prose
    for para in body.split("\n"):
        para = para.strip()
        if not para or para.startswith("#") or para.startswith(">"):
            continue
        s = re.split(r"(?<=[.;])\s", para)[0]
        s = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"\2", s)
        s = re.sub(r"\[\[([^\]]+)\]\]", r"\1", s)
        s = re.sub(r"\*+", "", s)
        return s.strip()
    return "Page in the Badlands wiki."

def collect(section_start, section_end, folder):
    existing = {}
    for i in range(section_start, section_end):
        m = re.match(r"^\|?-\s*\[\[([a-z0-9\-]+)\]\](.*)$", lines[i].strip())
        if m:
            existing[m.group(1)] = m.group(2)
    for f in sorted(glob.glob(os.path.join(W, folder, "*.md"))):
        s = os.path.basename(f)[:-3]
        if s not in existing:
            existing[s] = ": " + parse(f) + " (Created: 2026-08-01)"
    return ["- [[%s]]%s" % (k, existing[k]) for k in sorted(existing)]

ent_s, ent_e = 8, 96
con_s = [i for i, l in enumerate(lines) if l.startswith("## Concepts")][0]
con_e = [i for i, l in enumerate(lines) if l.startswith("## Comparisons")][0]
ents = collect(ent_s, con_s, "entities")
cons = collect(con_s + 1, con_e, "concepts")

out = lines[:8] + ents + [""] + lines[con_s:con_s + 2] + cons + [""] + lines[con_e:]
total = len(ents) + len(cons)
out = [re.sub(r"Total pages: \d+", "Total pages: %d" % total, l) for l in out]
open(idx, "w", encoding="utf-8").write("\n".join(out))
print("entities", len(ents), "concepts", len(cons), "total", total)
