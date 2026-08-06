# -*- coding: utf-8 -*-
import os, io

BASE = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
REF = '1. Badlands Brief \u2014 "Badlands News Brief: Trump\u2019s Defense Rests, but the Info War Accelerates", URL: https://badlands.substack.com/p/badlands-news-brief-7c6'

def page(folder, slug, title, tags, ptype, body, conf='medium'):
    path = '%s/%s/%s.md' % (BASE, folder, slug)
    if os.path.exists(path):
        print('SKIP-EXISTS', slug); return
    txt = ('---\n'
           'title: %s\n'
           'created: 2026-08-06\n'
           'updated: 2026-08-06\n'
           'type: %s\n'
           'tags: [%s]\n'
           'sources: [raw/badlands-news-brief-7c6.md]\n'
           'confidence: %s\n'
           '---\n\n# %s\n\n%s\n\n## References\n\n%s\n' % (
               title, ptype, ', '.join(tags), conf, title, body.strip(), REF))
    io.open(path, 'w', encoding='utf-8', newline='\n').write(txt)
    print('CREATED', slug)

page('entities', 'guy-reschenthaler', 'Guy Reschenthaler', ['congress','republican-party','israel','idf','legislation'], 'entity', """
Guy Reschenthaler is a Republican member of the United States House of Representatives from Pennsylvania who, in May 2024, co-introduced legislation extending U.S. military-style employment and financial protections to American citizens serving in the [[israel-defense-forces|Israeli Defense Forces]].[1]

## Protecting Americans in the IDF Act

Reschenthaler introduced the [[protecting-americans-in-the-idf-act|Protecting Americans in the IDF Act]] together with Representative [[max-miller|Max Miller]] of Ohio.[1] In a statement accompanying the bill, Reschenthaler said that "over 20,000 American citizens are currently defending Israel from Hamas terrorists, risking their lives for the betterment of our ally," and that the legislation would "ensure we do everything possible to support these heroes who are standing with Israel, fighting for freedom, and combating terrorism in the Middle East."[1]

## Commentary

Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] questioned whether the bill amounted to treason under U.S. Code \u00a7 2387, which falls under the chapter covering treason, sedition and subversive activities, and argued that the measure was evidence that "the Israeli ruling class controls Washington."[1] He also asked whether the bill was designed to encourage U.S. citizens holding Israeli dual citizenship to enlist in the [[israel-defense-forces|IDF]].[1]
""")

page('concepts', 'protecting-americans-in-the-idf-act', 'Protecting Americans in the IDF Act', ['legislation','israel','idf','congress','dual-citizenship'], 'concept', """
The Protecting Americans in the IDF Act is proposed United States legislation introduced in May 2024 by Representatives [[guy-reschenthaler|Guy Reschenthaler]] (R-PA) and [[max-miller|Max Miller]] (R-OH) that would extend to Americans serving in the [[israel-defense-forces|Israeli Defense Forces]] the same employment protections granted to Americans who leave work and home to serve in the U.S. armed forces.[1]

## Provisions

The operative text of the bill provides that "to the extent practicable, the service of a citizen of the United States in the Israeli Defense Forces shall be treated in the same manner as service in the uniformed services."[1] In practice this would place IDF volunteers on the same footing as U.S. National Guardsmen or Reservists, granting financial protections unavailable to ordinary U.S. civilians \u2014 including protection against home foreclosure, protection from default judgments in legal cases, protection against repossession of rental property, and caps on interest-rate increases while serving.[1]

## Reception and commentary

Responsible Statecraft characterized the proposal as reading like something from Lewis Carroll's *Alice in Wonderland* or the "Bizarro World" of *Seinfeld*, noting that the beneficiaries would be "no different than U.S. National Guardsman or Reservists \u2014 they are just fighting for another country."[1]

Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued that the bill sat uneasily with U.S. Code \u00a7 2387, "Activities affecting armed forces generally," found under Chapter 115 covering treason, sedition and subversive activities, which criminalizes conduct intended to interfere with the loyalty, morale or discipline of U.S. military forces.[1] He contrasted the bill's protections with the position of Americans struggling to pay mortgages amid inflation, writing sardonically that enlisting in the IDF would keep one's home safe, and criticized members of the America First movement who would defend the measure.[1] He further cited Representative Brian Mast's wearing of an IDF uniform in Congress as related evidence of the phenomenon.[1]
""")

