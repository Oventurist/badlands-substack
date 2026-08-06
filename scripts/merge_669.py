import subprocess, sys, os, re, time
PY = "python"
BASE = 'C:/Users/14053/hermes-projects/badlands-substack'
LOCK = BASE + '/scripts/wiki_page_lock.py'
RAW = 'badlands-news-brief-669'
TITLE = 'Dumb Questions, Pentagon Pizzas, & Zero Trust'
URL = 'https://badlands.substack.com/p/badlands-news-brief-669'

CH = {}

CH['entities/donald-trump'] = """## October 2025 news cycle

On October 6, 2025, President Donald Trump said he was "pretty sure" there would be a deal ending the Gaza war, while denying reports that he had privately told Israeli Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] to stop being so "f*cking negative" and to "take the win" after [[hamas|Hamas]] accepted parts of Washington's proposal.{n} "No, it's not true. He's been very positive on the deal," Trump said of Netanyahu, and told reporters in the Oval Office that he did have red lines for Hamas in the fresh round of negotiations that opened that day in Egypt: "If certain things aren't met, we're not going to do it."{n} Commentary in the [[badlands-news-brief|Badlands News Brief]] argued that Trump was "twisting the knife" on Netanyahu — damaging his political clout privately while maintaining positive public optics — leaving the Israeli premier unable to correct the record without further weakening himself.{n}

On the same day, Trump left open the possibility of a pardon for [[ghislaine-maxwell|Ghislaine Maxwell]], saying he would speak to the [[department-of-justice|Department of Justice]] about it, and disclosed that [[sean-combs|Sean "Diddy" Combs]] had requested a pardon after being sentenced to more than four years in prison.{n} Trump also directed a review of federal funding to Portland, Oregon, and his administration appealed a judicial order blocking [[national-guard|National Guard]] deployments there.{n} Badlands commentators additionally noted that Trump had threatened [[george-soros|George Soros]] with RICO charges during the summer of 2025, while his Treasury Secretary [[scott-bessent|Scott Bessent]] was a Soros Fund Management alumnus.{n}"""

CH['entities/benjamin-netanyahu'] = """## October 2025 Gaza deal friction with Trump

In early October 2025, reports by Axios journalists Barak Ravid and Marc Caputo described a tense phone call in which President [[donald-trump|Donald Trump]] responded angrily after Benjamin Netanyahu called [[hamas|Hamas]]'s ambivalent response to the US peace proposal "nothing to celebrate," reportedly telling the prime minister to stop being "f*cking negative" and to "take the win."{n} Trump publicly denied the account on October 6, saying, "No, it's not true. He's been very positive on the deal."{n}

[[badlands-news-brief|Badlands News Brief]] commentary held that Trump had run this playbook against Netanyahu for some time: propping up his regime publicly while undermining him privately, which boxed Netanyahu in because correcting the record would further damage him and risk ending US support.{n} The commentary asserted that Netanyahu needs Trump's public backing to cling to power, and that losing it would expose him to prosecution for multiple felonies and potentially war crimes.{n}"""

CH['entities/hamas'] = """## October 2025 Egypt negotiations

By early October 2025, Hamas had accepted parts of Washington's proposal for ending the Gaza war, prompting a fresh round of negotiations that began in Egypt on Monday, October 6, 2025.{n} President [[donald-trump|Donald Trump]] said he was "pretty sure" a deal would be reached and confirmed he had red lines for Hamas in the talks, stating: "If certain things aren't met, we're not going to do it."{n} Israeli Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] had reportedly characterized Hamas's ambivalent response as "nothing to celebrate," a remark that triggered private friction with Trump.{n}"""

CH['entities/stephen-miller'] = """## October 2025 exchange with CNN over racial profiling

On Monday, October 6, 2025, White House deputy chief of staff for policy Stephen Miller pushed back on [[cnn|CNN]] anchor [[boris-sanchez|Boris Sanchez]], who repeatedly pressed him on "CNN News Central" about Illinois Governor [[jb-pritzker|JB Pritzker]]'s accusation that [[immigration-and-customs-enforcement|Immigration and Customs Enforcement]] was targeting people based on their "brown or black" skin color.{n} Asked whether the immigration crackdown was designed to go after people of color, Miller laughed and replied, "Oh, what a dumb question," arguing that "the illegal aliens who are here are taking jobs away from blacks. They're taking jobs away from whites. They're taking jobs away from Latinos. They're taking their health benefits away… You know it and I know it."{n}

Writing in the [[badlands-news-brief|Badlands News Brief]], [[ashe-in-america|Ashe in America]] praised Miller's handling of the press but questioned the strategy of appearing on legacy networks at all, arguing that [[white-house|White House]] access is "almost single handedly keeping many of these networks alive."{n}"""

