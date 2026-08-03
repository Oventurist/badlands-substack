import io, re
p = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/index.md"
s = io.open(p, encoding="utf-8").read()
lines = s.split("\n")

ent = {
 "bob-mumgaard": "CEO of Commonwealth Fusion Systems and 2026 PCAST appointee.",
 "center-for-tech-and-civic-life": "Nonprofit that distributed Zuckerberg-funded election administration grants in 2020.",
 "david-friedberg": "Entrepreneur, All-In podcast co-host, and 2026 PCAST appointee.",
 "fred-ehrsam": "Coinbase co-founder, neurotechnology entrepreneur, and 2026 PCAST appointee.",
 "house-intelligence-committee": "House oversight panel whose records the DOJ sought in the 2026 Brennan inquiry.",
 "jacob-dewitte": "Oklo co-founder developing small modular fission reactors; 2026 PCAST appointee.",
 "jensen-huang": "Nvidia co-founder and CEO; 2026 PCAST appointee.",
 "john-martinis": "Superconducting quantum computing physicist and 2026 PCAST appointee.",
 "lisa-su": "Chair and CEO of AMD; 2026 PCAST appointee.",
 "marc-andreessen": "Netscape co-founder and venture capitalist; 2026 PCAST appointee.",
 "michael-dell": "Founder of Dell Technologies; 2026 PCAST appointee.",
 "peter-thiel": "Investor and Palantir co-founder at the center of the 'Thiel Doomer' influence thesis.",
 "pierre-al-rahi": "Lebanese Christian priest killed by an errant IDF tank round at Qlayaa in March 2026.",
 "punchbowl-news": "Congressional news outlet that reported the DOJ's Brennan records request.",
 "safra-catz": "Longtime Oracle chief executive and 2026 PCAST appointee.",
 "sergey-brin": "Google co-founder and 2026 PCAST appointee.",
 "the-telegraph": "British newspaper that retracted its March 2026 story on Christian-Hezbollah cooperation.",
 "us-court-of-appeals-for-the-eighth-circuit": "Appellate court that upheld mandatory immigration detention 2-1 in March 2026.",
 "us-court-of-appeals-for-the-fifth-circuit": "Appellate court that first upheld mandatory immigration detention in February 2026.",
}
con = {
 "badlands-brief-143": "March 26, 2026 Badlands Brief on the Brennan inquiry, the Telegraph retraction, Russian energy resets, US-Iran talks, and PCAST appointments.",
 "federal-advisory-committee-act": "US statute governing the formation and transparency of executive branch advisory committees.",
 "litani-river": "Lebanon's principal river, invoked in 2026 as the line of proposed Israeli control.",
 "presidents-council-of-advisors-on-science-and-technology": "Federal advisory body on science and technology policy, restaffed by Trump in March 2026.",
}

def insert(section_start, section_end, items):
    global lines
    for slug, desc in items.items():
        entry = f"- [[{slug}]]: {desc} (Created: 2026-08-03)"
        if any(l.startswith(f"- [[{slug}]]") for l in lines):
            continue
        idx = None
        for i in range(section_start, section_end):
            m = re.match(r"- \[\[([^\]|]+)", lines[i])
            if m and m.group(1) > slug:
                idx = i; break
        if idx is None:
            idx = section_end
        lines.insert(idx, entry)
        section_end += 1
    return section_end

def bounds():
    e = lines.index("## Entities")
    c = lines.index("## Concepts")
    try:
        cm = lines.index("## Comparisons")
    except ValueError:
        cm = len(lines)
    return e, c, cm

e, c, cm = bounds()
insert(c+1, cm, con)
e, c, cm = bounds()
insert(e+1, c, ent)

s = "\n".join(lines)
s = re.sub(r"Total pages: (\d+)", lambda m: f"Total pages: {int(m.group(1))+len(ent)+len(con)}", s)
io.open(p, "w", encoding="utf-8", newline="\n").write(s)

log = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/log.md"
created = list(con.keys()) + list(ent.keys())
updated = ["john-brennan","hezbollah","larry-ellison","mark-zuckerberg","strait-of-hormuz","israel-katz","bezalel-smotrich"]
with io.open(log, "a", encoding="utf-8", newline="\n") as f:
    f.write(f"\n## [2026-08-03] ingest | Badlands Brief: All the Classic Earmarks of Discombobulation -> created: [{', '.join(sorted(created))}], updated: [{', '.join(updated)}]\n")
print("ok", len(ent)+len(con))
