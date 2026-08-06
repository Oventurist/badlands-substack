# -*- coding: utf-8 -*-
import re, io, os, sys
BASE = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/q-for-dummies-chapter-2.md"
REF = '{n}. Badlands Brief \u2014 "Q for Dummies - Chapter 2", URL: https://badlands.substack.com/p/q-for-dummies-chapter-2'

S = {}

S["concepts/q-for-dummies.md"] = u"""## Chapter 2 (Drops #6\u201314)

Chapter 2 of the series, published December 15, 2023, covers Q drops #6 through #14, dated October 29\u201331, 2017.[N] The author opens by thanking readers for the reception of Chapter 1, restating that the series is a deliberately "low level" entry point \u2014 "Q 101" \u2014 while pointing readers to [[patriots-in-progress|Shawn's Patriots in Progress]] weekly Q publication as the "PHD course," to [[eye-of-the-storm|Eye of the Storm]] on [[badlands-media|Badlands Media]], and to [[stormy-patriot-joe|Stormy Patriot Joe]].[N] He again disclaims authority over Q interpretation, insisting readers do their own research because independent thinking "was, in essence, the very point of the Q operation."[N]

The chapter treats drop #14 as the "ultimate" drop, arguing that it outlines nearly everything the movement stands for while sketching what is to come.[N] Themes covered include the claim that [[donald-trump|Trump]] would never announce arrests via a press conference, "follow the money" applied to [[nancy-pelosi|Nancy Pelosi]], the staged-disclosure rationale that society must be reconditioned gradually to avoid collapse, private email use across the [[barack-obama|Obama]] administration, [[huma-abedin|Huma Abedin]] and the [[muslim-brotherhood|Muslim Brotherhood]], [[fbi|FBI]] corruption versus [[military-intelligence|Military Intelligence]], leak crackdowns under [[jeff-sessions|Jeff Sessions]], Democratic Party racial history and [[robert-byrd|Robert Byrd]], the "white hat" readings of [[james-comey|Comey]], [[rod-rosenstein|Rosenstein]] and [[robert-mueller|Mueller]], the [[insurrection-act|Insurrection Act]], [[antifa|Antifa]] as a mapped target, the pre-arranged [[north-korea|North Korea]] deal, and the [[sensitive-compartmented-information-facility|SCIF]] drop naming [[michael-flynn|Flynn]] and [[mike-rogers|Admiral Mike Rogers]].[N] It closes with Q's use of the image of [[george-washington|George Washington]] crossing the Delaware.[N]"""

S["concepts/qanon.md"] = u"""## Early drops in the "Q for Dummies" reading (Chapter 2)

The Badlands "Q for Dummies" Chapter 2 treatment of drops #6\u201314 characterizes the Q operation as "the largest information drop to be given to the public in recorded history."[N] Drop #12 is read as signalling that [[antifa|Antifa]] was permitted to operate so it could be mapped and followed, and that "good guys" had their own infiltrators inside it, since "infiltration is a two-way street."[N]

Drop #6 is read as ruling out any grand televised announcement of arrests by [[donald-trump|Trump]], and as invoking the fates of John F. Kennedy and Ronald Reagan to explain why corrupt military leadership around the president had to be removed first.[N] The same drop's "follow the money" instruction is applied to [[nancy-pelosi|Nancy Pelosi]]'s net worth and stock-trade timing.[N] Chapter 2 also supplies the standard staged-disclosure argument: decades of brainwashing, programming and "subtle MK Ultra techniques" have left the public psyche fragile, so truth must emerge organically rather than all at once to avoid societal collapse.[N]

Drop #13 is presented as retroactive proof of Q's access, on the reading that the [[north-korea|North Korea]] deal was already concluded in October 2017 and only publicly confirmed in June 2018 \u2014 evidence, the author argues, against the "LARP in his mommy's basement" characterization.[N] Drop #14, the chapter's centerpiece, references a [[sensitive-compartmented-information-facility|SCIF]] and asks whether the president "knows where the bodies are buried" and "has the goods."[N]"""

