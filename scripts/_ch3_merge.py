import subprocess, sys, os, io, time
BASE = r'C:/Users/14053/hermes-projects/badlands-substack'
REF = 'Badlands Brief — "Q for Dummies - Chapter 3", URL: https://badlands.substack.com/p/q-for-dummies-chapter-3'
RAW = 'q-for-dummies-chapter-3'

SECTIONS = {
 ('concepts','q-for-dummies'): """## Chapter 3 (Drops #15-22)

Chapter 3, published December 29, 2023 by [[absolutetruth1776|AbsoluteTruth1776]], covers Q drops #15 through #22, dated October 31 and November 1, 2017, and is introduced as continuing Chapter 2's heavy emphasis on [[military-intelligence|Military Intelligence]] and its importance to the operation.[{N}] The author restates the series' purpose — to "dumb down" what he calls one of the most significant open-source intelligence drops of all time, partly responsible for triggering the period known as [[great-awakening|The Great Awakening]] — and again directs readers wanting higher-level analysis to [[eye-of-the-storm|Eye Of The Storm]] and to [[patriots-in-progress|Patriots In Progress]].[{N}]

The instalment reads drop #15 as establishing that there are more good people than bad, flagging the toppling of the [[house-of-saud|House of Saud]], naming [[paul-manafort|Paul Manafort]] and other alleged plants in the Trump campaign, and situating the 2016 result against a [[16-year-plan-to-destroy-america|sixteen-year plan]] that [[george-soros|Soros]] was said to be targeted within.[{N}] Drop #16 is read as assurance that [[donald-trump|Trump]] was insulated and would not be removed from office and that his public feud with [[jeff-sessions|Jeff Sessions]] was optics.[{N}] Drop #17 covers [[barack-obama|Obama]]'s shadow travel, the [[united-states-marine-corps|Marines]] reporting directly to the President, military intelligence bypassing congressional oversight, and the shill tactic of [[shilling|sliding]].[{N}]

Drop #18 concerns [[robert-mueller|Robert Mueller]]'s meeting with Trump, [[nancy-pelosi|Nancy Pelosi]]'s net worth, and [[john-mccain|"No Name"]]; drop #19 the [[democratic-national-committee|DNC]]'s hold on black voters, [[operation-mockingbird|Operation Mockingbird]]'s use of celebrity, and [[maxine-waters|Maxine Waters]]; drop #20 Trump's meeting with Admiral [[michael-rogers|Mike Rogers]] and the [[sensitive-compartmented-information-facility|SCIF]]; drop #21 the arrival of bot farms and the author's own conclusion that Q was not a [[larp|LARP]]; and drop #22 a history lesson on the [[national-guard|National Guard]], [[posse-comitatus-act|Posse Comitatus]], [[habeas-corpus|habeas corpus]] and [[martial-law|martial law]] under [[abraham-lincoln|Lincoln]].[{N}] The chapter closes with an assurance that there would be no civil war, a promise of a future reader Q&A, and New Year greetings ahead of Chapter 4.[{N}]""",

 ('entities','absolutetruth1776'): """## Q for Dummies Chapter 3

AbsoluteTruth1776 published Chapter 3 of [[q-for-dummies|Q for Dummies]] on December 29, 2023, covering drops #15 through #22.[{N}] The instalment opens with holiday greetings and thanks to readers for helping the series "take off far quicker than I imagined it would," and restates that the writing is deliberately kept as simple as possible for newcomers, with higher-level analysis available through [[eye-of-the-storm|Eye Of The Storm]] and [[patriots-in-progress|Patriots In Progress]].[{N}] He closes with a promise to run a reader Q&A instalment at some point, an invitation for suggestions in the comments, the exhortation to "keep that Armor Of God on," and a New Year sign-off ahead of Chapter 4.[{N}] The article carries Badlands Media's standard disclaimer and points readers to his own Substack, Beyond the Veil.[{N}]

Notable within the chapter is his methodological caution about [[military-tribunals|military tribunals]]: he states that anyone claiming firsthand knowledge of tribunals having taken place is in his opinion intentionally misleading their audience, because operators do not divulge.[{N}]""",

 ('entities','robert-mueller'): """## Q drop #18

Chapter 3 of [[q-for-dummies|Q for Dummies]] treats [[qanon|Q]] drop #18 of November 1, 2017 as centring on Mueller, describing him as a name that recurs repeatedly across the drops.[{N}] The author records a genuine division of opinion within the movement over Mueller's alignment, offering as his own view that Mueller was "at the worst, a compromised black hat" and "at the best, a white hat who infiltrated [them] and helped expose them."[{N}] He notes that in the end the investigation established only that there was no Russian collusion.[{N}]

The chapter treats Q's question about the Trump–Mueller meeting as pointed rather than rhetorical: contemporary speculation held that Mueller was being considered for a return as FBI Director, but because he had already served the maximum term permitted for that office, the author argues the stated pretext cannot have been the real reason for the meeting.[{N}] He also links the drop to Q's surrounding emphasis on the [[united-states-marine-corps|Marines]], reminding readers that Mueller was a highly decorated Marine.[{N}]""",

 ('entities','nancy-pelosi'): """## Q drop #18 and net worth

Chapter 3 of [[q-for-dummies|Q for Dummies]], analysing [[qanon|Q]] drop #18 of November 1, 2017, argues that Pelosi's net worth is "absurd for a career politician," placing it at roughly $170 million at the time of writing in December 2023.[{N}] The author contends that such wealth is not normal for a career politician absent bribery or insider trading, and reads the drop as pointing toward exactly that — a suggestion he says was later signalled to the American public through congressional stock-trading scandals.[{N}]""",

 ('entities','maxine-waters'): """## Q drop #19

Chapter 3 of [[q-for-dummies|Q for Dummies]] identifies Waters as the subject of the closing portion of [[qanon|Q]] drop #19 of November 1, 2017, describing Q as "again calling out a corrupt member of Congress for the gigantic disparity in their income and net worth" and aiming, in the author's phrase, "the proverbial informational reticle" at her.[{N}] The passage parallels the treatment of [[nancy-pelosi|Nancy Pelosi]] in the preceding drop.[{N}]""",

 ('entities','john-mccain'): """## Q drop #18 and the "No Name" question

Chapter 3 of [[q-for-dummies|Q for Dummies]] notes that [[qanon|Q]] drop #18 of November 1, 2017 refers to McCain by the epithet "No Name" and asks what benefit there would be in faking a sickness or a surgery.[{N}] The author's answer is that in McCain's case the motive would have been to avoid prosecution or legal action.[{N}] He tells readers that the subject returns in much greater detail later in the drops, asks them to remember the phrase "Dog Day Afternoon," and promises that what Q knew in advance will "blow your mind."[{N}]""",

 ('entities','jeff-sessions'): """## Q drop #16 and the Trump feud as optics

Chapter 3 of [[q-for-dummies|Q for Dummies]] reads [[qanon|Q]] drop #16 of October 31, 2017 as explaining that Sessions had to remain "completely impartial in the sense of optics."[{N}] The author recalls that President [[donald-trump|Trump]] and the Attorney General were at that time engaged in very public spats and expressing differing opinions, and argues on the strength of the drop that the entire quarrel "was all a show."[{N}]""",

 ('entities','barack-obama'): """## Q drop #17 and shadow diplomacy

Chapter 3 of [[q-for-dummies|Q for Dummies]] devotes its analysis of [[qanon|Q]] drop #17 of October 31, 2017 to what it describes as Obama's habit during 2017 of travelling either in advance of or immediately after President [[donald-trump|Trump]].[{N}] The author states that whether the destination was China, North Korea, Germany or Saudi Arabia, Obama arranged his own trip to the same country to meet the same people shortly before or after Trump's visit.[{N}] He interprets this as an effort by Obama to continue pulling strings and to obstruct Trump's attempts to bring foreign leaders into line.[{N}]

The chapter includes a graphic offered as one example of the pattern, noting that Obama travelled to China and met President [[xi-jinping|Xi]] within weeks of Trump, and emphasising that Q had flagged the behaviour almost a month in advance.[{N}]""",

 ('entities','xi-jinping'): """## Q drop #17 and the Obama visits

Chapter 3 of [[q-for-dummies|Q for Dummies]] cites a 2017 meeting between Xi and [[barack-obama|Barack Obama]] as its worked example of the pattern described in [[qanon|Q]] drop #17 — that Obama travelled to the same destinations as President [[donald-trump|Trump]] and met the same leaders shortly before or after him.[{N}] The author notes that Obama's China trip and meeting with Xi fell within weeks of Trump's own, and that Q had pointed the behaviour out almost a month ahead of time.[{N}]""",

 ('entities','michael-rogers'): """## Q drop #20

Chapter 3 of [[q-for-dummies|Q for Dummies]] identifies Admiral Rogers as the answer to the question posed in [[qanon|Q]] drop #20 of November 1, 2017 — who President [[donald-trump|Trump]] met with.[{N}] The author states that the purpose of the meeting was to warn Trump about further spying that was taking place, and connects this to the renovation of certain rooms in the [[white-house|White House]] during Trump's first administration, which he says was ostensibly carried out to remove listening devices planted to spy on the President, his family and his administration.[{N}]

The drop's follow-up questions about where the meeting was held and why phones were not allowed in the room are read as a direct nod to a [[sensitive-compartmented-information-facility|SCIF]], implying discussions of a highly sensitive nature bearing on national security and on [[deep-state|Deep State]] attempts to remove Trump from office.[{N}]""",

 ('concepts','sensitive-compartmented-information-facility'): """## Q drop #20

Chapter 3 of [[q-for-dummies|Q for Dummies]] treats [[qanon|Q]] drop #20 of November 1, 2017 as a further SCIF reference.[{N}] Q asks where President [[donald-trump|Trump]]'s meeting with Admiral [[michael-rogers|Mike Rogers]] was held and why phones were not permitted in the room; the author reads the phone prohibition as a direct nod to a SCIF and infers that the discussion concerned national security matters, including the [[deep-state|Deep State]]'s attempts to remove Trump from office.[{N}]""",

 ('entities','white-house'): """## Q drop #20 and the 2017 renovations

Chapter 3 of [[q-for-dummies|Q for Dummies]] connects [[qanon|Q]] drop #20 of November 1, 2017 to the renovation of certain rooms in the White House during [[donald-trump|Donald Trump]]'s first administration, arguing that the work was ostensibly undertaken to remove listening devices planted to spy on the President, his family and his administration.[{N}] The author links the renovations to a warning about ongoing surveillance said to have been delivered to Trump in person by Admiral [[michael-rogers|Mike Rogers]].[{N}]""",

 ('entities','united-states-marine-corps'): """## Role in the Q drops

Chapter 3 of [[q-for-dummies|Q for Dummies]] treats the Marine Corps as a recurring theme across [[qanon|Q]] drops #15–22, noting that Q "is hammering home how important the Marines are" over that stretch.[{N}] The stated basis for that importance is that the Marines answer directly to the President.[{N}] The author argues that this gives a president a means of operating around the alphabet agencies, a powerful tool for combating globalist surveillance of the United States, and, if needed, a force that can be used to quell civil unrest at home.[{N}]

The Corps is paired in the same analysis with [[military-intelligence|military intelligence]], which the author describes as able to bypass the civilian agencies and congressional oversight and to report findings directly to the President for possible use in [[military-tribunals|military tribunals]].[{N}] Drop #22 extends the theme by asking whether the [[national-guard|National Guard]] can operate alongside Marines — answered affirmatively, subject to [[posse-comitatus-act|Posse Comitatus]] being declared and [[habeas-corpus|habeas corpus]] suspended.[{N}] The chapter also notes in passing that [[robert-mueller|Robert Mueller]] was a highly decorated Marine.[{N}]""",

 ('entities','national-guard'): """## Q drop #22

Chapter 3 of [[q-for-dummies|Q for Dummies]] analyses [[qanon|Q]] drop #22 of November 1, 2017, which asks who controls the National Guard.[{N}] The author answers that in most instances control rests with the governor of the state whose unit is being activated, but that the President may also activate any National Guard unit and place it under federal control — something he says has happened many times in American history, including during the 1992 Los Angeles riots and after Hurricane Katrina.[{N}]

The drop further asks whether the Guard can work alongside the [[united-states-marine-corps|Marines]] and whether conditions must be met for that to occur.[{N}] The author answers yes to both, stating that [[posse-comitatus-act|Posse Comitatus]] must be declared and [[habeas-corpus|habeas corpus]] suspended before the United States military can serve among its own population — conditions he says were met under [[abraham-lincoln|Abraham Lincoln]] during the Civil War.[{N}]""",

 ('concepts','posse-comitatus-act'): """## Q drop #22

Chapter 3 of [[q-for-dummies|Q for Dummies]] presents Posse Comitatus as one of two conditions that must be satisfied before the United States military may activate and serve among its own population, the other being the suspension of [[habeas-corpus|habeas corpus]].[{N}] The point arises from [[qanon|Q]] drop #22 of November 1, 2017, which asks whether the [[national-guard|National Guard]] can work alongside the [[united-states-marine-corps|Marines]] and whether conditions must be met for them to do so.[{N}] The author cites the presidency of [[abraham-lincoln|Abraham Lincoln]] as the historical instance in which both conditions were met, under a congressionally-approved [[martial-law|martial law]] status used to suppress spies and dissenters during the Civil War.[{N}]""",

 ('entities','abraham-lincoln'): """## Civil War precedent in the Q drops

Chapter 3 of [[q-for-dummies|Q for Dummies]] invokes Lincoln's presidency as the precedent for domestic deployment of the United States military.[{N}] Analysing [[qanon|Q]] drop #22 of November 1, 2017, the author states that [[posse-comitatus-act|Posse Comitatus]] must be declared and [[habeas-corpus|habeas corpus]] suspended before the military can serve among its own population, and that both conditions were met under Lincoln, who he says declared a congressionally-approved [[martial-law|martial law]] status and used the U.S. military to stifle spies, dissenters and others seeking to destroy the Republic during the Civil War.[{N}]""",

 ('entities','democratic-national-committee'): """## Q drop #19 and urban voter control

Chapter 3 of [[q-for-dummies|Q for Dummies]] reads [[qanon|Q]] drop #19 of November 1, 2017 as concerning what it describes as the DNC's control over the black population.[{N}] The author's stated explanation is electoral arithmetic: the population in question is concentrated in and around large urban areas and accounts for an enormous share of votes, so that controlling it means controlling those votes and those cities.[{N}] He alleges that this population is intentionally kept in poverty in order to create dependence on government, which in his account lowers the likelihood of the cycle being recognised and broken.[{N}]

The chapter argues that the pattern was beginning to break down by late 2023, citing the effect of [[donald-trump|Trump]]'s arrest and mugshot in giving him credibility among communities that saw the same machine attacking him that had attacked them, and pointing to Black Lives Matter figure [[mark-fisher|Mark Fisher]]'s endorsement of Trump as a sign that the narrative was being lost.[{N}] It closes by naming [[maxine-waters|Maxine Waters]] as the corrupt member of Congress targeted in the drop's final section.[{N}]""",

 ('entities','mark-fisher'): """## Cited in Q for Dummies

Chapter 3 of [[q-for-dummies|Q for Dummies]], published December 29, 2023, cites Fisher's open support for and endorsement of [[donald-trump|Donald Trump]] as evidence that the [[democratic-national-committee|Democratic]] hold on black voters was breaking down, describing it as "a sign that the narrative is being lost."[{N}] The reference appears in the chapter's analysis of [[qanon|Q]] drop #19, alongside the argument that Trump's arrest and mugshot had increased his standing among minority voters.[{N}]""",

 ('concepts','operation-mockingbird'): """## Celebrity influence in Q drop #19

Chapter 3 of [[q-for-dummies|Q for Dummies]] treats the use of celebrity status and fame to push narratives and agendas as a tactic of the Operation Mockingbird apparatus, describing it as long-established and highly effective.[{N}] The author writes that celebrities have been used to sell the public "any and everything under the sun," from food and cars to politics, and offers as the most glaring recent example what he characterises as Hollywood figures promoting masks and vaccines.[{N}] He extends the claim to the contemporary media attention on [[travis-kelce|Travis Kelce]] and [[taylor-swift|Taylor Swift]].[{N}]""",

 ('entities','taylor-swift'): """## Cited in Q for Dummies

Chapter 3 of [[q-for-dummies|Q for Dummies]], published December 29, 2023, names Swift and [[travis-kelce|Travis Kelce]] as a then-current example of what the author describes as the [[operation-mockingbird|Operation Mockingbird]] practice of using celebrity status and fame to push narratives and agendas.[{N}] The reference is made in passing, with a deliberate mangling of her name, in the chapter's analysis of [[qanon|Q]] drop #19.[{N}]""",

 ('entities','travis-kelce'): """## Cited in Q for Dummies

Chapter 3 of [[q-for-dummies|Q for Dummies]], published December 29, 2023, names Kelce alongside [[taylor-swift|Taylor Swift]] as a contemporary illustration of the claim that celebrity is used as a vehicle for narrative management, a tactic the author attributes to the [[operation-mockingbird|Operation Mockingbird]] apparatus.[{N}]""",

 ('entities','house-of-saud'): """## Q drop #15

Chapter 3 of [[q-for-dummies|Q for Dummies]] identifies the House of Saud as the family referred to in [[qanon|Q]] drop #15 of October 31, 2017 as being toppled.[{N}] The author declines to expand on the claim at that point in the series, stating that the subject returns in far greater detail later in the drops.[{N}]""",

 ('entities','paul-manafort'): """## Q drop #15

Chapter 3 of [[q-for-dummies|Q for Dummies]] lists Manafort among the topics raised in [[qanon|Q]] drop #15 of October 31, 2017, describing him and others as "plants which were inserted into Trump's team in the hopes of sabotaging him or framing him."[{N}] The author notes that the subject recurs in greater detail later in the drops.[{N}]""",

 ('entities','george-soros'): """## Q drop #15

Chapter 3 of [[q-for-dummies|Q for Dummies]] notes that [[qanon|Q]] drop #15 of October 31, 2017 closes by letting readers know that "a certain Soros is indeed targeted."[{N}] The mention sits alongside the drop's references to the toppling of the [[house-of-saud|House of Saud]] and to alleged plants within the Trump campaign.[{N}]""",

 ('entities','donald-trump'): """## Q drops #15–22 in Q for Dummies

Chapter 3 of [[q-for-dummies|Q for Dummies]] reads [[qanon|Q]] drops #15 through #22 as a sustained set of assurances about Trump's position in late 2017.[{N}] Drop #15 is read as establishing that his election disrupted a [[16-year-plan-to-destroy-america|sixteen-year plan]] premised on [[hillary-clinton|Hillary Clinton]] winning, the [[deep-state|Deep State]] having never expected to lose the presidency again as it had with [[john-f-kennedy|JFK]] or [[ronald-reagan|Reagan]].[{N}] Drop #16 states that POTUS is safe, that anyone believing he is not in control is mistaken, and that he was insulated with zero risk of removal from office — an assurance the author judges to have proved "bang-on."[{N}] The same drop is read as explaining that Trump's public quarrel with Attorney General [[jeff-sessions|Jeff Sessions]] was staged for optics.[{N}]

Later drops in the chapter cover Trump's meeting with [[robert-mueller|Robert Mueller]], the warning about surveillance delivered by Admiral [[michael-rogers|Mike Rogers]] and the associated [[white-house|White House]] renovations, and the argument that Trump's 2023 arrest and mugshot increased his standing among minority voters.[{N}]""",

 ('concepts','deep-state'): """## Treatment in Q for Dummies Chapter 3

Chapter 3 of [[q-for-dummies|Q for Dummies]] presents the Deep State as an actor that "never thought they would lose the Presidency again" after [[john-f-kennedy|JFK]] and [[ronald-reagan|Reagan]], having expected [[hillary-clinton|Hillary Clinton]] to win in 2016 as part of a [[16-year-plan-to-destroy-america|sixteen-year plan]] to destroy America.[{N}] The author argues that the corruption runs far deeper than most readers imagine, and reads the wave of congressional resignations and retirements in that period as involuntary — part of the "cleaning" Q described rather than free choices by the members involved.[{N}]

Countervailing emphasis is placed on the drops' claim that there are more good people than bad, which the author says matters because it is easy to fall into believing that everyone in government is corrupt and that nobody is fighting for good.[{N}] The chapter also frames [[military-intelligence|military intelligence]] and the [[united-states-marine-corps|Marines]] as the instruments by which a president can act outside the reach of compromised agencies, and reads drop #20's [[sensitive-compartmented-information-facility|SCIF]] questions as pointing to discussions of Deep State attempts to remove [[donald-trump|Trump]] from office.[{N}]""",

 ('concepts','military-tribunals'): """## Caution in Q for Dummies

Chapter 3 of [[q-for-dummies|Q for Dummies]] describes [[military-intelligence|military intelligence]] as able to bring investigations directly to the President, whose evidence could then be used against various actors "potentially in military tribunals."[{N}] The same chapter attaches an explicit warning to that possibility: the author states that anyone claiming to have seen tribunals in person, or to know for a fact that they have taken place and what punishments were imposed, is in his opinion intentionally misleading their audience and telling them what they want to hear.[{N}] His reasoning is that operators do not divulge, and that if tribunals were occurring the public would not learn of it until well after the fact.[{N}]""",

 ('concepts','qanon'): """## Drops #15–22

Chapter 3 of [[q-for-dummies|Q for Dummies]] covers drops #15 through #22 of October 31 and November 1, 2017, a run the author characterises as carrying a heavy emphasis on [[military-intelligence|Military Intelligence]].[{N}] Recurring themes across the set include the claim that there are more good people than bad, the toppling of the [[house-of-saud|House of Saud]], alleged plants inside the Trump campaign, the [[16-year-plan-to-destroy-america|sixteen-year plan]], the direct command relationship between the President and the [[united-states-marine-corps|Marines]], and the conditions governing domestic military deployment.[{N}]

The chapter also documents the operation's early encounter with organised opposition. Fewer than twenty drops in, the author writes, Q was already calling out [[shilling|sliding]] and other shill tactics, and by drop #21 the board was being hit with bot farms, shills and trolls on every new thread — which he treats as evidence that the material was "over the target" rather than a [[larp|LARP]].[{N}]""",
}