CH['entities/cnn'] = """## October 2025 Stephen Miller interview

On October 6, 2025, CNN anchor [[boris-sanchez|Boris Sanchez]] pressed White House deputy chief of staff for policy [[stephen-miller|Stephen Miller]] on "CNN News Central" about whether the administration's immigration enforcement amounted to racial profiling, citing Illinois Governor [[jb-pritzker|JB Pritzker]]'s claims; Miller dismissed the query as "a dumb question."{n} [[badlands-news-brief|Badlands News Brief]] commentary argued that the [[white-house|White House]]'s continued willingness to supply guests to CNN and similar outlets legitimizes and financially sustains networks that would otherwise be failing.{n}"""

CH['entities/karoline-leavitt'] = """## October 2025 defense of the Portland National Guard deployment

On Monday, October 6, 2025, White House Press Secretary Karoline Leavitt sharply criticized a federal judge for halting the administration's plan to send [[national-guard|National Guard]] troops to Portland, Oregon, calling the ruling "untethered in reality and in the law."{n} "The president has the right to call up the National Guard in cases where he deems it appropriate," Leavitt told reporters at a press briefing, accusing protesters outside a Portland [[immigration-and-customs-enforcement|Immigration and Customs Enforcement]] facility of "inciting violence."{n} Her remarks followed US District Judge [[karin-immergut|Karin Immergut]]'s temporary injunction blocking President [[donald-trump|Donald Trump]]'s order to deploy Guard troops from other states to Portland; the administration filed an appeal, and Leavitt expressed confidence that the president's powers would be upheld.{n}"""

CH['entities/national-guard'] = """## Portland and Chicago deployments, October 2025

In early October 2025, US District Judge [[karin-immergut|Karin Immergut]] issued a temporary injunction blocking President [[donald-trump|Donald Trump]]'s order deploying National Guard troops from other states to Portland, Oregon, where protesters had gathered outside an [[immigration-and-customs-enforcement|Immigration and Customs Enforcement]] facility.{n} White House Press Secretary [[karoline-leavitt|Karoline Leavitt]] called the ruling "untethered in reality and in the law" and said the president has the right to call up the Guard whenever he deems it appropriate; the administration appealed.{n}

On Monday, October 6, 2025, Illinois and the city of Chicago filed suit to block the federalization and deployment of any state's National Guard to Illinois, arguing the principle separating the military from domestic affairs was "in peril" and that the state was being singled out for its political leadership.{n} Their attorneys contended that federal law permits such action only in cases of rebellion or invasion and that the move violated the [[posse-comitatus-act|Posse Comitatus Act]].{n}"""

CH['entities/pete-hegseth'] = """## Pentagon pizza index remarks

In a Fox News interview aired Sunday, October 5, 2025, War Secretary Pete Hegseth addressed the [[pentagon-pizza-index|"pizza index"]] meme, which links spikes in pizza deliveries near the [[pentagon|Pentagon]] to imminent military operations.{n} "I'm aware of that account," said Hegseth, a former Fox News host, referring to the Pentagon Pizza Report X account.{n} Asked whether staff might simply use the cafeteria before an airstrike, he laughed and answered: "I haven't thought of just going to the cafeteria. I've thought of just ordering lots of pizza on random nights," suggesting deliberate deception of those tracking delivery patterns.{n}"""

CH['entities/pentagon'] = """## Pizza index deception, 2025

The Pentagon is the subject of the [[pentagon-pizza-index|Pentagon pizza index]], an open-source-intelligence meme holding that surges in nearby pizza deliveries can foreshadow military operations; an X account tracking it, Pentagon Pizza Report, has over 254,300 followers, and a companion website monitors six nearby pizza shops using Google Maps data.{n} In October 2025, War Secretary [[pete-hegseth|Pete Hegseth]] said he had considered ordering large quantities of pizza on random nights to confuse observers.{n}"""

