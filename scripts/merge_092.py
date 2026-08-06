#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Merge badlands-news-brief-092 content into existing wiki pages, under page locks."""
import io, os, re, subprocess, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = 'badlands-news-brief-092'
REF = u'Badlands Brief \u2014 "Badlands News Brief: Trans Easter Bait & A Tale of Two Presidents", URL: https://badlands.substack.com/p/badlands-news-brief-092'
LOCK = os.path.join(ROOT, 'scripts', 'wiki_page_lock.py')

PAGES = {
 'entities/donald-trump': u"""## March 2024: Diller wake, primaries and legal filings

In late March 2024 Trump attended the wake of murdered [[nypd|NYPD]] officer [[jonathan-diller|Jonathan Diller]] in New York, hours before President [[joe-biden|Joe Biden]] appeared at a $500,000-per-ticket celebrity fundraiser; critics argued Trump had turned the wake into a campaign stop, while commentators noted the stark juxtaposition with the $25 million Democratic fundraiser.[{n}] His campaign, along with House leadership, demanded an apology from the [[white-house|White House]] over Biden's [[transgender-day-of-visibility|Transgender Day of Visibility]] proclamation falling on Easter Sunday.[{n}]

Trump became the presumptive Republican nominee on March 12, 2024 after a series of primary victories, setting up a likely rematch with Biden.[{n}] Speculation over his running mate intensified after his falling-out with former vice president [[mike-pence|Mike Pence]], who said he would not endorse him; [[mike-pompeo|Mike Pompeo]] said he would be "pretty inclined" to join the ticket if asked.[{n}] On March 24 his legal team filed a seven-page document in the Southern District of Florida seeking dismissal of the [[trump-classified-documents-case|classified documents case]] on [[presidential-immunity|presidential immunity]] grounds, twice describing his time in office as his "first term."[{n}] [[georgia-senate-bill-189|Georgia Senate Bill 189]] was likewise described as a legislative response to the influx of voter challenges that followed his 2020 loss, which he attributed to voter fraud.[{n}]""",

 'entities/apple': u"""## 2024 Justice Department antitrust action

In March 2024 the [[department-of-justice|Department of Justice]] brought an [[united-states-v-apple-antitrust-case|antitrust action]] against Apple that, on its face, concerned the company's secure communications network, with the government seeking to force Apple to share its services with other networks.[{n}] The [[brownstone-institute|Brownstone Institute]] argued the case was really the government taking sides in a competitive dispute on behalf of Samsung and other smartphone providers, who resent the way Apple products all work together.[{n}] [[ashe-in-america|Ashe in America]] characterized the action as demonizing competition and trampling intellectual property rights in the name of antitrust, and as an attempt to extend to device hardware and networking infrastructure the informal control the bureaucracy once exercised over social media platforms.[{n}]""",

 'entities/department-of-justice': u"""## Apple antitrust action (2024)

In March 2024 the department pursued an [[united-states-v-apple-antitrust-case|antitrust case against Apple]], seeking to compel the company to share its secure communications network with other networks.[{n}] The [[brownstone-institute|Brownstone Institute]] linked the action to press secretary [[jen-psaki|Jen Psaki]]'s May 5, 2021 warning that platforms must stop amplifying COVID-19 and election "misinformation," in which she also noted President [[joe-biden|Biden]]'s support for "a robust antitrust program."[{n}] Critics including [[ashe-in-america|Ashe in America]] treated the case as an information-control measure rather than a consumer-welfare action, noting its timing just after Supreme Court arguments in [[murthy-v-missouri|Murthy v. Missouri]] recast government coercion of platforms as mere "encouragement."[{n}]""",

 'entities/mike-pompeo': u"""## 2024 vice-presidential speculation

Asked on The Guy Benson Show in late March 2024 whether he would be open to serving as [[donald-trump|Donald Trump]]'s running mate, the former Secretary of State said he would "be pretty inclined to go try and be a part of the team."[{n}] He added that "if I got a chance to serve or the president wanted me to serve and I thought I could make a difference, I am almost certain that I would say yes to a request like that," and that he would join "in whatever role that might be... to actually deliver good outcomes for the country."[{n}] The remarks came as Trump became the presumptive Republican nominee and after his falling-out with former vice president [[mike-pence|Mike Pence]], who declined to endorse him.[{n}]""",

 'entities/ashe-in-america': u"""## Commentary in Badlands News Brief 092

Writing at the end of March 2024, Ashe in America followed up on the [[francis-scott-key-bridge-collapse|Francis Scott Key Bridge collapse]], noting reports that the container ship [[dali|Dali]] was sitting atop a high-pressure gas line and that its hull damage may make moving it difficult, and asking whether the ship's 1.8 million gallons of fuel, the pipeline beneath the bridge, or a salvage attempt could create spill conditions.[{n}] In the same brief she analyzed the [[united-states-v-apple-antitrust-case|Justice Department's antitrust action against Apple]], arguing that centralized control of information is critical to control of the collective mind and that the regime, having run the social platforms before 2020, was now seeking equivalent control over device hardware and networking infrastructure.[{n}]""",

 'entities/simon-esler': u"""## Commentary on the 2024 Easter proclamation

In the Badlands News Brief of April 1, 2024, Esler analyzed the outrage over President [[joe-biden|Joe Biden]]'s [[transgender-day-of-visibility|Transgender Day of Visibility]] proclamation coinciding with Easter Sunday, presenting it as a case study in the "online outrage machine" and emotional manipulation.[{n}] He described a two-sided mechanism in which conservatives are drawn into divisive social media eddies that reinforce a sense of being attacked, while their reaction supplies propaganda fodder for left-wing audiences.[{n}] Noting the observance has been fixed to March 31 since 2009, he concluded the proclamation was designed to inflame the [[culture-war|culture war]], and urged readers to redirect emotional energy from the digital domain toward the physical domain and the construction of a parallel society.[{n}]""",

 'entities/burning-bright': u"""## Commentary on the 2024 Biden-Trump juxtaposition

In the Badlands News Brief of April 1, 2024, Burning Bright wrote that the juxtapositions between [[donald-trump|Trump]] and [[joe-biden|Biden]] were becoming "more and more cartoonish" as the [[information-war|Info War]] accelerated toward whatever inflection point November represented.[{n}] He argued it served little purpose for the establishment to parade Biden publicly, since doing so damaged the thin veneer of mandate they had cultivated and on whose behalf, in his account, the 2020 election was stolen.[{n}] He predicted another attempt in 2024 but suggested the clown show had accelerated so far that even the illusion of public mandate could be lost, creating a "mass shatterpoint in the Collective Mind" \u2014 an outcome he framed as accelerating the awakening and thus the seizing of personal sovereignty and freedom.[{n}]""",

 'concepts/murthy-v-missouri': u"""## Invocation in the Apple antitrust debate

Commentators cited the case's March 2024 oral arguments \u2014 in which government coercion of platforms was reframed as "encouragement" \u2014 as context for the [[department-of-justice|Justice Department]]'s [[united-states-v-apple-antitrust-case|antitrust action against Apple]].[{n}] [[ashe-in-america|Ashe in America]] argued the sequence showed a regime seeking to extend its earlier informal control over social media to device hardware and networking infrastructure.[{n}]""",

 'entities/robert-f-kennedy-jr': u"""## Georgia ballot access (2024)

[[georgia-senate-bill-189|Georgia Senate Bill 189]], approved by state lawmakers in March 2024, provided that any political party qualified for the presidential ballot in twenty states would gain access to Georgia's ballot, easing the path for independent candidates such as Kennedy, who otherwise had to gather petition signatures in all fifty states.[{n}] Kennedy's super PAC claimed he had already qualified for the Georgia ballot.[{n}]""",

 'entities/barack-obama': u"""## 2024 Biden fundraiser

In late March 2024 Obama appeared alongside President [[joe-biden|Joe Biden]], former president [[bill-clinton|Bill Clinton]] and the singer [[lizzo|Lizzo]] at a New York fundraiser priced at up to $500,000 per ticket that raised $25 million for Biden's campaign.[{n}] The event drew criticism because it took place hours after [[donald-trump|Donald Trump]] attended the wake of murdered [[nypd|NYPD]] officer [[jonathan-diller|Jonathan Diller]].[{n}]""",

 'entities/bill-clinton': u"""## 2024 Biden fundraiser

Clinton joined President [[joe-biden|Joe Biden]], former president [[barack-obama|Barack Obama]] and the singer [[lizzo|Lizzo]] at a March 2024 fundraiser charging up to $500,000 per ticket, which raised $25 million for Biden's re-election effort.[{n}] Commentators contrasted the celebrity event with [[donald-trump|Donald Trump]]'s attendance the same day at the wake of slain [[nypd|NYPD]] officer [[jonathan-diller|Jonathan Diller]].[{n}]""",

 'entities/new-york-times': u"""## Reporting on the Crocus City Hall attack

On March 28, 2024 the Times reported that the United States did not share all of the information it possessed about the terrorist plot behind the [[crocus-city-hall-attack|Crocus City Hall attack]] outside Moscow, which killed more than 140 people.[{n}] The paper attributed the withholding to the adversarial relationship between Washington and Moscow and to fear that Russian authorities might learn US intelligence sources or methods.[{n}] Kremlin spokesman [[dmitry-peskov|Dmitry Peskov]] cast doubt on the account, saying information from the Times citing sources "should be treated with great caution."[{n}]""",

 'entities/dmitry-peskov': u"""## Response to Crocus City Hall intelligence reporting

After [[new-york-times|The New York Times]] reported in March 2024 that Washington had withheld part of its intelligence on the plot behind the [[crocus-city-hall-attack|Crocus City Hall attack]], Peskov said he was unaware of any such information and cast doubt on the report, stating that "the information of The New York Times, citing sources, is information that should be treated with great caution."[{n}]""",

 'entities/mike-pence': u"""## 2024 endorsement refusal

Following [[donald-trump|Donald Trump]]'s Super Tuesday primary victories in 2024, Pence said he would not endorse Trump in the presidential election, a break that intensified speculation about Trump's choice of running mate and prompted figures such as [[mike-pompeo|Mike Pompeo]] to be canvassed for the role.[{n}]""",

 'entities/white-house': u"""## 2024 Transgender Day of Visibility dispute

The White House defended President [[joe-biden|Joe Biden]]'s March 2024 proclamation recognizing March 31 as [[transgender-day-of-visibility|Transgender Day of Visibility]] after House leadership and the [[donald-trump|Trump]] campaign demanded an apology because the date fell on Easter Sunday, saying that "as a Christian who celebrates Easter with family, President Biden stands for bringing people together and upholding the dignity and freedoms of every American."[{n}] Critics such as [[simon-esler|Simon Esler]] argued the proclamation was intended to inflame the [[culture-war|culture war]].[{n}] Separately, press secretary [[jen-psaki|Jen Psaki]]'s May 2021 remarks pairing demands for platform censorship with support for "a robust antitrust program" were later cited as the origin of the administration's [[united-states-v-apple-antitrust-case|antitrust action against Apple]].[{n}]""",

 'entities/politico': u"""## Coverage of the 2024 Easter proclamation

Politico's report "Sunday marks both Easter and the Transgender Day of Visibility. Cue the culture war." framed the March 2024 dispute over President [[joe-biden|Joe Biden]]'s [[transgender-day-of-visibility|Transgender Day of Visibility]] proclamation as the latest in a series of social conflicts enveloping the political process and electoral cycle.[{n}] The outlet noted that the overlap with Easter was coincidental because Easter's date is set by a lunar calculation, and that multiple proclamations for a single date are common.[{n}] [[simon-esler|Simon Esler]] cited the headline as transparently revealing the intent of such operations.[{n}]""",

 'entities/newsweek': u"""## March 2024 Trump coverage

Newsweek reported that [[donald-trump|Donald Trump]]'s legal team twice referred to his time in the [[white-house|White House]] as his "first term" in a March 24, 2024 filing in the [[trump-classified-documents-case|classified documents case]] supporting dismissal on [[presidential-immunity|presidential immunity]] grounds.[{n}] The outlet also reported [[mike-pompeo|Mike Pompeo]]'s comments that he would be "pretty inclined" to serve as Trump's running mate if asked.[{n}]""",

 'entities/zerohedge': u"""## March 2024 reporting

ZeroHedge reported that President [[joe-biden|Joe Biden]] was "slammed for partying with [[lizzo|Lizzo]]" at a $500,000-per-ticket fundraiser with [[barack-obama|Barack Obama]] and [[bill-clinton|Bill Clinton]] hours after [[donald-trump|Donald Trump]] attended the wake of slain [[nypd|NYPD]] officer [[jonathan-diller|Jonathan Diller]].[{n}] The outlet also covered reporting that the container ship [[dali|Dali]] was potentially sitting atop a high-pressure underwater gas line at the site of the [[francis-scott-key-bridge-collapse|Francis Scott Key Bridge collapse]], complicating the federally funded $60 million salvage effort.[{n}]""",

 'entities/state-department': u"""## Moscow terror warning (2024)

Through the [[us-embassy-in-moscow|US Embassy in Moscow]], the department issued a public warning on March 7, 2024 advising Americans in Russia that "extremists have imminent plans to target large gatherings in Moscow, to include concerts" and to avoid large gatherings for 48 hours, weeks before the [[crocus-city-hall-attack|Crocus City Hall attack]].[{n}] The same warning was conveyed privately to Russian authorities, though [[fsb|FSB]] chief [[aleksandr-bortnikov|Aleksandr Bortnikov]] called it "of a general nature."[{n}]""",
}


