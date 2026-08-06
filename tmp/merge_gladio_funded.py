# -*- coding: utf-8 -*-
import os, re, io

W = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
BASENAME = "raw/operation-gladio-how-its-funded.md"
REFLINE = 'Badlands Brief \u2014 "Operation Gladio - How It\'s Funded", URL: https://badlands.substack.com/p/operation-gladio-how-its-funded'

def merge(relpath, heading, body_tpl):
    p = os.path.join(W, relpath + ".md")
    t = io.open(p, encoding="utf-8").read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
    srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if BASENAME in srcs:
        n = srcs.index(BASENAME) + 1
        newsrc = None
    else:
        srcs.append(BASENAME); n = len(srcs)
        newsrc = "sources: [" + ", ".join(srcs) + "]"
    if newsrc:
        t = t[:m.start()] + newsrc + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    body = body_tpl.replace("[n]", "[%d]" % n).strip()
    idx = t.find("\n## References")
    section = "\n## " + heading + "\n\n" + body + "\n"
    if idx == -1:
        t = t.rstrip() + "\n" + section + "\n## References\n%d. %s\n" % (n, REFLINE)
    else:
        head, refs = t[:idx], t[idx:]
        if REFLINE not in refs:
            refs = refs.rstrip() + "\n%d. %s\n" % (n, REFLINE)
        t = head.rstrip() + "\n" + section + refs
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("MERGED", relpath, "->", n)

merge("entities/cia", "Origins in the OSS and organized crime (Gladio funding thesis)", """
In the Badlands Media account of [[operation-gladio]], the American mafia and mobster networks did not disappear after World War II; much of their activity was folded into the CIA.[n] Prohibition-era liquor networks gave way to heroin and cocaine, with the profits funding covert Gladio functions; prostitution was transformed into human trafficking networks whose funds served the same purpose; and a weapons trafficking network was incorporated into the agency to arm the stay-behind units.[n] The [[office-of-strategic-services|OSS]] provided the wartime transition necessary for this mission realignment, and Congress gave the CIA sweeping powers and protection, cloaking previously illegal activity behind the stamp of "national security."[n]

The agency's institutional lineage ran from the wartime OSS through the Strategic Service Unit, the National Intelligence Authority and the Central Intelligence Group, becoming the CIA in 1947 with the passage of the [[national-security-act-of-1947|National Security Act]].[n] Its chartered mission was to carry out covert operations against "hostile" foreign states or groups, or in support of friendly ones, planned so that US government responsibility would not be evident to unauthorised persons \u2014 which the article argues explains why the agency labels resisting governments "communists."[n]

President Truman appointed [[allen-dulles]] as director while his brother [[john-foster-dulles]] served as Secretary of State, and the [[state-department]]'s Office of Policy Coordination under [[frank-wisner]] moved wholesale into the new agency.[n] The article stresses that everything the CIA does was already being done before its creation \u2014 it simply had not all been done under one roof.[n] Its air arm began with the [[flying-tigers]] and their successor [[civil-air-transport]], its drug profits were washed through the Miami shell company [[general-development-corporation]] and later the [[vatican-bank]], and DEA agents routinely reported investigations shut down with a national-security stamp as they worked up the network.[n]
""")

