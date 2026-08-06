import io, sys
sys.argv=["x"]
src = io.open(r"C:/Users/14053/hermes-projects/badlands-substack/scripts/merge_9b2.py", encoding="utf-8").read()
ns = {}
exec(src.split("S = {}")[0], ns)
merge = ns["merge"]

S = {}
S["entities/volodymyr-zelensky.md"] = """
## Trump's September 2024 criticism

At a campaign event in North Carolina in September 2024, [[donald-trump|Donald Trump]] lashed out at Zelensky for refusing to make concessions to Russia, in what was reported as his strongest indication to date that he would stop backing Kyiv if he won the presidential election.[n] Trump said Ukraine should have "given up a little bit" to appease Moscow and avoid a conflict that "didn't need to happen," complained that "we continue to give billions of dollars to a man who refuses to make a deal, Zelenskyy," and argued that "any deal, even the worst deal, would've been better than what we have right now."[n] He added that "Ukraine is gone, it's not Ukraine anymore," saying that destroyed cities and the dead could never be replaced.[n]

The remarks came shortly before a scheduled meeting between Zelensky and Trump. Badlands Media commentary read the episode as a signal that Trump was preparing to abandon [[nato|NATO]]'s Ukraine policy just as [[vladimir-putin|Vladimir Putin]] was advertising his hypersonic capabilities, and noted wryly that Zelensky is a professional actor.[n]
"""

S["entities/vladimir-putin.md"] = """
## Nuclear doctrine revision and hypersonic signalling (2024)

In September 2024, Badlands Media discussed the revision of Russian military doctrine under Putin, arguing that the change was not solely about nuclear weapons but also about the use of very large conventional warheads mounted on hypersonic missiles.[n] According to the outlet's account, such ordnance striking at hypersonic speed purportedly generates a blast comparable to a half-megaton nuclear weapon without nuclear technology or radioactive fallout, and Putin indicated he would be willing to use these systems against Ukraine or any other nation that "plays games."[n] The commentary placed this posture alongside [[donald-trump|Donald Trump]]'s campaign-trail signals that he would stop backing Kyiv, suggesting that [[nato|NATO]] was being left exposed at the moment of maximum Russian leverage.[n]

## Multipolarity and the "New Axis" framing

Reporting in the same period described Russia, Iran, China and North Korea as deepening their security ties while simultaneously presenting Washington and its allies with dilemmas that strained the US military — fuelling wars and terror attacks, pursuing illicit nuclear programs, and pressuring neighbouring states.[n] Michael O'Hanlon of the Brookings Institution characterized the alignment as partly a matter of necessity, saying the states involved "have nowhere else to turn, so they turn to each other."[n] Badlands Media rejected the "New Axis" framing as a media construct, arguing that it amounts to tacit admission of a Western hegemonic paradigm sustained since the Second World War through war and sanctions, and predicting that peace would arrive only on the back of the threat of all-out war.[n]
"""

S["entities/nato.md"] = """
## Trump's 2024 signals on Ukraine

In September 2024, [[donald-trump|Donald Trump]] gave what reporters called his strongest indication yet that he would end US support for Ukraine if returned to office, criticizing [[volodymyr-zelensky|Volodymyr Zelensky]] for refusing to concede territory to Russia and arguing that "any deal, even the worst deal" would have been preferable to the war.[n] Badlands Media interpreted the remarks as a signal that Trump was about to pull the rug from under NATO at precisely the moment [[vladimir-putin|Vladimir Putin]] was advertising a revised military doctrine and hypersonic strike capability.[n]

## Erosion of legitimacy in Badlands commentary

Badlands writers also treated the [[taliban|Taliban]]'s bid to join [[brics|BRICS]] as a sign that the alliance's authority, alongside that of the [[united-nations|United Nations]], was being undermined by what the outlet calls a Sovereign Alliance: states outside Western recognition can decline the international rules-based order altogether and route around sanctions, central banking and IMF lending by joining alternative structures.[n] The outlet noted that China and Russia maintained embassies in Kabul even after the US–NATO withdrawal of August 2021.[n]
"""

for k, v in S.items():
    merge(k, v)
