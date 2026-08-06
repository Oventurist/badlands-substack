import io, os, sys
sys.path.insert(0, os.path.dirname(__file__))
exec(open(os.path.join(os.path.dirname(__file__), "_tmp_merge_c07b.py")).read().split("M = {}")[0])

M = {}

M["entities/denmark.md"] = """
## Greenland standoff (January 2026)

Following President [[donald-trump|Donald Trump]]'s January 2026 Truth Social post declaring US control of [[greenland|Greenland]] necessary for American national security, Danish officials met Vice President [[jd-vance|JD Vance]] in Washington and reiterated that Greenland is not for sale, noting that Greenlanders had recently said they wish to remain with Denmark.[{n}] Greenland's international status is formally determined by Denmark, which defers to the territory's self-governing authorities.[{n}] The Danish foreign minister told a post-meeting press conference that "it's clear the president has a wish to conquer Greenland."[{n}]

Denmark subsequently began sending military resources into Greenland as tensions escalated, joined by other European [[nato|NATO]] members, with contributions catalogued by [[ashe-in-america|Ashe in America]] as thirteen German reconnaissance troops, two Norwegians, one Briton, an unknown number of Swedes and French units under [[operation-arctic-endurance|Operation Arctic Endurance]].[{n}]
"""

M["entities/nato.md"] = """
## Greenland deployment and European weakness (January 2026)

In January 2026, [[denmark|Denmark]] and other European NATO allies began sending military resources to [[greenland|Greenland]] amid escalating pressure from President [[donald-trump|Donald Trump]] for US control of the territory.[{n}] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued that Trump was leveraging the threat of Russia and China to induce NATO to divert resources from Eastern Europe and Ukraine toward Greenland, where he judged they would be strategically useless, and noted that the alliance was "running on fumes" as the [[german-industrial-crisis-2026|German industrial crisis]] deepened.[{n}] [[ashe-in-america|Ashe in America]] described the resulting force — thirteen Germans for reconnaissance, two Norwegians, one Briton, some Swedes, and French units under [[operation-arctic-endurance|Operation Arctic Endurance]] — as evidence of the weak power projection of an America-less NATO, with Finland, Canada and the Netherlands still hesitating.[{n}]

Separately, commentary on Gaza noted that [[turkey|Turkey]]'s NATO membership raises the possibility of an [[article-5|Article 5]] invocation should Israeli forces clash with Turkish personnel during the Gaza stabilization mission.[{n}]
"""

M["concepts/german-industrial-crisis-2026.md"] = """
## Bankruptcies and NATO capacity (January 2026)

In January 2026 Germany announced the highest number of commercial bankruptcies in over a decade, concentrated in transportation, storage, hospitality and construction — sectors whose distress signals a potentially severe recession.[{n}] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] cited a 74% rise in natural gas prices between 2022 and 2025 as confirmation that Germany was already in severe recession, arguing that without a functioning German economy Europe cannot sustain a continental military and is reduced to "basically a tourism economy."[{n}] He connected this weakness to [[nato|NATO]]'s thin reinforcement of [[greenland|Greenland]], where Germany contributed thirteen reconnaissance troops.[{n}]
"""

M["entities/turkey.md"] = """
## Role in Gaza Phase Two (January 2026)

Special Envoy [[steve-witkoff|Steve Witkoff]] credited Turkey, alongside [[egypt|Egypt]] and [[qatar|Qatar]], with finalizing the particulars of Phase Two of the [[comprehensive-plan-to-end-the-gaza-conflict|20-Point Plan to End the Gaza Conflict]], announced on January 15, 2026.[{n}] President [[donald-trump|Donald Trump]] specifically wanted Turkey and Qatar involved in the International Stabilization Force, despite opposition from most of the Israeli political establishment.[{n}]

[[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] noted that Turkey and [[israel|Israel]] had spent two and a half years exchanging public threats, including inferences about sending special forces to capture or kill the other country's leader, and observed that Turkey's [[nato|NATO]] membership means an Israeli attack on Turkish forces could trigger [[article-5|Article 5]] and bring the alliance and the United States into the conflict.[{n}]
"""

M["entities/abbas-araghchi.md"] = """
## January 2026 remarks on provocateurs

During the January 2026 escalation between the United States and [[iran|Iran]], Foreign Minister Araghchi told Fox News' Bret Baier that operatives masquerading as protesters were shooting people in order to provoke US intervention.[{n}] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] cited the interview while arguing that Araghchi and President [[masoud-pezeshkian|Masoud Pezeshkian]] are considered moderates representing a shift away from clerical zealotry, and that the wider Iran war narrative was a distraction operation covering the finalization of Phase Two of the Gaza plan.[{n}]
"""

M["entities/donald-trump.md"] = """
## January 2026: fraud, Greenland, Iran and Gaza

In mid-January 2026 Trump commented publicly on [[doge|DOGE]] and government efficiency efforts in a [[truth-social|Truth Social]] post that neither announced the dissolution of DOGE nor ended the initiative, and separately denounced alleged food-stamp fraud in Minneapolis as "a giant Democrat SCAM," calling for those involved to be sent back to Somalia or other countries of origin and naming California, Illinois and New York as equally affected.[{n}] He also posted "FEAR NOT, GREAT PEOPLE OF MINNESOTA, THE DAY OF RECKONING & RETRIBUTION IS COMING!" as [[operation-metro-surge|Operation Metro Surge]] expanded, ordering an additional 1,000 CBP agents to the Twin Cities.[{n}] Treasury Secretary [[scott-bessent|Scott Bessent]]'s "follow the money" framing of dark-money NGO probes mirrored Trump's own language that week, as did his move to cut funding to sanctuary jurisdictions.[{n}]

On [[greenland|Greenland]], Trump posted that US control was necessary for American national security, framed the island as a strategic outpost for the [[golden-dome|Golden Dome]] missile defense array, and joked that the territory was defended by "two dog sleds" — a line the [[white-house|White House]] amplified in memes.[{n}] He applauded [[denmark|Denmark]]'s decision to send troops there, which [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] read as a maneuver to draw [[nato|NATO]] resources away from Ukraine.[{n}]

On [[iran|Iran]], Trump publicly questioned whether [[reza-pahlavi|Reza Pahlavi]] could unify opposition support inside the country, saying "He seems very nice, but I don't know how he'd play within his own country," and declined to endorse regime change, disappointing advocates of a strike.[{n}] Meanwhile [[steve-witkoff|Steve Witkoff]] announced on Trump's behalf the launch of Phase Two of the [[comprehensive-plan-to-end-the-gaza-conflict|20-Point Plan to End the Gaza Conflict]], with Trump insisting on roles for [[turkey|Turkey]] and [[qatar|Qatar]] in the stabilization force.[{n}] In the [[united-states-senate|Senate]], administration pressure helped defeat the [[venezuela-war-powers-resolution|Venezuela war powers resolution]] 51–50 on January 14, 2026, with [[jd-vance|JD Vance]] breaking the tie.[{n}]
"""

for rel, body in M.items():
    merge(rel, body)