merge("concepts/operation-gladio", "Funding: narcotics, trafficking and the mafia", """
The second installment of the Badlands Media Gladio series argues that the operation was financed through organized crime absorbed into the [[cia]].[n] Colonel [[paul-helliwell]] first proposed incorporating organized crime into the intelligence community after meeting [[chiang-kai-shek]], commander of the [[kuomintang]], while assigned in Southern China.[n] Helliwell, [[allen-dulles]], [[james-jesus-angleton]] and [[mi6]]'s [[william-stephenson]] designed a network funnelling money through Helliwell to the [[world-commerce-corporation]] created by OSS chief [[william-donovan]].[n]

Opium came from Chiang, who was resettled on Formosa \u2014 renamed [[taiwan]] \u2014 by [[claire-chennault]], [[william-pawley]] and Dulles.[n] Refining was arranged through the [[corsican-mafia]] by [[lucien-conein]], who worked alongside [[e-howard-hunt]].[n] American distribution ran through [[lucky-luciano]] and [[meyer-lansky]]'s [[the-commission-mafia|Commission]], with [[vito-genovese]] building the inner-city network and [[santo-trafficante]] playing the largest trafficking role from Cuba, Miami and Tampa.[n] The whole pipeline was code-named "[[operation-x]]", its finances managed through the Miami shell company [[general-development-corporation]] and, later, the [[vatican-bank]].[n]

Enabling events included [[operation-underworld]] and [[operation-husky]], after which mafia figures were installed as officials across occupied Italy, and the commutation of Luciano's sentence by Governor [[thomas-dewey]] under pressure from Secretary of the Navy [[james-forrestal]], Dulles and the [[office-of-naval-intelligence]].[n] The article notes that [[benito-mussolini]] had suppressed both the mafia and the masonic lodges in Italy, and that both made a roaring comeback under Gladio.[n] Its conclusion is that aspects of the United States government resemble an international crime syndicate posing as a government.[n]
""")

merge("entities/meyer-lansky", "Role in Operation Gladio financing", """
Meyer Lansky (1902\u20131983) is listed among the Jewish mobsters of the early twentieth century who, alongside Italian mafia families, ran liquor, gambling and prostitution rackets and were also used by large business enterprises needing dockworkers, newspapers and bankers handled.[n] He formed the National Crime Syndicate focused on Cuba and Las Vegas.[n] With [[lucky-luciano]] he set up [[the-commission-mafia|the Commission]] in 1931, the twelve-boss committee that managed all mafia dealings and which, in the Badlands Media account, became the apparatus used to build the American leg of the [[operation-gladio]] drug network.[n] Lansky attended the Cuba meeting after Luciano's deportation, alongside [[frank-costello]], [[vito-genovese]], [[albert-anastasia]] and [[santo-trafficante]], that framed the entire Gladio drug-funding structure.[n]
""")

merge("entities/mickey-cohen", "Gladio-era context", """
Mickey Cohen (1914\u20131976) is listed in the Badlands Media account of [[operation-gladio]]'s funding among the Jewish mobsters operating in the United States in the early 1900s, with his base in Los Angeles.[n] The article groups him with Louis "Pretty" Amberg, Moses Annenberg, Abe Bernstein of the Purple Gang, [[meyer-lansky]] and [[bugsy-siegel]], noting that while they ran the same rackets as the Italian mafia they were also used by large business enterprises that needed help with dock workers, newspapers and bankers.[n]
""")

merge("entities/bugsy-siegel", "Gladio-era context", """
Benjamin "Bugsy" Siegel (1906\u20131947) appears in the Badlands Media account of [[operation-gladio]]'s funding among the Jewish mobsters of the early 1900s, operating in New York and Las Vegas.[n] The article places him alongside [[meyer-lansky]], [[mickey-cohen]], Louis "Pretty" Amberg, Moses Annenberg and Abe Bernstein, and notes that these networks did not disappear after World War II but were substantially folded into the [[cia]].[n]
""")

merge("entities/paul-helliwell", "Architect of the Gladio funding network", """
The Badlands Media Gladio series credits Colonel Paul E. Helliwell as the man who first proposed incorporating organized crime into the intelligence community.[n] While assigned in Southern China he met [[chiang-kai-shek]], commander of the [[kuomintang]], who was selling opium to Chinese addicts to fund his war effort.[n] OSS chief [[william-donovan]] directed Helliwell to covertly supply the KMT with weapons, and Helliwell added opiate trafficking to the mission.[n]

At this point [[james-jesus-angleton]], [[allen-dulles]] and [[mi6]]'s [[william-stephenson]] met to set up the covert network: money would be funnelled to Helliwell, who would forward it to the [[world-commerce-corporation]], created by Donovan for that purpose.[n] Bringing the opiate pipeline in drew the mafia into the intelligence networks, with [[e-howard-hunt]] and [[lucien-conein]] joining the trafficking effort and Conein's [[corsican-mafia]] ties supplying refining capacity and Vietnamese opium.[n] Once the [[office-of-strategic-services|OSS]] controlled Italy's ports after [[operation-husky]], Helliwell's design could finally be implemented, and [[lucky-luciano]] built out the American leg from Sicily and Cuba.[n]
""")

