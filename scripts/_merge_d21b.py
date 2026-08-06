# -*- coding: utf-8 -*-
import re, io

RAW = "raw/badlands-news-brief-d21.md"
REF = '{}. Badlands Brief — "Badlands News Brief: Chinese Interference and Narrative Seeding", URL: https://badlands.substack.com/p/badlands-news-brief-d21'
E = "C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/"

def merge(slug, body):
    path = E + slug + ".md"
    t = io.open(path, encoding="utf-8").read()
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    src = m.group(1)
    assert RAW not in src, slug
    n = len([x for x in src.split(",") if x.strip()]) + 1
    t = t[:m.start()] + "sources: [" + src + ", " + RAW + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    idx = t.index("\n## References")
    head = t[:idx].rstrip("\n")
    tail = t[idx:].rstrip("\n")
    out = head + "\n\n" + body.strip().format(n=n) + "\n" + tail + "\n" + REF.format(n) + "\n"
    io.open(path, "w", encoding="utf-8").write(out)
    print("merged", slug, n)

merge("joe-biden", """
## Chinese election-interference assurance

[[cnn|CNN]] reported in late January 2024 that Chinese leader [[xi-jinping|Xi Jinping]] had told Biden that China would not interfere in the 2024 US presidential election, an assurance conveyed during their November 2023 meeting in California.[{n}] It was Biden who raised the issue, according to a source familiar with the brief exchange, and the meeting itself was aimed at easing historically high military and economic tensions between the two superpowers.[{n}] Chinese Foreign Minister [[wang-yi|Wang Yi]] repeated the assurance to national security adviser [[jake-sullivan|Jake Sullivan]] in Bangkok the weekend of January 27, 2024.[{n}]

[[simon-esler|Simon Esler]] argued the article's real function was to sustain the illusion of Biden's lucidity and of a year spent stabilizing US-China relations, noting a recent gaffe in which Biden thanked someone named "Earth Rider" and contending that a man who struggles with basic sentences is not conducting complex geopolitical diplomacy.[{n}] He further argued that the piece's vague references to Iranian, Cuban, Russian, and AI-enabled interference were laying groundwork to explain away irregularities in the coming election.[{n}]

## Other January 2024 items

The Biden administration and the border crisis featured in the political rant recorded by [[justin-mohn|Justin Mohn]], the Pennsylvania man charged with murder after posting a video displaying his decapitated father's head while declaring himself acting US president under martial law.[{n}] Separately, Biden weighed a response to the killing of three US servicemen by a Tehran-backed militia based in Syria, with [[iran|Iran]] on high alert and warning through intermediaries that a direct strike on Iranian soil would bring retaliation against American assets across the Middle East.[{n}]
""")

merge("jake-sullivan", """
## Bangkok meeting with Wang Yi

At a meeting in Bangkok on the weekend of January 27, 2024, Sullivan raised the question of Chinese interference in the 2024 US election with Chinese Foreign Minister [[wang-yi|Wang Yi]], who offered him the same assurance that [[xi-jinping|Xi Jinping]] had given [[joe-biden|Joe Biden]] months earlier — that Beijing would not meddle in the American election that fall.[{n}] Sources familiar with the exchanges told [[cnn|CNN]] that the potential for Chinese interference in or influence over US elections had repeatedly arisen at senior-level meetings between the two nations in recent months.[{n}]
""")

merge("wang-yi", """
## Assurance on the 2024 US election

At a Bangkok meeting the weekend of January 27, 2024 with US national security adviser [[jake-sullivan|Jake Sullivan]], Wang offered the same assurance that [[xi-jinping|Xi Jinping]] had given [[joe-biden|Joe Biden]] in California in November 2023: that Beijing would not interfere in the 2024 US presidential election.[{n}] The exchange, reported by [[cnn|CNN]], came amid repeated senior-level discussions of Chinese election interference between the two governments.[{n}]
""")