def merge(page, body):
    path = os.path.join(ROOT, 'wiki', page + '.md')
    if not os.path.exists(path):
        return 'MISSING'
    src = io.open(path, encoding='utf-8').read()
    if RAW in src:
        return 'ALREADY'
    m = re.search(r'^sources: \[(.*?)\]\s*$', src, re.M)
    if not m:
        return 'NO-SOURCES'
    items = [x.strip() for x in m.group(1).split(',') if x.strip()]
    items.append('raw/%s.md' % RAW)
    n = len(items)
    src = src[:m.start()] + 'sources: [' + ', '.join(items) + ']' + src[m.end():]
    src = re.sub(r'^updated: .*$', 'updated: 2026-08-06', src, count=1, flags=re.M)
    text = body.format(n=n)
    idx = src.find('\n## References')
    block = '\n' + text + '\n'
    if idx == -1:
        src = src.rstrip() + '\n' + block + '\n## References\n'
    else:
        src = src[:idx] + '\n' + block + src[idx:]
    src = src.rstrip() + '\n%d. %s\n' % (n, REF)
    io.open(path, 'w', encoding='utf-8').write(src)
    return 'OK[%d]' % n


for page, body in PAGES.items():
    slug = page.split('/')[1]
    got = False
    for _ in range(12):
        r = subprocess.call([sys.executable, LOCK, 'acquire', slug,
                             '--timeout-sec', '20'],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if r == 0:
            got = True
            break
        time.sleep(5)
    if not got:
        print('%s BUSY-SKIP' % page)
        continue
    try:
        print('%s %s' % (page, merge(page, body)))
    finally:
        subprocess.call([sys.executable, LOCK, 'release', slug],
                        stdout=subprocess.PIPE, stderr=subprocess.PIPE)
