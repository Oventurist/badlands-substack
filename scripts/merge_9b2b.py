import io, os, re, runpy, sys
sys.argv=["x"]
src = io.open(r"C:/Users/14053/hermes-projects/badlands-substack/scripts/merge_9b2.py", encoding="utf-8").read()
ns = {}
exec(src.split("S = {}")[0], ns)
merge = ns["merge"]

S = {}
S["entities/disney.md"] = """
## September 2024 corporate layoffs

In late September 2024, Disney began a new wave of job cuts described by the company as part of a "cost-saving initiative," with roughly 300 people affected by layoffs that began mid-week and continued over following days.[n] All of the eliminated positions were based in the United States and spanned Disney's corporate operations, including legal, human resources, finance and communications; the Parks, ESPN and Disney Entertainment divisions were not affected in that round.[n] A company spokesperson said Disney "continually evaluate[s] ways to invest in our businesses and more effectively manage our resources and costs," and that a review of the cost structure for corporate-level functions had identified ways for them to operate more efficiently.[n]

The cuts followed a July 31, 2024 round at Disney Entertainment Television in which about 140 people — roughly 2% of that workforce — were let go, and a 14% staff reduction at the animation studio Pixar in May of the same year.[n] They also coincided with a second round of layoffs at [[paramount-global|Paramount Global]], which was aiming to cut 15% of its US workforce with Paramount+ bearing the brunt.[n]
"""

S["entities/sean-combs.md"] = """
## Celebrity silence and crisis public relations

Following Combs's arrest in September 2024, the silence of his celebrity friends, colleagues and labelmates became itself a subject of public speculation, with old quotes about his parties resurfacing online and photographs of him with other public figures circulating widely on social media.[n] Prosecutors gave no indication that other celebrities would be charged, though US Attorney [[damian-williams|Damian Williams]] said in response to a question the previous week that "nothing is off the table."[n] Crisis communications specialists interviewed in the press argued that saying nothing was sound strategy, and that observers hungry to learn who still supported Combs, who might be compelled to testify, and who had severed ties were unlikely to get answers any time soon.[n]

At the heart of the charges were the events Combs called "Freak Offs" — described by prosecutors as sexual "performances," often lasting days, that he directed between victims and male sex workers who were frequently trafficked illegally.[n] Badlands Media commentary was sceptical of the framing, characterizing the coverage as an attempt to reassure audiences that celebrity silence reflected public-relations advice rather than guilt, and noted the story's reach beyond partisan audiences by recounting a vehement negative reaction from a self-described leftist reader.[n] The outlet also observed that the [[eric-adams|Eric Adams]] indictment and the Combs prosecution were both brought in the [[southern-district-of-new-york|Southern District of New York]], sharing a common thread of alleged corruption.[n]
"""

S["entities/michael-saylor.md"] = """
## Rugpull Radio appearance (Episode 94)

Saylor appeared as the special guest on episode 94 of [[rugpull-radio|Rugpull Radio]], the Badlands Media Bitcoin program hosted by GMONEY and Patriots In Progress.[n] Badlands writers described him as a masterful communicator in the Bitcoin space who traverses narrative layers with ease, and praised the hosts for avoiding softball questions in favour of a first-principles approach comparable to Robert Breedlove's widely admired interview with him.[n] Commentary singled out "natural frequency" as the central takeaway of the conversation and highlighted Saylor's enthusiasm for the science-fiction writer Robert Heinlein as evidence of his intellectual seriousness.[n]
"""

S["entities/rugpull-radio.md"] = """
## Episode 94: Michael Saylor

Episode 94 of Rugpull Radio featured [[michael-saylor|Michael Saylor]] as a special guest, secured by hosts GMONEY and Patriots In Progress and distributed on Rumble.[n] Badlands Media commentary recommended the episode as an entry point for new viewers, praising the hosts for taking a first-principles approach rather than dwelling on market "actuals," asking no softball questions and producing what the writer called a great deal of signal.[n] The discussion's emphasis on "natural frequency" was described as its major takeaway.[n]
"""

S["entities/brics.md"] = """
## Taliban accession bid and the 2024 Kazan summit

In September 2024, the [[taliban|Taliban]] government of Afghanistan announced that it was seeking to join BRICS despite not being formally recognized by any country.[n] Deputy spokesman Hamdullah Fitrat cited existing economic ties and commercial exchanges with Russia, India and China, and the Afghan foreign ministry said it hoped for an invitation to the BRICS summit scheduled for October 22–24 in Kazan, though no information had been received on whether a delegation could attend.[n] Contemporaneous coverage described BRICS as comprising Brazil, Russia, India, China and South Africa, with Iran, the United Arab Emirates, Egypt and Ethiopia recently inducted as new members.[n]

Analysts suggested Taliban membership would hand Washington "low-hanging fruit" with which to denigrate the bloc internationally, particularly given US frustration at deepening China–Russia–India cooperation and those states' refusal to condemn Russian military action in Ukraine.[n] Badlands Media, by contrast, framed the episode as evidence that states outside Western favour can now bypass the international rules-based order, escaping sanctions, central-bank arrangements and IMF lending by joining an alternative financial system rather than adopting the petrodollar.[n]
"""

for k, v in S.items():
    merge(k, v)
