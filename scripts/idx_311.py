import io, re
p = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/index.md"
t = io.open(p, encoding="utf-8").read()
nl = "\r\n" if "\r\n" in t else "\n"
lines = t.replace("\r\n","\n").split("\n")

ent = {
"advisory-committee-on-immunization-practices": "Federal vaccine advisory body whose 2026 narrowing of routine recommendations prompted New York to decouple state policy.",
"american-jewish-committee": "Jewish advocacy organization backing the 2026 Lankford-Rosen antisemitism bill.",
"andy-barr": "Kentucky Republican congressman who won the 2026 GOP nomination for an open US Senate seat with Trump's endorsement.",
"center-for-european-policy-analysis": "Transatlantic think tank arguing the Putin-Xi partnership has matured into a full alliance.",
"department-of-education": "Federal education agency tasked with an antisemitism coordinator under the 2026 Lankford-Rosen bill.",
"ed-gallrein": "Former Navy SEAL who defeated Thomas Massie in the 2026 Kentucky 4th District Republican primary.",
"elbridge-colby": "Under Secretary of Defense for Policy who announced the 2026 suspension of the US-Canada defense board.",
"ford-motor-company": "Automaker exploring military supply of commercial vehicles in the 2026 defense mobilization push.",
"institute-for-national-security-studies": "Tel Aviv University think tank whose analyst assessed Iran's post-pause negotiating leverage.",
"jacky-rosen": "Nevada Democratic senator and co-author of the 2026 bipartisan antisemitism bill.",
"james-lankford": "Oklahoma Republican senator and co-author of the 2026 bipartisan antisemitism bill.",
"kathy-hochul": "New York governor who signed 2026 laws preserving state authority over vaccine policy.",
"lauren-boebert": "Colorado Republican congresswoman named as a possible next primary target after Massie's defeat.",
"norad": "Binational US-Canada aerospace defense command expected to continue cooperation despite the 2026 board pause.",
"oshkosh-corporation": "Military vehicle manufacturer engaged in 2026 defense production talks.",
"permanent-joint-board-on-defense": "1940 US-Canada military consultation body whose US participation was suspended in 2026.",
"pete-hegseth": "Defense Secretary who described placing the US industrial base on a wartime footing.",
"raz-zimmt": "INSS analyst who argued Trump's strike pause strengthened Iran's incentive to resist US demands.",
"tim-burchett": "Tennessee Republican congressman who called claims of Israeli influence over Congress exaggerated.",
}
con = {
"badlands-brief-311": "May 20, 2026 Badlands Brief on Massie's primary defeat, the Putin-Xi alliance, the antisemitism bill, and the US-Canada defense board pause.",
"lankford-rosen-antisemitism-bill": "2026 bipartisan Senate package imposing federal antisemitism requirements on schools, platforms, and security grants.",
}

def sec_bounds(name):
    s = lines.index("## " + name)
    e = len(lines)
    for i in range(s+1, len(lines)):
        if lines[i].startswith("## "):
            e = i; break
    return s+1, e

def insert(name, d):
    for slug, desc in sorted(d.items()):
        s, e = sec_bounds(name)
        entry = "- [[%s]]: %s (Created: 2026-08-03)" % (slug, desc)
        pos = e
        for i in range(s, e):
            m = re.match(r"- \[\[([^\]|]+)", lines[i])
            if m and m.group(1) > slug:
                pos = i; break
        lines.insert(pos, entry)

insert("Entities", ent)
insert("Concepts", con)

out = "\n".join(lines)
out = re.sub(r"Total pages: (\d+)", lambda m: "Total pages: %d" % (int(m.group(1)) + 21), out)
io.open(p, "w", encoding="utf-8", newline=nl).write(out)
print("ok")
