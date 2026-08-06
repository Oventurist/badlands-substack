# -*- coding: utf-8 -*-
import os

W = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
REF = '## References\n1. Badlands Brief \u2014 "Operation Gladio - How It\'s Funded", URL: https://badlands.substack.com/p/operation-gladio-how-its-funded\n'

def page(folder, slug, title, typ, tags, body):
    path = os.path.join(W, folder, slug + ".md")
    if os.path.exists(path):
        print("SKIP-EXISTS", slug); return 0
    fm = ('---\ntitle: "%s"\ncreated: 2026-08-06\nupdated: 2026-08-06\ntype: %s\n'
          'tags: [%s]\nsources: [raw/operation-gladio-how-its-funded.md]\nconfidence: medium\n---\n\n'
          % (title, typ, ", ".join(tags)))
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(fm + "# " + title + "\n\n" + body.strip() + "\n\n" + REF)
    print("CREATED", folder + "/" + slug)
    return 1

P = []
A = P.append

A(("entities","allen-dulles","Allen Dulles","entity",["cia","oss","operation-gladio","intelligence"],
"""Allen Dulles was an Office of Strategic Services officer who served as the OSS European officer-in-charge and later became Director of the Central Intelligence Agency.[1] In the Badlands Media account of [[operation-gladio]], Dulles was one of three figures \u2014 alongside [[james-jesus-angleton]] of the OSS and British Security Coordinator [[william-stephenson]] of [[mi6]] \u2014 who met to design the covert financial network that would fund stay-behind operations, funnelling money to [[paul-helliwell]] for onward transfer to the [[world-commerce-corporation]].[1]

Dulles worked with [[claire-chennault]] and [[william-pawley]] to establish [[chiang-kai-shek]] on Formosa after the Chinese Nationalist leader was pushed out of mainland China and then out of Burma, securing a continuing opium supply to pay for Gladio's covert operations.[1] Dulles also joined Secretary of the Navy [[james-forrestal]] and officials of the [[office-of-naval-intelligence]] in pressuring New York Governor [[thomas-dewey]] to commute the sentence of [[lucky-luciano]] on condition of deportation to Italy.[1]

President Truman appointed Dulles as director of the [[cia]] while his brother [[john-foster-dulles]] served as Secretary of State, forging a tie between the agency and the [[state-department]] that the article argues still exists today.[1] A third sibling, [[eleanor-lansing-dulles]], worked in the State Department's Bureau of Intelligence and Research.[1] Dulles's role in the [[bay-of-pigs]] operation led Secretary of State [[dean-rusk]] to ask Eleanor to resign.[1]"""))

A(("entities","john-foster-dulles","John Foster Dulles","entity",["state-department","cia","cold-war"],
"""John Foster Dulles served as United States Secretary of State while his brother [[allen-dulles]] was director of the [[cia]], a pairing that in the Badlands Media account of [[operation-gladio]] forged an enduring institutional tie between the [[state-department]] and the intelligence community.[1] The article notes that the State Department's Office of Policy Coordination under [[frank-wisner]] moved \u201clock, stock and barrel\u201d to the CIA once the agency was established, illustrating how thoroughly the two bodies were interlocked.[1] His sister [[eleanor-lansing-dulles]] served within the State Department's Bureau of Intelligence and Research.[1]"""))

A(("entities","eleanor-lansing-dulles","Eleanor Lansing Dulles","entity",["state-department","bretton-woods","imf","cia"],
"""Eleanor Lansing Dulles was an American economist and State Department official, and the often-overlooked sibling of [[allen-dulles]] and [[john-foster-dulles]].[1] She worked in the Bureau of Intelligence and Research within the [[state-department]], which the Badlands Media account describes as the entry point at the State level for [[cia]] activities.[1]

Earlier in her career she worked at the Commerce Department during the implementation of Franklin Delano Roosevelt's National Recovery Act \u2014 characterised in the article as socialist and later deemed unconstitutional \u2014 and the follow-on New Deal.[1] She was instrumental in developing the U.S. position on international financial cooperation, participated in the [[bretton-woods-conference]] of 1944, and supported the creation of the [[imf|International Monetary Fund]] and the International Bank for Reconstruction and Development.[1] Secretary of State [[dean-rusk]] asked her to resign as a result of her brother's role in the [[bay-of-pigs]], and she retired the following year.[1]"""))