S["entities/nancy-pelosi.md"] = u"""## "Follow the money" in Q drop #6

Badlands' "Q for Dummies" Chapter 2 reads Q drop #6 (October 29, 2017) as directing readers to investigate Pelosi specifically under the instruction "follow the money."[N] The author invites readers to compare her net worth with the salary of a member of Congress and to examine her stock deals, "specifically the timing of them."[N]"""

S["entities/hillary-clinton.md"] = u"""## Q for Dummies Chapter 2 readings

Badlands' "Q for Dummies" Chapter 2 treats drop #7 as establishing that Clinton's use of a private email system to communicate and share state secrets was not an isolated act: the entire [[barack-obama|Obama]] administration used private email, which the author offers as the explanation for the absence of indictments over private-server use of government information.[N] Drop #8 is read as flagging [[huma-abedin|Huma Abedin]], described as Clinton's top aide, for her family's ties to the [[muslim-brotherhood|Muslim Brotherhood]].[N]

Drop #9 asks who Clinton's mentor was; the chapter answers [[robert-byrd|Robert Byrd]], a former Ku Klux Klan figure, and notes that Clinton, Obama, George W. Bush and Joe Biden all eulogized him.[N] The author calls this projection by a side that labels its opponents racist while elevating a "high ranking KKK member within their own government."[N] Chapter 2 further asserts that Clinton "was supposed to win" in 2016 and that an attempt to steal that election was thwarted by white hats safeguarding the vote.[N]"""

S["entities/huma-abedin.md"] = u"""## Q drop #8 in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 discusses Q drop #8 (October 29, 2017), which the author reads as centering on Abedin's "deep family ties" to the [[muslim-brotherhood|Muslim Brotherhood]] while she served as [[hillary-clinton|Hillary Clinton]]'s top aide.[N] The chapter cites reporting in The Hill on those ties as supporting material.[N]"""

S["entities/muslim-brotherhood.md"] = u"""## Treatment in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 reads Q drop #8 as a warning about the Brotherhood, stating flatly that the organization "is not a benevolent organization, at least not to America," and pointing readers to an Investor's Business Daily editorial on radical Islamist officials in the White House for background.[N] The chapter links the Brotherhood to [[huma-abedin|Huma Abedin]], [[hillary-clinton|Hillary Clinton]]'s top aide, through her family connections.[N]"""

S["entities/jeff-sessions.md"] = u"""## Leak investigations in Q drop #8

Badlands' "Q for Dummies" Chapter 2 presents Sessions as central to the information war implied by Q drop #8, describing him as "extremely strict on leaks" and making "no secrets about it," and citing USA Today reporting that the Justice Department under Sessions tripled the number of leak investigations.[N] The chapter notes that Q repeatedly instructed readers to "Trust Sessions," and the author endorses that instruction.[N]"""

S["entities/fbi.md"] = u"""## Q drop #8 and the bypass to Military Intelligence

Badlands' "Q for Dummies" Chapter 2 reads Q drop #8 as signalling that the information Q was releasing did not come from the FBI.[N] The author argues Q spent many drops demonstrating FBI corruption by highlighting the timing of public scandals such as those involving Haiti, and concludes that the Bureau not only refused to investigate but would probably have destroyed evidence \u2014 which is why, in this reading, the operation ran through [[military-intelligence|Military Intelligence]] instead.[N]"""

S["entities/military-intelligence.md"] = u"""## Q drops #8 and #11 in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 presents Military Intelligence as the workaround for a compromised [[fbi|FBI]]: because the Bureau would neither investigate nor preserve evidence, the operation was routed through military channels.[N] Drop #11 is read as making the structural point that Military Intelligence requires neither Congressional approval nor Congressional oversight, which the author frames as essential given "how many rats there are in Congress" \u2014 bypassing them keeps information away from the enemy.[N] The chapter stresses for posterity that the President of the United States commands the military, and notes that a president has several statutory instruments, chief among them the [[insurrection-act|Insurrection Act]], for taking over investigations from the three-letter agencies.[N]"""