merge("entities/james-jesus-angleton", "Role in the Gladio funding network", """
The Badlands Media account of [[operation-gladio]]'s financing places Angleton, then of the [[office-of-strategic-services]], at the meeting with [[allen-dulles]] and British Security Coordinator [[william-stephenson]] of [[mi6]] at which the covert funding network was designed.[n] Under the plan money would be funnelled to Colonel [[paul-helliwell]], who would forward it to the [[world-commerce-corporation]] created by OSS chief [[william-donovan]].[n]
""")

merge("entities/state-department", "Ties to the CIA in the Gladio account", """
The Badlands Media account of [[operation-gladio]]'s funding argues that the State Department and the [[cia]] were institutionally fused from the agency's inception: President Truman appointed [[allen-dulles]] as CIA director while his brother [[john-foster-dulles]] served as Secretary of State, forging a tie the article says still exists today.[n] The department's Office of Policy Coordination under [[frank-wisner]] moved "lock, stock and barrel" to the CIA once the agency was established.[n] A third sibling, [[eleanor-lansing-dulles]], worked in the department's Bureau of Intelligence and Research, described as the entry point at the State level for CIA activities; Secretary of State [[dean-rusk]] later asked her to resign over her brother's role in the [[bay-of-pigs]].[n]
""")

merge("entities/taiwan", "Formosa, Chiang Kai-shek and the Gladio opium supply", """
The Badlands Media Gladio funding article states that [[claire-chennault]], [[william-pawley]] and [[allen-dulles]] set [[chiang-kai-shek]] up on Formosa \u2014 an island off the Chinese coast from which the Japanese had recently been expelled \u2014 to continue supplying the opium that paid for the covert operations of [[operation-gladio]].[n] Chiang, described as allegedly the world's largest drug trafficker at that point, renamed the island Taiwan and declared martial law in the immediate aftermath of establishing his regime.[n] For roughly the next forty years, well into the 1980s, the article contends that Taiwan functioned as a drug-dealing dictatorship, forming the source end of the pipeline code-named "[[operation-x]]" that ran through Sicily and Cuba into the United States.[n]
""")

merge("entities/vatican-bank", "CIA drug money", """
The Badlands Media Gladio funding article identifies the Vatican Bank as the venue of choice for the [[cia]]'s drug money, alongside the Miami shell company [[general-development-corporation]] through which the finances of "[[operation-x]]" were managed.[n]
""")

merge("concepts/operation-underworld", "Gladio series account", """
In the Badlands Media Gladio funding article, Operation Underworld arose after the US Navy grew worried about New York harbour and the SS Normandie \u2014 a French luxury liner in use as a government transport ship \u2014 was set on fire, an incident the article describes as the first of many false flags involving a ship in a harbour.[n] The [[office-of-naval-intelligence]] wanted dockworker assistance, which had to come from the mafia, and the operation transformed [[lucky-luciano]] into an intelligence asset who secured the waterfront in exchange for his freedom.[n] Luciano had been arrested in 1936 over his prostitution ring, and his colleagues devised the scheme for his release in 1942.[n] His usefulness was extended to [[operation-husky]], the invasion of Sicily.[n]
""")

merge("concepts/war-on-drugs", "The Gladio cover-story thesis", """
The Badlands Media Gladio funding article argues that the war on drugs functioned as cover for the trafficking network that financed [[operation-gladio]].[n] Heroin supplied by [[lucky-luciano]] was pushed to black musicians in New York City's jazz venues in what the article calls a targeted effort, later providing a network to spread drugs through black communities and set up inner-city young black men whose arrests gave the [[cia]] its cover stories \u2014 the arrests being, in the article's phrase, simply the low hanging fruit.[n] DEA agents routinely described their investigations being shut down as they worked their way up the network with the stamp "national security."[n] The article adds that the arrangement supplied a prison labour force for the syndicate's corporate prisoner work projects, making it a win-win for the syndicate.[n]
""")

