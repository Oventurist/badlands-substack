# -*- coding: utf-8 -*-
import io, sys
sys.path.insert(0, r'C:/Users/14053/hermes-projects/badlands-substack/scripts')
from _merge_a1a import merge

REF = u'{n}. Badlands Brief \u2014 "American Discombobulation", URL: https://badlands.substack.com/p/badlands-brief-a1a'
W = r'C:/Users/14053/hermes-projects/badlands-substack/wiki/'

jobs = []

jobs.append((W+'entities/donald-trump.md', 92, u"""
## US-Iran escalation and White House ballroom approval (April 2026)

Speaking at a Monday press conference in early April 2026, President Trump warned that [[iran|Iran]] could face overwhelming military force if it did not agree to US terms, including limits on its nuclear program, while simultaneously signaling that he preferred a negotiated resolution and believed a deal remained possible.[92] His criticism of allies and suggestions that the United States could withdraw from [[nato|NATO]] fueled uncertainty about American commitments and prompted European leaders to weigh more independent defense strategies.[92] The [[iran-war|US-led conflict with Iran]] exposed and intensified fractures with allies, with multiple NATO countries declining to support military operations or provide logistical access.[92] A divergence also emerged with [[israel|Israel]]: [[benjamin-netanyahu|Benjamin Netanyahu]] warned Trump against pursuing a ceasefire in a Sunday call, arguing continued military pressure was necessary to degrade Iran's capabilities.[92]

Badlands writer [[burning-bright|Burning Bright]] characterized the rhythm of escalation one day and de-escalation the next as a deliberate pattern of narrative deployments, noting that even segments of the MAGA core appeared momentarily disoriented, and citing [[scott-bessent|Scott Bessent]]'s framing that one sometimes must escalate in order to de-escalate.[92]

Separately, Trump's [[department-of-justice|Justice Department]] asked that the indictment against [[steve-bannon|Steve Bannon]] be dropped, and the [[supreme-court-of-the-united-states|Supreme Court]] vacated the ruling that had left Bannon's [[contempt-of-congress|contempt-of-Congress]] conviction in place.[92] In the same period the [[national-capital-planning-commission|National Capital Planning Commission]] voted 8-1 to approve Trump's plan to build a new [[white-house-ballroom|White House ballroom]]; Trump thanked the commission on [[truth-social|Truth Social]], noting the approval was \u201coverwhelmingly, 8-1\u201d and that even Sen. [[rand-paul|Rand Paul]] voted in favor, and said presidents for more than 150 years had envisioned such an addition for state visits, grand events, and inaugurations.[92]
"""))

jobs.append((W+'entities/nato.md', 18, u"""
## Alliance fractures during the 2026 Iran conflict

The US-led [[iran-war|conflict with Iran]] exposed and intensified fractures between the United States and its allies, particularly within NATO, where multiple member countries declined to support military operations or provide logistical access.[18] The Pentagon declined to reaffirm the alliance's collective-defense commitment, saying the matter was up to President [[donald-trump|Donald Trump]].[18] Trump's criticism of allies and his statement that he was \u201cabsolutely considering\u201d withdrawing the United States from NATO further fueled uncertainty about American commitments and prompted European leaders to consider more independent defense strategies.[18]
"""))

jobs.append((W+'entities/benjamin-netanyahu.md', 34, u"""
## Warning against a US-Iran ceasefire (April 2026)

In early April 2026, as US officials advanced a ceasefire framework with [[iran|Iran]] through intermediaries, Netanyahu warned President [[donald-trump|Donald Trump]] against pursuing a ceasefire during a Sunday phone call, arguing that continued military pressure was necessary to degrade Iran's capabilities and prevent it from regrouping.[34] The exchange underscored a widening divergence between Washington and [[israel|Israel]] over how to conclude the [[iran-war|war with Iran]], even as Iran warned of significant retaliation if strikes intensified.[34]
"""))

jobs.append((W+'concepts/first-amendment.md', 5, u"""
## Foreign censorship of US speech (2026)

An interim staff report by the [[house-judiciary-committee|House Judiciary Committee]] released in April 2026 warned that [[brazil|Brazil]]'s [[censorship-regime|censorship regime]], led by Supreme Court Justice [[alexandre-de-moraes|Alexandre de Moraes]], was targeting speech inside the United States and pressuring American social media companies to comply or face legal action and removal from the country.[5] The committee said that forcing American companies to censor US residents' speech creates a broader threat to First Amendment protections, and that it would continue oversight and pursue legislative responses to counter foreign censorship threats.[5]
"""))

for path, n, sec in jobs:
    merge(path, sec, REF.format(n=n))
