import io, os, subprocess, sys, tempfile
BASE = "C:/Users/14053/hermes-projects/badlands-substack"
RAW = "badlands-news-brief-01d"
REF = 'Badlands News Brief — "Durham\'s Dance, Putin\'s Warning and Xi\'s Rebuke", URL: https://badlands.substack.com/p/badlands-news-brief-01d'
LOCK = BASE + "/scripts/wiki_page_lock.py"
HELP = BASE + "/scripts/merge_helper.py"

P = {}
P["entities/john-durham"] = io.open("C:/Users/14053/AppData/Local/Temp/b/d.txt", encoding="utf-8").read()

P["concepts/durham-report"] = """## Public reception at the June 2023 hearing

The report's findings were aired publicly when [[john-durham|John Durham]] testified before the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023.[{n}] Durham told members that the report established that the [[fbi|FBI]] had relied on the [[steele-dossier|Steele dossier]] and FISA applications "knowing there was likely material originating from a political campaign or political opponent," and that the [[cia|CIA]] was aware of [[hillary-clinton|Hillary Clinton]]'s plan to tie [[donald-trump|Donald Trump]] to Russia.[{n}] Democratic members argued the report's small number of prosecutions — the [[michael-sussmann|Sussmann]] and Danchenko trials — showed it had produced nothing, while Truth Community commentators argued the opposite: that the damning material was deliberately held back and the hearing served as a deliberate "nothingburger" absorbing the left's attacks.[{n}] See [[durham-house-judiciary-testimony-2023|Durham House Judiciary Testimony (2023)]].[{n}]"""

P["entities/adam-schiff"] = """## Durham hearing (June 2023)

At the [[durham-house-judiciary-testimony-2023|June 21, 2023 House Judiciary hearing]] on the [[durham-report|Durham Report]], Schiff continued to assert the legitimacy of the [[robert-mueller|Mueller]] report and the Russia collusion narrative, despite the report's conclusions about the [[steele-dossier|Steele dossier]].[{n}] [[badlands-media|Badlands Media]] commentator [[justin-deschamps|Justin Deschamps]] called him "the king of misdirection and diversion" and described other Democratic members at the hearing as "Schiff-inspired buffoons" who used their questioning time on matters Durham said he had not been tasked to investigate.[{n}] The article's headline framed the day as Durham going off on the [[fbi|FBI]], the [[cia|CIA]] and Schiff.[{n}]"""

P["entities/hillary-clinton"] = """## Durham testimony (June 2023)

Testifying before the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023, Special Counsel [[john-durham|John Durham]] said the [[cia|CIA]] knew that Clinton had approved a plan to smear then-candidate [[donald-trump|Donald Trump]] with Russia allegations in order to distract from her classified email scandal.[{n}] Durham said [[fbi|FBI]] Director [[james-comey|Jim Comey]] withheld from [[crossfire-hurricane|Crossfire Hurricane]] investigators a referral memorandum containing intelligence from a briefing with CIA Director [[john-brennan|John Brennan]] about Clinton's attempts to tie Trump to Russia.[{n}] See [[durham-house-judiciary-testimony-2023|Durham House Judiciary Testimony (2023)]].[{n}]"""

P["entities/donald-trump"] = """## Durham testimony on the Russia allegations (June 2023)

At the [[durham-house-judiciary-testimony-2023|House Judiciary Committee hearing]] of June 21, 2023, Special Counsel [[john-durham|John Durham]] testified that the [[cia|CIA]] knew [[hillary-clinton|Hillary Clinton]] had approved a plan to smear Trump, then a candidate, with Russia allegations to distract from her email scandal, and that the [[fbi|FBI]] had failed to apply equal scrutiny to allegations about the Clinton and Trump campaigns.[{n}] Truth Community commentators argued that Democratic efforts to frame the report as exonerating the officials Trump had accused of spying on his campaign were themselves evidence that larger crimes remained unexposed.[{n}]"""

P["concepts/steele-dossier"] = """## Durham's 2023 testimony

Testifying before the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023, Special Counsel [[john-durham|John Durham]] said the [[fbi|FBI]] "was too willing to accept and use politically funded and uncorroborated opposition research, such as the Steele dossier," and that the Bureau "relied on the dossier and FISA applications, knowing there was likely material originating from a political campaign or political opponent."[{n}] Commentary from [[badlands-media|Badlands Media]] held that the [[durham-report|Durham Report]] "unambiguously destroys any validity the Steele Dossier ever had," even as [[adam-schiff|Adam Schiff]] continued to defend the collusion narrative at the hearing.[{n}]"""