page('concepts', 'northeast-gasoline-supply-reserve', 'Northeast Gasoline Supply Reserve', ['energy','gasoline','strategic-reserves','biden-administration','department-of-energy'], 'concept', """
The Northeast Gasoline Supply Reserve was a United States government-managed stockpile of gasoline held in northeastern states as a buffer against supply shocks and environmental catastrophes. It was liquidated and closed in May 2024 under the [[joe-biden|Biden]] administration.[1]

## Congressional authorization and closure

A provision authorizing the sell-off and shuttering of the reserve was inserted into the roughly 1,050-page government funding bill passed in March 2024 to avert a shutdown \u2014 a package authorizing approximately $1.7 trillion in discretionary spending.[1] [[zerohedge|ZeroHedge]], which flagged the provision at the time, described the measure as one that might keep gasoline prices lower for a day or two while leaving the entire continental Northeast defenseless against a genuine environmental catastrophe or supply shock, and speculated darkly that the language had been inserted for the benefit of America's enemies.[1]

Roughly two months after [[joe-biden|Biden]] signed the bill into law, the administration announced it would sell the nearly one million barrels of gasoline held in the reserve, with the [[department-of-energy|Department of Energy]] effectively closing the facility.[1] The announcement came as Biden trailed [[donald-trump|Donald Trump]] by double digits in polling, and followed his earlier draining of roughly half of the [[strategic-petroleum-reserve|Strategic Petroleum Reserve]] ahead of the 2022 midterm elections.[1]

## Commentary

Badlands contributor [[burning-bright|Burning Bright]] argued that the drawdown illustrated the same economic pincer facing ordinary Americans \u2014 trading future energy and monetary stability for short-term solvency \u2014 and noted that the administration was openly declaring that a national-security reserve was being liquidated to deliver a publicized holiday discount of a few cents per gallon, which he called "advertising, full stop."[1] He framed the episode as another entry in the ledger of [[devolution|Devolution]] proofs, contrasting it with Trump's topping-up of the reserves while in office.[1]
""")

page('entities', 'zuzana-caputova', 'Zuzana \u010caputov\u00e1', ['slovakia','progressive-slovakia','george-soros','open-society-foundations','president'], 'entity', """
Zuzana \u010caputov\u00e1 is a Slovak politician and lawyer who served as President of [[slovakia|Slovakia]], the first woman to hold the office.[1]

## Career

\u010caputov\u00e1 worked for [[george-soros|George Soros]]'s [[open-society-foundations|Open Society Foundation]] beginning in 2001, where by her own account she handled public administration and the issue of abused and exploited children, and appears to have remained there until 2017.[1] In 2017 she helped found [[progressive-slovakia|Progressive Slovakia]], a party formed to stand against the rise of what its founders called right-wing populism.[1] She was elected president in 2019 as the first woman in Slovak history to win the office, campaigning against [[robert-fico|Robert Fico]]'s SMER party under the slogan "Stand up Against Evil."[1]

Following Fico's electoral victory in October 2023, \u010caputov\u00e1 requested that he form a government.[1] CNN coverage of the moment framed the request as a mere formality grounded in tradition, implying Fico might fail to negotiate cooperation among the various factions.[1]

## Commentary

Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] described \u010caputov\u00e1 as "an interesting bird," noting the vagueness and apparent copy-paste uniformity of her published work history, and reading her Soros-network background and anti-Fico campaign slogan as anything but subtle.[1]
""")

page('entities', 'progressive-slovakia', 'Progressive Slovakia', ['slovakia','political-party','populism','george-soros'], 'entity', """
Progressive Slovakia (PS) is a Slovak political party founded in 2017 to oppose what its founders described as the rise of right-wing populism.[1] [[zuzana-caputova|Zuzana \u010caputov\u00e1]], later President of [[slovakia|Slovakia]], was among its founders after some sixteen years working for [[george-soros|George Soros]]'s [[open-society-foundations|Open Society Foundation]].[1]

## 2023 election and Fico

The party's leader, [[michal-simecka|Michal \u0160ime\u010dka]], was defeated by [[robert-fico|Robert Fico]] in the October 2023 Slovak parliamentary election.[1] CNN's coverage of that election quoted \u0160ime\u010dka saying his party would do "everything it could" to prevent Fico from governing \u2014 a quotation Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] highlighted as significant in light of the May 2024 assassination attempt against Fico.[1]
""")

page('entities', 'michal-simecka', 'Michal \u0160ime\u010dka', ['slovakia','progressive-slovakia','politics'], 'entity', """
Michal \u0160ime\u010dka is a Slovak politician and leader of [[progressive-slovakia|Progressive Slovakia]], the party defeated by [[robert-fico|Robert Fico]] in the October 2023 Slovak parliamentary election.[1]

Following that defeat, \u0160ime\u010dka was quoted by CNN saying his party would do "everything it could" to prevent Fico from governing.[1] Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] singled out this quotation \u2014 which he characterized as dubious \u2014 when discussing the widening Slovak police investigation into a possible broader plot behind the May 2024 shooting of Fico.[1]
""")

