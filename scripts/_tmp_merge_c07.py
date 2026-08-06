import io, os
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-c07.md"
REFLINE = '{n}. Badlands Brief — "13 Germans, A Seized Smartwatch, & An American Tithe\'s Worth of Fraud", URL: https://badlands.substack.com/p/badlands-brief-c07'

def merge(rel, body_fmt):
    p = os.path.join(W, rel)
    t = io.open(p, encoding="utf-8").read()
    lines = t.split("\n")
    for i, l in enumerate(lines):
        if l.startswith("sources:"):
            inner = l[l.index("[")+1:l.rindex("]")]
            items = [x.strip() for x in inner.split(",") if x.strip()]
            if SRC not in items:
                items.append(SRC)
            n = items.index(SRC) + 1
            lines[i] = "sources: [" + ", ".join(items) + "]"
        elif l.startswith("updated:"):
            lines[i] = "updated: 2026-08-06"
    t = "\n".join(lines)
    if REFLINE.format(n=n) not in t:
        t = t.rstrip("\n") + "\n" + REFLINE.format(n=n) + "\n"
    # insert body before ## References
    idx = t.index("## References")
    t = t[:idx] + body_fmt.replace("{n}", str(n)).strip() + "\n\n" + t[idx:]
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("merged", rel, "as [%d]" % n)

doge = """
## January 2026: reports of DOGE's demise

In mid-January 2026, Treasury Secretary [[scott-bessent|Scott Bessent]] discussed DOGE and its status in an interview with [[christopher-rufo|Chris Rufo]], stating that roughly 10% of the US federal budget is lost annually to fraud.[{n}] According to the DOGE website — tracked daily by [[jon-herold|Jon Herold]] on The Daily Herold — the initiative had delivered $215 billion in estimated savings through a combination of asset sales, contract and lease cancellations and renegotiations, fraud and improper payment deletion, grant cancellations, interest savings, programmatic changes, regulatory savings, and workforce reductions.[{n}] President [[donald-trump|Donald Trump]] commented publicly on DOGE and government efficiency efforts in a [[truth-social|Truth Social]] post that neither announced the dissolution of DOGE nor formally ended the initiative.[{n}]

[[burning-bright|Burning Bright]] argued that reports of DOGE's demise had been greatly exaggerated, and that what the public perceived as a scaling back or quiet burial during the 2025–2026 transition was in fact a deliberate narrative pivot layered over continuing work on the "Actual" rails.[{n}] In this reading, DOGE was from the inception of the Trump 2.0 era a dual-front mission statement running along both Actual and Narrative rails rather than a conventional bureaucratic deployment.[{n}] He cited a five-day surge in which federal agencies under DOGE coordination terminated or descoped 42 contracts totaling $1.5 billion in ceiling value, yielding hundreds of millions in immediate savings as part of the broader $215 billion reclaimed to date, and predicted a 2026 acceleration accompanied by "organic" calls to supercharge DOGE's mandate.[{n}] He further characterized the Trump–[[elon-musk|Musk]] feud as a "Narrative Pincer" now resolving into public reconciliation, citing Mar-a-Lago dinners, viral photo ops and Musk's declaration that "2026 is going to be amazing."[{n}]
"""

bessent = """
## Fraud estimate and NGO probes (January 2026)

In a January 2026 interview with [[christopher-rufo|Chris Rufo]] centered on the status of [[doge|DOGE]], Bessent said that roughly 10% of the US federal budget is lost to fraud.[{n}] He framed the figure as an annual loss amounting to trillions of dollars cumulatively.[{n}]

That same week Bessent signaled the launch of comprehensive probes into dark-money NGOs, describing the effort explicitly as a mafia-style "follow the money" operation amid rising [[color-revolution|color revolution]] concerns — language mirrored by President [[donald-trump|Donald Trump]] in the same period.[{n}] He pledged accelerated whistleblower pipelines and the nationwide expansion of the [[minnesota|Minnesota]]-seeded fraud investigations, a posture paralleled by Trump's moves to cut off funding to sanctuary cities and states.[{n}] [[burning-bright|Burning Bright]] read these steps not as reactive policy but as "harvested mandate in motion," with public fury over food-stamp and benefits fraud transmuted into administrative will.[{n}]
"""

green = """
## January 2026 escalation and European reinforcement

On January 15, 2026, President [[donald-trump|Donald Trump]] posted on [[truth-social|Truth Social]] that US control of Greenland is necessary for American national security.[{n}] Vice President [[jd-vance|JD Vance]] subsequently met Danish officials in Washington; Greenland was discussed and the Danes reiterated that the territory is not for sale, noting that Greenlanders themselves had recently said they wish to remain with [[denmark|Denmark]].[{n}] The territory's international status is determined by Denmark, which defers to Greenland's self-governing authorities on domestic matters.[{n}] The Danish foreign minister said after the meeting that "it's clear the president has a wish to conquer Greenland."[{n}]

Trump had also framed Greenland the day before as a strategic outpost for the [[golden-dome|Golden Dome]] missile defense array, an argument [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] regarded as rhetorical positioning aimed at Washington's neoconservative establishment rather than a genuine priority.[{n}] The same commentator noted Trump's earlier remark — made during a White House visit by Louisiana's governor — that Greenland was defended by "two dog sleds," which the [[white-house|White House]] amplified in memes on its X account.[{n}]

Denmark then began sending military resources into Greenland, joined by other European [[nato|NATO]] allies.[{n}] [[ashe-in-america|Ashe in America]] tallied the reinforcement as thirteen Germans for reconnaissance, two Norwegians, one Briton and an unknown number of Swedes, with France contributing units under [[operation-arctic-endurance|Operation Arctic Endurance]] and Finland, Canada and the Netherlands still undecided.[{n}] GhostofBasedPatrickHenry argued Trump was using the threat of Russia and China to draw NATO resources away from Eastern Europe toward Greenland, and linked alliance weakness to the [[german-industrial-crisis-2026|German industrial crisis]], noting Germany's highest number of commercial bankruptcies in over a decade and a 74% rise in natural gas prices from 2022 to 2025.[{n}]
"""

merge("entities/doge.md", doge)
merge("entities/scott-bessent.md", bessent)
merge("entities/greenland.md", green)