A(("entities","lucky-luciano","Lucky Luciano","entity",["mafia","operation-gladio","heroin","operation-underworld"],
"""Charles \u201cLucky\u201d Luciano was an Italian-American mafia boss who, with [[meyer-lansky]], set up \u201c[[the-commission-mafia|the Commission]]\u201d in 1931 \u2014 the twelve-boss committee that managed all mafia dealings and which, in the Badlands Media account, became the apparatus used to build the final American leg of the [[operation-gladio]] drug network.[1]

Luciano was the first to begin importing heroin into New York from [[chiang-kai-shek]]'s network.[1] Before World War II there were fewer than 20,000 heroin addicts worldwide and less than 1,000 kilos produced annually.[1] Luciano supplied heroin to his prostitutes to keep them dependent on him, controlling over 200 brothels in New York City with more than 1,200 prostitutes, and heroin was pushed to black musicians in the city's jazz venues \u2014 a targeted effort that the article says later provided a network for trafficking drugs throughout black communities and generated the arrests used as cover for the [[war-on-drugs]].[1]

Arrested in 1936 for his prostitution ring, Luciano was rehabilitated as an intelligence asset through [[operation-underworld]] after the SS Normandie fire in New York harbour, providing waterfront security assistance in exchange for his freedom.[1] He subsequently supplied intelligence for [[operation-husky]], the Allied invasion of Sicily.[1] Secretary of the Navy [[james-forrestal]], [[allen-dulles]] and [[office-of-naval-intelligence]] officials pressured Governor [[thomas-dewey]] to commute his sentence on condition of deportation to Italy \u2014 despite Luciano being a US citizen not subject to deportation.[1] Within months of arriving in Sicily he travelled to Cuba to meet [[frank-costello]], [[vito-genovese]], [[albert-anastasia]] and Lansky to frame the entire Gladio drug network.[1]"""))

A(("entities","vito-genovese","Vito Genovese","entity",["mafia","operation-gladio","heroin","italy"],
"""Vito Genovese was an American mafia figure who became the official translator for US Army headquarters in Naples during the Allied occupation of Italy.[1] The provincial military governor, [[charles-poletti]] \u2014 New York's former Lieutenant Governor and a close friend of [[lucky-luciano]] \u2014 appointed Genovese's men as port authorities, after which, the Badlands Media account states, everything became black market with goods enriching the postwar OSS/mafia network.[1]

Genovese later returned to the United States and set up a drug distribution network focused on Harlem nightclubs that eventually spread to primarily black inner cities throughout the country.[1] He was wanted for the murder of fellow mobster Ferdinand Boccia; the key witness, held in a solitary cell for protection, was poisoned while in police custody with enough poison in his bloodstream \u201cto kill eight horses,\u201d and a second witness was assassinated in New Jersey, after which all charges were dropped.[1] The article calls this the first of many such assassinations carried out as part of [[operation-gladio]].[1] Genovese also attended the Cuba meeting with Luciano, [[meyer-lansky]], [[frank-costello]] and [[albert-anastasia]] that framed the Gladio drug network.[1]"""))

A(("entities","santo-trafficante","Santo Trafficante","entity",["mafia","cuba","operation-gladio","drug-trafficking"],
"""Santo Trafficante was the mafia don of Cuba, Miami and Tampa and, according to the Badlands Media account, played the largest role of any American mobster in [[operation-gladio]] drug trafficking.[1] He was among the American counterparts present for the Cuba meeting convened after [[lucky-luciano]]'s deportation to Italy, alongside [[frank-costello]], [[vito-genovese]], [[albert-anastasia]], [[meyer-lansky]], Mike Miranda, Joseph Magliocco, Joe Adonis, Tommy Lucchese, Joe Profaci, Willie Moretti and the Fischetti brothers, which set up the framework of the Gladio drug network used to fund covert operations.[1]"""))

A(("entities","frank-costello","Frank Costello","entity",["mafia","operation-gladio","cuba"],
"""Frank Costello was an American mafia boss who attended the Cuba meeting convened by [[lucky-luciano]] within months of Luciano's deportation to Italy.[1] The gathering, which also included [[vito-genovese]], [[albert-anastasia]], [[meyer-lansky]] and [[santo-trafficante]], set up the entire framework of the [[operation-gladio]] drug network used to fund covert operations.[1]"""))

