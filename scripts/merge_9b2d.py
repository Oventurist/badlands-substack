import io, sys
sys.argv=["x"]
src = io.open(r"C:/Users/14053/hermes-projects/badlands-substack/scripts/merge_9b2.py", encoding="utf-8").read()
ns = {}
exec(src.split("S = {}")[0], ns)
merge = ns["merge"]

S = {}
S["entities/danny-danon.md"] = """
## Response to Abbas at the United Nations (2024)

As Israel's ambassador to the United Nations, Danon responded to [[mahmoud-abbas|Mahmoud Abbas]]'s September 2024 General Assembly speech with a statement accusing the Palestinian president of speaking about a peaceful solution only when addressing the United Nations, and of failing to condemn the October 7 attack by [[hamas|Hamas]] that triggered the war in the Hamas-run Gaza Strip.[n] Badlands Media disputed that characterization, noting that Abbas had publicly criticized Hamas for failing to inform the [[palestinian-authority|Palestinian Authority]] of the planned attack and had blamed the group for the destruction that followed.[n]
"""

S["entities/hamas.md"] = """
## Abbas's record of opposition (2007–2018)

Badlands Media compiled a sequence of confrontations between Hamas and [[mahmoud-abbas|Mahmoud Abbas]] to argue that Abbas has been the principal Palestinian figure attempting to curb the organization.[n] In 2007, after Hamas drove both [[palestinian-authority|Palestinian Authority]] security forces and the [[israel-defense-forces|Israel Defense Forces]] out of Gaza, Abbas declared that his government would hold no dialogue with the group's "murderous terrorists."[n] In 2017 he refused to appoint Hamas officials to the Palestinian government unless they recognized the state of Israel.[n] In 2018, Hamas attempted to assassinate his prime minister with a roadside bomb during a mission to negotiate the peaceful transfer of the Gazan government to the Palestinian Authority, after which Abbas sanctioned the organization and cut it off financially in an attempt to destroy it.[n]

According to the same commentary, Hamas survived that financial squeeze because [[benjamin-netanyahu|Benjamin Netanyahu]] arranged for Israel to carry briefcases containing tens of millions of dollars in cash into Gaza and distribute them to families with ties to the organization — a scheme exposed when a cabinet minister resigned in protest and went public.[n] The outlet argued on this basis that the United States and Israeli governments had directly funded the group's rise to power.[n] In September 2024, Israel's UN ambassador [[danny-danon|Danny Danon]] accused Abbas of failing to condemn the October 7 Hamas attack that triggered the Gaza war.[n]
"""

S["entities/benjamin-netanyahu.md"] = """
## Alleged cash transfers to Hamas-linked families

Badlands Media has alleged that after [[mahmoud-abbas|Mahmoud Abbas]] sanctioned [[hamas|Hamas]] and cut off its funding in 2018, Netanyahu devised a scheme under which Israel physically carried briefcases containing tens of millions of dollars in cash into Gaza and handed them to families with ties to the organization, thereby sustaining it.[n] According to the account, Netanyahu was exposed by one of his own cabinet ministers, who was so appalled by the plot that he resigned from the government and went public with the story.[n] The outlet cited this history in arguing that Abbas, not Netanyahu, had been the figure genuinely attempting to suppress Hamas.[n]

In September 2024, ahead of Netanyahu's address to the United Nations General Assembly, Badlands writers noted that he had recently been disparaging Abbas publicly, and recalled that in July 2024 — the night before Netanyahu addressed Congress — [[donald-trump|Donald Trump]] had posted a letter from Abbas expressing concern over the attempt on Trump's life, complete with a hand-written note.[n]
"""

S["entities/palestinian-authority.md"] = """
## Abbas's 2024 United Nations appeal

In his September 2024 address to the United Nations, [[mahmoud-abbas|Mahmoud Abbas]] argued that the Palestinian Authority should have control over all Palestinian territories and said it would hold elections once the war in Gaza ended.[n] He called for a comprehensive and permanent ceasefire, an end to attacks by Israeli settlers in the West Bank and East Jerusalem, delivery of humanitarian aid throughout Gaza, and a full withdrawal of the Israeli military from the enclave.[n]

## Conflict with Hamas

Badlands Media recounted the Authority's long antagonism with [[hamas|Hamas]]: its security forces were driven out of Gaza alongside the [[israel-defense-forces|Israel Defense Forces]] in 2007; Abbas subsequently refused dialogue with the group and declined to seat its officials in the Palestinian government unless it recognized Israel; and in 2018 Hamas attempted to assassinate the Authority's prime minister with a roadside bomb while he travelled to Gaza to negotiate a peaceful transfer of governance.[n] The outlet also stated that Abbas had criticized Hamas for launching the October 7 attack without informing the Authority and had blamed the group for the destruction that followed.[n]
"""

S["entities/department-of-energy.md"] = """
## Small modular reactors and AI power demand (2024)

In September 2024, Energy Secretary [[jennifer-granholm|Jennifer Granholm]] used a CNBC appearance to indicate that [[small-modular-reactor|small modular reactors]] were all but confirmed as a future power source for data centers, responding to questions about how the electricity demands of generative artificial intelligence would be met.[n] The exchange referenced the prospect of bringing a reactor at [[three-mile-island-nuclear-power-plant|Three Mile Island]] back online and recommissioning other nuclear sites, with national power needs potentially 20% higher within a few years.[n] Badlands Media characterized the department's posture as a sharp pivot away from the wind-and-solar rhetoric of the Green New Deal era toward nuclear generation.[n]
"""

S["entities/southern-district-of-new-york.md"] = """
## Adams and Combs prosecutions (2024)

In September 2024 the district was the venue for two high-profile prosecutions running in parallel: the bribery and fraud indictment of New York City mayor [[eric-adams|Eric Adams]], unsealed on September 26 after a months-long investigation into alleged foreign campaign donations from Turkish entities, and the federal case against [[sean-combs|Sean Combs]].[n] US Attorney [[damian-williams|Damian Williams]], asked whether other celebrities might be charged in the Combs matter, said that "nothing is off the table."[n] Badlands Media commentary drew attention to the coincidence of both cases arising in the same district and sharing a common thread of alleged corruption, describing the exposure of organized crime usurping public trust shortly before a national election as a welcome development.[n]
"""

for k, v in S.items():
    merge(k, v)
