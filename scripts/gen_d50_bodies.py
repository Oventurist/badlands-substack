import io, os
os.chdir(r"C:/Users/14053/hermes-projects/badlands-substack/scripts/sec/d50")
f = {
"republican-national-committee": """## Arizona voting law emergency application (2024)

The RNC filed an emergency request with the [[supreme-court-of-the-united-states|Supreme Court]] seeking to revive an Arizona law strengthening proof-of-citizenship requirements for voting, and on August 22, 2024 the justices partially granted it in a 5-4 vote, reinstating the requirement that officials reject state voter registration forms lacking proof of citizenship.[n] The Court denied the committee's other request.[n] RNC Chairman [[michael-whatley|Michael Whatley]] hailed the order on X as "a seismic win in the fight to stop non-citizens from voting - more to come!"[n]
""",
"michael-whatley": """## Arizona voting law ruling (2024)

As chairman of the [[republican-national-committee|Republican National Committee]], Whatley celebrated the [[supreme-court-of-the-united-states|Supreme Court]]'s August 22, 2024 order partially reinstating Arizona's proof-of-citizenship voter registration requirement at the RNC's emergency request, writing on X that it was "a seismic win in the fight to stop non-citizens from voting - more to come!"[n]
""",
"vladimir-putin": """## Badlands framing during the 2024 US election

Badlands commentary in August 2024 highlighted several Putin speeches delivered since the start of the Ukraine war, including one in February 2023 in which he accused the West of being run by perverts and satanists, and another in February 2024 in which he argued that those adversaries could not defeat Russia on the battlefield and so resorted to information warfare, accused them of attempting to normalize pedophilia, and urged them to read scripture.[n] The brief paired these remarks with [[donald-trump|Donald Trump]]'s pledge to seek the death penalty for child rapists, arguing that Putin was cutting elite supply lines in Ukraine while Trump threatened legal execution, and casting both as evidence of the [[sovereign-alliance|Sovereign Alliance]] in motion.[n] It also cited a Russian military recruitment video showing soldiers of different faiths praying before battle and footage of Putin in the Chechen Republic kissing the Quran.[n]

Separately, the Justice Department's 2024 investigation of Americans tied to Russian state television was reported as an effort to counter Kremlin interference in the US election, with the [[fbi|FBI]] searching the homes of [[scott-ritter|Scott Ritter]] and [[dimitri-simes|Dimitri Simes]].[n]
""",
"ramzan-kadyrov": """## Ritter visit to Grozny (2024)

In January 2024 former UN weapons inspector [[scott-ritter|Scott Ritter]] visited the Russian republic of Chechnya and, in an address in the capital Grozny, offered Kadyrov and his fighters "friendship" with the United States.[n] The visit was cited in reporting on the US Justice Department's 2024 investigation of Americans with ties to Russian state media.[n]
""",
"joe-biden": """## Censorship litigation and 2024 campaign context

A federal judge ruled on August 20, 2024 that [[robert-f-kennedy-jr|Robert F. Kennedy Jr.]] could continue pursuing his censorship lawsuit against the Biden administration, notwithstanding the [[supreme-court-of-the-united-states|Supreme Court]]'s June 2024 holding in [[murthy-v-missouri|Murthy v. Missouri]] that other plaintiffs lacked standing.[n] Judge [[terry-doughty|Terry Doughty]] found "ample evidence" that Kennedy had been censored at the direction of government actors and a "substantial risk" that it would continue.[n] In the same month, [[donald-trump|Donald Trump]] declined the intelligence briefings customarily offered to presidential nominees while criticizing Biden and Vice President [[kamala-harris|Kamala Harris]], and attacked low arrest rates under their administration.[n]
""",
"jack-dorsey": """## Named in X shareholder filing (2024)

Dorsey, the founder and former chief executive of [[twitter|Twitter]], was among the shareholders identified when a federal judge ordered [[x-corp|X]] to unseal the list of investors in X Holdings Corp. in August 2024.[n] [[burning-bright|Burning Bright]] described him as "one of the most enigmatic and interesting figures in the Info War," suggesting he could be playing a much larger role behind the scenes than most observers believe.[n]
""",
"andreessen-horowitz": """## X shareholder disclosure (2024)

The venture capital firm was named among the nearly 100 entities holding a stake in [[x-corp|X]] when a federal judge ordered the shareholder list of X Holdings Corp. unsealed in August 2024, confirming its role in financing [[elon-musk|Elon Musk]]'s $44 billion purchase of [[twitter|Twitter]].[n] Badlands noted that Andreessen and Horowitz had recently endorsed [[donald-trump|Donald Trump]], reading the timing of the disclosure as a deliberate signal in the closing stretch of the 2024 campaign.[n]
""",
"alwaleed-bin-talal": """## X shareholder disclosure (2024)

The Saudi prince was listed among the investors in X Holdings Corp. when a federal judge ordered [[x-corp|X]] to unseal its shareholder list in August 2024.[n] [[burning-bright|Burning Bright]] observed that Alwaleed has not been in control of his own assets since 2017, when they were seized by [[mohammed-bin-salman|Mohammed bin Salman]], whom Badlands identifies as a [[sovereign-alliance|Sovereign Alliance]] player.[n]
""",
"8vc": """## X shareholder disclosure (2024)

8VC, the venture capital firm co-founded by [[joe-lonsdale|Joe Lonsdale]], was named among the stakeholders in X Holdings Corp. when a federal court ordered [[x-corp|X]] to unseal its investor list in August 2024.[n] Coverage highlighted Lonsdale's role as a co-founder of the intelligence contractor and data analysis platform [[palantir|Palantir]].[n]
""",
"joe-lonsdale": """## X shareholder disclosure (2024)

Lonsdale's venture firm [[8vc|8VC]] appeared on the shareholder list of X Holdings Corp. unsealed by court order in August 2024, and reporting identified him as a co-founder of the intelligence contractor and data analysis platform [[palantir|Palantir]].[n] [[burning-bright|Burning Bright]] noted that Lonsdale is directly affiliated with [[peter-thiel|Peter Thiel]], whom Badlands links to the Silicon Valley Bank and First Republic collapses.[n]
""",
"peter-thiel": """## Association with X investors (2024)

In commentary on the August 2024 unsealing of [[x-corp|X]]'s shareholder list, [[burning-bright|Burning Bright]] noted that named investor [[joe-lonsdale|Joe Lonsdale]] - co-founder of [[8vc|8VC]] and of [[palantir|Palantir]] - is directly affiliated with Thiel, whom Badlands credits with kicking off the Silicon Valley Bank and First Republic collapses.[n]
""",
"palantir": """## Mentioned in X shareholder coverage (2024)

Reporting on the August 2024 court-ordered unsealing of [[x-corp|X]]'s shareholder list identified Palantir as the intelligence contractor and data analysis platform co-founded by [[joe-lonsdale|Joe Lonsdale]], whose venture firm [[8vc|8VC]] held a stake in X Holdings Corp.[n]
""",
"sean-combs": """## Fund linked to X shareholder filing (2024)

A fund linked to Combs appeared among the nearly 100 entities named when a federal judge ordered [[x-corp|X]] to unseal the shareholder list of X Holdings Corp. in August 2024, placing the hip-hop mogul alongside prominent Silicon Valley venture capitalists in the financing of [[elon-musk|Elon Musk]]'s purchase of [[twitter|Twitter]].[n]
""",
"twitter": """## Shareholder list unsealed (2024)

In August 2024 a federal judge ordered [[x-corp|X]] to unseal the roster of shareholders in X Holdings Corp., providing the first official public accounting of the investors who backed [[elon-musk|Elon Musk]]'s $44 billion acquisition of Twitter in October 2022.[n] Twitter founder and former chief executive [[jack-dorsey|Jack Dorsey]] was among the named investors, along with [[andreessen-horowitz|Andreessen Horowitz]], [[alwaleed-bin-talal|Alwaleed bin Talal]] and [[8vc|8VC]].[n]
""",
"robby-starbuck": """## Jack Daniel's campaign (2024)

In an overnight post on X in August 2024, Starbuck announced that Jack Daniel's would be the next target of his campaign exposing internal DEI programs.[n] Unlike his previous reveals, the whiskey brand's parent company, Brown-Forman Corp., had been tipped off well in advance and moved to cut its woke training before the expose landed; Starbuck said, "They must have been tipped off by us going through employee LinkedIn pages," and posted an email from company executives to employees describing the "evolving" situation around its DEI program.[n] [[zerohedge|ZeroHedge]] reported that Starbuck's anti-woke crusade had already led Harley-Davidson Inc., Tractor Supply Co. and Deere & Co. to reverse or eliminate [[diversity-equity-and-inclusion|diversity, equity and inclusion]] programs.[n]
""",
"john-deere": """## Reversal of DEI programs (2024)

Deere & Co. was among the companies that reversed or eliminated [[diversity-equity-and-inclusion|diversity, equity and inclusion]] programs following pressure from commentator and filmmaker [[robby-starbuck|Robby Starbuck]]'s anti-woke campaign, alongside Harley-Davidson Inc. and Tractor Supply Co.[n]
""",
"diversity-equity-and-inclusion": """## Corporate retreats under the Starbuck campaign (2024)

By August 2024 the anti-woke campaign waged by commentator and filmmaker [[robby-starbuck|Robby Starbuck]] had led Harley-Davidson Inc., Tractor Supply Co. and Deere & Co. to reverse or entirely eliminate diversity, equity and inclusion programs.[n] When Starbuck announced Jack Daniel's as his next target, its parent Brown-Forman Corp. had been tipped off in advance and circulated an email to employees describing the "evolving" situation around its DEI program; Starbuck attributed the leak to his team's review of employee LinkedIn pages.[n]

[[ashe-in-america|Ashe in America]] framed DEI as, after climate policy, one of globalism's most powerful munitions - a form of "weaponized empathy" - and cited a March 2024 Rasmussen survey finding that just 25% of American adults think DEI programs make companies better, arguing that the more Americans learn about DEI the more they reject it.[n] The commentary held that both major parties propagate globalism and demonize nationalism, that more than 30% of Americans reject the two-party construct by identifying as independent or third party, and that consumer pressure had shown "the customer is, actually, always right."[n]
""",
"zerohedge": """## Coverage of the Jack Daniel's DEI story (2024)

ZeroHedge reported in August 2024 that Jack Daniel's parent company Brown-Forman Corp. had cut woke training ahead of an expose by commentator [[robby-starbuck|Robby Starbuck]], quoting his claim that "they must have been tipped off by us going through employee LinkedIn pages."[n] The outlet framed the story within its argument that "the toxic woke mind virus has infected corporate America, transforming companies into left-wing activists," and noted that Starbuck's crusade had already pushed Harley-Davidson Inc., Tractor Supply Co. and Deere & Co. to roll back [[diversity-equity-and-inclusion|DEI]] programs.[n]
""",
"the-atlantic": """## Coverage of Harris's DNC speech (2024)

The Atlantic covered [[kamala-harris|Kamala Harris]]'s August 22, 2024 acceptance speech at the [[2024-democratic-national-convention|Democratic National Convention]], reporting that she framed the election as a "fight for America's future" while offering few policy specifics beyond the derailed bipartisan immigration bill, ending the housing shortage, and support for [[nato|NATO]].[n] The correspondent, who had briefly worked for Harris's 2019 primary campaign before becoming a journalist, wrote that over four days among Democrats in Chicago he did not hear the words "white paper" or "study" once, and heard more about [[donald-trump|Donald Trump]]'s [[project-2025|Project 2025]] than about Harris's own agenda.[n] [[burning-bright|Burning Bright]] noted that the piece's original title, "Kamala Harris Wants to Be Everything to Everyone," had been changed.[n]
""",
"daily-mail": """## Trump intelligence-briefing interview (2024)

DailyMail.com published an exclusive interview in August 2024 in which [[donald-trump|Donald Trump]] said he would not accept the intelligence briefings customarily offered to presidential nominees, for fear of being accused of leaking classified information.[n] Trump told the outlet he could get the briefings if he wanted them but sensed a trap, saying, "I don't want them, because, number one, I know what's happening."[n]
""",
"newsweek": """## Reporting on the DOJ Russia-media probe (2024)

Newsweek reported in August 2024, citing the [[new-york-times|New York Times]], that Americans with ties to [[vladimir-putin|Vladimir Putin]]'s state TV networks were under investigation by Attorney General [[merrick-garland|Merrick Garland]]'s [[department-of-justice|Department of Justice]] as part of a sweeping push to quash potential Kremlin interference ahead of the 2024 election.[n] The article detailed [[fbi|FBI]] searches of the homes of [[scott-ritter|Scott Ritter]] and [[dimitri-simes|Dimitri Simes]] and noted Ritter's January 2024 visit to Chechnya to meet [[ramzan-kadyrov|Ramzan Kadyrov]].[n]
""",
"new-york-post": """## Trump crime platform coverage (2024)

The New York Post reported on August 20, 2024 that [[donald-trump|Donald Trump]]'s campaign was rolling out plans to get tougher on crime, including pursuing the death penalty for child rapists, felony charges for doctors performing transgender surgeries on minors without parental consent, and a nationwide return to [[stop-and-frisk|stop-and-frisk]].[n] The paper quoted Trump accusing [[kamala-harris|Kamala Harris]] of an "anti-police crusade" and vowing, "We'll re-fund the police."[n]
""",
"ashe-in-america": """## Commentary in the August 23, 2024 brief

Ashe in America wrote the Badlands take on [[kamala-harris|Kamala Harris]]'s [[2024-democratic-national-convention|Democratic National Convention]] acceptance speech, calling the "astroturfed joy campaign" a fever pitch of awkward word salad and arguing that Harris rewrote her record as a California prosecutor while claiming to have fought cartels on border security.[n] She also wrote the take on the corporate retreat from [[diversity-equity-and-inclusion|DEI]], arguing that right and left are "uniparty designations to keep people trapped in a false binary," that more than 30% of Americans identify as independent or third party, and that DEI is - after climate - one of globalism's most powerful munitions.[n] Citing a March 2024 Rasmussen survey finding only 25% of American adults believe DEI makes companies better, she concluded, "Your voice. Your vote. Your value exchange. That's real power."[n]
""",
"burning-bright": """## Commentary in the August 23, 2024 brief

Burning Bright flagged that [[the-atlantic|The Atlantic]] had quietly retitled its coverage of [[kamala-harris|Kamala Harris]]'s convention speech from "Kamala Harris Wants to Be Everything to Everyone."[n] He also wrote the Badlands take on the court-ordered unsealing of [[x-corp|X]]'s shareholder list, calling it "totally saturated in 'planned long ago' vibes" and arguing that the timing on the eve of the final election push was a planned deployment meant to catalyze influential fence-sitters and spook those who had picked the wrong side.[n] He noted [[jack-dorsey|Jack Dorsey]]'s enigmatic role in the [[information-war|Info War]], [[joe-lonsdale|Joe Lonsdale]]'s affiliation with [[peter-thiel|Peter Thiel]], and [[alwaleed-bin-talal|Alwaleed bin Talal]]'s loss of control over his assets in 2017, concluding that [[elon-musk|Elon Musk]] and [[donald-trump|Donald Trump]] were "executing a MIL-CIV pincer on the [[cabal|Cabal]]."[n] His "Righteous Russia" thesis was invoked elsewhere in the same brief.[n]
""",
"ghostofbasedpatrickhenry": """## Commentary in the August 23, 2024 brief

GhostofBasedPatrickHenry wrote three takes in the August 23, 2024 Badlands News Brief. On [[donald-trump|Donald Trump]]'s refusal of intelligence briefings he argued the agencies had been wrong about nearly every public proclamation for a decade and could no longer even execute propaganda competently, citing fabricated stories, altered websites, censorship, celebrity surrogates and hyper-realistic AI renderings.[n] On Trump's crime platform he welcomed the promise to execute pedophiles and [[child-trafficking|child traffickers]] and linked it to [[vladimir-putin|Vladimir Putin]]'s February 2023 and February 2024 speeches accusing Western elites of satanism and of normalizing pedophilia.[n] On the Justice Department's Russia-media probe he asked whether posting Putin videos or Russian military recruitment footage would make him a "Russian agent," invoking [[burning-bright|Burning Bright]]'s "Righteous Russia" thesis and Russian accounts of [[organ-trafficking|organ trafficking]].[n]
""",
"heritage-foundation": """## Project 2025 at the 2024 Democratic convention

At the August 2024 [[2024-democratic-national-convention|Democratic National Convention]], Democrats repeatedly brandished the Heritage Foundation's 900-page presidential transition blueprint [[project-2025|Project 2025]] on stage, and [[kamala-harris|Kamala Harris]] invoked it in her acceptance speech; [[the-atlantic|The Atlantic]] observed that Harris had no equivalent document of her own and that Democrats seemed at peace with that.[n]
""",
"project-2025": """## Use at the 2024 Democratic convention

Democrats repeatedly invoked Project 2025 from the stage of the August 2024 [[2024-democratic-national-convention|Democratic National Convention]], describing it as the 900-page presidential transition blueprint produced by the [[heritage-foundation|Heritage Foundation]], and [[kamala-harris|Kamala Harris]] mentioned it in her acceptance speech.[n] [[the-atlantic|The Atlantic]] reported that its correspondent heard more about [[donald-trump|Donald Trump]]'s policy agenda through Project 2025 than about Harris's own, and that Harris offered no equivalent document.[n]
""",
"2024-democratic-national-convention": """## Harris acceptance speech (August 22, 2024)

[[kamala-harris|Kamala Harris]] closed the convention on the night of Thursday, August 22, 2024 with an acceptance speech framing the election as a "fight for America's future" and depicting a second [[donald-trump|Donald Trump]] presidency as chaotic and dangerous.[n] She promised to be "a president who leads and listens, who is realistic, practical, and has common sense," pledged to push through the derailed bipartisan immigration bill, and affirmed goals such as ending the housing shortage and supporting [[nato|NATO]], while leaving most implementation questions to after Election Day.[n] [[the-atlantic|The Atlantic]] reported that across four days among Democrats in Chicago its correspondent never heard the words "white paper" or "study," and that speakers dwelt more on the [[heritage-foundation|Heritage Foundation]]'s [[project-2025|Project 2025]] than on Harris's own program.[n] Badlands commentary from [[ashe-in-america|Ashe in America]] dismissed the proceedings as an astroturfed joy campaign and the speech as a word salad.[n]
""",
"deep-state": """## Badlands commentary, August 2024

The August 23, 2024 Badlands News Brief cast the Deep State as the target of converging pressure: [[donald-trump|Donald Trump]]'s campaign announcement that he would seek the death penalty for child rapists and traffickers, and [[vladimir-putin|Vladimir Putin]]'s speeches accusing Western elites of satanism and of trying to normalize pedophilia.[n] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] also charged the intelligence community with "pure, unadulterated sociopathy" for mocking Trump's refusal of intelligence briefings after years of public threats against him and its silence following the attempt on his life.[n]
""",
"sovereign-alliance": """## August 2024 framing

Badlands commentary in August 2024 described the Sovereign Alliance as "hitting on all cylinders," pointing to [[vladimir-putin|Vladimir Putin]] cutting alleged elite supply lines in Ukraine while [[donald-trump|Donald Trump]] campaigned on executing child rapists and traffickers.[n] The same brief identified [[mohammed-bin-salman|Mohammed bin Salman]] as a Sovereign Alliance player in connection with his 2017 seizure of [[alwaleed-bin-talal|Alwaleed bin Talal]]'s assets, a detail raised when X's shareholder list was unsealed.[n]
""",
"child-trafficking": """## Trump death-penalty pledge (2024)

In August 2024 [[donald-trump|Donald Trump]]'s campaign rolled out a crime platform that included pursuing the death penalty for child rapists, which Badlands read as a pledge to execute pedophiles and child traffickers on his return to power.[n] The brief paired the pledge with [[vladimir-putin|Vladimir Putin]]'s February 2024 speech accusing Western elites of attempting to normalize pedophilia, arguing that trafficking networks were under simultaneous pressure from Moscow and from a returning Trump administration.[n]
""",
"mar-a-lago-raid": """## Cited against Trump's 2024 briefing eligibility

After the [[fbi|FBI]] recovered government documents including classified papers at [[donald-trump|Donald Trump]]'s Mar-a-Lago home in Florida, critics questioned whether he could be trusted with sensitive information as the Republican nominee, a debate revived in August 2024 when Trump said he would decline the intelligence briefings offered to presidential candidates.[n]
""",
"mohammed-bin-salman": """## Seizure of Alwaleed bin Talal's assets

Badlands commentary on the August 2024 unsealing of [[x-corp|X]]'s shareholder list noted that Saudi Prince [[alwaleed-bin-talal|Alwaleed bin Talal]], listed as an investor, has not been in control of his own assets since 2017, when they were seized by Mohammed bin Salman, whom Badlands identifies as a [[sovereign-alliance|Sovereign Alliance]] player.[n]
""",
"walmart": """## Context of the 2024 corporate DEI retreat

Walmart's retreat from [[diversity-equity-and-inclusion|DEI]] followed a broader wave in which commentator [[robby-starbuck|Robby Starbuck]]'s campaign pushed Harley-Davidson Inc., Tractor Supply Co. and Deere & Co. to reverse or eliminate such programs during 2024, before Starbuck turned to Jack Daniel's parent Brown-Forman Corp. that August.[n]
""",
"amy-coney-barrett": """## Arizona voting law order (2024)

Barrett dissented from the [[supreme-court-of-the-united-states|Supreme Court]]'s 5-4 order of August 22, 2024 partially reinstating Arizona's proof-of-citizenship voter registration requirement at the [[republican-national-committee|Republican National Committee]]'s emergency request, joining the Court's three liberal justices.[n] In voting to deny the RNC's other request, those four justices formed part of the majority.[n]
""",
"sonia-sotomayor": """## Arizona voting law order (2024)

Sotomayor was among the three liberal justices who dissented from the [[supreme-court-of-the-united-states|Supreme Court]]'s 5-4 order of August 22, 2024 partially reinstating Arizona's proof-of-citizenship requirement for state voter registration forms, dissenting alongside [[elena-kagan|Elena Kagan]], [[ketanji-brown-jackson|Ketanji Brown Jackson]] and [[amy-coney-barrett|Amy Coney Barrett]].[n]
""",
"elena-kagan": """## Arizona voting law order (2024)

Kagan dissented from the [[supreme-court-of-the-united-states|Supreme Court]]'s August 22, 2024 order partially granting the [[republican-national-committee|Republican National Committee]]'s emergency request to revive Arizona's proof-of-citizenship voter registration law, joining [[sonia-sotomayor|Sonia Sotomayor]], [[ketanji-brown-jackson|Ketanji Brown Jackson]] and [[amy-coney-barrett|Amy Coney Barrett]] in the 5-4 vote.[n]
""",
"ketanji-brown-jackson": """## Arizona voting law order (2024)

Jackson joined [[sonia-sotomayor|Sonia Sotomayor]], [[elena-kagan|Elena Kagan]] and [[amy-coney-barrett|Amy Coney Barrett]] in dissenting from the [[supreme-court-of-the-united-states|Supreme Court]]'s 5-4 order of August 22, 2024 that partially reinstated Arizona's proof-of-citizenship requirement for voter registration.[n]
""",
"john-roberts": """## Arizona voting law order (2024)

In the [[supreme-court-of-the-united-states|Supreme Court]]'s August 22, 2024 order on Arizona's proof-of-citizenship voting law, at least one of Chief Justice Roberts or Justice [[brett-kavanaugh|Brett Kavanaugh]] joined the four justices who voted to deny the [[republican-national-committee|Republican National Committee]]'s remaining request, giving that position a majority.[n]
""",
"brett-kavanaugh": """## Arizona voting law order (2024)

Reporting on the [[supreme-court-of-the-united-states|Supreme Court]]'s August 22, 2024 order concerning Arizona's proof-of-citizenship voting law noted that at least one of Kavanaugh or Chief Justice [[john-roberts|John Roberts]] joined the four justices who denied the [[republican-national-committee|Republican National Committee]]'s other request.[n]
""",
"brightcore": """## Sponsorship of the Badlands Substack (2024)

Brightcore was introduced in the August 23, 2024 Badlands News Brief as a new sponsor of the Badlands Substack, promoting Kimchi One, a fermented product, with an exclusive offer for readers.[n]
""",
"organ-trafficking": """## Badlands commentary, August 2024

In the August 23, 2024 Badlands News Brief, [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] referenced his previous day's take sharing videos of Russian military officers recounting the discovery of organ trafficking farms in which children were kept as livestock, presenting the claims as reinforcing [[burning-bright|Burning Bright]]'s "Righteous Russia" thesis.[n] He raised the material while questioning whether the [[department-of-justice|Department of Justice]]'s investigation of Americans tied to Russian state media would sweep in commentators who circulated such footage.[n]
""",
"information-war": """## Badlands framing, August 2024

Badlands commentary in August 2024 described the Information War as entering a phase in which the legacy apparatus was failing: [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued that even with fabricated news stories, altered websites, censorship, celebrity surrogates and hyper-realistic AI renderings, the intelligence community's propaganda had become "half-baked."[n] [[burning-bright|Burning Bright]] described [[jack-dorsey|Jack Dorsey]] as one of the most enigmatic figures in the Info War following the unsealing of [[x-corp|X]]'s shareholder list.[n] The brief also cited [[vladimir-putin|Vladimir Putin]]'s February 2024 claim that the West, unable to defeat Russia on the battlefield, had turned to information warfare.[n]
""",
"state-department": """## Badlands criticism, August 2024

In the August 23, 2024 Badlands News Brief, [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] contrasted a Russian military recruitment video showing soldiers of different faiths praying before battle with U.S. messaging, writing, "I wish the State Department could be half as inspiring as those guys. Maybe if they were, they wouldn't be losing this war to Putin."[n]
""",
}
for k, v in f.items():
    io.open(k + ".md", "w", encoding="utf-8", newline="\n").write(v)
print(len(f))
