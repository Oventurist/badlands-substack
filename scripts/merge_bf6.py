# -*- coding: utf-8 -*-
import io, os, re, subprocess, sys
ROOT = r'C:/Users/14053/hermes-projects/badlands-substack'
RAW = 'badlands-news-brief-bf6'
REF = 'Badlands Media \u2014 "Badlands News Brief: A Tucker, a Lemon and a Trump Walk Into a Bar ...", URL: https://badlands.substack.com/p/badlands-news-brief-bf6'
LOCK = ROOT + '/scripts/wiki_page_lock.py'

def find(slug):
    for d in ('entities', 'concepts'):
        p = '%s/wiki/%s/%s.md' % (ROOT, d, slug)
        if os.path.exists(p):
            return p
    return None

def merge(path, body):
    txt = io.open(path, encoding='utf-8').read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
    if not m:
        print('NOSOURCES ' + path); return
    items = [x.strip() for x in m.group(1).split(',') if x.strip()]
    entry = 'raw/%s.md' % RAW
    if entry in items:
        n = items.index(entry) + 1
    else:
        items.append(entry); n = len(items)
        txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
    txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
    b = body.replace('{N}', str(n)).strip() + '\n'
    if '## References' in txt:
        head, refs = txt.rsplit('## References', 1)
        reflines = [l.rstrip() for l in refs.strip().split('\n') if l.strip()]
        if not any(l.strip().startswith('%d.' % n) for l in reflines):
            reflines.append('%d. %s' % (n, REF))
        txt = head.rstrip('\n') + '\n\n' + b + '\n## References\n' + '\n'.join(reflines) + '\n'
    else:
        txt = txt.rstrip('\n') + '\n\n' + b + '\n## References\n%d. %s\n' % (n, REF)
    io.open(path, 'w', encoding='utf-8').write(txt)
    print('MERGED n=%d %s' % (n, path))

def run(updates):
    for slug, body in updates:
        p = find(slug)
        if not p:
            print('MISSING ' + slug); continue
        r = subprocess.call([sys.executable, LOCK, 'acquire', slug])
        if r != 0:
            print('BUSY ' + slug); continue
        try:
            merge(p, body)
        finally:
            subprocess.call([sys.executable, LOCK, 'release', slug])

U = []

U.append(('tucker-carlson', """
## April 2023 departure from Fox News

On Monday, April 24, 2023, Fox News announced that it and Carlson had "severed ties," a decision that the network disclosed without explanation and that CNN described as a stunning announcement that "rocked the media and political worlds."[{N}] The network's brief statement said only, "We thank him for his service to the network as a host and prior to that as a contributor," and noted that his last show had aired on Friday, April 21.[{N}] Carlson, then the highest-rated single host at [[fox-news|Fox News]], did not respond to requests for comment; according to people familiar with the matter, the decision was made on the evening of Friday, April 21 by Fox Corporation chief executive [[lachlan-murdoch|Lachlan Murdoch]] and Fox News chief executive [[suzanne-scott|Suzanne Scott]], and Carlson was informed on Monday morning.[{N}]

[[badlands-media|Badlands Media]] treated the exit as a major inflection point in the information war. Writing in the Badlands News Brief, [[burning-bright|Burning Bright]] deliberately quoted CNN's hostile framing of Carlson as a "right-wing extremist" to illustrate the pincer move he argued the [[media-industrial-complex|Media Industrial Complex]] was caught in over the departure of the most popular talking head in the United States — one whose rhetoric had slid increasingly into America First territory.[{N}] He noted that Carlson was the most-watched host on legacy cable news by a comically wide margin, largely because of his willingness to touch subject matter others refused to, including the Ukraine–Russia war, the petrodollar and money laundering, and predicted that a good portion of his audience would leave Fox wherever he landed next — in his view a good thing, and further evidence that "the exposure of Con Inc. continues to accelerate."[{N}]

Carlson's ouster occurred within an hour of [[cnn|CNN]]'s firing of anchor [[don-lemon|Don Lemon]], a coincidence Badlands writers rejected as coincidence at all.[{N}] Former president [[donald-trump|Donald Trump]], interviewed on [[newsmax|Newsmax]] that night, said he was "shocked" and "surprised" by the news, calling Carlson "a very good person a very good man and very talented" with "very high ratings," and adding that he had been "terrific to me" over the previous year or so.[{N}] Trump also speculated that it might not have been a firing at all: "maybe he left because he wasn't being given his free rein, he wants his free rein maybe but I was surprised by it."[{N}]
"""))