S["concepts/insurrection-act.md"] = u"""## Invocation in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 identifies the Insurrection Act as the statute the author has focused on most among the tools a president could use to take over investigations from the three-letter agencies, describing it as allowing the President to mobilize the military domestically as needs arise, and predicting that Q "will be pointing towards the Insurrection Act in due time."[N] Discussing drop #14, the chapter argues that if elected officials and law enforcement fail in their sworn duty while "Soros thugs" operate unfettered, the result is a Constitutional Crisis \u2014 "the exact scenario the Insurrection Act was written for."[N]"""

S["entities/antifa.md"] = u"""## Q drop #12 in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 reads Q drop #12 (October 30, 2017) as indicating that Antifa "is being allowed to operate for a reason" \u2014 namely that its members and networks are being mapped and followed, and that friendly infiltrators had probably been placed inside the movement.[N] The author generalizes the point: "infiltration is a two-way street. There is nothing that says 'only black hats can infiltrate.'"[N]"""

S["entities/james-comey.md"] = u"""## The "white hat" reading in Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 advances the author's stated opinion that Comey, [[rod-rosenstein|Rod Rosenstein]] and [[robert-mueller|Robert Mueller]] "were all actually working for us," an interpretation he concedes is difficult to accept but says later drops support, crediting [[just-human|Just Human]] with detailed treatments of the theory.[N] On this reading, Comey shut down the [[hillary-clinton|Clinton]] email investigation because concurrent investigations into the [[clinton-foundation|Clinton Foundation]] \u2014 involving drug and human trafficking and other crimes of greater significance \u2014 took priority; Comey, the author argues, was "yielding to a more serious investigation."[N]"""

