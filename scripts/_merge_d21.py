import re, sys, io

RAW = "raw/badlands-news-brief-d21.md"
REF = '{}. Badlands Brief — "Badlands News Brief: Chinese Interference and Narrative Seeding", URL: https://badlands.substack.com/p/badlands-news-brief-d21'

def merge(path, n, body):
    t = io.open(path, encoding="utf-8").read()
    # sources
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    src = m.group(1)
    assert RAW not in src, path
    t = t[:m.start()] + "sources: [" + src + ", " + RAW + "]" + t[m.end():]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    idx = t.index("\n## References")
    head = t[:idx].rstrip("\n")
    tail = t[idx:].rstrip("\n")
    out = head + "\n\n" + body.strip() + "\n" + tail + "\n" + REF.format(n) + "\n"
    io.open(path, "w", encoding="utf-8").write(out)
    print("merged", path, n)

E = "C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/"

merge(E+"michael-cassidy.md", 2, """
## Hate crime charge

In late January 2024 it was reported that Cassidy had been charged with a hate crime over the destruction of the Satanic display.[2] Rather than pursuing misdemeanor damage to property or vandalism, Polk County prosecutors charged the veteran with felony third-degree criminal mischief, arguing that the act was "in violation of individual rights" under Iowa's hate crime statute.[2] The Polk County Attorney's Office said evidence showed that Cassidy made statements to law enforcement and the public indicating he destroyed the property because of the victim's religion.[2] Cassidy had earlier explained that he acted to "awaken Christians to the anti-Christian acts promoted by our government," and the caped figure he beheaded — placed in the Iowa State Capitol by [[the-satanic-temple|The Satanic Temple]] in December 2023 — had its goat skull head thrown into a bin.[2]

[[ashe-in-america|Ashe in America]] argued that the case could be reasoned in two opposing directions under the [[first-amendment|First Amendment]]: either the display was protected private religious expression whose destruction constituted a religiously motivated hate crime, or Cassidy's act was itself compelled religious expression by a believer confronting evil, making his prosecution a government violation of the First Amendment.[2] She concluded that the charges should be dropped, that government violations of constitutional rights are more serious than private ones, and that religious displays should be removed from government buildings altogether.[2]
""")

merge(E+"fani-willis.md", 41, """
## Timpson whistleblower reporting

In late January 2024 the Washington Free Beacon reported that Willis had fired the employee who warned her about the mishandling of federal funds, while never denying the substance of her allegations.[41] Less than a year into her tenure as Fulton County district attorney, in 2021, Willis met with [[amanda-timpson|Amanda Timpson]], an office employee responsible for providing nonviolent juvenile offenders with alternatives to the juvenile court system.[41] In a recorded November 19, 2021 conversation, Timpson said she had been demoted after trying to stop a top Willis campaign aide, [[michael-cuffee|Michael Cuffee]], from misusing a $488,000 federal grant earmarked for a Center of Youth Empowerment and Gang Prevention on "swag," computers, and travel.[41] Willis responded, "I respect that is your assessment. And I'm not saying that your assessment is wrong," later apologizing and saying Cuffee had "failed" her administration.[41]

Less than two months afterward Willis abruptly terminated Timpson and, according to Timpson, had her escorted from the office by seven armed investigators.[41] After Timpson filed a whistleblower complaint alleging wrongful termination, Willis's office described her as a "holdover from the prior administration" terminated for "failure to meet the standards of the new administration."[41] [[ashe-in-america|Ashe in America]] wrote that Willis had "99 problems, the least of which is her failing case against President Trump," argued that the standards of the new administration appeared to consist of bending and breaking the law, and pointed to articles of impeachment filed against Willis as a possible remedy.[41]
""")

merge(E+"alejandro-mayorkas.md", 10, """
## Committee approval of impeachment articles

Early on Wednesday, January 31, 2024, the Republican-led [[house-homeland-security-committee|House Homeland Security Committee]] approved two articles of impeachment against Mayorkas for having "willfully and systematically" flouted federal immigration laws and breached the public trust.[10] The 18–15 party-line vote affirmed that Mayorkas failed to detain migrants crossing the border before deciding whether to grant asylum.[10] The articles also stated that he ignored records requests from the committee and misled [[congress|Congress]] about having "operational control" of the border and about his claim that it is "secure."[10] The hearing ran more than fifteen hours and included repeated procedural attempts by Democrats to derail the effort, while Republicans said their year-long investigation had established that Mayorkas violated his oath of office.[10]

[[burning-bright|Burning Bright]] read the vote as one element in a cascade of border narratives converging in early 2024, alongside the Eagle Pass controversy and a Texas appeal before the Fifth Circuit over federal authority at the border, arguing the sequencing was too well-timed to be coincidence.[10]
""")

merge(E+"christopher-wray.md", 17, """
## Volt Typhoon disruption testimony

On Wednesday, January 31, 2024, Wray announced at a hearing of the [[house-select-committee-on-the-chinese-communist-party|House Select Committee on the Chinese Communist Party]] that the [[fbi|FBI]] had shut down [[volt-typhoon|Volt Typhoon]], a major China-backed hacking group that had attacked hundreds of routers while working to compromise United States cyber infrastructure.[17] He said the group had hacked into hundreds of office and home-office routers to give the Chinese government access to their data, and that the routers' outdated condition made them "easy targets."[17] Wray told lawmakers the hackers had been targeting American water treatment plants, the power grid, oil and natural gas pipelines, and transportation systems, adding that "today, and literally every day, they're actively attacking our economic security, engaging in wholesale theft of our innovation, and our personal and corporate data."[17]

[[ashe-in-america|Ashe in America]] urged readers to take Wray's warnings seriously even while mocking official assurances that the same threat landscape somehow cannot touch elections, noting that the guarantee rests on figures such as former [[cisa|CISA]] director [[chris-krebs|Chris Krebs]].[17]
""")

merge(E+"xi-jinping.md", 45, """
## Assurance to Biden on the 2024 election

[[cnn|CNN]] reported in late January 2024 that Xi had told United States President [[joe-biden|Joe Biden]] that China would not interfere in the 2024 US presidential election, an assurance given when the two men met in California in November 2023 during an hours-long, high-stakes meeting aimed at easing historically elevated military and economic tensions between the two superpowers.[45] According to a source familiar with the previously unreported exchange, it was Biden who raised the issue and the exchange was brief.[45] Chinese Foreign Minister [[wang-yi|Wang Yi]] reiterated the same assurance to US national security adviser [[jake-sullivan|Jake Sullivan]] at a meeting in Bangkok the weekend of January 27, 2024, and the potential for Chinese election interference had repeatedly arisen at senior-level meetings between the two nations.[45]

[[badlands-media|Badlands Media]] writer [[simon-esler|Simon Esler]] treated the report as narrative seeding rather than news, noting that CNN cited its own 2016 coverage of the alleged Russian hack of the DNC as evidence despite what he called ample evidence the leak was an inside job.[45] He argued the piece also served to prop up the illusion of Biden's competence and of a year spent "stabilizing" US-China relations, and that by weaving together vague references to Iranian, Cuban, Russian, and AI-driven interference the media were pre-positioning explanations for irregularities in the 2024 election.[45]
""")