U.append(('don-lemon', """
## April 2023 firing by CNN

On Monday, April 24, 2023, [[cnn|CNN]] fired Lemon in the wake of sexist on-air comments and reports that he had mistreated female coworkers during his seventeen years at the network.[{N}] Lemon, who had hosted "CNN This Morning" as scheduled that morning, said his agent informed him of the termination and that he was "stunned" by the news.[{N}] The dismissal followed the controversy over his on-air remarks about Nikki Haley and a Variety report documenting a history of misogynistic behavior.[{N}]

The firing came within an hour of [[fox-news|Fox News]] announcing the immediate departure of prime-time host [[tucker-carlson|Tucker Carlson]], and one day after [[nbcuniversal|NBCUniversal]] said chief executive [[jeff-shell|Jeff Shell]] had left over an "inappropriate relationship with a woman in the company."[{N}] [[badlands-media|Badlands Media]] writer [[burning-bright|Burning Bright]] presented the "twin & congruent firings" of Carlson and Lemon on the same Monday in April as direct evidence against the existence of coincidence in the [[information-war|Information War]].[{N}] He argued the paired announcements conflated Fox and CNN as [[media-industrial-complex|Media Industrial Complex]] corporations in the collective mind even though the standing of the two hosts within the America First movement could not have been more different, and that they continued the shared ratings-collapse cascade of legacy media while further decentralizing information dissemination.[{N}]
"""))

U.append(('donald-trump', """
## Reaction to Tucker Carlson's Fox News exit (April 2023)

Interviewed on [[newsmax|Newsmax]] on the night of April 24, 2023, Trump said he had been "shocked" and "surprised" to learn that [[fox-news|Fox News]] had ousted [[tucker-carlson|Tucker Carlson]], describing him as "a very good person a very good man and very talented" with "very high ratings" who "has been terrific to me" over the preceding year.[{N}] Trump, who had grown increasingly critical of Fox, had urged Fox Corp. owner and chairman [[rupert-murdoch|Rupert Murdoch]] — who was set to testify at trial — to embrace his theories about voter fraud in a bid to win the [[dominion-voting-systems|Dominion Voting Systems]] defamation case, and said afterward, "I was surprised they made a settlement in that case. I thought that was a case that should easily be won."[{N}] He added that it was unclear whether Carlson had been fired or had left because he was not "being given his free rein."[{N}]

[[badlands-media|Badlands Media]] writer [[burning-bright|Burning Bright]] read the remarks as "MOABS" following a seeded news cycle, arguing that Trump's phrasing implied a timeline for Carlson's "activation" or turn in favor of the America First agenda, and that his jibe at Fox aligned with the Badlands thesis that the network had been deployed to shield Dominion rather than to fight it, setting legal and psychological precedent harmful to the election reform movement.[{N}]
"""))

U.append(('fox-news', """
## Tucker Carlson's departure (April 2023)

Fox News announced on Monday, April 24, 2023 that it and prime-time host [[tucker-carlson|Tucker Carlson]] had severed ties, offering no explanation beyond a statement thanking him "for his service to the network as a host and prior to that as a contributor" and confirming that his final show had aired Friday, April 21.[{N}] Reporting at the time attributed the decision to Fox Corporation chief executive [[lachlan-murdoch|Lachlan Murdoch]] and Fox News chief executive [[suzanne-scott|Suzanne Scott]], who are said to have made the call on the evening of April 21; Carlson, the network's highest-rated single host, was informed on Monday morning.[{N}] CNBC framed the exit as coming in the wake of the network's [[dominion-voting-systems|Dominion Voting Systems]] defamation settlement.[{N}]

[[badlands-media|Badlands Media]] argued the timing exposed Fox to its own audience. [[burning-bright|Burning Bright]] wrote that firing Carlson on the same day [[cnn|CNN]] fired [[don-lemon|Don Lemon]] "outs FOX to 'Normie' MAGA viewers still bestowing misplaced loyalty to a network that provided Narrative Shielding to the Election Fraud machine by calling Arizona for Biden on 11/3/20 and settling with Dominion for $800 Million," and that the network was thereby kicking a hornet's nest of Carlson supporters.[{N}] [[donald-trump|Donald Trump]], increasingly critical of the network, said he had been surprised Fox settled the Dominion case at all.[{N}]
"""))

