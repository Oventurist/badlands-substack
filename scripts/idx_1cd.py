import re, io
p = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/index.md"
t = open(p, encoding="utf-8").read()
lines = t.split("\n")

ents = {
"basij": "Iranian volunteer paramilitary militia under the IRGC, whose longtime commander Gholamreza Soleimani was reportedly killed in March 2026 strikes. (Created: 2026-08-05)",
"boris-pistorius": "German Defense Minister who questioned sending European frigates to the Strait of Hormuz and declined Trump's coalition. (Created: 2026-08-05)",
"dick-durbin": "Illinois Democratic senator and leading critic of the SAVE Act's proof-of-citizenship requirements. (Created: 2026-08-05)",
"gholamreza-soleimani": "Longtime commander of Iran's Basij militia, reported killed by Israel in the March 2026 strike wave. (Created: 2026-08-05)",
"joe-kent": "Director of the National Counterterrorism Center who resigned in March 2026 as the first senior Trump official to quit over the Iran war. (Created: 2026-08-05)",
"mike-lee": "Utah Republican senator and sponsor of the SAVE Act, who rebutted Democratic cost objections in Senate debate. (Created: 2026-08-05)",
"national-counterterrorism-center": "U.S. intelligence body under the DNI, headed by Joe Kent until his March 2026 resignation over the Iran war. (Created: 2026-08-05)",
"robert-garcia": "Ranking Democrat on House Oversight who accused Pam Bondi of leading a 'White House cover-up' of the Epstein files. (Created: 2026-08-05)",
}
cons = {
"badlands-brief-1cd": "March 18, 2026 Badlands Brief on the SAVE Act, Joe Kent's resignation, the Hormuz coalition refusal, the Bondi subpoena and Larijani's reported death. (Created: 2026-08-05)",
"kobayashi-maru": "No-win-scenario metaphor applied to Trump's Iran dilemma, which Burning Bright argues is a trap Trump engineered for globalist rivals. (Created: 2026-08-05)",
"north-south-transportation-corridor": "SCO-funded trade route linking Asia to Moscow via Iran, cited as a reason Russia and China back Tehran. (Created: 2026-08-05)",
"world-baseball-classic": "International baseball tournament; Venezuela beat Team USA 3-2 for its first title in 2026. (Created: 2026-08-05)",
}

def sec_bounds(name):
    start = lines.index("## " + name) if ("## " + name) in lines else None
    if start is None:
        for i,l in enumerate(lines):
            if l.strip() == "## " + name: start = i; break
    end = len(lines)
    for i in range(start+1, len(lines)):
        if lines[i].startswith("## "):
            end = i; break
    return start, end

def insert(section, items):
    global lines
    s, e = sec_bounds(section)
    for slug, desc in items.items():
        newline = "- [[%s]]: %s" % (slug, desc)
        pos = e
        for i in range(s+1, e):
            m = re.match(r"- \[\[([^\]|]+)", lines[i])
            if m and m.group(1) > slug:
                pos = i; break
        lines.insert(pos, newline)
        e += 1

insert("Entities", ents)
insert("Concepts", cons)
t = "\n".join(lines)
m = re.search(r"Total pages: (\d+)", t)
t = t[:m.start(1)] + str(int(m.group(1)) + 12) + t[m.end(1):]
t = re.sub(r"Last updated: \d{4}-\d{2}-\d{2}", "Last updated: 2026-08-05", t, count=1)
open(p, "w", encoding="utf-8", newline="").write(t)
print("ok", m.group(1), "->", int(m.group(1))+12)
