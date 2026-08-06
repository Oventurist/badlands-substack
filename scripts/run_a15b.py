import sys
sys.path.insert(0, 'C:/Users/14053/hermes-projects/badlands-substack/scripts')
import importlib.util, os, subprocess, time
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

S = {}

S['donald-trump'] = """
## March 2024 developments

On March 13, 2024, Fulton County Superior Court Judge Scott McAfee quashed six counts of the Georgia 2020 election interference indictment, three of them against Trump, while leaving ten counts against him and the overarching racketeering charge intact; it was the first time charges in any of Trump's four criminal cases had been dismissed.[{n}] The dismissed counts included those relating to the Brad Raffensperger phone call and to the oaths of office, and McAfee held that prosecutors could seek a new indictment to reinstate them.[{n}]

The same day the House passed the TikTok divestment bill 352-65-1 over Trump's shifting position on the platform.[{n}] Badlands writer Simon Esler observed that Trump was positioning himself in a grey zone and, citing his recent meetings with ByteDance part-owner Jeffrey Yass and with Elon Musk, speculated that Trump's media conglomerate might be circling TikTok as an acquisition target.[{n}] Trump's meeting with Musk was one of several he held with donors in Palm Beach during that period as he sought to raise money for a financially strained campaign, and it came up in Don Lemon's interview with Musk.[{n}]

Also that week, FBI Director Christopher Wray declined to tell Representative Elise Stefanik whether the bureau had counterintelligence investigations open into Trump or Joe Biden, saying there was "no investigation that I could confirm here."[{n}] Separately, in declining a public House Oversight hearing, Hunter Biden's attorney Abbe Lowell conditioned any appearance on Chairman James Comer also questioning relatives of Trump about the family's financial dealings.[{n}] Badlands writer Burning Bright argued that with Trump out of public power the international order had shifted toward sovereignty and a multipolar concept advanced by Vladimir Putin, Xi Jinping, Mohammed bin Salman and Trump himself.[{n}]
"""

S['joe-biden'] = """
## March 2024 items

President Biden indicated in March 2024 that he would sign the TikTok divestment bill if Congress passed it and placed it on his desk; the House approved the measure 352-65-1 on March 13.[{n}] The same week, FBI Director Christopher Wray declined to tell Representative Elise Stefanik at a House Intelligence Committee hearing whether the bureau was conducting counterintelligence investigations into Biden or Donald Trump, attempting first to refer her to Special Counsel Robert Hur before stating there was "no investigation that I could confirm here."[{n}]

Coverage of early-2024 measles outbreaks in California, Arizona and a Chicago migrant shelter linked the risk to Biden's immigration policies, noting that millions of migrants had entered the country and that experts warned overcrowded shelters and low vaccination rates abroad could leave the United States vulnerable.[{n}] In a separate context, one translation of Vladimir Putin's March 13 nuclear remarks had the Russian president saying that "apart from (US President Joe) Biden, there are enough other experts in the sphere of Russian-American relations and strategic restraint."[{n}]
"""

S['tiktok'] = """
## House divestment vote, March 2024

On March 13, 2024, the House of Representatives passed a bill requiring TikTok's divestment from its Chinese parent by a vote of 352-65-1, with fifteen Republicans and fifty Democrats voting against.[{n}] The measure moved to the Senate with the declared support of Intelligence Committee Chairman Mark Warner and Vice Chairman Marco Rubio, and President Joe Biden said he would sign it if Congress sent it to him.[{n}] Representative Thomas Massie argued on the floor that the legislation was "actually a trojan horse" and raised First Amendment concerns, saying Americans "have the right to view information, and don't need to be protected by the government from information."[{n}]

Badlands commentary read the bill as the Deep State building a pretext for further systems of control, while also noting Donald Trump's ambiguous position following meetings with ByteDance part-owner Jeffrey Yass and with Elon Musk, and speculating that Trump's media conglomerate might be maneuvering to acquire the platform.[{n}]
"""

S['bytedance'] = """
## Ownership and the 2024 divestment bill

ByteDance's ownership structure became a focus of American politics in March 2024 when the House passed a bill, by 352-65-1, that would force the divestment of its TikTok subsidiary.[{n}] Among ByteDance's partial owners is the American financier and Republican donor Jeffrey Yass, whose meeting with Donald Trump shortly before the vote drew attention in coverage of Trump's shifting stance on the platform.[{n}] Badlands writer Simon Esler cited that meeting, alongside Trump's meeting with Elon Musk, in speculating that Trump's media conglomerate might be positioning itself to acquire TikTok rather than see it banned.[{n}]
"""

S['fbi'] = """
## March 2024 threat assessment hearing

At the House Permanent Select Committee on Intelligence's Annual Threat Assessment hearing on March 12, 2024, Director Christopher Wray refused to say publicly whether the bureau was conducting counterintelligence investigations into President Joe Biden or former President Donald Trump.[{n}] Representative Elise Stefanik pressed him on the point, noting that former Director James Comey had testified he did not follow the proper protocol regarding notification of Congress when the Crossfire Hurricane counterintelligence investigation into Trump was opened in 2016, and citing the Intelligence Authorization Act's requirement that the bureau inform congressional leadership of any counterintelligence investigation into a federal candidate for office.[{n}] After a long pause Wray attempted to refer Stefanik to Special Counsel Robert Hur, and when she demanded a direct answer he replied, "There is no investigation that I could confirm here, no."[{n}]
"""