CH['entities/ghislaine-maxwell'] = """## Supreme Court denial and pardon speculation, October 2025

On Monday, October 6, 2025, the [[supreme-court-of-the-united-states|US Supreme Court]] declined to hear Ghislaine Maxwell's bid to overturn her conviction for helping [[jeffrey-epstein|Jeffrey Epstein]] sexually abuse teenage girls.{n} The same day, President [[donald-trump|Donald Trump]] left the door open to a pardon, saying he would speak to the [[department-of-justice|Department of Justice]] about setting Maxwell free.{n} Writing in the [[badlands-news-brief|Badlands News Brief]], [[canncon|CannCon]] said he was glad she would not be freed but warned the outcome raised questions about the authority of a US Attorney to make agreements with defendants and about the government's ability to renege on them; he also asked whether the close of Maxwell's litigation would finally bring movement on the [[epstein-files|Epstein Files]].{n}"""

CH['entities/sean-combs'] = """## Pardon request, October 2025

On Friday, October 3, 2025, Sean "Diddy" Combs was sentenced to more than four years in prison following his conviction on prostitution-related charges.{n} On Monday, October 6, President [[donald-trump|Donald Trump]] told reporters that Combs had requested a pardon.{n}"""

CH['entities/joe-biden'] = """## NLDS appearance, October 2025

Former President Joe Biden was photographed by fans attending Game 2 of the National League Division Series on the night of Monday, October 6, 2025, at Citizens Bank Park in South Philadelphia — roughly a 40-minute drive from the Bidens' primary residence in Greenville, Delaware.{n} Both Biden and his wife, [[jill-biden|Dr. Jill Biden]], are Phillies fans and have attended pivotal games before, including Game 4 of the 2022 World Series against the Houston Astros.{n} [[badlands-news-brief|Badlands News Brief]] commentator [[ashe-in-america|Ashe in America]] used the photographs to revive body-double speculation, asking "do you guys think this is a new Biden?" and linking the item to a discussion of [[edith-wilson|Edith Wilson]] and to the status of the autopen probe.{n}"""

CH['entities/jill-biden'] = """## October 2025

Dr. Jill Biden, a Phillies fan who attended Game 4 of the 2022 World Series against the Houston Astros, was invoked in [[badlands-news-brief|Badlands News Brief]] commentary in October 2025 after former President [[joe-biden|Joe Biden]] was spotted at Game 2 of the National League Division Series in Philadelphia.{n} Commentator [[ashe-in-america|Ashe in America]] tied the item to a prior discussion of [[edith-wilson|Edith Wilson]], the First Lady described as effectively acting as president in October 1919, wondering aloud "how Jill Biden is doing, for obvious reasons."{n}"""

CH['entities/viktor-orban'] = """## Rejection of the euro, October 2025

In an interview with the economic news site EconomX published Monday, October 6, 2025, Hungarian Prime Minister Viktor Orban ruled out adopting the euro, saying it "will definitely not be on my agenda."{n} He argued that "the European Union is in trouble, in the process of disintegration, it is currently falling apart," and said he did not want to tie [[hungary|Hungary]]'s fate to the bloc any further.{n} [[badlands-news-brief|Badlands News Brief]] commentary endorsed the stance, describing the [[european-union|European Union]] as a draconian institution that has subverted the sovereignty of its member nations, while adding that the European fight is not America's.{n}"""

CH['entities/hungary'] = """## Euro adoption ruled out, 2025

On October 6, 2025, Prime Minister [[viktor-orban|Viktor Orban]] said Hungary would not adopt the euro, calling the [[european-union|EU]] a bloc "in the process of disintegration."{n} Although EU members other than Denmark, which secured an opt-out, are formally obliged eventually to join the Eurozone, seven of the 27 member states still use national currencies.{n} A [[badlands-news-brief|Badlands News Brief]] contributor who visited Hungary in 2017 recalled prices there being far cheaper than in Western Europe, attributing the lingering effects to the hyperinflation Hungary suffered at the end of World War II.{n}"""

CH['entities/european-union'] = """## Orban's disintegration claim, 2025

In October 2025, Hungarian Prime Minister [[viktor-orban|Viktor Orban]] declared that the European Union is "in trouble, in the process of disintegration, it is currently falling apart," and ruled out adopting the euro in [[hungary|Hungary]].{n} All member states except Denmark, which holds an opt-out, are obliged eventually to join the Eurozone, yet seven of the 27 still use their own national currencies.{n} [[badlands-news-brief|Badlands News Brief]] commentary characterized the EU as a draconian institution that has "done nothing other than subvert and marginalize the sovereignty of every European nation under its charter."{n}"""

