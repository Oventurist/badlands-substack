import re
p = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/index.md"
lines = open(p, encoding="utf-8").read().split("\n")

ents = {
 "andre-dickens": "Mayor of Atlanta, present at the February 2026 book-tour stop where Gavin Newsom made his \"960 SAT guy\" remarks.",
 "austin-tucker-martin": "21-year-old North Carolina man shot and killed by Secret Service after breaching the Mar-a-Lago perimeter on February 22, 2026.",
 "ed-markey": "Massachusetts Democratic senator listed among lawmakers skipping Trump's 2026 State of the Union address.",
 "egypt": "Arab state that joined regional condemnation of Ambassador Huckabee's \"Nile to the Euphrates\" remarks.",
 "el-mencho": "Nemesio Oseguera Cervantes, alleged leader of the Jalisco New Generation Cartel, killed by Mexican forces in February 2026.",
 "freddie-mac": "US government-sponsored mortgage enterprise whose data showed the 30-year fixed rate falling to 5.99% in February 2026.",
 "jalisco-new-generation-cartel": "Mexican criminal organization (CJNG) led by El Mencho; target of the February 2026 Jalisco operation.",
 "jordan": "Arab kingdom among the governments condemning Huckabee's remarks on Israeli territorial claims.",
 "mike-huckabee": "US Ambassador to Israel whose \"Nile to the Euphrates\" comments to Tucker Carlson drew region-wide condemnation in February 2026.",
 "nayib-bukele": "President of El Salvador, cited in Badlands commentary among leaders degrading cartel infrastructure.",
 "new-york-post": "New York tabloid whose reporting claimed roughly 100 cartel leaders were transferred to US custody before the El Mencho raid.",
 "organization-of-islamic-cooperation": "57-nation intergovernmental body that condemned Huckabee's February 2026 remarks.",
 "ratefi": "US lender that launched a mortgage product allowing cryptocurrency holdings to count toward borrower qualification.",
 "tamim-bin-hamad-al-thani": "Emir of Qatar, defended by Trump against attacks from Laura Loomer and Mark Levin.",
 "tina-smith": "Minnesota Democratic senator listed among those skipping the 2026 State of the Union.",
 "us-navy-seals": "US special operations force; nearly twenty SEALs were invited by Sheinbaum to train Mexican forces against the cartels.",
 "yair-lapid": "Israeli opposition leader who pledged support for Netanyahu in a war with Iran and voiced sympathy for Greater Israel claims.",
 "zeev-elkin": "Israeli Finance Ministry official who said Israel would not fund Gaza reconstruction under Trump's Board of Peace.",
}
cons = {
 "badlands-brief-285": "February 24, 2026 Badlands Brief covering the 2026 State of the Union, the Jalisco raid, the Mar-a-Lago breach, and Huckabee's Israel remarks.",
 "israel-lobby": "Network of pro-Israel advocacy in US politics, described in the corpus as pushing for war with Iran.",
 "state-of-the-union": "Annual US presidential address to a joint session of Congress; the 2026 edition was billed as the first of the \"Golden Age.\"",
}

def insert(section, items):
    start = lines.index("## " + section) + 1
    end = start
    while end < len(lines) and not lines[end].startswith("## "):
        end += 1
    for slug, desc in items.items():
        entry = "- [[%s]]: %s (Created: 2026-08-03)" % (slug, desc)
        pos = None
        for i in range(start, end):
            m = re.match(r"- \[\[([a-z0-9|-]+?)[\]|]", lines[i])
            if m and m.group(1) > slug:
                pos = i
                break
        if pos is None:
            pos = end
        lines.insert(pos, entry)
        end += 1

insert("Concepts", cons)
insert("Entities", ents)

for i, l in enumerate(lines):
    if "Total pages:" in l:
        lines[i] = re.sub(r"Total pages: \d+", "Total pages: 1518", l)
        lines[i] = re.sub(r"Last updated: [\d-]+", "Last updated: 2026-08-03", lines[i])
open(p, "w", encoding="utf-8", newline="").write("\n".join(lines))
print("done")