A(("entities","albert-anastasia","Albert Anastasia","entity",["mafia","operation-gladio","cuba"],
"""Albert Anastasia was an American mafia boss present at the Cuba meeting held shortly after [[lucky-luciano]]'s deportation to Italy, together with [[frank-costello]], [[vito-genovese]] and [[meyer-lansky]].[1] The meeting established the framework of the [[operation-gladio]] drug network that funded covert operations, with [[santo-trafficante]] taking the largest trafficking role.[1]"""))

A(("entities","william-donovan","William Donovan","entity",["oss","cia","operation-gladio","kuomintang"],
"""William \u201cWild Bill\u201d Donovan was the head of the [[office-of-strategic-services]] during World War II.[1] He directed Colonel [[paul-helliwell]] to covertly assist [[chiang-kai-shek]]'s [[kuomintang]] army with weapons, a mission to which Helliwell added opiate trafficking.[1] Donovan created the [[world-commerce-corporation]] specifically as the vehicle through which money would be funnelled in the covert financing network designed with [[allen-dulles]], [[james-jesus-angleton]] and [[william-stephenson]].[1]"""))

A(("entities","chiang-kai-shek","Chiang Kai-shek","entity",["kuomintang","china","taiwan","opium","operation-gladio"],
"""Chiang Kai-shek was the general who commanded the [[kuomintang]], the Chinese Nationalist Army, and whom Colonel [[paul-helliwell]] met while assigned in Southern China.[1] Chiang sold opium to Chinese addicts to fund his war effort, and the Badlands Media account describes him as allegedly the world's largest drug trafficker at that point.[1]

Chiang was labelled a \u201cnationalist\u201d because he opposed [[mao-zedong]], the \u201ccommunist\u201d \u2014 Mao being opposed both to selling opium or heroin to the Chinese population and to outside interference by foreign powers after China's experiences with the United Kingdom and Japan.[1] Chiang's KMT army fought Mao's forces for territory in China; both men were Chinese.[1] Chiang was eventually pushed out of China into Burma, and later expelled from Burma as well.[1]

[[claire-chennault]], [[william-pawley]] and [[allen-dulles]] then set Chiang up on Formosa, recently vacated by the Japanese, to continue supplying opium to pay for the covert operations of [[operation-gladio]].[1] Chiang renamed the island [[taiwan]] and declared martial law, and for roughly the next forty years, into the 1980s, Taiwan functioned as what the article describes as a drug-dealing dictatorship.[1] Heroin from this source was first imported into New York by [[lucky-luciano]].[1]"""))

A(("entities","kuomintang","Kuomintang","entity",["china","taiwan","opium","operation-gladio"],
"""The Kuomintang (KMT) functioned as the Chinese Nationalist Army under the command of [[chiang-kai-shek]].[1] Chiang funded its war effort by selling opium to Chinese addicts, a trade rooted in the opium the United Kingdom had introduced to China \u2014 conflicts the Badlands Media article refers to as the Boxer wars, in which China attempted to halt drug trafficking, lost twice, and forfeited control of Hong Kong.[1]

OSS chief [[william-donovan]] directed Colonel [[paul-helliwell]] to covertly supply the KMT with weapons, and Helliwell added opiate trafficking to the mission, drawing the KMT's opium supply into the financing structure of [[operation-gladio]].[1] The KMT fought [[mao-zedong]]'s forces for territory before being pushed out of China and ultimately relocating to [[taiwan]].[1]"""))

A(("entities","lucien-conein","Lucien Conein","entity",["cia","corsican-mafia","heroin","vietnam","operation-gladio"],
"""Lucien Conein, a French Foreign Legion veteran, joined the covert drug-trafficking effort alongside [[e-howard-hunt]] in the network conceived by Colonel [[paul-helliwell]].[1] The Badlands Media account describes Conein as instrumental in creating the network because of his [[corsican-mafia|Corsican mafia]] ties: the Corsicans produced the highest quality heroin and had an established supply of opium from Vietnam, which proved crucial to the network's success.[1] Having secured the opium source through [[chiang-kai-shek]], Conein arranged for the processing of the opium through the Corsican mafia in France.[1]"""))

