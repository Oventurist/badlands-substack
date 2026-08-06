# -*- coding: utf-8 -*-
import io, sys
sys.path.insert(0, r'C:/Users/14053/hermes-projects/badlands-substack/scripts')
from _merge_a1a import merge

REF = u'{n}. Badlands Brief \u2014 "American Discombobulation", URL: https://badlands.substack.com/p/badlands-brief-a1a'
W = r'C:/Users/14053/hermes-projects/badlands-substack/wiki/'

jobs = [
 (W+'concepts/white-house-ballroom.md', 4, u'badlands-brief-9f2.md]', u"""
## NCPC approval (April 2026)

The [[national-capital-planning-commission|National Capital Planning Commission]] voted 8-1 on a Thursday in early April 2026 to approve President [[donald-trump|Donald Trump]]'s plan to build the new ballroom.[4] Commission chair [[will-scharf|Will Scharf]] said many of the public comments submitted to the panel fell outside its authority \u2014 including objections over funding, demolition, and general political criticism \u2014 remarking, \u201cWe are not some sort of free-ranging ballroom justice commission.\u201d[4] Following the vote Trump thanked the commission on [[truth-social|Truth Social]], saying the project had been approved \u201coverwhelmingly, 8-1,\u201d and noting that even Sen. [[rand-paul|Rand Paul]] had voted in favor.[4] He said presidents for more than 150 years had envisioned a White House ballroom, calling it a long-needed addition for hosting state visits, grand events, and inaugurations.[4]
"""),
 (W+'concepts/iran-war.md', 7, u'badlands-brief-774.md]', u"""
## Simultaneous escalation and ceasefire diplomacy (April 2026)

By early April 2026 the US-led conflict with [[iran|Iran]] had exposed and intensified fractures between the United States and its allies, especially within [[nato|NATO]], where several countries declined to support military operations or provide logistical access.[7] Speaking at a Monday press conference, President [[donald-trump|Donald Trump]] warned that Iran could face overwhelming military force if it did not accept US terms, including limits on its nuclear program, while also saying he preferred a negotiated resolution and believed a deal remained possible.[7]

US officials, working through intermediaries, simultaneously advanced a ceasefire framework that would pause fighting and open broader negotiations, with proposals and counterproposals still being exchanged rather than a finalized agreement in place.[7] Military operations continued alongside the diplomacy, with ongoing strikes and retaliatory actions showing that negotiation and combat were unfolding at once.[7] The picture was further complicated by a divergence between Washington and [[israel|Israel]], as [[benjamin-netanyahu|Benjamin Netanyahu]] warned Trump against a ceasefire in a Sunday call, and by Iranian warnings of significant retaliation if strikes intensified.[7]

[[burning-bright|Burning Bright]] described the war's information layer as a pattern of \u201cescalations one day, de-escalations the next\u201d \u2014 late-week thunder followed by Sunday-evening signals of restraint, with reports of downed pilots and rescues sharing airtime with talk of regime change and total obliteration, sometimes within the same statement.[7] Invoking [[scott-bessent|Scott Bessent]]'s formulation that one must sometimes escalate to de-escalate, he argued the \u201cuntangling of the Iranian Knot\u201d was a masterclass in narrative deployment and that in a [[fifth-generation-warfare|fifth-generation information war]] surface-level facts are largely unknowable by design, making the rejection of any single dispatch as gospel the first step toward genuine discernment.[7]
"""),
 (W+'entities/rumble.md', 2, u'5gw-counter-offensive-the-censorship.md]', u"""
## Targeted by Brazil's censorship regime (2026)

An interim staff report by the [[house-judiciary-committee|House Judiciary Committee]] released in April 2026 stated that when platforms such as [[x-corp|X]] and Rumble refused to fully comply with takedown orders issued under [[brazil|Brazil]]'s censorship system, Brazilian authorities fined them and threatened or ordered them to cease operations in the country.[2] The report warned that forcing American companies to censor US residents' speech creates a broader threat to [[first-amendment|First Amendment]] protections.[2]
"""),
 (W+'entities/politico.md', 5, u'badlands-brief-6b4.md]', u"""
## Coverage of fraud enforcement (April 2026)

In April 2026 *Politico* suggested that fraud investigations were unpopular with voters because addressing fraud would lead to higher healthcare costs.[5] [[ashe-in-america|Ashe in America]] rejected the framing, writing that it made \u201czero sense from an economic standpoint\u201d but was good enough to justify a voting-related conclusion, and that busting fraudsters is broadly popular \u2014 *Politico* could process that reality by putting out copium, but could not change it.[5]
"""),
]

for path, n, anchor, sec in jobs:
    t = io.open(path, encoding='utf-8').read()
    assert anchor in t, path
    t = t.replace(anchor, anchor[:-1] + u', raw/badlands-brief-a1a.md]', 1)
    io.open(path, 'w', encoding='utf-8', newline='').write(t)
    merge(path, sec, REF.format(n=n))