CH['entities/scott-bessent'] = """## Soros connection and the IRS appointment, October 2025

[[badlands-news-brief|Badlands News Brief]] commentary in October 2025 highlighted that Treasury Secretary Scott Bessent made his name in global financial markets by shorting the British pound in 1992 while working for Soros Fund Management — the trade that made [[george-soros|George Soros]] famous but which the commentary attributes to Bessent — noting alongside it that President [[donald-trump|Donald Trump]] had threatened Soros with RICO charges that summer.{n}

In the same period, Bessent appointed [[frank-bisignano|Frank Bisignano]], head of the [[social-security-administration|Social Security Administration]], to serve additionally as the first-ever chief executive officer of the [[internal-revenue-service|Internal Revenue Service]], a move that bypassed Senate confirmation; Bessent remained the IRS's acting commissioner.{n} "Frank is a businessman with an exceptional track record of driving growth and efficiency in the private and now public sector," Bessent said, citing shared "customer service and technological goals" between the IRS and SSA.{n}"""

CH['entities/george-soros'] = """## Bessent, the 1992 pound trade, and RICO threat

[[badlands-news-brief|Badlands News Brief]] commentary published in October 2025 noted that the 1992 short of the British pound that made George Soros famous was executed by [[scott-bessent|Scott Bessent]], then working at Soros Fund Management and later Treasury Secretary, and paired that observation with President [[donald-trump|Donald Trump]]'s threat during the summer of 2025 to pursue Soros under RICO.{n}"""

CH['entities/internal-revenue-service'] = """## First chief executive officer, 2025

In October 2025, Treasury Secretary [[scott-bessent|Scott Bessent]] appointed [[frank-bisignano|Frank Bisignano]], the head of the [[social-security-administration|Social Security Administration]], to serve simultaneously as the first-ever chief executive officer of the Internal Revenue Service — a structure that bypassed the Senate confirmation process, with Bessent remaining acting commissioner.{n} Bessent cited shared "customer service and technological goals" between the IRS and SSA, while Bisignano pointed to his experience running "multiple mission-critical organizations at the same time," including his tenure at JPMorgan Chase as co-chief operating officer and CEO of its mortgage banking unit.{n}"""

CH['entities/social-security-administration'] = """## Dual-hatted leadership, 2025

In October 2025, SSA head [[frank-bisignano|Frank Bisignano]] was appointed by Treasury Secretary [[scott-bessent|Scott Bessent]] to serve concurrently as the first chief executive officer of the [[internal-revenue-service|Internal Revenue Service]], announcing the move in an email to SSA employees and citing shared customer-service and technology goals across the two agencies.{n}"""

CH['entities/supreme-court-of-the-united-states'] = """## Maxwell certiorari denial, October 2025

On October 6, 2025, the Supreme Court declined to hear [[ghislaine-maxwell|Ghislaine Maxwell]]'s bid to overturn her conviction for helping [[jeffrey-epstein|Jeffrey Epstein]] abuse teenage girls, the same day President [[donald-trump|Donald Trump]] said he would discuss a possible pardon with the [[department-of-justice|Department of Justice]].{n} [[badlands-news-brief|Badlands News Brief]] commentary suggested the denial raised unresolved questions about the authority of US Attorneys to bind the government in agreements with defendants.{n} Separately, commentary on the Wisconsin citizenship-verification ruling in Cerny v. WEC predicted that Wisconsin's high court would ultimately propel that case to the Supreme Court.{n}"""

CH['entities/israeli-ministry-of-foreign-affairs'] = """## Show Faith by Works FARA filing, 2025

Foreign Agents Registration Act filings disclosed in October 2025 identified the Israeli Ministry of Foreign Affairs as the principal behind [[show-faith-by-works|Show Faith by Works, LLC]], a group planning an influence campaign aimed at Christian churches and organizations in the Western United States using digital advertising, geofencing, and a "mobile museum."{n} The filing stated the group would "target and distribute pro-Israel information online and through targeted geofencing and digital online tools," reaching out to churches, pastors, and possibly Christian social media influencers, with the goal of encouraging Christians to view Israel more favorably and to visit for tourism.{n} [[badlands-news-brief|Badlands News Brief]] commentary condemned the effort as a propaganda campaign against Christian evangelicals and drew comparisons to twentieth-century televangelists' documented CIA ties.{n}"""