U.append(('cnn', """
## Firing of Don Lemon (April 2023)

On April 24, 2023 CNN fired anchor [[don-lemon|Don Lemon]] following sexist on-air comments and reported mistreatment of female colleagues over his seventeen years at the network; Lemon, who had hosted "CNN This Morning" that morning, said he was "stunned" when his agent relayed the news.[{N}] The dismissal came within an hour of [[fox-news|Fox News]]'s announcement that [[tucker-carlson|Tucker Carlson]] was leaving that network immediately.[{N}]

CNN's own coverage of the Carlson exit described him as "the right-wing extremist who used his prime time perch at the talk network to exert a firm grip over the Republican Party."[{N}] [[badlands-media|Badlands Media]] writer [[burning-bright|Burning Bright]] quoted that framing deliberately, arguing that the same-day firings served to conflate Fox and CNN as interchangeable [[media-industrial-complex|Media Industrial Complex]] corporations in the public mind and reflected a coordinated deployment rather than coincidence.[{N}]
"""))

U.append(('lachlan-murdoch', """
## Role in the Tucker Carlson decision (2023)

As chief executive of Fox Corporation, Murdoch is reported to have made the decision to part ways with [[fox-news|Fox News]] prime-time host [[tucker-carlson|Tucker Carlson]] on the evening of Friday, April 21, 2023, together with Fox News chief executive [[suzanne-scott|Suzanne Scott]]; Carlson was informed on the morning of Monday, April 24 and the network announced the split the same day without explanation.[{N}]
"""))

U.append(('rupert-murdoch', """
## Dominion litigation and the Carlson exit (2023)

Ahead of Fox's defamation trial, [[donald-trump|Donald Trump]] — the owner and chairman of Fox Corp. being set to testify — had urged Murdoch to embrace his theories about voter fraud in a bid to win the [[dominion-voting-systems|Dominion Voting Systems]] case in court.[{N}] Fox instead settled, a choice Trump publicly criticized days later while reacting to [[tucker-carlson|Tucker Carlson]]'s ouster from [[fox-news|Fox News]], saying, "I was surprised they made a settlement in that case. I thought that was a case that should easily be won."[{N}]
"""))

U.append(('dominion-voting-systems', """
## Aftermath of the Fox settlement (April 2023)

Fox's roughly $800 million settlement with Dominion, reached shortly before trial, framed the media coverage of [[tucker-carlson|Tucker Carlson]]'s departure from [[fox-news|Fox News]] on April 24, 2023, which CNBC reported as coming "in wake of Dominion defamation settlement."[{N}] [[donald-trump|Donald Trump]] said he had been surprised Fox settled a case he believed "should easily be won," and noted he had urged [[rupert-murdoch|Rupert Murdoch]] to embrace his voter-fraud claims before the chairman was due to testify.[{N}]

[[badlands-media|Badlands Media]] writer [[burning-bright|Burning Bright]] advanced the contrary reading that Fox had never been adversarial to Dominion at all: in his account the network "wasn't going after Dominion" but was "deployed to Shield it," using the litigation to set legal and psychological precedent intended to harm the election reform movement — of a piece, he argued, with Fox's call of Arizona for Joe Biden on November 3, 2020.[{N}]
"""))

U.append(('anheuser-busch-inbev', """
## Marketing leadership change after the Bud Light backlash (April 2023)

Three weeks after [[bud-light|Bud Light]]'s partnership with transgender TikTok influencer [[dylan-mulvaney|Dylan Mulvaney]] triggered a consumer backlash, Anheuser-Busch InBev abruptly changed the brand's marketing leadership.[{N}] Ad Age reported on Friday, April 21, 2023 that Bud Light vice president of marketing [[alissa-heinerscheid|Alissa Heinerscheid]] had taken a leave of absence and would be replaced by [[todd-allen|Todd Allen]], previously global marketing vice president for [[budweiser|Budweiser]].[{N}] A company spokesperson said top-level executives would closely monitor Bud Light's marketing activities so as to "maintain focus on the things we do best: brewing great beer for all consumers, while always making a positive impact in our communities and on our country."[{N}]

[[zerohedge|ZeroHedge]], which carried the report, framed the episode as the brand's failed attempt to position itself as the "queen" of woke beers.[{N}] [[badlands-media|Badlands Media]] writer [[burning-bright|Burning Bright]] observed that the controversy had persisted well over a week and a half in the national news cycle, with far more outlets than culture-war-adjacent ones covering it, and that even the legacy financial press was grudgingly admitting the company might have made a catastrophic marketing blunder that would show red in its ledgers for several quarters and more.[{N}]
"""))

