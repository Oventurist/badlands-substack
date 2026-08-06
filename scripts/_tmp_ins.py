import io, sys
REF = '{}. Badlands Brief — "Badlands News Brief: B-Ball Bets, Bomber Busts, & \'Bipartisan\' Bill Blockage", URL: https://badlands.substack.com/p/badlands-news-brief-cf8'

def do(path, n, body):
    with io.open(path, encoding='utf-8') as f:
        txt = f.read()
    nl = '\r\n' if '\r\n' in txt else '\n'
    idx = txt.rindex('## References')
    new = txt[:idx] + body.strip() + nl + nl + txt[idx:]
    if not new.endswith(nl):
        new += nl
    new += REF.format(n) + nl
    with io.open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(new)
    print('ok', path)

W = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'

do(W+'entities/karoline-leavitt.md', 30, """
## October 2025 briefings on Xi and Putin

On Thursday, October 23, 2025, Leavitt announced that President [[donald-trump|Donald Trump]] would meet Chinese President [[xi-jinping|Xi Jinping]] the following Thursday on the sidelines of the [[asia-pacific-economic-cooperation|APEC]] summit, as part of a trip to Malaysia and South Korea, without providing further details.[30] The announcement came amid an escalating trade war in which Trump had threatened an additional 100 percent tariff on Chinese goods from November.[30]

In the same period Leavitt told a press briefing that a summit between Trump and Russian President [[vladimir-putin|Vladimir Putin]] "is not completely off the table," a day after Trump called off a planned Budapest meeting.[30] Asked about the cancellation and recent US sanctions on major Russian oil companies, she said the president and the entire administration hoped such a meeting could happen again one day, and that Trump "has not seen enough interest in enough action" from Russia toward a peace settlement.[30]
""")

do(W+'entities/canada.md', 4, """
## Termination of trade talks over the Reagan ad (October 2025)

On Thursday night, October 23, 2025, President [[donald-trump|Donald Trump]] said he was terminating all trade negotiations with Canada because the [[ontario|Ontario]] provincial government had aired an [[ontario-reagan-tariff-advertisement|advertisement]] featuring former President [[ronald-reagan|Ronald Reagan]] speaking negatively about tariffs.[4] Trump's announcement accused Canada of trying to influence a pending U.S. Supreme Court case that could doom many of his tariffs, including those on Canada.[4] The Ronald Reagan Presidential Foundation and Institute said the ad misrepresented a presidential radio address Reagan delivered in April 1987 and that his remarks had been edited without permission, without specifying what was misleading.[4]

Ontario Premier [[doug-ford|Doug Ford]] had said the province would spend $75 million on ads running in the United States featuring Reagan criticizing tariffs.[4] Badlands contributor [[ashe-in-america|Ashe in America]] characterized the campaign as Canadian information warfare intended to manipulate American courts and turn Americans against Trump, describing the tariffs as a corrective measure for a trade imbalance.[4]
""")

do(W+'entities/doug-ford.md', 5, """
## The Reagan tariff ad and the end of trade talks (October 2025)

Ford's Ontario government funded the [[ontario-reagan-tariff-advertisement|Reagan tariff advertisement]] that ran in the United States, with Ford saying the province would spend $75 million on ads featuring former President [[ronald-reagan|Ronald Reagan]] criticizing tariffs.[5] On Thursday night, October 23, 2025, President [[donald-trump|Donald Trump]] announced he was terminating all trade negotiations with [[canada|Canada]] over the spot, accusing Canada of attempting to influence a pending U.S. Supreme Court case that could doom many of his tariffs.[5] The Ronald Reagan Presidential Foundation and Institute said the ad misrepresented an April 1987 presidential radio address and that Reagan's remarks had been edited without permission.[5]
""")

do(W+'entities/jd-vance.md', 50, """
## Reaction to the Knesset annexation vote (October 2025)

Departing [[israel|Israel]] on Thursday, October 23, 2025, Vice President Vance said the previous day's [[knesset|Knesset]] vote advancing a bill to apply Israeli sovereignty to all West Bank settlements had offended him and was "very stupid."[50] His comment underlined the administration's lack of patience for [[west-bank-annexation|West Bank annexation]] efforts, coming as President [[donald-trump|Donald Trump]] warned in a Time interview that Israel would lose "all support" from the United States if it proceeded.[50] Badlands commentary described the timing of the preliminary vote, taken as Vance was flying to Israel, as a flagrant act of defiance toward Trump.[50]
""")