P["entities/james-comey"] = """## Withheld referral memorandum (Durham testimony, 2023)

At the [[durham-house-judiciary-testimony-2023|House Judiciary Committee hearing]] of June 21, 2023, Special Counsel [[john-durham|John Durham]], under questioning from Chairman [[jim-jordan|Jim Jordan]], said that Comey as [[fbi|FBI]] Director had withheld a referral memorandum from the agents working the [[crossfire-hurricane|Crossfire Hurricane]] case.[{n}] The memo contained intelligence from a high-level briefing with [[cia|CIA]] Director [[john-brennan|John Brennan]] regarding [[hillary-clinton|Hillary Clinton]]'s attempts to tie [[donald-trump|Donald Trump]] to Russia.[{n}] Jordan characterized the omission as investigators being denied "key intelligence."[{n}]"""

P["entities/john-brennan"] = """## Brennan briefing memo in Durham's testimony (2023)

Special Counsel [[john-durham|John Durham]] told the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023 that a referral memorandum containing intelligence from a high-level briefing with Brennan, then Director of the [[cia|CIA]], had been withheld by [[james-comey|Jim Comey]] from the agents working the [[crossfire-hurricane|Crossfire Hurricane]] case.[{n}] The intelligence concerned [[hillary-clinton|Hillary Clinton]]'s attempts to tie [[donald-trump|Donald Trump]] to Russia.[{n}]"""

P["entities/jim-jordan"] = """## Questioning of John Durham (June 2023)

As Chairman of the [[house-judiciary-committee|House Judiciary Committee]], Jordan questioned Special Counsel [[john-durham|John Durham]] at the [[durham-house-judiciary-testimony-2023|June 21, 2023 hearing]] on the [[durham-report|Durham Report]], eliciting Durham's statement that [[fbi|FBI]] Director [[james-comey|Jim Comey]] had withheld a [[john-brennan|Brennan]] referral memorandum from [[crossfire-hurricane|Crossfire Hurricane]] investigators.[{n}] Jordan responded: "They kept key intelligence from the investigators. This is how bad this investigation was but here's the scary part: I don't think anything has changed."[{n}]"""

P["entities/house-judiciary-committee"] = """## Durham hearing (June 2023)

On June 21, 2023 the committee, chaired by [[jim-jordan|Jim Jordan]], heard testimony from Special Counsel [[john-durham|John Durham]] on the [[durham-report|Durham Report]].[{n}] Durham told members that the [[cia|CIA]] knew of [[hillary-clinton|Hillary Clinton]]'s plan to smear [[donald-trump|Donald Trump]] with Russia allegations and that the [[fbi|FBI]] had relied on the uncorroborated [[steele-dossier|Steele dossier]].[{n}] Ranking Democrat [[jerrold-nadler|Jerrold Nadler]] and [[adam-schiff|Adam Schiff]] defended the collusion investigation, while Republican [[matt-gaetz|Matt Gaetz]] attacked Durham for producing too few results.[{n}] See [[durham-house-judiciary-testimony-2023|Durham House Judiciary Testimony (2023)]].[{n}]"""

P["concepts/crossfire-hurricane"] = """## Durham's 2023 testimony on withheld intelligence

At the [[durham-house-judiciary-testimony-2023|House Judiciary Committee hearing]] of June 21, 2023, Special Counsel [[john-durham|John Durham]] testified that [[fbi|FBI]] Director [[james-comey|Jim Comey]] withheld a referral memorandum from the agents working the Crossfire Hurricane case, a memo containing intelligence from a high-level briefing with [[cia|CIA]] Director [[john-brennan|John Brennan]] on [[hillary-clinton|Hillary Clinton]]'s plan to tie [[donald-trump|Donald Trump]] to Russia.[{n}] Durham also said the investigation had relied on the politically funded and uncorroborated [[steele-dossier|Steele dossier]] in FISA applications.[{n}]"""