U.append(('bud-light', """
## Marketing shake-up (April 2023)

Three weeks into the backlash over the brand's promotional partnership with transgender TikTok influencer [[dylan-mulvaney|Dylan Mulvaney]], parent company [[anheuser-busch-inbev|Anheuser-Busch InBev]] abruptly changed Bud Light's marketing leadership.[{N}] Vice president of marketing [[alissa-heinerscheid|Alissa Heinerscheid]] took a leave of absence, and the company confirmed she would be replaced by [[todd-allen|Todd Allen]], who had recently been global marketing vice president for [[budweiser|Budweiser]].[{N}] To prevent a repeat, a spokesperson said senior executives would closely monitor the brand's marketing, stressing a return to "brewing great beer for all consumers."[{N}]

Writing for [[badlands-media|Badlands Media]], [[burning-bright|Burning Bright]] noted the unusual durability of the story in the national news cycle and summarized the community's verdict on the campaign with the slogan "Get Woke, Go Broke."[{N}]
"""))

U.append(('dylan-mulvaney', """
## Fallout from the Bud Light partnership (April 2023)

The transgender TikTok influencer's promotional partnership with [[bud-light|Bud Light]] continued to generate national coverage into late April 2023, and was directly cited as the trigger for [[anheuser-busch-inbev|Anheuser-Busch InBev]]'s abrupt change of the brand's marketing leadership roughly three weeks after the campaign launched.[{N}] Bud Light marketing vice president [[alissa-heinerscheid|Alissa Heinerscheid]], who had championed the repositioning, took a leave of absence and was replaced by [[todd-allen|Todd Allen]].[{N}] [[zerohedge|ZeroHedge]] characterized the campaign as an attempt to make Bud Light the "queen" of woke beers, and [[badlands-media|Badlands Media]] noted that even the legacy financial press had begun describing it as a potentially catastrophic marketing blunder.[{N}]
"""))

U.append(('budweiser', """
## Todd Allen's transfer to Bud Light (2023)

[[todd-allen|Todd Allen]], recently the global marketing vice president for Budweiser, was named in April 2023 to take over marketing for sister brand [[bud-light|Bud Light]] after vice president [[alissa-heinerscheid|Alissa Heinerscheid]] went on leave amid the [[dylan-mulvaney|Dylan Mulvaney]] partnership backlash at [[anheuser-busch-inbev|Anheuser-Busch InBev]].[{N}]
"""))

U.append(('federal-reserve', """
## Money-supply contraction of 2022-2023

Analysis published by the [[mises-institute|Mises Institute]] and highlighted by [[badlands-media|Badlands Media]] in April 2023 reported that money supply growth had fallen again in February 2023, sinking further into negative territory after turning negative in November 2022 for the first time in twenty-eight years.[{N}] Growth had slowed rapidly since April 2021 from the unprecedented highs of the preceding two years, and the previous instance of negative year-over-year change had been November 1994, when contraction persisted for fifteen months before turning positive again in January 1996.[{N}] In February 2023 the year-over-year change stood at -6.6 percent, down from -5.0 percent in January and from +6.9 percent in February 2022; at no point in at least sixty years had the money supply fallen by more than 5.6 percent in any month.[{N}]

Badlands writer [[justin-deschamps|Justin Deschamps]] characterized the contraction as "monetary warfare," likening the monetary system to a circulatory system that builds up favored sectors and starves others, and arguing that the [[federal-reserve|Federal Reserve]]'s expansion of currency creation in the mid-1990s had funneled credit into the emerging computer and big-tech industries up to the dot-com break.[{N}] In his reading, a shrinking money supply excises sectors deprived of new loans — evidenced by falling home prices, soaring credit card debt, rising consumer loan delinquencies, falling job openings and a weakening manufacturing outlook — displacing workers who then become available, and more willing to compromise on principle, for the industries oligarchs intend to launch under [[agenda-2030|Agenda 2030]].[{N}] His prescribed remedy was a [[parallel-economy|parallel economy]] in which citizens "become our own banks" and rediscover the law and the truth about money.[{N}]
"""))