S["entities/rod-rosenstein.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2, reading Q drop #10 (October 29, 2017), states the author's opinion that Rosenstein, alongside [[james-comey|James Comey]] and [[robert-mueller|Robert Mueller]], was "actually working for us" \u2014 a claim he says unfolds across subsequent drops and is developed further by [[just-human|Just Human]].[N]"""

S["entities/robert-mueller.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 places Mueller among the figures the author believes were secretly working for the white hats, together with [[james-comey|James Comey]] and [[rod-rosenstein|Rod Rosenstein]].[N] It recalls that Q had already noted Mueller was a highly decorated Marine, and poses two leading questions to readers: what Mueller's middle name is, and how that relates to Q's recurring question "when does a bird sing?"[N] The chapter's second point is that the ultimate result of Mueller's investigation was to prove that [[russiagate-hoax|Russiagate]] was a hoax.[N]"""

S["concepts/russiagate-hoax.md"] = u"""## Q for Dummies Chapter 2 reading

Badlands' "Q for Dummies" Chapter 2 argues that the ultimate product of [[robert-mueller|Robert Mueller]]'s investigation was proof that Russiagate was a hoax, and offers that outcome as evidence for its broader claim that Mueller \u2014 along with [[james-comey|James Comey]] and [[rod-rosenstein|Rod Rosenstein]] \u2014 was working on the white-hat side rather than against [[donald-trump|Trump]].[N]"""

S["entities/ku-klux-klan.md"] = u"""## "Q for Dummies" Chapter 2 and Q drop #9

Badlands' "Q for Dummies" Chapter 2 describes the Klan as "a democrat-created institution" and points to the 1924 Democratic National Convention \u2014 nicknamed the "Klan Bake" \u2014 citing an article by The Federalist Papers on that convention and on "the truth behind who really wanted to abolish slavery."[N] The chapter identifies [[robert-byrd|Robert Byrd]], a high-ranking Klan figure, as [[hillary-clinton|Hillary Clinton]]'s mentor, and notes that Clinton, [[barack-obama|Obama]], George W. Bush and Joe Biden delivered eulogies at his funeral.[N] The author calls this projection: a political side that brands its opponents racist while elevating a former Klansman within its own government.[N]"""

S["entities/clinton-foundation.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 argues that [[james-comey|James Comey]] closed the [[hillary-clinton|Clinton]] email investigation because investigations into the Clinton Foundation were running at the same time, and that those inquiries concerned drug and human trafficking and "a myriad of other crimes" of greater significance than the email case.[N] The chapter also states that the Foundation "was heavily involved with the UN in Haiti."[N]"""

S["entities/michael-flynn.md"] = u"""## Q drop #14 in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 identifies Flynn in Q drop #14 (October 31, 2017) as the commander of the [[111th-military-intelligence-brigade|111th Military Intelligence Brigade]] and as Director of the [[defense-intelligence-agency|Defense Intelligence Agency]], noting the drop's reference to a [[sensitive-compartmented-information-facility|SCIF]].[N]"""

S["entities/mike-rogers.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2, reading Q drop #14, states that Admiral Rogers met with President [[donald-trump|Trump]] at Trump Tower to advise him that he was being spied on by the [[barack-obama|Obama]] administration, both at Trump Tower and in the White House.[N]"""

S["entities/111th-military-intelligence-brigade.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 notes, in its discussion of Q drop #14, that General [[michael-flynn|Michael Flynn]] commanded the 111th Military Intelligence Brigade before serving as Director of the [[defense-intelligence-agency|Defense Intelligence Agency]].[N]"""

S["entities/defense-intelligence-agency.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2, decoding Q drop #14, cites General [[michael-flynn|Michael Flynn]]'s tenure as Director of the Defense Intelligence Agency \u2014 following his command of the [[111th-military-intelligence-brigade|111th Military Intelligence Brigade]] \u2014 as part of the drop's emphasis on military intelligence channels.[N]"""

S["concepts/sensitive-compartmented-information-facility.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 defines the SCIF referenced in Q drop #14 as "a completely sealed off and secure room from the outside world in which highly classified topics, or military operations are discussed," and observes that Q mentions SCIFs repeatedly across the drops in reference to both white hats and black hats.[N] The drop is read alongside General [[michael-flynn|Michael Flynn]]'s intelligence commands and Admiral [[mike-rogers|Mike Rogers]]'s Trump Tower warning about Obama-era surveillance.[N]"""

S["entities/north-korea.md"] = u"""## Q drop #13 in "Q for Dummies" Chapter 2

Badlands' "Q for Dummies" Chapter 2 revisits the early Q drops concerning North Korea, South Korea and the President, arguing that Q was signalling in October 2017 that "the deal with North Korea was done already," and that this would not be publicly confirmed until June 2018.[N] The author offers this as evidence against the claim that Q was a LARP \u2014 a live-action role-player or scammer.[N]"""

S["entities/donald-trump.md"] = u"""## "Q for Dummies" Chapter 2 readings

Badlands' "Q for Dummies" Chapter 2 argues, from Q drop #6, that contrary to widespread expectations in the movement Trump would never "take over the airwaves" or hold a grand press conference announcing arrests of Deep State figures, in any medium.[N] The chapter explains the caution by reference to predecessors who confronted the same forces \u2014 John F. Kennedy, who "went head-on with the deep state," and Ronald Reagan, who was shot \u2014 concluding that white hats first had to remove corrupt military leadership around the President in order to insulate and protect him.[N]

Discussing drop #12, the author speculates that Trump was himself a long-term infiltrator of the Democratic Party, explaining his roughly thirty years as a Democrat and his social proximity to its figures: "sometimes you have to work in the dark to serve the light."[N] On drop #14, the chapter asserts that Trump knows "where the bodies are buried," that he was asked and possibly groomed to run, that he is uniquely equipped temperamentally to absorb attacks, and that he "cannot be bought."[N] The chapter further claims [[hillary-clinton|Hillary Clinton]] was supposed to win in 2016, that the election was targeted for theft, and that white hats safeguarded it \u2014 predicting a repeat in 2024 whose effect would be to spotlight 2020 and Joe Biden's "81mm" votes.[N] Chapter 2 also cites Trump's rising support among Black voters, noting he won in 2016 with a very low share of the Black vote but was polling near 20% at the time of writing.[N]"""

S["entities/barack-obama.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 reads Q drop #7 as showing that not only [[hillary-clinton|Hillary Clinton]] but "Obama's entire administration" used private email to communicate and share state secrets, which the author presents as the reason no indictments followed.[N] Drop #14 is read as recording that Admiral [[mike-rogers|Mike Rogers]] warned President-elect [[donald-trump|Trump]] he was being surveilled by the Obama administration at Trump Tower and in the White House.[N] The chapter also lists Obama among the figures who eulogized former Klansman [[robert-byrd|Robert Byrd]].[N]"""

S["entities/absolutetruth1776.md"] = u"""## Q for Dummies Chapter 2

AbsoluteTruth1776 published "Q for Dummies - Chapter 2" on December 15, 2023, covering drops #6\u201314 and thanking readers for the reception of Chapter 1.[N] The chapter reiterates his editorial stance \u2014 that readers should not take his decodes "as gospel," should do their own research, and should draw their own conclusions, since independent thought was "the very point of the Q operation."[N] He directs readers to [[patriots-in-progress|Patriots in Progress]], [[stormy-patriot-joe|Stormy Patriot Joe]], [[just-human|Just Human]] and [[eye-of-the-storm|Eye of the Storm]] on [[badlands-media|Badlands Media]], and promotes his own Substack, Beyond the Veil.[N]"""

S["entities/george-washington.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 notes that Q attached to drop #14 the iconic image of Washington crossing the Delaware River, and treats the choice as significant \u2014 the crossing being, in the author's words, "the beginning of the end for the British in the Revolutionary War."[N]"""

S["entities/george-soros.md"] = u"""## Q for Dummies Chapter 2

Badlands' "Q for Dummies" Chapter 2 invokes Soros in its reading of Q drop #14, asking what would happen if elected officials and law enforcement failed in their sworn duty while "Soros thugs are allowed to operate unfettered while destroying America" \u2014 a scenario the author labels a Constitutional Crisis warranting the [[insurrection-act|Insurrection Act]].[N]"""


def merge(path, body):
    p = os.path.join(BASE, path)
    txt = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in txt else "\n"
    m = re.search(r"^sources: \[(.*?)\]\s*$", txt, re.M)
    if not m:
        print("NOSRC", path); return
    items = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in items:
        n = items.index(RAW) + 1
    else:
        items.append(RAW); n = len(items)
        txt = txt[:m.start()] + "sources: [" + ", ".join(items) + "]" + txt[m.end():]
    txt = re.sub(r"^updated: .*$", "updated: 2026-08-06", txt, count=1, flags=re.M)
    if ("Q for Dummies\" Chapter 2" in txt) or ("Q for Dummies Chapter 2" in txt):
        print("SKIP-already", path); return
    lines = txt.split(nl)
    ref_idx = None
    for i, l in enumerate(lines):
        if l.strip() == "## References":
            ref_idx = i
    refline = REF.format(n=n)
    if ref_idx is None:
        lines += ["", "## References", refline]
    else:
        j = ref_idx + 1; last = ref_idx
        while j < len(lines):
            s = lines[j].strip()
            if re.match(r"^\d+\. ", s): last = j
            elif s == "": pass
            else: break
            j += 1
        if not any(re.match(r"^%d\. " % n, lines[k].strip()) for k in range(ref_idx, last + 1)):
            lines.insert(last + 1, refline)
    txt = nl.join(lines).rstrip()
    body = body.replace("[N]", "[%d]" % n).replace("\n", nl)
    txt = txt + nl + nl + body + nl
    io.open(p, "w", encoding="utf-8", newline="").write(txt)
    print("OK", path, n)

for k, v in S.items():
    if os.path.exists(os.path.join(BASE, k)):
        merge(k, v)
    else:
        print("MISSING", k)