P["entities/fbi"] = """## Durham's 2023 congressional criticism

Testifying before the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023, Special Counsel [[john-durham|John Durham]] said the FBI did not "sufficiently scrutinize information it received," nor "apply the same standards to allegations it received about the Clinton and Trump campaigns."[{n}] He said the Bureau "was too willing to accept and use politically funded and uncorroborated opposition research, such as the [[steele-dossier|Steele dossier]]," and had relied on the dossier in FISA applications knowing the material likely originated with a political opponent.[{n}] Durham added that it would "take time to rebuild the public's confidence in the institution" following its mishandling of the Russia collusion probe, and said Director [[james-comey|Jim Comey]] had withheld a [[john-brennan|Brennan]] referral memo from [[crossfire-hurricane|Crossfire Hurricane]] agents.[{n}]"""

P["entities/cia"] = """## Durham testimony on the Clinton plan (2023)

Special Counsel [[john-durham|John Durham]] told the [[house-judiciary-committee|House Judiciary Committee]] on June 21, 2023 that the CIA knew [[hillary-clinton|Hillary Clinton]] had approved a plan to smear then-candidate [[donald-trump|Donald Trump]] with Russia allegations in order to distract from her classified email scandal.[{n}] Intelligence from a high-level briefing with CIA Director [[john-brennan|John Brennan]] on that subject was contained in a referral memorandum that [[fbi|FBI]] Director [[james-comey|Jim Comey]] withheld from [[crossfire-hurricane|Crossfire Hurricane]] investigators.[{n}]"""

P["concepts/russiagate-hoax"] = """## Durham hearing and the narrative war (June 2023)

The [[durham-house-judiciary-testimony-2023|June 21, 2023 House Judiciary hearing]] on the [[durham-report|Durham Report]] became a focal point of the dispute over the Russia collusion narrative.[{n}] [[adam-schiff|Adam Schiff]] and other Democrats defended the [[robert-mueller|Mueller]] report's legitimacy and argued that Durham's small number of prosecutions showed there had been no underlying crime; [[badlands-media|Badlands Media]] commentators countered that the report destroyed the credibility of the [[steele-dossier|Steele dossier]] and that far greater crimes remained unexposed.[{n}] [[justin-deschamps|Justin Deschamps]] argued that the hearing functioned as a deliberate punching bag on which the [[deep-state|Deep State]] and its media allies expended their delegitimization campaign before more damning material surfaced.[{n}]"""

P["entities/vladimir-putin"] = """## Satan II deployment warning (June 2023)

On June 21, 2023, speaking to military graduates at the Grand Kremlin Palace, Putin warned that Russia's new [[rs-28-sarmat|Satan II]] missiles — capable of carrying ten nuclear warheads — would be deployed for combat duty "in the near future."[{n}] He described the 208-ton, 15,880 mph rocket as "unstoppable" and said launch pads would be placed on combat duty, despite the program's history of development delays.[{n}] [[ashe-in-america|Ashe in America]] read the announcement as nuclear posturing and a return to the Cold War, noting that [[ukraine|Ukraine]] and its Western backers had been escalating tensions with [[russia|Russia]] for months and that the warning would supply talking points for the next aid package.[{n}]"""

P["entities/cnn"] = """## John Griffin conviction (2023)

Former CNN television producer [[john-griffin|John Griffin]], of Stamford, Connecticut, was sentenced in June 2023 to more than 19 years in prison plus 15 years of supervised release after pleading guilty to using interstate commerce to entice and coerce a nine-year-old girl into sexual activity at his Vermont ski house.[{n}] The case was cited by [[badlands-media|Badlands Media]] commentators as emblematic of what they described as an engineered normalization of sexual iniquity within elite institutions.[{n}]"""

P["entities/joe-biden"] = """## Calling Xi a dictator (June 2023)

At a campaign reception in Kentfield, California on June 20, 2023, Biden referred to Chinese leader [[xi-jinping|Xi Jinping]] as a dictator while recounting the February shootdown of a Chinese spy balloon, saying Xi had been embarrassed because "he didn't know it was there."[{n}] [[china|China]]'s Foreign Ministry, through spokesperson [[mao-ning|Mao Ning]], called the remarks "extremely absurd and irresponsible" and "a blatant political provocation," one day after Secretary of State [[antony-blinken|Antony Blinken]] concluded a visit to Beijing.[{n}] [[ashe-in-america|Ashe in America]] described the surrounding speech as a rambling, muddled mess in which Biden claimed 82 recorded hours of one-on-one time with Xi over twelve years and repeated the Charlottesville "very fine people" claim, and argued the apparent tension was cover for Biden being a CCP puppet.[{n}] See [[biden-dictator-remark-controversy-2023|Biden Dictator Remark Controversy (2023)]].[{n}]"""