merge("cnn", """
## January 2024 coverage and Badlands criticism

CNN reported in late January 2024 that [[xi-jinping|Xi Jinping]] had privately assured [[joe-biden|Joe Biden]] that China would not interfere in the 2024 US presidential election, and that Chinese Foreign Minister [[wang-yi|Wang Yi]] repeated the pledge to [[jake-sullivan|Jake Sullivan]] in Bangkok.[{n}] [[badlands-media|Badlands Media]] writer [[simon-esler|Simon Esler]] used the piece as a case study in what he called the outlet's self-referential meta-narrative, observing that CNN cited its own 2016 reporting on the alleged Russian hack of the DNC as evidence years later despite what he described as ample evidence the breach was an inside job.[{n}] He argued the network was weaving a vague network of ideas about Iranian, Cuban, Russian, and AI-driven interference so that any 2024 irregularities could be attributed to foreign actors rather than domestic manipulation.[{n}]

The network also reported the arrest of [[justin-mohn|Justin Mohn]] after a video showing his father's severed head circulated on [[youtube|YouTube]], framing the case within what it called a fraught national political environment and quoting law enforcement analyst and former [[fbi|FBI]] Deputy Director [[andrew-mccabe|Andrew McCabe]] on the dangers of the coming political season.[{n}]
""")

merge("fbi", """
## Volt Typhoon takedown

On Wednesday, January 31, 2024, FBI Director [[christopher-wray|Christopher Wray]] announced at a hearing of the [[house-select-committee-on-the-chinese-communist-party|House Select Committee on the Chinese Communist Party]] that the Bureau had shut down [[volt-typhoon|Volt Typhoon]], a major China-backed hacking group that had compromised hundreds of outdated office and home-office routers in an effort to penetrate US cyber infrastructure.[{n}] Wray said the hackers had targeted water treatment plants, the power grid, oil and natural gas pipelines, and transportation systems, and that Chinese actors attack American economic security daily.[{n}] The threat had first been surfaced publicly by [[microsoft|Microsoft]] in May 2023.[{n}]
""")

merge("cisa", """
## Election security assurances questioned

In commentary published by [[badlands-media|Badlands Media]] in early 2024, [[ashe-in-america|Ashe in America]] contrasted [[fbi|FBI]] warnings about Chinese penetration of US critical infrastructure through the [[volt-typhoon|Volt Typhoon]] operation with official insistence that cyberattacks cannot affect elections, an assurance she traced to former CISA head [[chris-krebs|Chris Krebs]].[{n}] She argued the claim is implausible because election systems rely on the same hardware and software components as the sectors [[christopher-wray|Christopher Wray]] described as endangered, and concluded with a call to decentralize infrastructure, "especially elections."[{n}]
""")

merge("chris-krebs", """
## Cited in election-security criticism

Writing in early 2024, [[badlands-media|Badlands Media]] contributor [[ashe-in-america|Ashe in America]] singled out Krebs — whom she described as a lawyer with an undergraduate degree in environmental science — as the source of the official assurance that American elections are safe from cyberattack.[{n}] She juxtaposed that assurance against [[fbi|FBI]] Director [[christopher-wray|Christopher Wray]]'s testimony about the [[volt-typhoon|Volt Typhoon]] intrusion into critical infrastructure, arguing that elections run on the same technology stack and are therefore no more secure than the sectors the government admits are under attack.[{n}]
""")

merge("mark-zuckerberg", """
## January 2024 Senate child safety hearing

On Wednesday, January 31, 2024, Zuckerberg appeared with other leading social media executives before the [[senate-judiciary-committee|Senate Judiciary Committee]] for roughly four hours of questioning about the mental health risks their platforms pose to young people and accusations that their companies had failed to protect children from exploitation and abuse.[{n}] Senators hammered the executives over lobbying that they said had obstructed federal legislation, and frequently drew applause from families of children who died after encounters with the darkest sides of the platforms.[{n}] In what [[abc-news|ABC News]] called a remarkable moment, the [[meta-platforms|Meta]] chief executive stood up to address those families with a direct apology for what they had endured.[{n}] The hearing nonetheless left unresolved whether [[congress|Congress]] would impose new regulations on the platforms.[{n}]
""")

