import subprocess, sys, os
BASE = 'C:/Users/14053/hermes-projects/badlands-substack'
RAW = 'badlands-news-brief-a15'
TITLE = 'Badlands News Brief: Trump Turns the Tide as Putin Sends Signals'
URL = 'https://badlands.substack.com/p/badlands-news-brief-a15'
LOCK = BASE + '/scripts/wiki_page_lock.py'
MERGE = BASE + '/scripts/merge_helper.py'
PY = sys.executable

def find(slug):
    for d in ('entities', 'concepts'):
        p = '%s/wiki/%s/%s.md' % (BASE, d, slug)
        if os.path.exists(p):
            return p
    return None

def run(slug, body):
    p = find(slug)
    if not p:
        print('MISSING', slug); return
    import time
    for _ in range(20):
        r = subprocess.run([PY, LOCK, 'acquire', slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(4)
    else:
        print('LOCKFAIL', slug); return
    try:
        r = subprocess.run([PY, MERGE, p, RAW, TITLE, URL], input=body, capture_output=True, text=True)
        print(slug, r.returncode, r.stdout.strip(), r.stderr.strip()[:200])
    finally:
        subprocess.run([PY, LOCK, 'release', slug], capture_output=True, text=True)

SECTIONS = {}

SECTIONS['state-of-georgia-v-trump'] = """
## March 2024 partial dismissal of charges

On Wednesday, March 13, 2024, Fulton County Superior Court Judge Scott McAfee dismissed some of the charges against former President Donald Trump and his co-defendants, while leaving the sweeping racketeering indictment otherwise intact.[{n}] McAfee quashed six counts, three of them against Trump, the presumptive 2024 Republican presidential nominee, but left in place other counts including ten facing Trump, and held that prosecutors could seek a new indictment to reinstate the dismissed counts.[{n}] The judge grounded the dismissals in the prosecution's failure to provide sufficient detail about the alleged crimes.[{n}] It was the first time charges in any of Trump's four criminal cases had been dismissed, and the ruling was described as a blow to District Attorney Fani Willis, who was simultaneously facing an effort to disqualify her over a romantic relationship with a colleague.[{n}]

Badlands commentary noted that the quashed counts included those relating to the Brad Raffensperger phone call and to the defendants' oaths of office, and argued that the phone call had been arguably the strongest element of the state's case, even as the RICO charge and the prosecution as a whole survived.[{n}] The ruling resolved a pending motion unrelated to the disqualification question, with a decision on that separate matter expected imminently.[{n}]
"""

SECTIONS['fani-willis'] = """
## March 2024 partial dismissal ruling

On March 13, 2024, Judge Scott McAfee quashed six counts of Willis's Fulton County racketeering indictment, including three against Donald Trump, holding that prosecutors had failed to provide enough detail about the alleged crimes; the remainder of the indictment, including the RICO count and ten counts against Trump, survived, and McAfee indicated prosecutors could seek a new indictment to reinstate the dismissed charges.[{n}] The ruling landed while Willis was already fighting an effort to remove her from the prosecution over her romantic relationship with a colleague, and marked the first time any charges in Trump's four criminal cases had been dismissed.[{n}]

Legal commentators split over what the decision portended. Norm Eisen suggested it indicated McAfee was leaning toward keeping Willis on the case, though he conceded the lean was slight and the question essentially a toss-up, while CNN analyst Elie Honig called it an embarrassing setback in a long line of them dating to the case's grand jury phase.[{n}] Badlands writer Ashe in America framed the pending disqualification decision as certain to be both captivating and divisive in an election year, given what she characterized as the corruption and "punishment for profit" that had come to light regarding Willis.[{n}]
"""

SECTIONS['scott-mcafee'] = """
## March 2024 ruling on the Georgia indictment

On Wednesday, March 13, 2024, McAfee quashed six counts of the Fulton County racketeering indictment, three of them against former President Donald Trump, finding that prosecutors had not provided enough detail about the alleged crimes.[{n}] He left the rest of the indictment intact, including ten counts against Trump and the overarching RICO charge, and stated that prosecutors could seek a new indictment to reinstate the dismissed counts.[{n}] The counts struck down included those concerning the Brad Raffensperger phone call and the defendants' oaths of office.[{n}]

The ruling resolved a pending motion unrelated to the separate effort to disqualify District Attorney Fani Willis, on which McAfee's decision was expected within days.[{n}] Commentators divided over whether the dismissal signalled anything about his thinking on disqualification: Norm Eisen read it as a slight lean toward keeping Willis, while CNN's Elie Honig treated it purely as an embarrassing setback for the prosecution.[{n}]
"""

SECTIONS['norm-eisen'] = """
## Reaction to the March 2024 Fulton County ruling

After Judge Scott McAfee quashed six counts of the Georgia election interference indictment on March 13, 2024, Eisen suggested the development indicated McAfee was leaning toward keeping District Attorney Fani Willis on the case, while admitting the lean was slight and the outcome still essentially a toss-up.[{n}] His reading was contrasted in Badlands coverage with that of CNN analyst Elie Honig, who characterized the same ruling as an embarrassing screwup for Willis.[{n}]
"""

SECTIONS['thomas-massie'] = """
## Opposition to the 2024 TikTok divestment bill

Ahead of the House vote on the TikTok divestment bill on March 13, 2024, Massie took to the floor to argue against the measure, saying "there's some of us who feel that — intentionally, or unintentionally, this legislation to ban TikTok is actually a trojan horse."[{n}] He added that "some of us are concerned that there are First Amendment implications here. Americans have the right to view information, and don't need to be protected by the government from information."[{n}] The bill nevertheless passed 352-65-1, with fifteen Republicans and fifty Democrats voting against it.[{n}]
"""

SECTIONS['tiktok-ban'] = """
## House passage of the divestment bill, March 2024

On March 13, 2024, the House of Representatives passed the TikTok divestment bill by a vote of 352-65-1, with fifteen Republicans and fifty Democrats opposed.[{n}] The measure moved to the Senate, where it already had the backing of Senate Intelligence Committee Chairman Mark Warner and Vice Chairman Marco Rubio, who said in a joint statement that they were "encouraged by today's strong bipartisan vote" and looked forward to getting the bill through the Senate and signed into law.[{n}] President Joe Biden indicated he would sign the legislation if Congress placed it on his desk.[{n}]

Representative Thomas Massie opposed the bill on the House floor, calling it a possible "trojan horse" and warning of First Amendment implications, arguing that Americans have the right to view information and do not need government protection from it.[{n}]

Badlands writer Simon Esler read the episode as the Deep State building a pretext for further systems of control, observing that the pattern is clear when people known to be abusive and power-hungry announce their intention to protect the public.[{n}] He also noted Donald Trump's positioning in a "grey zone," speculating in light of Trump's recent meetings with ByteDance part-owner Jeffrey Yass and with Elon Musk that Trump's media conglomerate might be circling TikTok as an acquisition target, and raising the question of what parallel operations might be underway with respect to YouTube, Instagram and Facebook.[{n}]
"""

SECTIONS['mark-warner'] = """
## Support for the 2024 TikTok divestment bill

Following the House's 352-65-1 passage of the TikTok divestment bill on March 13, 2024, Warner, as chairman of the Senate Intelligence Committee, issued a joint statement with Vice Chairman Marco Rubio saying they were "encouraged by today's strong bipartisan vote" and looked forward to "working together to get this bill passed through the Senate and signed into law."[{n}] The bill's arrival in the Senate with the backing of both the chairman and vice chairman of the intelligence committee was treated as a signal of its likely progress, and President Joe Biden had said he would sign it if it reached his desk.[{n}]
"""

SECTIONS['marco-rubio'] = """
## Support for the 2024 TikTok divestment bill

As vice chairman of the Senate Intelligence Committee, Rubio joined Chairman Mark Warner in a statement after the House passed the TikTok divestment bill 352-65-1 on March 13, 2024, saying the pair were "encouraged by today's strong bipartisan vote" and looked forward to working together to move the bill through the Senate and get it signed into law.[{n}]
"""

SECTIONS['vladimir-putin'] = """
## March 2024 nuclear warning to the West

On Wednesday, March 13, 2024, speaking to Rossiya-1 television and the news agency RIA ahead of the March 15-17 Russian presidential election that was certain to give him another six-year term, Putin told the West that Russia was technically ready for nuclear war.[{n}] Asked directly whether Russia was truly prepared, he answered: "From a military-technical point of view, we are, of course, ready."[{n}] He added that the scenario was not "rushing" up and that he saw no need to use nuclear weapons in Ukraine.[{n}]

Putin said the United States understood that deploying American troops on Russian territory — or to Ukraine — would be treated by Moscow as an intervention and a significant escalation, noting that Russia claims to have annexed four Ukrainian regions and considers them fully part of Russia.[{n}] He observed that "(in the U.S.) there are enough specialists in the field of Russian-American relations and in the field of strategic restraint," concluding: "Therefore, I don't think that here everything is rushing to it (nuclear confrontation), but we are ready for this."[{n}]

Badlands writer Burning Bright read the remarks — in a translation rendering them as "Apart from (US President Joe) Biden, there are enough other experts in the sphere of Russian-American relations and strategic restraint" — as possibly Putin's most Devolution-related public communication to date.[{n}] He argued that with Donald Trump out of public power the international game board had shifted rapidly away from collectivism and toward sovereignty and the multipolar world concept advanced by Putin, Xi Jinping, Mohammed bin Salman and Trump, concluding that "the Scare Event is a Story" and "the Sovereign Alliance is real."[{n}]
"""

SECTIONS['devolution'] = """
## Putin's March 2024 remarks as claimed evidence

Badlands writer Burning Bright argued that Vladimir Putin's March 13, 2024 comments on Russian readiness for nuclear war may have constituted his most Devolution-related public communication to date, coming two days before Russia's presidential election.[{n}] Burning Bright highlighted a translation in which Putin said, "Apart from (US President Joe) Biden, there are enough other experts in the sphere of Russian-American relations and strategic restraint. So I don't think that everything is going to go head-on here, but we are ready for it."[{n}]

He tied the remark to a long-standing argument that one key purpose of the Devolution operation researched by Jon Herold has been its implications for the globalist regime, contending that with Donald Trump out of public power the international game board has shifted away from collectivism and toward sovereignty and the multipolar concept advanced by Putin, Xi Jinping, Mohammed bin Salman and Trump.[{n}] He summarized the position with the formulations "The Scare Event is a Story" and "The Sovereign Alliance is real."[{n}]
"""

SECTIONS['2024-russian-presidential-election'] = """
## Putin's pre-election nuclear remarks

Two days before voting opened, on March 13, 2024, President Vladimir Putin gave an interview to Rossiya-1 television and the RIA news agency in which he warned the West that Russia was technically ready for nuclear war, while adding that the scenario was not imminent and that he saw no need for nuclear use in Ukraine.[{n}] The election, held March 15-17, was certain to give Putin another six years in power.[{n}] In the same remarks he said that any deployment of American troops to Russian territory or to Ukraine would be treated as an intervention and a significant escalation.[{n}] Badlands commentary treated the timing of the statement, immediately ahead of the vote, as significant in itself.[{n}]
"""

SECTIONS['don-lemon'] = """
## Cancellation of the X partnership, March 2024

On Wednesday, March 13, 2024, Lemon said his partnership with Elon Musk had collapsed, hours after the former CNN anchor conducted an interview with Musk for the debut episode of his new independent web-based show.[{n}] "Elon publicly encouraged me to join X with a new show, saying I would have his 'full support,'" Lemon said in a statement, adding that he had taken Musk at his word that he was "interested in working directly with diverse voices."[{n}]

Speaking to CNN's Erin Burnett that night, Lemon discussed the exchange and released excerpts of the ninety-minute sit-down, in which he questioned Musk across a range of subjects.[{n}] Lemon said he pressed Musk on the rise in hate speech on X since his takeover of the platform and on whether Musk and the company bore a responsibility to moderate hateful content; Musk replied, "I don't have to answer questions from reporters, Don. The only reason I'm doing this interview is because you're on the X platform and you asked for it. Otherwise, I would not do this interview."[{n}] Lemon also asked about Musk's recent meeting with Donald Trump, one of several Trump had held with donors in Palm Beach as he sought funds for a financially strained campaign.[{n}]
"""

SECTIONS['elon-musk'] = """
## Don Lemon partnership and its collapse

In March 2024 Musk publicly encouraged former CNN anchor Don Lemon to bring a new show to X, telling him he would have Musk's "full support" and that he was interested in working directly with diverse voices.[{n}] Lemon interviewed Musk for the debut episode of the show, and hours after the ninety-minute sit-down Musk cancelled the deal; Lemon announced the collapse on March 13, 2024.[{n}] In the interview Lemon pressed Musk on the rise in hate speech on X since his takeover and on the company's responsibility to moderate hateful content, prompting Musk to reply, "I don't have to answer questions from reporters, Don. The only reason I'm doing this interview is because you're on the X platform and you asked for it."[{n}] Lemon also asked about Musk's recent meeting with Donald Trump, one of several Trump meetings with donors in Palm Beach during his fundraising push.[{n}]

Musk separately criticized the House TikTok divestment bill passed the same day, and Badlands commentary paired his meeting with Trump alongside Trump's meeting with ByteDance part-owner Jeffrey Yass in speculating about the future ownership of major social platforms.[{n}]
"""

SECTIONS['christopher-wray'] = """
## March 2024 refusal to confirm counterintelligence investigations

At the House Permanent Select Committee on Intelligence's Annual Threat Assessment hearing on Tuesday, March 12, 2024, Wray declined to tell House Republican Conference Chair Elise Stefanik whether the FBI was conducting counterintelligence investigations into President Joe Biden or former President Donald Trump.[{n}] Stefanik prefaced her questioning by noting that former FBI Director James Comey had testified he did not follow proper protocol in notifying Congress of the opening of Crossfire Hurricane, the 2016 counterintelligence investigation into Trump, and cited the Intelligence Authorization Act's direction that the FBI inform congressional leadership of any counterintelligence investigation into a federal candidate for office.[{n}]

After a long pause, Wray attempted to refer Stefanik to Special Counsel Robert Hur, but when she demanded an answer citing the IAA he said: "There is no investigation that I could confirm here, no."[{n}]
"""

SECTIONS['elise-stefanik'] = """
## Questioning of FBI Director Wray, March 2024

At the House Permanent Select Committee on Intelligence's Annual Threat Assessment hearing on March 12, 2024, Stefanik, the third-ranking House Republican, pressed FBI Director Christopher Wray on whether the bureau was conducting counterintelligence investigations into President Joe Biden or former President Donald Trump.[{n}] She first noted that former FBI Director James Comey had testified he did not follow proper protocol in notifying Congress of the opening of Crossfire Hurricane, the 2016 counterintelligence investigation into Trump, and cited the Intelligence Authorization Act, which directs the FBI to inform congressional leadership of any counterintelligence investigation into a federal candidate for office.[{n}] When Wray, after a long pause, tried to refer her to Special Counsel Robert Hur, Stefanik demanded a direct answer, prompting his reply that "there is no investigation that I could confirm here, no."[{n}]
"""

SECTIONS['crossfire-hurricane'] = """
## Invoked in the March 2024 Wray hearing

At the House Intelligence Committee's Annual Threat Assessment hearing on March 12, 2024, Representative Elise Stefanik cited Crossfire Hurricane — the FBI's 2016 counterintelligence investigation into Donald Trump — while pressing FBI Director Christopher Wray on whether any comparable investigation was then open into Trump or Joe Biden.[{n}] She emphasized that former FBI Director James Comey had testified he did not follow the proper protocol regarding notification of Congress when Crossfire Hurricane was opened, and pointed to the Intelligence Authorization Act's requirement that congressional leadership be informed of counterintelligence investigations into federal candidates.[{n}] Wray responded that there was "no investigation that I could confirm here."[{n}]
"""

SECTIONS['hunter-biden'] = """
## Refusal to attend the March 2024 public hearing

In March 2024 Hunter Biden refused to attend a public House Oversight Committee hearing scheduled for March 20 alongside several of his former business associates who had been critical of him.[{n}] His attorney Abbe Lowell told Oversight Chairman James Comer in a letter that neither Biden nor his counsel could attend because of a court date in California the following day, but added that "the scheduling conflict is the least of the issues."[{n}] Lowell wrote that "if you are serious about pursuing this oversight purpose in a legitimate and bipartisan fashion, you would hold a hearing with relatives of former President Trump about whom you indicated you 'would ask'," in which case "Mr. Biden would consider an invitation for that event."[{n}]

The exchange followed Hunter Biden's closed-door deposition, during which he had raised the Trump family's financial dealings and Comer said he would ask the Trump family about them.[{n}] Biden had said in November that he would testify before the Oversight Committee only if the hearing were public, while Comer proposed a closed-door session first followed by a public one; after House Republicans moved toward holding him in contempt of Congress for defying a congressional subpoena, he agreed to the closed-door deposition, whose transcript was released the previous month.[{n}]
"""

SECTIONS['abbe-lowell'] = """
## Letter declining the March 2024 Oversight hearing

In a letter to House Oversight Chairman James Comer dated Wednesday, March 13, 2024, Lowell informed the committee that neither he nor his client Hunter Biden could attend a public hearing scheduled for March 20 alongside Biden's former business associates, citing a California court date the following day.[{n}] Lowell added that "the scheduling conflict is the least of the issues, however," and challenged Comer to demonstrate good faith: "If you are serious about pursuing this oversight purpose in a legitimate and bipartisan fashion, you would hold a hearing with relatives of former President Trump about whom you indicated you 'would ask.' If you do, Mr. Biden would consider an invitation for that event."[{n}]
"""

SECTIONS['james-comer'] = """
## March 2024 hearing standoff with Hunter Biden

Comer scheduled a public House Oversight Committee hearing for March 20, 2024 featuring Hunter Biden alongside several of his former business associates who had been critical of him, but Biden declined to attend.[{n}] Biden's attorney Abbe Lowell wrote to Comer citing a California court date and arguing that the scheduling conflict was "the least of the issues," conditioning any appearance on Comer also holding a hearing with relatives of former President Donald Trump about whom Comer had said he "would ask."[{n}] The demand referenced Hunter Biden's closed-door deposition, in which he had raised the Trump family's financial dealings.[{n}]

Earlier in the dispute Biden had insisted he would testify only in a public hearing while Comer proposed a closed-door session first followed by a public one; Biden relented and sat for the deposition after House Republicans began moving to hold him in contempt of Congress for defying a subpoena, and the transcript was released in February 2024.[{n}]
"""

SECTIONS['nhs'] = """
## March 2024 restriction on puberty blockers

In March 2024 the NHS announced that children in the United Kingdom would no longer be prescribed puberty blockers, following expert conclusions that serious safety concerns existed.[{n}] The service had commissioned the National Institute for Health and Care Excellence to review the published evidence on gonadotrophin releasing hormone analogues (GnRHa), the drugs that prevent the body from producing sex hormones.[{n}] An NHS England policy document published on March 12, 2024 said the body had carefully considered the 2020 NICE evidence review together with subsequent published evidence and had concluded that "there is not enough evidence to support the safety or clinical effectiveness of PSH (puberty suppressing hormones) to make the treatment routinely available at this time."[{n}] Transgender lobbying organizations objected to the decision.[{n}]
"""

SECTIONS['nhs-england'] = """
## Policy document on puberty suppressing hormones, March 2024

On Tuesday, March 12, 2024, NHS England published a policy document ending the routine prescription of puberty blockers to children.[{n}] The document stated that "NHS England has carefully considered the evidence review conducted by NICE (2020) and has identified and reviewed any further published evidence available to date," and concluded that "there is not enough evidence to support the safety or clinical effectiveness of PSH (puberty suppressing hormones) to make the treatment routinely available at this time."[{n}] The decision followed the National Institute for Health and Care Excellence's review of gonadotrophin releasing hormone analogues and drew objections from transgender advocacy organizations.[{n}]
"""

SECTIONS['us-southern-command'] = """
## Marine deployment to Haiti, March 2024

On Wednesday, March 13, 2024, SOUTHCOM announced that at the request of the State Department the elite Marine Fleet Anti-terrorism Security Team had been deployed to Haiti to bolster security at the US embassy in Port-au-Prince, where armed gangs had seized much of the capital following Prime Minister Ariel Henry's resignation.[{n}] The command stated that "U.S. Southern Command is prepared with a wide range of contingency plans to ensure the safety and security of U.S. Citizens in Haiti," and indicated the FAST element would both reinforce the existing Marine embassy guard against a possible attack and assist in evacuating non-essential American personnel.[{n}]

In the same statement the command noted that the Department of Defense had that week doubled funding for the Multinational Security Support mission and was working with Haitian, Kenyan and other partners to expedite its deployment in support of the Haitian National Police.[{n}]
"""

SECTIONS['haiti'] = """
## Gang takeover and US response, March 2024

By March 2024 armed gangs had taken over much of Port-au-Prince and violence was spreading, with Prime Minister Ariel Henry resigning on March 12.[{n}] Criminal warlords presided over what observers described as an utter state of lawlessness, and the US embassy had for months urged American citizens to leave the country; the preceding years had seen a series of kidnappings targeting Americans, including aid workers.[{n}] Officials warned of a potential mass migration wave that could inundate US coastal communities, particularly in Florida.[{n}]

On March 13, 2024, at the request of the State Department, US Southern Command deployed the Marine Fleet Anti-terrorism Security Team to reinforce the embassy in Port-au-Prince and to assist in evacuating non-essential American personnel.[{n}] The Department of Defense simultaneously doubled funding for the Multinational Security Support mission, working with Haitian, Kenyan and other partners to expedite its deployment in support of the Haitian National Police.[{n}] Badlands writer Burning Bright characterized the situation as a convergence of actual and narrative developments, noting that the Clinton Foundation remained firmly entrenched in public memory regarding Haiti.[{n}]
"""

SECTIONS['ariel-henry'] = """
## Resignation, March 2024

Henry resigned as Haitian prime minister on Tuesday, March 12, 2024, amid a collapse of state authority in which armed gangs had taken over much of Port-au-Prince.[{n}] His departure came as violence spread beyond the capital and prompted an immediate American security response: the following day US Southern Command announced the deployment of the Marine Fleet Anti-terrorism Security Team to the US embassy at the State Department's request.[{n}] Badlands commentary described the sequence of assassinations, resignations and all-out gang war as amounting to a transfer of power in Port-au-Prince.[{n}]
"""

SECTIONS['pentagon'] = """
## Haiti deployment and MSS funding, March 2024

On March 13, 2024, the Pentagon confirmed that it was urgently deploying an elite counter-terror task force — the Marine Fleet Anti-terrorism Security Team — to bolster the American embassy in Haiti after armed gangs took over much of Port-au-Prince and Prime Minister Ariel Henry resigned.[{n}] In a statement issued through US Southern Command, the Department of Defense said that it had that week doubled funding for the Multinational Security Support mission and was "working with Haitian, Kenyan, and other partners to expedite its deployment to support the Haitian National Police and to restore security in Haiti."[{n}]
"""

SECTIONS['state-department'] = """
## Request for Marine reinforcement in Haiti, March 2024

In March 2024 the State Department requested the deployment of the Marine Fleet Anti-terrorism Security Team to Haiti to bolster security at the US embassy in Port-au-Prince, a request announced by US Southern Command on March 13.[{n}] The embassy had for months urged American citizens remaining in the country to depart immediately as armed gangs consolidated control of the capital and kidnappings of Americans and other foreign nationals continued.[{n}] The FAST element was tasked with supplementing the existing Marine embassy guard and assisting in the evacuation of non-essential American personnel.[{n}]
"""

SECTIONS['ashe-in-america'] = """
## Commentary in the March 14, 2024 news brief

In the Badlands News Brief covering Wednesday, March 13, 2024, Ashe in America wrote on two items. On Judge Scott McAfee's partial dismissal of the Fulton County indictment, she reported that the news broke while she and Brian were on Badlands Daily and that outside experts were split on its meaning, contrasting Norm Eisen's reading with Elie Honig's; she noted that the RICO charge survived while the counts tied to the Brad Raffensperger phone call and the oaths of office were dismissed, calling the phone call arguably the strongest part of what she termed the state's bogus case.[{n}] She anticipated that the imminent decision on disqualifying Fani Willis would be captivating and divisive given the corruption and "punishment for profit" that had emerged and the fact of an election year.[{n}]

On the reported measles outbreaks in California, Arizona and a Chicago migrant shelter, she argued the coverage was intended to make a majority of Americans cry out in support of vaccines, noted the correlation between the MMR vaccine's addition to the childhood schedule and rising autism and childhood cancer rates while acknowledging that correlation is not causation, and argued that the regime needed a narrative shift after public reaction to the COVID-19 vaccines.[{n}] She characterized the focus on migrants as designed to keep Americans divided and to provide racially framed narrative cover, closing with "Do not comply."[{n}]
"""

SECTIONS['simon-esler'] = """
## Commentary in the March 14, 2024 news brief

In the Badlands News Brief covering March 13, 2024, Esler wrote on two items. On the House's passage of the TikTok divestment bill, he argued that the Deep State was building a pretext for further systems of control, observing that "the pattern is always pretty clear when people you know from experience to be abusive and power hungry tell you they want to protect you."[{n}] He noted that Donald Trump was positioning himself in a grey zone and, citing Trump's recent meetings with ByteDance part-owner Jeffrey Yass and with Elon Musk, speculated that Trump's media conglomerate might be circling TikTok; he also asked what parallel operations might be underway regarding YouTube, Instagram and Facebook, concluding "very thick fog of war. Get comfy in the doubt."[{n}]

On the NHS decision to stop prescribing puberty blockers to children, Esler argued the drugs are dangerous even within their approved indication of precocious puberty, whose listed risks amount largely to reduced adult height and social ostracization, and described the off-label use of the drugs to halt puberty for gender-affirming care as resting on those shady foundations.[{n}] He argued that if the reaction constituted a moral panic it was a justified one, citing the development of a micropenis in boys placed on blockers and the consequent need for surgeons to harvest intestinal or colon tissue for later vaginoplasty.[{n}]
"""

SECTIONS['burning-bright'] = """
## Commentary in the March 14, 2024 news brief

In the Badlands News Brief covering March 13, 2024, Burning Bright wrote on two items. On Vladimir Putin's statement that Russia was technically ready for nuclear war, he suggested it might be Putin's most Devolution-related public communication yet, coming two days before Russia's presidential election, and quoted a translation in which Putin said that apart from Joe Biden there were enough other experts in Russian-American relations and strategic restraint.[{n}] He tied the remark to his long-standing argument that a key purpose of the Devolution operation researched by Jon Herold has been its implications for the globalist regime, contending that with Donald Trump out of public power the international game board had shifted toward sovereignty and the multipolar concept advanced by Putin, Xi Jinping, Mohammed bin Salman and Trump, and concluding that "the Scare Event is a Story" and "the Sovereign Alliance is real."[{n}]

On the deployment of Marines to Haiti, he described the situation as "Convergence" — both actual and narrative — noting that it was virtually impossible to determine ground truth through the information war, but that the reported assassinations, resignations and gang war amounted to a transfer of power in Port-au-Prince.[{n}] He argued that the impression left on the collective mind was chaos, chaos that might spill onto American shores and that had been seeded during the Clinton, Bush and especially Obama administrations, adding that the Clinton Foundation remains firmly entrenched in public memory regarding Haiti and asking, "Is it 2024 ... or 2017?"[{n}]
"""

for slug, body in SECTIONS.items():
    run(slug, body)