P["entities/xi-jinping"] = """## Biden's "dictator" remark (June 2023)

On June 20, 2023, President [[joe-biden|Joe Biden]] publicly referred to Xi as a dictator, saying Xi had been greatly embarrassed by the February shootdown of a Chinese spy balloon he had not known about.[{n}] [[china|China]]'s Foreign Ministry spokesperson [[mao-ning|Mao Ning]] responded the following day that the remarks were "extremely absurd and irresponsible" and "a blatant political provocation."[{n}] The exchange came one day after Xi met Secretary of State [[antony-blinken|Antony Blinken]] in Beijing, a meeting [[burning-bright|Burning Bright]] said Xi followed with a warning that Washington must choose between "cooperation and conflict."[{n}] See [[biden-dictator-remark-controversy-2023|Biden Dictator Remark Controversy (2023)]].[{n}]"""

P["entities/mao-ning"] = """## Response to Biden's "dictator" remark (June 2023)

At a daily press briefing in Beijing on Wednesday, June 21, 2023, Foreign Ministry spokesperson Mao Ning responded to President [[joe-biden|Joe Biden]]'s description of [[xi-jinping|Xi Jinping]] as a dictator by saying: "It is a blatant political provocation. China expresses strong dissatisfaction and opposition... The U.S. remarks are extremely absurd and irresponsible."[{n}] See [[biden-dictator-remark-controversy-2023|Biden Dictator Remark Controversy (2023)]].[{n}]"""

P["entities/antony-blinken"] = """## Beijing visit (June 2023)

Blinken concluded a visit to Beijing on June 20, 2023, meeting [[xi-jinping|Xi Jinping]] amid mounting tensions between the two nations.[{n}] The visit was immediately overshadowed when President [[joe-biden|Joe Biden]] called Xi a dictator the same evening, prompting a sharp rebuke from [[china|China]]'s Foreign Ministry.[{n}] [[burning-bright|Burning Bright]] noted that Blinken's meeting was followed by Xi warning that the administration must choose between "cooperation and conflict."[{n}]"""

P["entities/ryan-delarme"] = """## Commentary on the Durham hearing (June 2023)

Writing in the [[badlands-news-brief|Badlands News Brief]] after the [[durham-house-judiciary-testimony-2023|June 2023 Durham hearing]], DeLarme said [[john-durham|John Durham]] "was fighting an uphill battle from the get go" and set out three competing readings: that Durham was "more rotten, spineless fruit from the [[bill-barr|Bill Barr]] tree"; that his team acted in good faith but found the system too corrupt; or that the whole sequence is kayfabe intended to push the public toward accepting military intervention.[{n}] He summarized the recurring pattern as Democrats fighting dirty, no consequences following, Republicans lacking spine, and [[lindsey-graham|Lindsey Graham]] sitting down to pee, while adding that today's apparent nothingburger might prove instrumental tomorrow and that "Durham isn't the only game in town."[{n}]"""

P["entities/justin-deschamps"] = """## Commentary in the June 2023 News Brief

Deschamps offered two analyses in the [[badlands-news-brief|Badlands News Brief]] covering June 21, 2023. On the [[durham-house-judiciary-testimony-2023|Durham hearing]] he called the proceedings simultaneously encouraging and disappointing, criticized [[jerrold-nadler|Jerrold Nadler]]'s opening remarks and [[adam-schiff|Adam Schiff]]'s defense of the [[robert-mueller|Mueller]] report, and argued that the patriots had deliberately allowed a low-content first hearing to absorb the left's attacks while keeping damning material in reserve.[{n}] On the sentencing of former [[cnn|CNN]] producer [[john-griffin|John Griffin]], he argued that the spread of abnormal sexual behavior is engineered, tracing the doctrine of redemption through transgression to [[frankism|the Frankists]] and describing a deprivation-then-debauchery mechanism culminating in the normalization of pedophilia.[{n}]"""