A(("entities","e-howard-hunt","E. Howard Hunt","entity",["oss","cia","operation-gladio","drug-trafficking"],
"""E. Howard Hunt, an [[office-of-strategic-services|OSS]] and Army intelligence officer, was among those who joined the drug-trafficking efforts of the covert network devised by Colonel [[paul-helliwell]] with [[allen-dulles]], [[james-jesus-angleton]] and [[william-stephenson]].[1] He worked alongside [[lucien-conein]], whose [[corsican-mafia|Corsican mafia]] connections supplied heroin-refining capacity and Vietnamese opium to the emerging [[operation-gladio]] financing structure.[1]"""))

A(("entities","william-pawley","William Pawley","entity",["operation-gladio","flying-tigers","regime-change","cia"],
"""William Pawley was a wealthy American businessman rarely mentioned in accounts of the period who was instrumental in founding the [[flying-tigers]].[1] The Badlands Media account describes Pawley as a member of the International Syndicate who made millions of dollars from regime-change and [[operation-gladio]] business ventures, while also being an active participant in Gladio operations themselves.[1] Together with [[claire-chennault]] and [[allen-dulles]], he helped set [[chiang-kai-shek]] up on Formosa \u2014 later [[taiwan]] \u2014 to maintain the opium supply funding covert operations.[1]"""))

A(("entities","claire-chennault","Claire Chennault","entity",["flying-tigers","china","kuomintang","cia"],
"""Lieutenant General Claire Chennault was a military advisor to [[chiang-kai-shek]] who, with lawyer and OSS member [[tommy-corcoran]], created the [[flying-tigers]] \u2014 the outfit that transitioned into [[civil-air-transport]] and formed the beginnings of the [[cia]]'s own air fleet.[1] Chennault later worked with [[william-pawley]] and [[allen-dulles]] to establish Chiang on Formosa so that the opium supply funding [[operation-gladio]] could continue.[1]"""))

A(("entities","tommy-corcoran","Tommy Corcoran","entity",["oss","flying-tigers","cia"],
"""Thomas \u201cTommy the Cork\u201d Corcoran was a lawyer and member of the [[office-of-strategic-services]] who, with Lieutenant General [[claire-chennault]], created the [[flying-tigers]].[1] That organisation transitioned into [[civil-air-transport]], forming the beginnings of the [[cia]]'s own air fleet and, in the Badlands Media account, part of the logistical backbone of [[operation-gladio]].[1]"""))

A(("entities","flying-tigers","Flying Tigers","entity",["aviation","china","cia","operation-gladio"],
"""The Flying Tigers were an air unit created by [[tommy-corcoran]], an OSS lawyer, and Lieutenant General [[claire-chennault]], military advisor to [[chiang-kai-shek]].[1] The group transitioned into [[civil-air-transport]], which formed the beginnings of the [[cia]]'s own air fleet.[1] [[william-pawley]], rarely mentioned in standard accounts, was instrumental in founding the organisation.[1]"""))

A(("entities","civil-air-transport","Civil Air Transport","entity",["aviation","cia","china","operation-gladio"],
"""Civil Air Transport (CAT) was the successor to the [[flying-tigers]], the outfit created by [[tommy-corcoran]] and [[claire-chennault]].[1] CAT formed the beginnings of the [[cia]]'s own air fleet, giving the agency independent air logistics for the covert operations and trafficking networks described in the [[operation-gladio]] series.[1] Colonel [[paul-helliwell]] was instrumental in establishing it as a CIA proprietary.[1]"""))

A(("entities","world-commerce-corporation","World Commerce Corporation","entity",["oss","cia","finance","operation-gladio"],
"""The World Commerce Corporation (WCC) was created by OSS chief [[william-donovan]] to serve as the financial conduit for the covert network designed by [[allen-dulles]], [[james-jesus-angleton]] and British Security Coordinator [[william-stephenson]].[1] Under the plan, money would be funnelled to Colonel [[paul-helliwell]], who would forward it to the WCC \u2014 an arrangement the Badlands Media account presents as the seed of [[operation-gladio]]'s off-books financing.[1]"""))

A(("entities","general-development-corporation","General Development Corporation","entity",["money-laundering","cia","real-estate","operation-gladio"],
"""The General Development Corporation was a shell company based in Miami through which the financials of \u201c[[operation-x]]\u201d \u2014 the network running from [[chiang-kai-shek]]'s [[taiwan]] through Sicily and Cuba into the United States \u2014 were managed.[1] The Badlands Media account notes that Canadian and US companies merged in the early 1900s to form the company, and that its orbit included the real estate industry (described as a favoured money-laundering destination), media moguls, and Charles H. Kellstadt, chief executive of Sears.[1] The article identifies it as the money-laundering vehicle used by the [[cia]] to wash drug profits, alongside the [[vatican-bank]], which it calls the venue of choice for the agency's drug money.[1]"""))

