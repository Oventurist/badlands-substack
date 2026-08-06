import subprocess, sys, time, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from merge_bfb import merge
LOCK = r"C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py"

ITEMS = [
("entities/donald-trump.md", "Bicameral ballot cases and December 2023 legal front", """
On December 27, 2023, the [[colorado-republican-party|Colorado Republican Party]] appealed to the [[supreme-court-of-the-united-states|U.S. Supreme Court]] the Colorado high court's 4-3 ruling that Trump is ineligible for the presidency under the insurrection clause, an appeal that also had the effect of extending the stay of that ruling.[n] Trump said he intended to file his own appeal to the nation's highest court as well.[n] The same day, the [[michigan-supreme-court|Michigan Supreme Court]] rejected a parallel "insurrectionist ban" challenge and kept Trump on Michigan's 2024 primary ballot, producing dueling state outcomes that heightened the stakes of Supreme Court review.[n]

Also on December 27, special counsel [[jack-smith|Jack Smith]] moved to bar Trump from advancing theories of selective or vindictive prosecution or otherwise injecting politics into his federal election interference trial.[n] Commentary from [[ashe-in-america|Ashe in America]] noted the tension in seeking a trial date the day before Super Tuesday while simultaneously seeking to restrict the candidate-defendant's speech.[n]

Separately, [[donald-trump-jr|Donald Trump Jr.]] said he would go to "great lengths" to prevent [[nikki-haley|Nikki Haley]] from being selected as his father's running mate, calling her a "puppet of the establishment in Washington, D.C."[n]
"""),
("entities/colorado-republican-party.md", "December 2023 Supreme Court appeal", """
On Wednesday, December 27, 2023, the Colorado Republican Party appealed the Colorado Supreme Court's decision holding former President [[donald-trump|Donald Trump]] ineligible for the presidency, taking the first step toward a showdown at the [[supreme-court-of-the-united-states|U.S. Supreme Court]] over a 155-year-old constitutional provision barring from office those who "engaged in insurrection."[n] The immediate effect of the appeal was to extend the stay of the 4-3 state ruling, which had been paused until January 4 — the day before Colorado's primary ballots were due at the printer — or until any appeal to the U.S. Supreme Court concluded.[n]

The party's attorneys wrote that "the Colorado Supreme Court has removed the leading Republican candidate from the primary and general ballots, fundamentally changing the course of American democracy."[n] Commentary from [[ashe-in-america|Ashe in America]] described the appeal by state chairman Dave Williams and the party as both expected and encouraging, and noted that Washington-based lawfare groups favour filing such suits in Colorado because they view its courts as sympathetic.[n]
"""),
("entities/colorado-supreme-court.md", "Appeal of the December 2023 disqualification ruling", """
The Colorado Supreme Court's 4-3 decision finding former President [[donald-trump|Donald Trump]] ineligible for the presidency was appealed to the [[supreme-court-of-the-united-states|U.S. Supreme Court]] by the [[colorado-republican-party|Colorado Republican Party]] on December 27, 2023, which extended the stay the court had already placed on its own ruling until January 4 or the conclusion of federal appellate review.[n] The court had ruled that Section 3 of the [[fourteenth-amendment|Fourteenth Amendment]] applied to Trump because of his role in the January 6, 2021 attack on the U.S. Capitol, which was intended to stop certification of [[joe-biden|Joe Biden]]'s 2020 victory; it was the first time in history the provision had been used to block a presidential contender's campaign.[n] Two days earlier the [[michigan-supreme-court|Michigan Supreme Court]] had reached the opposite result on procedural grounds, leaving the two states in direct conflict.[n]
"""),
("concepts/colorado-ballot-disqualification-case.md", "Appeals and the Michigan contrast (December 2023)", """
The [[colorado-republican-party|Colorado Republican Party]] appealed the state supreme court's disqualification ruling to the [[supreme-court-of-the-united-states|U.S. Supreme Court]] on December 27, 2023, extending the stay of the 4-3 decision past the January 4 ballot-printing deadline, with [[donald-trump|Trump]]'s own appeal expected to follow.[n] The U.S. Supreme Court had never ruled on Section 3 of the [[fourteenth-amendment|Fourteenth Amendment]], added after the Civil War to prevent former Confederates from returning to government.[n]

[[ashe-in-america|Ashe in America]] observed that the Colorado case was considered the challenge with the greatest chance of success because it was brought by a Washington, D.C.-based liberal group with ample legal resources, and that Trump attorney [[scott-gessler|Scott Gessler]] had argued a political work product such as the [[january-6-committee|January 6 Committee]] report cannot yield an actionable legal finding of insurrection — especially given the Senate acquittal — without engaging the report's substance.[n] Possible off-ramps for the justices included finding a lack of due process, treating the Senate acquittal as due process, or holding that Section 3 does not reach the presidency.[n] The contrary ruling by the [[michigan-supreme-court|Michigan Supreme Court]] the same week made Supreme Court resolution more urgent.[n]
"""),
("entities/jack-smith.md", "December 2023 motion to limit Trump's trial arguments", """
On December 27, 2023, special counsel Jack Smith filed a motion in [[donald-trump|Donald Trump]]'s federal election interference case seeking to block him from making political arguments or referring to conspiracy theories during the trial.[n] The filing stated that "the court should not permit the defendant to turn the courtroom into a forum in which he propagates irrelevant disinformation, and should reject his attempt to inject politics into this proceeding," and asked the court to prohibit Trump from advancing a theory of selective or vindictive prosecution.[n]

[[ashe-in-america|Ashe in America]] criticised the motion as an attempt to silence a candidate while prosecuting him mid-campaign, noting that Smith sought to begin the trial the day before Super Tuesday, and invoked an October 2022 New York Times/Siena College finding that 68% of likely U.S. voters considered government corruption the greatest threat to American democracy.[n]
"""),
("entities/john-fetterman.md", "December 2023 rebuke of James Carville", """
In a Politico interview published in late December 2023, Senator John Fetterman (D-Pa.) unprompted told Democratic strategist [[james-carville|James Carville]] to "shut the f---up" over his criticisms of President [[joe-biden|Joe Biden]] and Biden's odds in the 2024 race.[n] Fetterman said Carville "hasn't been relevant since grunge was a thing" and defended Biden as "an incredibly strong and decent and excellent president" facing "an incredibly difficult circumstance."[n] Carville had earlier in 2023 warned Democrats that Biden could lose to [[donald-trump|Donald Trump]].[n]

[[ashe-in-america|Ashe in America]] wrote that the episode dominated the week in narrative impact and produced genuine cognitive dissonance on the right — catharsis at seeing Carville publicly told off, undercut by the fact that the rebuke defended Biden — while both men's public sniping broke the usual pattern of Democratic election-year unity.[n]
"""),
("entities/xi-jinping.md", "December 2023 vow on Taiwan", """
Weeks before [[taiwan|Taiwan]]'s January 2024 elections, Xi Jinping vowed to use "any means" to stop Taiwan seceding from China.[n] On December 27, 2023, Beijing warned of further trade sanctions on Taiwan if the ruling [[democratic-progressive-party|Democratic Progressive Party]] "stubbornly" persisted in supporting independence, a message delivered by [[taiwan-affairs-office|Taiwan Affairs Office]] spokesman Chen Binhua.[n]
"""),
("entities/taiwan.md", "December 2023 Chinese pressure ahead of the January 2024 elections", """
With Taiwan just over two weeks from key elections in January 2024, fresh threats from Beijing drew increasing global media attention.[n] On December 27, 2023, China warned of further trade sanctions on Taiwan should the ruling [[democratic-progressive-party|Democratic Progressive Party]] continue to support independence, with [[taiwan-affairs-office|Taiwan Affairs Office]] spokesman Chen Binhua saying Beijing would support "relevant departments taking further measures in accordance with the regulations" if the DPP refused "to repent."[n] The warnings accompanied [[xi-jinping|Xi Jinping]]'s pledge to use "any means" to prevent secession.[n]
"""),
("entities/new-york-times.md", "December 2023 copyright suit against Microsoft and OpenAI", """
On December 27, 2023, The New York Times sued [[microsoft|Microsoft]] and [[openai|OpenAI]] for copyright infringement and misuse of its intellectual property, seeking "billions of dollars in statutory and actual damages" for the "unlawful copying and use of The Times's uniquely valuable works."[n] The complaint accused the defendants of building a business model on "mass copyright infringement," alleging their AI systems "exploit and, in many cases, retain large portions of the copyrightable expression contained in those works."[n] The case is described in more detail at [[new-york-times-v-microsoft-and-openai|New York Times v. Microsoft and OpenAI]].[n]
"""),
("entities/openai.md", "New York Times copyright lawsuit (December 2023)", """
On December 27, 2023, [[new-york-times|The New York Times]] filed suit against OpenAI and [[microsoft|Microsoft]], accusing the makers of [[chatgpt|ChatGPT]] of copyright infringement and of abusing the newspaper's intellectual property, and seeking billions of dollars in statutory and actual damages.[n] The filing characterised the companies' business model as founded on "mass copyright infringement."[n] See [[new-york-times-v-microsoft-and-openai|New York Times v. Microsoft and OpenAI]].[n]
"""),
("entities/microsoft.md", "New York Times copyright lawsuit (December 2023)", """
On December 27, 2023, [[new-york-times|The New York Times]] named Microsoft alongside [[openai|OpenAI]] in a copyright infringement lawsuit over the training and output of AI systems including [[chatgpt|ChatGPT]], seeking billions of dollars in statutory and actual damages.[n] See [[new-york-times-v-microsoft-and-openai|New York Times v. Microsoft and OpenAI]].[n]
"""),
("entities/chatgpt.md", "New York Times lawsuit (December 2023)", """
[[new-york-times|The New York Times]] sued [[openai|OpenAI]], the company behind ChatGPT, and [[microsoft|Microsoft]] on December 27, 2023, alleging that their AI systems "exploit and, in many cases, retain large portions of the copyrightable expression" contained in the newspaper's works.[n] See [[new-york-times-v-microsoft-and-openai|New York Times v. Microsoft and OpenAI]].[n]
"""),
("entities/hunter-biden.md", "December 2023 subpoena defiance and White House document request", """
Hunter Biden defied a subpoena from the [[house-oversight-committee|House Oversight Committee]] for a closed-door deposition scheduled for December 13, 2023, appearing briefly outside the U.S. Capitol to reiterate that he would answer questions only in a public setting.[n] On December 27, the Republican leaders of the Oversight and [[house-judiciary-committee|Judiciary]] committees asked the [[white-house|White House]] to turn over information about President [[joe-biden|Joe Biden]]'s alleged involvement in that decision, expanding the impeachment inquiry.[n] In a letter to White House counsel Edward Siskel, Representatives [[james-comer|James Comer]] and [[jim-jordan|Jim Jordan]] requested documents and communications between staff in the Executive Office of the President and Hunter Biden or his lawyers regarding the deposition.[n] Press secretary [[karine-jean-pierre|Karine Jean-Pierre]] told reporters that day that the president was "familiar with" what his son intended to say in his statement.[n]
"""),
("entities/james-comer.md", "December 2023 letter on Hunter Biden's subpoena defiance", """
On December 27, 2023, Representative James Comer, chairing the [[house-oversight-committee|House Oversight Committee]], joined [[jim-jordan|Jim Jordan]] in writing to [[white-house|White House]] counsel Edward Siskel to request documents and communications between Executive Office of the President staff and [[hunter-biden|Hunter Biden]] or his lawyers concerning his defied December 13 deposition, expanding the impeachment inquiry into President [[joe-biden|Joe Biden]].[n]
"""),
("entities/jim-jordan.md", "December 2023 letter on Hunter Biden's subpoena defiance", """
On December 27, 2023, Representative Jim Jordan of the [[house-judiciary-committee|House Judiciary Committee]] joined [[james-comer|James Comer]] in asking the [[white-house|White House]] for information about President [[joe-biden|Joe Biden]]'s alleged involvement in [[hunter-biden|Hunter Biden]]'s refusal to comply with a congressional subpoena for a deposition.[n]
"""),
("entities/house-oversight-committee.md", "December 2023 Hunter Biden deposition standoff", """
[[hunter-biden|Hunter Biden]] defied the committee's subpoena for a closed-door interview scheduled for December 13, 2023, appearing outside the U.S. Capitol to say he would testify only publicly.[n] On December 27, committee chairman [[james-comer|James Comer]], together with [[jim-jordan|Jim Jordan]] of the [[house-judiciary-committee|Judiciary Committee]], requested White House records bearing on President [[joe-biden|Joe Biden]]'s alleged involvement in that decision, expanding the impeachment inquiry.[n]
"""),
("entities/house-judiciary-committee.md", "December 2023 request for White House records", """
On December 27, 2023, the Judiciary Committee's chairman [[jim-jordan|Jim Jordan]] and Oversight chairman [[james-comer|James Comer]] wrote to [[white-house|White House]] counsel Edward Siskel seeking documents and communications concerning [[hunter-biden|Hunter Biden]]'s refusal to sit for a closed-door deposition, as part of the expanding impeachment inquiry into President [[joe-biden|Joe Biden]].[n]
"""),
("entities/white-house.md", "December 2023 congressional document request", """
On December 27, 2023, the Republican leaders of the [[house-oversight-committee|House Oversight]] and [[house-judiciary-committee|Judiciary]] Committees asked the White House to turn over information about President [[joe-biden|Joe Biden]]'s alleged involvement in his son [[hunter-biden|Hunter Biden]]'s decision not to comply with a congressional subpoena.[n] The letter was addressed to White House counsel Edward Siskel and sought communications between Executive Office of the President staff and Hunter Biden or his lawyers.[n] Press secretary [[karine-jean-pierre|Karine Jean-Pierre]] had told reporters that the president was "familiar with" what his son planned to say in his December 13 statement.[n]
"""),
("entities/karine-jean-pierre.md", "December 2023 remarks on Hunter Biden's statement", """
On December 13, 2023, after [[hunter-biden|Hunter Biden]] defied a congressional subpoena and spoke outside the U.S. Capitol instead, White House press secretary Karine Jean-Pierre told reporters that President [[joe-biden|Joe Biden]] was "familiar with" what his son was going to say in his statement — a remark later cited by House Republicans in their December 27 request for [[white-house|White House]] records.[n]
"""),
("entities/joe-biden.md", "Late December 2023: impeachment inquiry and intraparty criticism", """
House Republicans expanded their impeachment inquiry on December 27, 2023, asking the [[white-house|White House]] for records concerning the president's alleged involvement in [[hunter-biden|Hunter Biden]]'s refusal to comply with a congressional subpoena.[n] The same week, Senator [[john-fetterman|John Fetterman]] publicly defended Biden as "an incredibly strong and decent and excellent president" while telling strategist [[james-carville|James Carville]] — who had warned that Biden could lose to [[donald-trump|Donald Trump]] in 2024 — to "shut the f---up."[n]
"""),
("entities/nikki-haley.md", "December 2023 opposition from Donald Trump Jr.", """
In a Newsmax interview aired December 25, 2023, [[donald-trump-jr|Donald Trump Jr.]] said he "wouldn't have" Nikki Haley as his father's running mate and would "go to great lengths to make sure that doesn't happen."[n] The remarks followed footage of Haley — a former U.S. ambassador to the United Nations and a GOP presidential candidate — telling ABC News Live Prime that "I don't think he should be president" and that "Donald Trump brings us chaos."[n] Trump Jr. accused her of wanting "never-ending wars" and of being "a puppet of the establishment in Washington, D.C.," and "the new favorite candidate of the billionaire class."[n]
"""),
("entities/donald-trump-jr.md", "December 2023 opposition to a Haley vice-presidential pick", """
Donald Trump Jr. voiced strong opposition to the prospect of [[nikki-haley|Nikki Haley]] being tapped as his father's running mate in the 2024 election, telling Newsmax on December 25, 2023 that he "wouldn't have her" and would "go to great lengths to make sure that doesn't happen."[n] He characterised Haley as a proponent of "never-ending wars," "a puppet of the establishment in Washington, D.C." and "the new favorite candidate of the billionaire class," comparing their influence-buying to that exercised in academia.[n]
"""),
("entities/credit-suisse.md", "Job losses following the UBS takeover", """
The takeover of Credit Suisse by [[ubs|UBS]] had by the end of 2023 already resulted in at least 13,000 fewer roles at the combined bank, with further large redundancy rounds expected in the year ahead.[n] The reduction formed a substantial part of the [[2023-global-bank-job-cuts|more than 60,000 jobs cut by global banks in 2023]].[n]
"""),
("entities/ubs.md", "Headcount reductions after absorbing Credit Suisse", """
UBS's takeover of [[credit-suisse|Credit Suisse]] had already produced at least 13,000 fewer roles at the combined bank by the end of 2023, with further big redundancy rounds expected, contributing to [[2023-global-bank-job-cuts|the heaviest year of banking job cuts since the financial crisis]].[n]
"""),
("entities/fourteenth-amendment.md", "December 2023 ballot litigation", ""),
("concepts/fourteenth-amendment.md", "Section 3 in the December 2023 ballot cases", """
The [[supreme-court-of-the-united-states|U.S. Supreme Court]] had never ruled on Section 3 of the Fourteenth Amendment, which was added after the Civil War to prevent former Confederates from returning to government and provides that anyone who swore an oath to "support" the Constitution and then "engaged in insurrection" against it cannot hold government office.[n] In December 2023 the [[colorado-supreme-court|Colorado Supreme Court]] held that the provision applied to [[donald-trump|Donald Trump]] over his role in the January 6, 2021 attack on the U.S. Capitol — the first time in history it was used to block a presidential contender — while the [[michigan-supreme-court|Michigan Supreme Court]] declined to reach the question and kept him on the ballot.[n]
"""),
("entities/badlands-media.md", "Badlands News Brief: Bicameral Trump Cases & The Fettermen Speaketh", """
In the December 28, 2023 edition of the Badlands News Brief, covering the news of Wednesday, December 27, the team compiled items on the [[colorado-ballot-disqualification-case|Colorado ballot appeal]], Chinese pressure on [[taiwan|Taiwan]], [[jack-smith|Jack Smith]]'s motion to limit trial speech, the [[new-york-times-v-microsoft-and-openai|New York Times AI copyright suit]], and Senator [[john-fetterman|John Fetterman]]'s attack on [[james-carville|James Carville]], with original commentary from [[ashe-in-america|Ashe in America]] and [[burning-bright|Burning Bright]].[n] Bonus items covered the House GOP's [[hunter-biden|Hunter Biden]] document request, the [[michigan-supreme-court|Michigan Supreme Court]] ruling, [[2023-global-bank-job-cuts|global bank job cuts]], and [[donald-trump-jr|Donald Trump Jr.]]'s opposition to [[nikki-haley|Nikki Haley]] as a running mate.[n]
"""),
("entities/ashe-in-america.md", "Commentary in the December 28, 2023 news brief", """
Writing in the December 28, 2023 [[badlands-media|Badlands Media]] news brief, Ashe in America argued that Washington, D.C.-based lawfare groups deliberately file ballot-disqualification suits in Colorado because they regard its courts as sympathetic, and welcomed the [[colorado-republican-party|Colorado Republican Party]]'s appeal.[n] She noted that [[donald-trump|Trump]] attorney [[scott-gessler|Scott Gessler]] had argued that a political work product cannot produce an actionable legal finding of insurrection, particularly alongside a Senate acquittal, without contesting the report's substance.[n] On [[jack-smith|Jack Smith]]'s motion she asked whether the presumption of innocence still applied, citing an October 2022 New York Times/Siena College poll in which 68% of likely voters named government corruption the greatest threat to democracy.[n] On the [[john-fetterman|Fetterman]]-[[james-carville|Carville]] clash she described the "cognitive dissonance" it produced for conservatives and read it as a welcome crack in Democratic election-year unity.[n]
"""),
("entities/burning-bright.md", "Commentary in the December 28, 2023 news brief", """
In the December 28, 2023 [[badlands-media|Badlands Media]] news brief, Burning Bright described escalating China-[[taiwan|Taiwan]] tensions as an instance of the "Shark Fin Template" within the War of Stories, comparing the narrative groundwork to that laid before the Russia-Ukraine war went hot in 2022, and argued that global chaos during the Biden era strengthens the bipartisan mandate for [[donald-trump|Donald Trump]]'s return as a builder of peace.[n] On the [[new-york-times-v-microsoft-and-openai|New York Times suit against OpenAI and Microsoft]] he described an "Ouroboros" pattern consuming establishment media, politics and culture since roughly 2016, and told creatives losing market share to AI to "be better, be human."[n]
"""),
("entities/scott-gessler.md", "Argument in the Colorado disqualification appeal", """
Scott Gessler, representing [[donald-trump|Donald Trump]] in the [[colorado-ballot-disqualification-case|Colorado ballot disqualification case]], argued that a political work product — the [[january-6-committee|January 6 Committee]] report — cannot result in an actionable legal finding of insurrection, especially when accompanied by a Senate acquittal, but did not contest the substance of the report itself.[n] Commentary by [[ashe-in-america|Ashe in America]] questioned whether that approach would suffice to persuade five justices that a finding of insurrection was improper absent due process.[n]
"""),
("entities/supreme-court-of-the-united-states.md", "December 2023 Trump ballot appeals", """
Following the [[colorado-supreme-court|Colorado Supreme Court]]'s 4-3 disqualification ruling, the [[colorado-republican-party|Colorado Republican Party]] appealed to the U.S. Supreme Court on December 27, 2023, with [[donald-trump|Trump]]'s own appeal expected shortly after.[n] The Court had never ruled on Section 3 of the [[fourteenth-amendment|Fourteenth Amendment]], and the contrary decision issued the same week by the [[michigan-supreme-court|Michigan Supreme Court]] made a definitive resolution more pressing as the 2024 primaries approached.[n] Observers expected the justices might dodge the insurrection question outright.[n]
"""),
("entities/january-6-committee.md", "Role in the 2023 ballot disqualification litigation", """
The committee's report supplied the evidentiary backdrop for the state ballot-disqualification suits against [[donald-trump|Donald Trump]]; his attorney [[scott-gessler|Scott Gessler]] argued in the [[colorado-ballot-disqualification-case|Colorado case]] that such a political work product cannot yield an actionable legal finding of insurrection, while declining to contest the report's substance.[n]
"""),
]

for rel, heading, body in ITEMS:
    path = os.path.join(r"C:/Users/14053/hermes-projects/badlands-substack/wiki", rel)
    if not os.path.exists(path):
        print("SKIP-MISSING", rel); continue
    if not body.strip():
        continue
    slug = os.path.splitext(os.path.basename(rel))[0]
    ok = False
    for _ in range(12):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True)
        if r.returncode == 0:
            ok = True; break
        time.sleep(4)
    if not ok:
        print("LOCK-FAIL", slug); continue
    try:
        merge(rel, heading, body)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True)