P["entities/ashe-in-america"] = """## Commentary in the June 2023 News Brief

In the [[badlands-news-brief|Badlands News Brief]] covering June 21, 2023, Ashe in America wrote on two items. On [[vladimir-putin|Vladimir Putin]]'s [[rs-28-sarmat|Satan II]] announcement she declared a return to the Cold War, noting Putin's posturing of readiness for nuclear war while cautioning that "nothing is as it seems" and that warmongers had just received talking points for the next multibillion-dollar aid package.[{n}] On [[joe-biden|Joe Biden]] calling [[xi-jinping|Xi Jinping]] a dictator she argued the remark read as "a dementia moment" rather than an insult, described the surrounding campaign speech as a rambling, muddled mess, and concluded that the apparent Biden–Xi tension is a fabricated cover for Biden being a CCP puppet.[{n}]"""

P["entities/burning-bright"] = """## Commentary on Biden foreign policy (June 2023)

In the [[badlands-news-brief|Badlands News Brief]] covering June 21, 2023, Burning Bright argued that the escalatory stance of the Biden administration on the world stage was finally seeping into the mainstream.[{n}] He listed [[antony-blinken|Blinken]]'s Beijing meeting being followed by [[xi-jinping|Xi]]'s warning that Washington must choose between "cooperation and conflict"; [[china|China]] pursuing a military-infrastructure strategy in [[cuba|Cuba]] mirroring the US posture in [[taiwan|Taiwan]]; the administration refusing to recognize Taiwan as an independent state; and the administration courting [[iran|Iran]] despite its own [[state-department|State Department]] designating it a State Sponsor of Terrorism, while straining relations with [[saudi-arabia|Saudi Arabia]].[{n}] He added that US-supplied missiles were being used in [[ukraine|Ukraine]]'s failing counteroffensive, prompting sharper Kremlin rhetoric, and that [[russia|Russia]] was calling the United States a state sponsor of Nazism — concluding that "things are going pretty well from an Exposure perspective."[{n}]"""

P["entities/badlands-news-brief"] = """## June 22, 2023 edition

The edition published June 22, 2023, titled "Durham's Dance, Putin's Warning and Xi's Rebuke," covered news from Wednesday, June 21, 2023.[{n}] Its items were [[john-durham|John Durham]]'s [[durham-house-judiciary-testimony-2023|House Judiciary testimony]]; [[vladimir-putin|Vladimir Putin]]'s warning that [[rs-28-sarmat|Satan II]] missiles would be placed on combat duty; the 19-year sentencing of former [[cnn|CNN]] producer [[john-griffin|John Griffin]]; and [[joe-biden|Joe Biden]] calling [[xi-jinping|Xi Jinping]] a dictator.[{n}] Commentary came from [[ryan-delarme|Ryan DeLarme]], [[justin-deschamps|Justin Deschamps]], [[ashe-in-america|Ashe in America]] and [[burning-bright|Burning Bright]].[{n}]"""

P["entities/robert-mueller"] = """## Invoked at the Durham hearing (June 2023)

At the [[durham-house-judiciary-testimony-2023|June 21, 2023 House Judiciary hearing]], Democratic members repeatedly contrasted [[john-durham|John Durham]]'s investigation with Mueller's, asking why Durham's probe had cost more than $6 million yet produced far fewer indictments.[{n}] [[adam-schiff|Adam Schiff]] continued to point to the alleged legitimacy of the Mueller report and the Russia collusion narrative, a position [[badlands-media|Badlands Media]] commentators said the [[durham-report|Durham Report]]'s treatment of the [[steele-dossier|Steele dossier]] had undermined.[{n}]"""
def run(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True)

created = 0
for rel, body in []:
    slug = rel.split("/")[1]
    path = "%s/wiki/%s.md" % (BASE, rel)
    if not os.path.exists(path):
        print("MISSING", path); continue
    r = run('python "%s" acquire %s' % (LOCK, slug))
    if r.returncode != 0:
        print("LOCKFAIL", slug, r.stdout.strip(), r.stderr.strip()); continue
    try:
        fn = tempfile.mktemp(suffix=".txt")
        io.open(fn, "w", encoding="utf-8").write(body)
        r2 = run('python "%s" "%s" "%s" "%s" "%s"' % (HELP, path, RAW, REF, fn))
        print(rel, r2.stdout.strip(), r2.stderr.strip()[-200:])
    finally:
        run('python "%s" release %s' % (LOCK, slug))