CH['entities/wisconsin-elections-commission'] = """## Cerny v. WEC ruling, October 2025

In a decision issued Friday, October 3, 2025, in [[cerny-v-wec|Cerny v. WEC]], a Wisconsin judge ruled that the Wisconsin Elections Commission must verify US citizenship for every voter registration and audit the state's entire voter roll.{n} The court issued a writ of mandamus directing the commission to comply with state law and the constitution: it must verify citizenship for every new registration, cross-check current rolls against Department of Transportation and other lawful records to identify non-citizen registrants, refuse registration requests lacking proof of citizenship, and report progress on the audit to the court within 60 days.{n} Judge Maxwell criticized the commission for having previously claimed no duty to prevent non-citizens from registering, citing both the US Constitution and the [[help-america-vote-act|Help America Vote Act]].{n}"""

CH['concepts/posse-comitatus-act'] = """## Invoked in the Illinois National Guard suit, 2025

On Monday, October 6, 2025, Illinois and the city of Chicago sued to block President [[donald-trump|Donald Trump]]'s federalization and deployment of the [[national-guard|National Guard]], arguing among other things that the move violated the Posse Comitatus Act's bar on using the military for domestic law enforcement.{n} Their attorneys also contended that federal law permits federalization only in cases of rebellion or invasion, and that the foundational principle separating the military from domestic affairs was "in peril."{n}"""

CH['entities/immigration-and-customs-enforcement'] = """## Profiling allegations and Portland protests, October 2025

Illinois Governor [[jb-pritzker|JB Pritzker]] accused ICE of targeting individuals based on their "brown or black" skin color, a claim [[cnn|CNN]] anchor [[boris-sanchez|Boris Sanchez]] pressed on White House policy deputy [[stephen-miller|Stephen Miller]] on October 6, 2025; Miller dismissed the question as "dumb" and rejected the allegation.{n} The same week, White House Press Secretary [[karoline-leavitt|Karoline Leavitt]] accused protesters outside a Portland, Oregon ICE facility of "inciting violence" while defending the administration's blocked [[national-guard|National Guard]] deployment.{n}"""

CH['entities/white-house'] = """## Media strategy debate, October 2025

Following [[stephen-miller|Stephen Miller]]'s October 6, 2025 clash with [[cnn|CNN]] over immigration profiling allegations, [[badlands-news-brief|Badlands News Brief]] commentator [[ashe-in-america|Ashe in America]] argued that the White House's continued provision of high-level guests to legacy outlets is "almost single handedly keeping many of these networks alive," and questioned why the administration legitimizes them by appearing at all.{n} In the same period Press Secretary [[karoline-leavitt|Karoline Leavitt]] publicly attacked a federal court ruling blocking [[national-guard|National Guard]] deployments to Portland as "untethered in reality and in the law."{n}"""

CH['entities/department-of-justice'] = """## Maxwell pardon question, October 2025

Asked on October 6, 2025 whether he would free [[ghislaine-maxwell|Ghislaine Maxwell]] through a pardon, President [[donald-trump|Donald Trump]] said he would speak to the Department of Justice about it, on the same day the [[supreme-court-of-the-united-states|Supreme Court]] declined to hear her appeal.{n} [[badlands-news-brief|Badlands News Brief]] commentary from [[chris-paul|Chris Paul]] in the same issue argued more broadly that the DOJ, the federal court system, the Department of Education, and the Department of Homeland Security should not be propped up, contending that a loss of faith in the federal government is a required feature of Trump's plan.{n}"""

def run(rel, text):
    slug = rel.split('/')[1]
    path = '%s/wiki/%s.md' % (BASE, rel)
    if not os.path.exists(path):
        print('MISSING', path); return
    for attempt in range(10):
        r = subprocess.run([PY, LOCK, 'acquire', slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(4)
    else:
        print('LOCKFAIL', slug); return
    try:
        cf = BASE + '/scripts/_chunk.tmp'
        open(cf, 'w', encoding='utf-8', newline='\n').write(text)
        r = subprocess.run([PY, BASE + '/scripts/merge_helper.py', path, cf, RAW, TITLE, URL], capture_output=True, text=True)
        print(r.stdout.strip() or r.stderr.strip())
    finally:
        subprocess.run([PY, LOCK, 'release', slug], capture_output=True, text=True)

for rel, text in CH.items():
    run(rel, text)