merge("senate-judiciary-committee", """
## January 2024 hearing with social media chief executives

On Wednesday, January 31, 2024, the committee questioned a group of the nation's top social media executives for about four hours about the mental health risks their platforms pose to young people and about accusations that their companies failed to protect children from exploitation and abuse.[{n}] The chief executives acknowledged shortfalls and highlighted remedial efforts while pushing back on other criticism.[{n}] Senators criticized the companies' lobbying, which they said had blocked federal legislation, and were frequently applauded by families of children who died after being ensnared on the platforms.[{n}] [[mark-zuckerberg|Mark Zuckerberg]] of [[meta-platforms|Meta]] stood to deliver a direct apology to those families.[{n}] Despite apparent bipartisan consensus, the hearing left open whether [[congress|Congress]] would act to regulate the platforms.[{n}]
""")

merge("youtube", """
## Removal of the Mohn video

In late January 2024 a video posted by [[justin-mohn|Justin Mohn]] showing the severed head of his father alongside a politically charged rant circulated on YouTube for hours, drawing more than 5,000 views before the platform removed it for graphic violence.[{n}] The episode coincided with congressional scrutiny of social media companies for allowing graphic and violent material to be posted and to remain online.[{n}]
""")

merge("andrew-mccabe", """
## Commentary on the Mohn case

As a [[cnn|CNN]] law enforcement analyst and former [[fbi|FBI]] deputy director, McCabe commented on the late-January 2024 arrest of [[justin-mohn|Justin Mohn]], who was charged with murder after posting a video displaying his decapitated father's head with a political rant.[{n}] McCabe said the "bigger picture is extremely concerning" as the country moved into what he expected to be an incredibly heated political season.[{n}]
""")

merge("brics", """
## Confirmed 2024 accessions

South African Foreign Minister [[naledi-pandor|Naledi Pandor]] said on Wednesday, January 31, 2024 that Egypt, Ethiopia, [[iran|Iran]], Saudi Arabia, and the United Arab Emirates had confirmed they were joining the BRICS bloc after being invited the previous year.[{n}] The five had received invitations alongside Argentina at the August 2023 summit in Johannesburg to join the group then comprising Brazil, Russia, China, India, and South Africa, whose members say enlargement would help reshuffle a world order they regard as outdated.[{n}] Argentina subsequently declined the invitation.[{n}]
""")

merge("iran", """
## High alert after the killing of US servicemen

At the end of January 2024 Iran was on high alert as [[joe-biden|Joe Biden]] weighed a response to the deaths of three US servicemen, whom Washington deemed to have been killed by a Tehran-backed militia based in Syria.[{n}] Iran told the United States through intermediaries that a direct strike on Iranian soil would prompt retaliation against American assets in the Middle East, drawing the two sides into direct conflict.[{n}] US bases in Syria and Iraq had suffered more than 160 attacks of varying seriousness since [[hamas|Hamas]]'s October 7 assault on Israel.[{n}]

Amid fears of an American reprisal the Iranian rial fell to its lowest level against the dollar in forty years, even as Tehran maintained that the strike was the work of independent "resistance groups" — its standard answer to US accusations that it arms and trains such forces across the region.[{n}] The currency had lost 15 percent of its value since October 7, inflation was running at 40 percent, and supreme leader [[ali-khamenei|Ali Khamenei]] called for tighter controls on liquidity at a meeting with business leaders, reflecting concern that inflation was crushing living standards ahead of nationwide parliamentary elections.[{n}]

Iran was also among the five countries — with Egypt, Ethiopia, Saudi Arabia, and the United Arab Emirates — confirmed by South African Foreign Minister [[naledi-pandor|Naledi Pandor]] on January 31, 2024 as joining the [[brics|BRICS]] bloc.[{n}]
""")

merge("ali-khamenei", """
## Economic pressure in early 2024

As Iran waited on high alert in late January 2024 to see how [[joe-biden|Joe Biden]] would respond to the killing of three US servicemen by a Tehran-backed militia in Syria, the Iranian rial fell to its weakest level against the dollar in forty years, having lost 15 percent of its value since October 7, 2023.[{n}] With inflation running at 40 percent, Khamenei called for tighter controls on liquidity at a meeting with business leaders, reflecting his concern that inflation was crushing living standards and creating a difficult atmosphere ahead of nationwide parliamentary elections.[{n}]
""")