A(("entities","corsican-mafia","Corsican Mafia","entity",["mafia","heroin","france","operation-gladio"],
"""The Corsican mafia was the French criminal network brought into the covert intelligence drug pipeline through [[lucien-conein]]'s connections.[1] The Corsicans produced the highest quality heroin and had an established supply of opium from Vietnam, which the Badlands Media account describes as crucial to the success of the network conceived by Colonel [[paul-helliwell]].[1] Once [[chiang-kai-shek]] had secured the opium source, processing was set up through the Corsican mafia in France.[1] With the [[office-of-strategic-services|OSS]] in control of Italy's ports after the war, control of the heroin network slowly migrated from the Corsicans to the [[cia]]'s Italian mafia channels.[1]"""))

A(("entities","james-forrestal","James Forrestal","entity",["navy","cia","operation-gladio","assassination"],
"""James Forrestal was United States Secretary of the Navy who, with [[allen-dulles]] and officials of the [[office-of-naval-intelligence]], pressured New York Governor [[thomas-dewey]] to release [[lucky-luciano]] by commuting his sentence on condition that he be deported to Italy.[1] Three years after this occurred, the Badlands Media account states, Forrestal was assassinated when he was thrown from the sixteenth floor of the Bethesda Naval Hospital, where he was a patient undergoing mental evaluation.[1]"""))

A(("entities","thomas-dewey","Thomas Dewey","entity",["new-york","mafia","operation-gladio"],
"""Thomas Dewey was Governor of New York who commuted the sentence of [[lucky-luciano]] on the condition that Luciano be deported to Italy.[1] The Badlands Media account states Dewey acted under pressure from Secretary of the Navy [[james-forrestal]], [[allen-dulles]] and officials of the [[office-of-naval-intelligence]], and notes that Luciano was a US citizen who was not legally subject to deportation \u2014 yet the deportation happened anyway.[1]"""))

A(("entities","charles-poletti","Charles Poletti","entity",["italy","occupation","mafia","new-york"],
"""Charles Poletti, New York's former Lieutenant Governor and a close friend of [[lucky-luciano]], served as provincial military governor in Italy during the American occupation following [[operation-husky]].[1] Poletti appointed the men of Luciano's agent [[vito-genovese]] as port authorities, after which, the Badlands Media account states, everything became black market, with the resulting goods enriching the postwar OSS/mafia network.[1]"""))

A(("entities","frank-wisner","Frank Wisner","entity",["cia","state-department","covert-operations"],
"""Frank Wisner directed the [[state-department]]'s Office of Policy Coordination (OPC).[1] The Badlands Media account states that the OPC moved \u201clock, stock and barrel\u201d to the [[cia]] once that agency was established in 1947, illustrating the article's central contention that everything the CIA does was already being done before its creation \u2014 it simply had not all been done under one roof.[1]"""))

A(("entities","william-stephenson","William Stephenson","entity",["mi6","intelligence","operation-gladio"],
"""William \u201cLittle Bill\u201d Stephenson was the British Security Coordinator and an [[mi6]] officer who met with [[james-jesus-angleton]] of the [[office-of-strategic-services|OSS]] and [[allen-dulles]] to discuss setting up the covert financing network that would underwrite [[operation-gladio]].[1] Under the plan, money would flow to Colonel [[paul-helliwell]] and onward to the [[world-commerce-corporation]] created by [[william-donovan]].[1]"""))

A(("entities","office-of-naval-intelligence","Office of Naval Intelligence","entity",["navy","intelligence","operation-underworld"],
"""The Office of Naval Intelligence (ONI) sought mafia assistance with New York's waterfront after the SS Normandie \u2014 a French luxury liner in use as a government transport ship \u2014 was set on fire in the harbour, an incident the Badlands Media account describes as the first of many false flags involving a ship in a harbour.[1] The resulting arrangement, [[operation-underworld]], transformed [[lucky-luciano]] into an intelligence asset in exchange for his freedom.[1] ONI officials later joined Secretary of the Navy [[james-forrestal]] and [[allen-dulles]] in pressing Governor [[thomas-dewey]] to commute Luciano's sentence.[1]"""))

