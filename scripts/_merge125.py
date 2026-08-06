import io
CIT = 'Badlands Brief — "Badlands News Brief: Fake Polls Abound as the Sovereign Alliance Makes Moves", URL: https://badlands.substack.com/p/badlands-news-brief-125'
BASE = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'

def merge(path, n, body):
    p = BASE + path
    s = io.open(p, encoding='utf-8').read().replace('\r\n', '\n')
    old = [l for l in s.split('\n') if l.startswith('sources: [')][0]
    if 'badlands-news-brief-125' not in old:
        s = s.replace(old, old[:-1] + ', raw/badlands-news-brief-125.md]')
    i = s.index('## References')
    s = s[:i] + body.strip() + '\n\n' + s[i:]
    s = s.rstrip('\n') + '\n%d. %s\n' % (n, CIT)
    io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
    print('ok', path)

merge('entities/barack-obama.md', 13, """
## Los Angeles fundraiser incident (June 2024)

On Saturday, June 15, 2024, Obama led President [[joe-biden|Joe Biden]] off the stage at the conclusion of a star-studded campaign fundraiser at the Peacock Theater in Los Angeles, after Biden appeared to freeze up.[13] The moment followed a 45-minute interview the two men gave to late-night host Jimmy Kimmel; as they stood for applause, Biden's gaze became fixed on the crowd for roughly ten seconds until Obama took his wrist and guided him offstage.[13] Badlands commentary described the episode as the latest in a series of incidents — including Biden wandering off during a parachute exhibition at the G7 summit in Apulia, Italy, where Italian Prime Minister [[giorgia-meloni|Giorgia Meloni]] refocused him — and noted that the footage went viral over the weekend.[13]
""")

merge('entities/xi-jinping.md', 18, """
## Accusation that the US sought to provoke a Taiwan invasion

In June 2024 the Financial Times reported that Xi had accused the United States of trying to trick China into invading [[taiwan|Taiwan]], while stating that his country would not take the bait.[18] The accusation was reportedly made in April 2023 during a meeting with European Commission President [[ursula-von-der-leyen|Ursula von der Leyen]] and represented the first known instance of Xi making the claim to a foreign leader, though he had issued the same warning to officials inside China.[18] The Chinese press statement issued at the time recorded Xi saying Taiwan was at the "core" of China's interests and that "if anyone expects China to compromise and concede on the Taiwan question, they are having a pipe dream and would shoot themselves in the foot," but omitted the accusation against the United States.[18]

Badlands commentary treated the story's release as deliberately timed for the day before [[vladimir-putin|Vladimir Putin]]'s scheduled arrival in [[north-korea|North Korea]], and questioned why von der Leyen surfaced the year-old remark at that particular moment, reading it as an episode in the narrative contest between the [[sovereign-alliance|Sovereign Alliance]] and the [[old-guard|Old Guard]].[18]
""")

merge('entities/israel-defense-forces.md', 23, """
## Advance knowledge of the October 7 raid plan

In June 2024 a newly surfaced document revealed that the IDF and Israeli intelligence systems had detailed knowledge of [[hamas|Hamas]]'s plan to raid Israel and kidnap 250 people weeks before the [[october-7-attacks|October 7 massacre]].[23] The document, compiled in the Gaza Division and titled "Detailed End-to-End Raid Training," was distributed on September 19, 2023 and described in detail exercises conducted by Hamas's elite units, including raids on military posts and kibbutzim, the kidnapping of soldiers and civilians, and the maintenance of hostages inside the Gaza Strip.[23] Security sources told Kan News that the document was known to the intelligence leadership, at the very least within the Gaza Division.[23]

Badlands writer [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] combined this revelation with the circumstances of the [[nova-music-festival|Nova music festival]] — relocated two days beforehand to a site near the Gaza border with no enhanced IDF security and no quick reaction force on standby — and alleged that when IDF forces arrived seven hours later, their helicopters and tanks "accidentally" killed hundreds of Israeli citizens.[23] He argued these facts converted a suspicion of a setup into an unsettling certainty.[23]
""")

merge('entities/national-institutes-of-health.md', 2, """
## Republican reorganization proposal (June 2024)

In June 2024, congressional Republicans called for a reorganization of the NIH that would strip the agency of its authority over [[gain-of-function-research|gain-of-function research]] and freeze such experiments until new reforms were established.[2] The draft plan, produced by the [[house-energy-and-commerce-committee|House Energy and Commerce Committee]], would establish a new oversight process for risky pathogen research proposals and transfer the power to review, approve, reject and oversee those experiments from NIH to a "public, independent oversight entity."[2] Axios reported that the plan fed a post-pandemic narrative of federal health agencies having lost public trust, could serve as a blueprint for a future Republican administration and Congress, and immediately increased pressure on NIH heading into a difficult fiscal 2025 budget cycle after a long run of funding increases had already been halted.[2]
""")

merge('entities/politico.md', 8, """
## Politico–Ipsos poll on the Trump conviction (June 2024)

In June 2024, Politico Magazine partnered with [[ipsos|Ipsos]] on a survey examining how the electorate was processing [[donald-trump|Donald Trump]]'s criminal conviction, publishing the results under the headline "Trouble for Trump in a New Poll on His Conviction."[8] The magazine highlighted that 21 percent of independents said the conviction made them less likely to support Trump and that it would be an important factor in their vote, while acknowledging that efforts by Trump and his allies to discredit the prosecution had cast doubt on the verdict's validity and limited the fallout.[8] The survey used KnowledgePanel with 1,017 respondents, and reported that 43 percent of respondents agreed the case had been brought to help President [[joe-biden|Joe Biden]].[8]

[[ashe-in-america|Ashe in America]] characterized the piece as "a cleanup on aisle 45," arguing that Politico made several vague assertions while the Ipsos toplines showed a plurality of Americans (40 percent) saying the verdict had no impact on their vote.[8] She pointed to buried findings on collapsing trust in judicial institutions and the perception that wealthy people and elected officials receive special breaks in the justice system, treating them as confirmation of growing public concern about corruption.[8] Badlands writers have described Politico, alongside [[the-atlantic|The Atlantic]], as a "treasure trove of reverse indicators" for tracking establishment narrative direction.[8]
""")

merge('entities/the-atlantic.md', 10, """
## The Biden Campaign's Losing Battle (June 2024)

In June 2024 The Atlantic published a feature comparing [[joe-biden|Joe Biden]] campaign staff to a basketball star perpetually "working the refs," describing a weekly public spat between Biden-team members, notable Democrats and the press.[10] The article centered on a post by campaign communications adviser [[tj-ducklo|TJ Ducklo]] complaining that MSNBC, CNN and other outlets ignored the president's Philadelphia address to roughly 1,000 mostly Black voters in favor of covering "a trial that impacts one person: Trump," and his subsequent exchange with statistician Nate Silver.[10] The magazine judged the suggestion that a former and potentially future president's legal troubles were not worth discussing to be "frankly, absurd," while situating the dispute within Biden allies' broader belief that journalists were failing to meet the moment.[10]

Badlands writer [[burning-bright|Burning Bright]] cited the piece as an example of [[narrative-convergence|Narrative Convergence]] in inverted form, arguing that The Atlantic converged with independent analysis that the Biden team was mismanaging its campaign but framed the cause as the administration's hostility toward the media rather than the president's condition.[10] He described the fracturing co-dependence between the administration and legacy media as a former strength reverse-engineered into a prime weakness.[10]
""")