U.append(('nbcuniversal', """
## Departure of Jeff Shell (April 2023)

On Sunday, April 23, 2023, NBCUniversal announced that chief executive [[jeff-shell|Jeff Shell]] had left his role effective immediately over an "inappropriate relationship with a woman in the company."[{N}] The exit fell within the same forty-eight-hour window as the firings of [[don-lemon|Don Lemon]] at [[cnn|CNN]] and [[tucker-carlson|Tucker Carlson]] at [[fox-news|Fox News]], a clustering [[badlands-media|Badlands Media]] cited as evidence of coordinated churn across the [[media-industrial-complex|Media Industrial Complex]].[{N}]
"""))

U.append(('zerohedge', """
## Bud Light coverage (2023)

ZeroHedge's April 2023 report "Bud Light Marketing Executive Goes On Leave After Disastrous Trans-TikTok Stunt" was excerpted at length in the Badlands News Brief, describing [[anheuser-busch-inbev|Anheuser-Busch InBev]]'s abrupt change of [[bud-light|Bud Light]]'s marketing leadership three weeks after the brand sought to position itself as the "queen" of woke beers through its partnership with [[dylan-mulvaney|Dylan Mulvaney]].[{N}]
"""))

U.append(('newsmax', """
## Trump interview on the Carlson exit (April 2023)

Newsmax aired an interview late on Monday, April 24, 2023 in which former president [[donald-trump|Donald Trump]] gave his first reaction to [[fox-news|Fox News]]'s ouster of [[tucker-carlson|Tucker Carlson]], saying he was "shocked" and "surprised," praising Carlson's talent and ratings, and criticizing Fox's settlement of the [[dominion-voting-systems|Dominion Voting Systems]] defamation case.[{N}]
"""))

U.append(('the-hill', """
## Coverage of Trump on Carlson's exit (2023)

The Hill's report "Trump 'shocked' to hear of Tucker Carlson's departure from Fox News" was excerpted in the Badlands News Brief of April 25, 2023, carrying [[donald-trump|Donald Trump]]'s [[newsmax|Newsmax]] remarks on [[tucker-carlson|Tucker Carlson]] and noting that Trump had urged [[rupert-murdoch|Rupert Murdoch]] to embrace his voter-fraud theories ahead of the [[dominion-voting-systems|Dominion Voting Systems]] trial.[{N}]
"""))

U.append(('cnbc', """
## Coverage of the April 2023 media firings

CNBC's April 24, 2023 report on [[cnn|CNN]]'s firing of [[don-lemon|Don Lemon]] was excerpted in the Badlands News Brief, and explicitly situated the dismissal alongside [[fox-news|Fox News]]'s same-hour announcement that [[tucker-carlson|Tucker Carlson]] was leaving "in wake of Dominion defamation settlement" and NBCUniversal's disclosure a day earlier that [[jeff-shell|Jeff Shell]] had departed as chief executive.[{N}]
"""))

U.append(('badlands-media', """
## "A Tucker, a Lemon and a Trump Walk Into a Bar ..." (April 2023)

The Badlands News Brief of April 25, 2023 covered the weekend and Monday that saw [[tucker-carlson|Tucker Carlson]] leave [[fox-news|Fox News]], [[cnn|CNN]] fire [[don-lemon|Don Lemon]], [[nbcuniversal|NBCUniversal]] part with [[jeff-shell|Jeff Shell]], the [[mises-institute|Mises Institute]] report a fifty-year low in money-supply growth, and [[anheuser-busch-inbev|Anheuser-Busch InBev]] shake up [[bud-light|Bud Light]]'s marketing leadership.[{N}] Commentary came from [[burning-bright|Burning Bright]] on the media firings and the Bud Light boycott and from [[justin-deschamps|Justin Deschamps]] on monetary warfare and the case for a [[parallel-economy|parallel economy]].[{N}] As in every edition, the team described its purpose as hand-picking news items of interest to the Truth Community and finding "the signal amidst the noise" as the [[information-war|Information War]] continued.[{N}]
"""))