A(("concepts","operation-x","Operation X","concept",["operation-gladio","drug-trafficking","cia","money-laundering"],
"""\u201cOperation X\u201d was the code name given to the new trafficking network running from [[chiang-kai-shek]]'s [[taiwan]], through Sicily and Cuba, into the United States.[1] Its financials were managed through the [[general-development-corporation]], a shell company in Miami used by the [[cia]] to wash drug profits.[1] The scheme sat atop the structure devised by Colonel [[paul-helliwell]]: opium from the [[kuomintang]], refining through the [[corsican-mafia]] arranged by [[lucien-conein]], and American distribution through [[lucky-luciano]], [[vito-genovese]] and [[santo-trafficante]] under [[the-commission-mafia|the Commission]].[1] The [[vatican-bank]] is identified as the CIA's venue of choice for its drug money.[1]"""))

A(("concepts","the-commission-mafia","The Commission (Mafia)","concept",["mafia","organized-crime","operation-gladio"],
"""The Commission was established in 1931 by [[lucky-luciano]] and [[meyer-lansky]] as the committee that managed all mafia dealings, with twelve mafia bosses collaborating on every issue.[1] In the Badlands Media account of [[operation-gladio]], this apparatus was used to set up the final leg of the covert drug operation \u2014 the American distribution network that carried heroin sourced from [[chiang-kai-shek]] and refined by the [[corsican-mafia]] into United States cities.[1]"""))

A(("concepts","operation-husky","Operation Husky","concept",["world-war-ii","sicily","mafia","operation-gladio"],
"""Operation Husky was the Allied invasion of Sicily during World War II.[1] [[lucky-luciano]], whose old stomping grounds included the island, supplied the intelligence necessary to ensure the mission's success \u2014 no insignificant feat, the Badlands Media account observes, because [[benito-mussolini]] had suppressed the mafia and the masonic lodges throughout Italy during his fascist rule.[1] Both would make a roaring comeback under [[operation-gladio]] in Italy and worldwide under the guise of intelligence.[1]

Sicilian mafia families were instrumental in Husky's success, and during the subsequent US military occupation numerous mafia officials were installed as mayors and government officials.[1] [[vito-genovese]] became the official translator for US Army headquarters in Naples, and provincial military governor [[charles-poletti]] appointed Genovese's men as port authorities.[1] With the [[office-of-strategic-services|OSS]] thereby in control of Italy's ports, the network conceived by [[paul-helliwell]] could finally be established.[1]"""))

A(("concepts","national-security-act-of-1947","National Security Act of 1947","concept",["cia","law","national-security"],
"""The National Security Act of 1947 created the [[cia]], completing an institutional evolution that ran from the wartime [[office-of-strategic-services]] through the Strategic Service Unit, the National Intelligence Authority and the Central Intelligence Group.[1] Its mission was to carry out covert operations against \u201chostile\u201d foreign states or groups, or in support of friendly ones, planned so that any US government responsibility would not be evident to unauthorised persons.[1]

The Badlands Media account argues this is a critical point and explains why the CIA consistently labels governments resisting the international syndicate's control of them and their resources as \u201ccommunists,\u201d thereby bringing the agency's full weight to bear.[1] The article further contends that Congress gave the CIA sweeping powers and protection, allowing previously illegal activities \u2014 narcotics, human trafficking and weapons trafficking \u2014 to continue behind the stamp of \u201cnational security.\u201d[1]"""))

A(("entities","dean-rusk","Dean Rusk","entity",["state-department","bay-of-pigs"],
"""Dean Rusk was the United States Secretary of State who asked [[eleanor-lansing-dulles]] to resign from the [[state-department]] as a result of her brother [[allen-dulles]]'s role in the [[bay-of-pigs]].[1] She retired the following year.[1]"""))

A(("concepts","bretton-woods-conference","Bretton Woods Conference","concept",["finance","imf","international-institutions"],
"""The Bretton Woods Conference of 1944 shaped the postwar international financial order.[1] [[eleanor-lansing-dulles]], sister of [[allen-dulles]] and [[john-foster-dulles]], participated in the conference and supported the creation of the [[imf|International Monetary Fund]] and the International Bank for Reconstruction and Development, having been instrumental in developing the U.S. position on international financial cooperation.[1]"""))

n = 0
for folder, slug, title, typ, tags, body in P:
    n += page(folder, slug, title, typ, tags, body)
print("TOTAL CREATED", n)