merge("entities/office-of-strategic-services", "Transition into the CIA and the Gladio networks", """
The Badlands Media Gladio funding article describes the OSS as providing the wartime transition necessary to encapsulate the postwar realignment of organized crime into intelligence work.[n] Its chief, [[william-donovan]], directed Colonel [[paul-helliwell]] to covertly arm [[chiang-kai-shek]]'s [[kuomintang]] and created the [[world-commerce-corporation]] as a financial conduit, while [[allen-dulles]] served as European officer-in-charge and [[james-jesus-angleton]] helped design the covert network with [[mi6]]'s [[william-stephenson]].[n] [[e-howard-hunt]] and lawyer [[tommy-corcoran]] were also OSS men involved in the resulting operations.[n]

With the OSS in control of Italy's ports after [[operation-husky]], black-market goods enriched the postwar OSS/mafia network and Helliwell's design could be implemented.[n] The organisation subsequently became the Strategic Service Unit, then the National Intelligence Authority and Central Intelligence Group, and finally the [[cia]] in 1947 under the [[national-security-act-of-1947|National Security Act]].[n]
""")

merge("entities/italian-mafia", "Absorption into the intelligence apparatus", """
The Badlands Media Gladio funding article describes two distinct mafia and mobster networks operating in the United States in the early 1900s, the first consisting of Italian mafia families that had emigrated to America, settling primarily in New York and Chicago and focusing on trafficking liquor during prohibition, gambling and prostitution.[n] These families did not disappear after World War II; much of their activity was folded into the [[cia]], with liquor networks giving way to heroin and cocaine whose profits funded covert operations.[n]

[[lucky-luciano]] and [[meyer-lansky]] founded [[the-commission-mafia|the Commission]] in 1931, and Sicilian families were instrumental in the success of [[operation-husky]], after which mafia officials were installed as mayors and government officials during the US occupation, with [[vito-genovese]] serving as translator for US Army headquarters in Naples.[n] Control of the heroin network slowly migrated from the [[corsican-mafia]] to the CIA's Italian mafia channels, and [[santo-trafficante]] came to play the largest role in [[operation-gladio]] drug trafficking.[n]
""")

merge("entities/jewish-mafia", "Gladio-era account", """
The Badlands Media Gladio funding article identifies a second American criminal network of the early 1900s consisting of Jewish mobsters including Louis "Pretty" Amberg, Moses Annenberg of Hearst Corp newspapers and media, Abe Bernstein of the Purple Gang, [[mickey-cohen]] in Los Angeles, [[meyer-lansky]] \u2014 who formed the National Crime Syndicate focused on Cuba and Las Vegas \u2014 and [[bugsy-siegel]] in New York and Las Vegas.[n] While they were involved in the same rackets as the Italian mafia, they were also used by large business enterprises that needed assistance making things happen with dock workers, newspapers and bankers.[n] Lansky went on to co-found [[the-commission-mafia|the Commission]] with [[lucky-luciano]] and attended the Cuba meeting that framed the [[operation-gladio]] drug network.[n]
""")

merge("entities/mao-zedong", "Opposition to Chiang and the opium trade", """
The Badlands Media Gladio funding article contrasts Mao, labelled "the communist," with [[chiang-kai-shek]], labelled "the nationalist" because he opposed Mao.[n] It states that Mao was opposed to selling opium or heroin to the Chinese population and was also opposed to outside interference by other countries, given China's recent experiences with the United Kingdom and Japan.[n] Chiang's [[kuomintang]] army fought Mao's forces for territory in China \u2014 both men being Chinese \u2014 and Chiang was eventually pushed out of China into Burma.[n]
""")
