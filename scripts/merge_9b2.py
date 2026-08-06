import re, io, sys, os
BASE = r"C:/Users/14053/hermes-substack"
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-9b2.md"
REFLINE = '{n}. Badlands News Brief — "Embattled Mayors, Peacemakers & Signal Setters", URL: https://badlands.substack.com/p/badlands-news-brief-9b2'

def merge(relpath, section):
    p = os.path.join(BASE, relpath)
    txt = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    t = txt.replace("\r\n", "\n")
    m = re.search(r"^sources: \[(.*?)\]$", t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    body = section.replace("[n]", "[%d]" % n).strip()
    idx = t.find("\n## References")
    ref = REFLINE.format(n=n)
    if idx == -1:
        t = t.rstrip() + "\n\n" + body + "\n\n## References\n" + ref + "\n"
    else:
        head, tail = t[:idx], t[idx:]
        if ref not in tail:
            tail = tail.rstrip() + "\n" + ref + "\n"
        t = head.rstrip() + "\n\n" + body + "\n\n" + tail.lstrip("\n")
    io.open(p, "w", encoding="utf-8", newline=nl).write(t)
    print("updated", relpath, "cite", n)

S = {}
S["entities/eric-adams.md"] = """
## September 2024 federal indictment

On September 26, 2024, a federal indictment against Adams was unsealed charging him with bribery and fraud following a months-long federal investigation into whether his mayoral campaign illegally conspired with Turkish entities to collect foreign donations.[n] Coverage noted that Adams was the first sitting New York City mayor to face criminal charges while in office.[n] The indictment contained five counts, including two counts of solicitation of a contribution by a foreign national, and the Department of Justice stated that Adams faced up to 45 years in prison if convicted on all counts and given the maximum sentence.[n] The charging document alleged that Adams sought and accepted benefits from wealthy foreign individuals and at least one Turkish government official dating back to his tenure as Brooklyn Borough president.[n]

Speaking at a press conference on the day the indictment was unsealed, Adams asked New Yorkers "to wait and hear our defense before making any judgments," and said his "day-to-day will not change."[n] Badlands Media commentary framed the case as one about public trust rather than mere campaign finance technicalities, drawing a comparison to the standard of avoiding even the appearance of impropriety expected of financial-sector fiduciaries.[n] Writers at the outlet also noted the timing of the case alongside the [[sean-combs|Sean Combs]] prosecution, observing that both were brought in the [[southern-district-of-new-york|Southern District of New York]] and shared a common thread of alleged corruption, and speculated that the investigation of Adams and his associates had always "read as a RICO."[n]
"""

S["entities/mahmoud-abbas.md"] = """
## September 2024 United Nations appeal on Gaza

In a September 2024 address, Abbas urged the United Nations to stop the war in Gaza, calling for a comprehensive and permanent ceasefire, an end to attacks by Israeli settlers in the West Bank and East Jerusalem, the delivery of humanitarian aid throughout Gaza, and a full withdrawal of the Israeli military from the enclave.[n] He argued that the [[palestinian-authority|Palestinian Authority]] should have control over all Palestinian territories and said it would hold elections once the war ended.[n] In remarks quoted by Badlands Media, Abbas demanded that the world "stop the killing of children and women," described the situation as genocide, called for an end to weapons shipments to Israel, and said Gaza was "no longer fit for life" after the destruction of homes, educational institutions and medical centres.[n]

Israel's UN ambassador [[danny-danon|Danny Danon]] responded by accusing Abbas of speaking about a peaceful solution only at the United Nations and of failing to condemn the October 7 attack by [[hamas|Hamas]] that triggered the war.[n] Badlands commentary rejected that characterization, noting that Abbas had criticized Hamas for not informing the Palestinian Authority of its planned attack and had blamed the group for the ensuing destruction visited on the Palestinian people.[n]

## Longstanding conflict with Hamas

Badlands Media compiled a record of Abbas's confrontations with Hamas to argue that he has been the principal Palestinian figure attempting to curb the organization.[n] In 2007, after Hamas drove both Palestinian Authority security forces and the [[israel-defense-forces|Israel Defense Forces]] out of Gaza, Abbas stated that his government would hold no dialogue with the "murderous terrorists" of Hamas.[n] In 2017 he said he would not appoint Hamas officials to the Palestinian government unless they recognized the state of Israel.[n] In 2018, after Hamas attempted to assassinate his prime minister with a roadside bomb during a mission to negotiate the peaceful transfer of Gaza's government to the Palestinian Authority, Abbas sanctioned Hamas and cut it off financially in an effort to destroy it.[n] According to the same commentary, Hamas survived because [[benjamin-netanyahu|Benjamin Netanyahu]] devised a scheme in which Israel carried briefcases containing tens of millions of dollars in cash into Gaza for families with ties to Hamas — a plot exposed by a cabinet minister who resigned and went public.[n] The outlet further noted that in July 2024, on the night before Netanyahu addressed Congress, [[donald-trump|Donald Trump]] posted a letter Abbas had sent him expressing concern over the attempt on Trump's life, complete with a hand-written note.[n]
"""

S["entities/taliban.md"] = """
## Bid to join BRICS (2024)

In September 2024, despite not being formally recognized by any country, the Taliban government of Afghanistan announced that it was seeking to join the [[brics|BRICS]] economic forum.[n] Deputy spokesman Hamdullah Fitrat said that "countries with major resources and the world's biggest economies are associated with the BRICS forum, especially Russia, India, and China," and that Kabul was "keen to expand our relations and participate in the economic forums of the BRICS."[n] The Afghanistan Ministry of Foreign Affairs said it hoped to be invited to the BRICS summit scheduled for October 22–24 in the Russian city of Kazan, but that there was "no information so far" on whether the Taliban could attend.[n]

While no state has extended formal recognition, China and Russia have come closest, hosting Taliban delegations for talks and maintaining embassies in Kabul after the US–NATO withdrawal of August 2021; both have shown willingness to invest in Afghanistan and tap its natural resources, and both have welcomed the Taliban's fight against the rival Islamic State Khorasan (ISIS-K).[n] Analysts quoted in the coverage suggested the Taliban's accession would hand Washington "low-hanging fruit" with which to denigrate BRICS on the world stage, particularly amid US frustration at deepening China–Russia–India cooperation.[n] Badlands Media commentary treated the move as evidence that emergent sovereign states can bypass the international rules-based order, the [[united-nations|United Nations]] and [[nato|NATO]], escaping dollar-denominated sanctions and IMF debt by joining an alternative financial architecture.[n]
"""

S["concepts/small-modular-reactor.md"] = """
## Granholm on reactors for AI data centers (2024)

In a September 2024 CNBC appearance, US Energy Secretary [[jennifer-granholm|Jennifer Granholm]] indicated that small modular reactors were effectively a "go" as a future power source, responding to questions about how the surging electricity demand of data centers and generative artificial intelligence would be met.[n] Interviewer David Faber framed the dilemma as a collision between the push to replace conventional generation with renewables and an "incredible potential uptick in the need for power," noting discussion of restarting a reactor at [[three-mile-island-nuclear-power-plant|Three Mile Island]] and recommissioning other nuclear sites, with national power needs potentially 20% higher within a handful of years.[n]

Badlands Media read the remarks as part of a broader cascade of "nuclear narratives," describing Granholm's pivot away from the wind-and-solar rhetoric that dominated Green New Deal framing as a significant signal, and noting that small modular reactors are a recurring topic among Trump-aligned Space Force officers.[n] The outlet linked the shift to Microsoft's partnership with Pennsylvania governor Josh Shapiro to restore Three Mile Island, arguing that the trend supported its thesis that the "Great" Reset was being circumvented and transformed into a "Good" Reset.[n]
"""

S["entities/jd-vance.md"] = """
## Publication of hacked vetting dossier (2024)

In September 2024, blogger [[ken-klippenstein|Ken Klippenstein]] published on his Substack an internal Republican campaign vetting dossier on Vance that was believed to have been obtained by hackers working for Iran.[n] The 271-page document included Vance's Social Security number, personal phone number, physical addresses and private email addresses, which critics said constituted a potential threat to the candidate and his family; The National Pulse declined to link to the material because of the volume of personal information it contained.[n] Klippenstein had previously worked with The Intercept and the commentary program The Young Turks.[n]

The dossier itself was described as typical of campaign vetting products, raising concerns about Vance's past policy positions and statements — including his early opposition to [[donald-trump|Donald Trump]]'s 2016 campaign and questions about his conservative bona fides — and weighing how they might affect the ticket.[n] Reviewers noted that the document portrayed Vance as considerably less radical than national Democrats and the Kamala Harris campaign had suggested, presenting him as thoughtful and open to a wide range of policy positions.[n]
"""

for k, v in S.items():
    merge(k, v)