S['james-comey'] = """
## Cited in the March 2024 Wray hearing

At the House Intelligence Committee's Annual Threat Assessment hearing on March 12, 2024, Representative Elise Stefanik invoked Comey's record while pressing FBI Director Christopher Wray, emphasizing that Comey had "testified that he did not follow the proper protocol regarding the notification of Congress of the opening of the Crossfire Hurricane" — the counterintelligence investigation into Donald Trump in 2016.[{n}] She used the precedent to argue that the Intelligence Authorization Act obliges the bureau to inform congressional leadership of counterintelligence investigations into federal candidates for office.[{n}]
"""

S['robert-hur'] = """
## Referenced at the March 2024 Wray hearing

When Representative Elise Stefanik pressed FBI Director Christopher Wray on March 12, 2024 about whether the bureau had counterintelligence investigations open into Joe Biden or Donald Trump, Wray — after a long pause — attempted to refer her to Special Counsel Hur.[{n}] Stefanik rejected the deflection and demanded a direct answer citing the Intelligence Authorization Act, prompting Wray to say there was "no investigation that I could confirm here."[{n}]
"""

S['brad-raffensperger'] = """
## Phone call counts dismissed, March 2024

On March 13, 2024, Fulton County Superior Court Judge Scott McAfee quashed six counts of the Georgia 2020 election interference indictment, among them the charges arising from Donald Trump's phone call to Raffensperger, along with counts related to the defendants' oaths of office.[{n}] Badlands writer Ashe in America observed that while the RICO charge remained in place and the case was proceeding, the phone call had been arguably the strongest part of the state's case, making its removal significant.[{n}]
"""

S['clinton-foundation'] = """
## Association with Haiti in public memory

Commenting on the March 2024 collapse of order in Haiti and the deployment of US Marines to protect the American embassy, Badlands writer Burning Bright argued that the chaos had been seeded during the Clinton, Bush and especially Obama administrations, and observed that "the Clinton Foundation is firmly entrenched in the Collective Mind re: Haiti."[{n}] He framed the episode as a convergence of actual events and narrative, closing with the question "Is it 2024 ... or 2017?"[{n}]
"""

S['jon-herold'] = """
## Cited on Putin's March 2024 remarks

In the Badlands News Brief of March 14, 2024, Burning Bright referenced Herold's extensive research into the Devolution operation while arguing that Vladimir Putin's statement that Russia was technically ready for nuclear war may have been his most Devolution-related public communication to date.[{n}] Burning Bright wrote that he had long argued one of the key purposes of the Devolution operation Herold researched was its implications for the globalist regime.[{n}]
"""

S['first-amendment'] = """
## Invoked against the 2024 TikTok divestment bill

During floor debate before the House passed the TikTok divestment bill 352-65-1 on March 13, 2024, Representative Thomas Massie argued that the measure was "actually a trojan horse" and raised constitutional objections, saying "some of us are concerned that there are First Amendment implications here. Americans have the right to view information, and don't need to be protected by the government from information."[{n}] The argument framed the proposed ban as a restriction on the audience's right to receive information rather than solely on the speaker's right to publish.[{n}]
"""

S['cnn'] = """
## Don Lemon and Musk coverage, March 2024

On March 13, 2024, former CNN anchor Don Lemon announced that Elon Musk had cancelled his partnership with X hours after Lemon interviewed Musk for the debut of his new independent web-based show.[{n}] Lemon discussed the collapse in an interview with CNN's Erin Burnett that night and shared excerpts of the ninety-minute sit-down.[{n}] CNN had previously confirmed Musk's recent meeting with Donald Trump, one of several Trump held with donors in Palm Beach as he sought funds for a financially strained campaign.[{n}] Separately, CNN senior legal analyst Elie Honig characterized Judge Scott McAfee's partial dismissal of the Fulton County indictment as an embarrassing setback for District Attorney Fani Willis.[{n}]
"""

S['protecting-americans-from-foreign-adversary-controlled-applications-act'] = """
## House passage, March 13, 2024

The House of Representatives passed the TikTok divestment legislation on March 13, 2024 by a vote of 352-65-1, with fifteen Republicans and fifty Democrats in opposition.[{n}] The bill advanced to the Senate, where Intelligence Committee Chairman Mark Warner and Vice Chairman Marco Rubio said in a joint statement that they were "encouraged by today's strong bipartisan vote" and looked forward to "working together to get this bill passed through the Senate and signed into law."[{n}] President Joe Biden said he would sign the measure if Congress placed it on his desk.[{n}]

Representative Thomas Massie spoke against the bill before the vote, calling it "actually a trojan horse" whether intentionally or unintentionally, and warning of First Amendment implications on the ground that Americans have the right to view information without government protection from it.[{n}] Badlands writer Simon Esler read the effort as the construction of a pretext for further systems of control, while also noting Donald Trump's ambiguous positioning after meetings with ByteDance part-owner Jeffrey Yass and Elon Musk.[{n}]
"""

for slug, body in S.items():
    run(slug, body)