U.append(('burning-bright', """
## Commentary of April 2023

In the Badlands News Brief of April 25, 2023, Burning Bright wrote three of the edition's "Our Take" segments.[{N}] On [[tucker-carlson|Tucker Carlson]]'s exit from [[fox-news|Fox News]] he deliberately adopted [[cnn|CNN]]'s hostile framing to illustrate the pincer move he saw the [[media-industrial-complex|Media Industrial Complex]] caught in, noting Carlson's willingness to cover Ukraine-Russia, the petrodollar and money laundering, and predicting that his audience would follow him out of Fox.[{N}] On the same-day firing of [[don-lemon|Don Lemon]] he rejected coincidence outright, arguing the twin dismissals conflated Fox and CNN in the collective mind, exposed Fox to normie MAGA viewers who had overlooked its Arizona call on November 3, 2020 and its $800 million [[dominion-voting-systems|Dominion]] settlement, and accelerated the ratings-collapse cascade of legacy media.[{N}] On [[bud-light|Bud Light]] he noted the unusual persistence of the boycott story and the financial press's grudging admission that [[anheuser-busch-inbev|Anheuser-Busch InBev]] may have committed a catastrophic marketing blunder, invoking the "Get Woke, Go Broke" slogan.[{N}] He also read [[donald-trump|Donald Trump]]'s Newsmax remarks as "MOABS" implying a timeline for Carlson's turn toward the America First agenda.[{N}]
"""))

U.append(('justin-deschamps', """
## "Monetary warfare" commentary (April 2023)

Commenting in the Badlands News Brief of April 25, 2023 on the [[mises-institute|Mises Institute]]'s report that money supply growth had hit a fifty-year low, Deschamps described the contraction as "monetary warfare."[{N}] He likened the monetary system to the body's circulatory system, arguing that it builds up businesses in favored sectors for the benefit of oligarchs while starving others, allowing society to be radically reshaped slowly and without detection as citizens are forced to participate in the resulting schemes for a paycheck.[{N}] As an illustration he cited the [[federal-reserve|Federal Reserve]]'s increase in currency creation in the mid-1990s, which he said lent the new money into the emerging computer and big-tech industries and produced a rapid expansion up to the dot-com break, as if "the world grew a third arm."[{N}]

Because money in the modern age is lent into existence and most businesses depend on borrowed money for payroll, rent and debt servicing, a shrinking money supply acts in his account as "an economic scalpel or chemo-treatment," excising sectors starved of new loans and displacing their workers while market share opens for oligarch-funded ventures.[{N}] He argued that newly desperate people are more willing to compromise principles — for instance over vaccine mandates — and will be funneled into the industries the oligarchs intend to launch, naming neo-mRNA biomedical fields, internet-of-things industries and "green industries" under [[agenda-2030|Agenda 2030]].[{N}] His conclusion was that "they don't need to defeat us. They just need to out last us," and that the remedy is a [[parallel-economy|parallel economy]] in which people become their own banks, rediscover the law and the truth about money, and build healthy money systems outside the international banking cartel.[{N}]
"""))

U.append(('information-war', """
## The April 2023 media firings

[[badlands-media|Badlands Media]] treated the simultaneous ousters of [[tucker-carlson|Tucker Carlson]] from [[fox-news|Fox News]] and [[don-lemon|Don Lemon]] from [[cnn|CNN]] on April 24, 2023 as a case study in information warfare rather than coincidence, arguing the paired announcements were "congruent deployments by the MSM" designed to conflate the two networks in the public mind and to blunt the reaction of Carlson's audience.[{N}] Writing in the brief, [[burning-bright|Burning Bright]] noted that one day's paradigm-shifting headline is often the next day's footnote for those who track the Info War, and cited the unusual two-week persistence of the [[bud-light|Bud Light]] boycott story as a counterexample.[{N}] The edition closed with the team's standard framing that it exists to slow things down and find the signal amid the noise "as the Information War continues to rage on around us."[{N}]
"""))

U.append(('media-industrial-complex', """
## The April 2023 firings

The near-simultaneous removal of [[tucker-carlson|Tucker Carlson]] from [[fox-news|Fox News]] and [[don-lemon|Don Lemon]] from [[cnn|CNN]] on April 24, 2023, one day after [[nbcuniversal|NBCUniversal]] parted with chief executive [[jeff-shell|Jeff Shell]], was presented by [[badlands-media|Badlands Media]] as a visible operation of the Media Industrial Complex rather than a run of coincidences.[{N}] [[burning-bright|Burning Bright]] described the complex as caught in a pincer move over the departure of the most-watched host in American cable news, and argued the paired firings served to conflate Fox and CNN as equivalent corporate media entities, to expose Fox to loyal MAGA viewers, and to continue the shared ratings-collapse cascade that is further decentralizing information dissemination.[{N}]
"""))

only = sys.argv[1:]
if only:
    U = [u for u in U if u[0] in only]
run(U)
