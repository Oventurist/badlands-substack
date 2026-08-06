import io
def merge(path, srcadd, section, refnum, refline):
    t=io.open(path,encoding="utf-8",newline="").read()
    nl="\r\n" if "\r\n" in t else "\n"
    assert srcadd not in t, path
    # sources line
    import re
    m=re.search(r"^sources: \[(.*)\]$", t, re.M)
    t = t[:m.start()] + "sources: [" + m.group(1) + ", " + srcadd + "]" + t[m.end():]
    sec = section.replace("\n", nl)
    assert t.count("## References")==1
    t=t.replace("## References", sec + nl + nl + "## References",1)
    t=t.rstrip("\r\n")+nl+refnum+". "+refline+nl
    io.open(path,"w",encoding="utf-8",newline="").write(t)
    print("ok",path)

base=r"C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/"
A='Badlands Brief \u2014 "SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham", URL: https://badlands.substack.com/p/badlands-news-brief-03a'

merge(base+"united-auto-workers.md","raw/badlands-news-brief-03a.md","""## Support for the 2025 auto tariffs

On March 26, 2025, the UAW praised President [[donald-trump|Donald Trump]]'s new 25 percent tariff on all imported automobiles, calling it a "victory for autoworkers."[3] In its statement the union, one of the largest labor unions in the United States, described the tariff as a continuation of the president's "Made in America renaissance" and as marking the beginning of the end of the [[nafta|North American Free Trade Agreement]].[3]

UAW President [[shawn-fain|Shawn Fain]] said the union applauded the administration "for stepping up to end the free trade disaster that has devastated working class communities for decades," adding that "ending the race to the bottom in the auto industry starts with fixing our broken trade deals."[3] Badlands commentary read the union's position as evidence that organized labor recognized Trump as the most pro-worker president in modern history, and argued that the political left risked losing its remaining credibility with labor by opposing worker-benefiting tariffs.[3]""","3",A)

merge(base+"dan-gertler.md","raw/badlands-news-brief-03a.md","""## Role in the 2025 DRC minerals debate

In March 2025, as witnesses at a [[house-foreign-affairs-committee|House Foreign Affairs Committee]] subcommittee hearing urged Washington to counter China's exploitation of corruption in the [[democratic-republic-of-the-congo|Democratic Republic of the Congo]], Badlands commentary placed Gertler at the center of the longer history of the country's exploitation, describing him as the present-day scion of the cartel family behind the Israeli Diamond Exchange.[3]

The commentary recounted that President [[donald-trump|Donald Trump]] froze Gertler's assets in 2017, after which those holdings were picked apart in lawsuits around the world, including suits brought by the DRC government, though Gertler won at least one ruling awarding him millions of dollars on the sale of some assets.[3] It further noted that shortly after the sanctions were imposed, the long-reigning Congolese president who had granted Gertler his monopoly over the country's resources was publicly shamed into withdrawing from his presumed reelection campaign, leading to the election of [[felix-tshisekedi|F\u00e9lix Tshisekedi]].[3]

The commentary argued it was reasonable to assume that the Rwandan-backed [[m23|M23]] group was acting on behalf of Gertler and his cartel, citing Rwandan President [[paul-kagame|Paul Kagame]]'s loyalty to [[benjamin-netanyahu|Benjamin Netanyahu]], Gertler's family history with the Israeli oligarchy, and reported instances in which Gertler and then-Mossad director [[yossi-cohen|Yossi Cohen]] were caught operating covertly in the country \u2014 accused by Tshisekedi's aides of attempting to facilitate a coup \u2014 as well as the failed 2024 coup attempt led by Congolese-American [[christian-malanga|Christian Malanga]].[3]""","3",A)

merge(base+"poland.md","raw/badlands-news-brief-03a.md","""## Ammunition stockpiles and readiness (2025)

In March 2025 Dariusz Lukowski, head of Poland's National Security Bureau, told the broadcaster Polsat News that Poland had ammunition sufficient to hold the line for up to two weeks in the event of war, until allied forces arrived.[2] He said the country had been increasing arms production to build capacity to resist a potential Russian attack, noting that the [[nato|NATO]] member shares a 144-mile border with Russia's Kaliningrad exclave.[2]

Asked whether Poland's reserves might last only five days, Lukowski said that was "possible in many areas and types of ammunition," though not across all categories of munitions, and that "depending on how the fighting unfolds, we could maintain defensive operations for a week or two with the current level of stockpiles."[2] He identified ammunition for older weapons systems, for which production has ceased, as the most critical shortfall.[2] Moscow has consistently denied aggressive intentions toward NATO countries and maintains that the Ukraine conflict was triggered by the bloc's expansion toward Russia's borders.[2]

Badlands commentary reacted derisively to the two-week figure and to the reliance on allied reinforcement, describing European leaders as "kites dancing in a hurricane."[2]""","2",A)