page('entities', 'espen-barth-eide', 'Espen Barth Eide', ['norway','foreign-ministry','icc','israel'], 'entity', """
Espen Barth Eide is the Foreign Minister of [[norway|Norway]].[1]

In May 2024, a day after [[international-criminal-court|International Criminal Court]] prosecutor [[karim-khan|Karim Khan]] announced he was seeking arrest warrants against Israeli leaders, Eide stated that "if an arrest warrant is issued against [[benjamin-netanyahu|Netanyahu]] and [[yoav-gallant|Gallant]] on behalf of the Hague Tribunal, we will be obliged to arrest them if they arrive in Norway."[1] He added: "It is the court that decides whether to issue an arrest warrant. If so, all the signatory countries must act on it."[1] The statement made Norway the first European country to publicly announce on its own initiative that it would execute such warrants.[1]
""")

page('entities', 'matus-sutaj-estok', 'Matu\u0161 \u0160utaj E\u0161tok', ['slovakia','interior-ministry','robert-fico','assassination'], 'entity', """
Matu\u0161 \u0160utaj E\u0161tok is the Interior Minister of [[slovakia|Slovakia]].[1]

In May 2024, following the shooting of Prime Minister [[robert-fico|Robert Fico]] in Handlov\u00e1, \u0160utaj E\u0161tok told reporters that the theory of a broader assassination plot was supported by the fact that the assailant's social media communications had been erased by another person about two hours after the shooting.[1] His remarks accompanied the Slovak police's announcement that cooperation with domestic and foreign intelligence services had led them to broaden the probe beyond the initial "lone-wolf" framing to include the possibility that an unidentified group was linked to the crime.[1]
""")

page('entities', 'courtney-kramer', 'Courtney Kramer', ['georgia','fulton-county','republican-party','fani-willis'], 'entity', """
Courtney Kramer is a Republican candidate for District Attorney of Fulton County, Georgia.[1]

Kramer was set to face incumbent [[fani-willis|Fani Willis]] in the general election in the fall of 2024, after Willis won the Democratic primary against progressive attorney Christian Wise Smith in May 2024.[1] Badlands contributor [[ashe-in-america|Ashe in America]] noted that while Judge [[scott-mcafee|Scott McAfee]]'s electability question had been settled by his own outright victory, Willis's electability remained an open matter precisely because of the Kramer challenge.[1]
""")

page('entities', 'edward-bernays', 'Edward Bernays', ['propaganda','public-relations','consent','media'], 'entity', """
Edward Bernays was an American pioneer of public relations and propaganda theory, frequently cited in Badlands commentary as an articulator of elite management of mass opinion.[1]

Bernays famously wrote that "the engineering of consent is the very essence of the democratic process, the freedom to persuade and suggest."[1] Badlands contributor [[ashe-in-america|Ashe in America]] invoked the line while discussing [[klaus-schwab|Klaus Schwab]]'s departure from day-to-day management of the [[world-economic-forum|World Economic Forum]], presenting Bernays as an early expositor of the belief system she attributed to the global elite \u2014 a worldview she compared to the *Hunger Games* prequel's President Snow and his claim that "the whole world is an arena."[1]
""")

page('entities', 'brian-mast', 'Brian Mast', ['congress','israel','idf','veterans'], 'entity', """
Brian Mast is a member of the United States Congress and a military veteran who has served with the [[israel-defense-forces|Israeli Defense Forces]].[1]

Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] cited Mast's wearing of an IDF uniform in Congress as a vivid illustration of his broader argument that the Israeli ruling class exercises outsized influence over Washington, raising the question of why foreign citizens are permitted to serve in Congress and suggesting this helps explain why Congress "seems more loyal to foreign nations than to Americans."[1] The remark was made in the context of the [[protecting-americans-in-the-idf-act|Protecting Americans in the IDF Act]] introduced by [[guy-reschenthaler|Guy Reschenthaler]] and [[max-miller|Max Miller]].[1]
""")

page('concepts', 'arab-summit-2024-bahrain', '33rd Arab Summit (Bahrain, 2024)', ['arab-league','saudi-arabia','israel','gaza','diplomacy'], 'concept', """
The 33rd Arab Summit was held in Bahrain in May 2024, hosted with Saudi Crown Prince [[mohammed-bin-salman|Mohammed bin Salman]] among the leading figures, with United Nations Secretary-General [[antonio-guterres|Ant\u00f3nio Guterres]] attending as a special guest of honor.[1]

The summit produced a joint statement demanding that [[israel|Israel]] permanently withdraw the [[israel-defense-forces|IDF]] from Palestine \u2014 not merely from Gaza \u2014 and calling on the entire international community to bear down on what the statement described as the Zionist regime in Tel Aviv.[1]

## Commentary

Badlands contributor [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued that it was no coincidence that the summit convened on the same day the [[international-court-of-justice|International Court of Justice]] heard South Africa's new arguments alleging Israeli genocide in Gaza.[1] He framed the convergence as evidence that Saudi Arabia, through years of patient bilateral agreements \u2014 "an art long lost to the globalists" \u2014 had built a network of relationships it could now leverage to turn globalist-created institutions against the globalists themselves.[1]
""")
