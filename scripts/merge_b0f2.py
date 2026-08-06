# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from merge_helper import merge

W = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'
RAW = 'raw/badlands-news-brief-b0f.md'
REF = 'Badlands Brief — "Badlands News Brief: Manufactured Intelligence & Major Victories", URL: https://badlands.substack.com/p/badlands-news-brief-b0f'

S = {}

S['entities/barack-obama.md'] = u"""## 2025 Gabbard declassification

Documents declassified on July 18, 2025 by Director of National Intelligence [[tulsi-gabbard|Tulsi Gabbard]] were reported by Fox News Digital to show that the Obama administration had "manufactured and politicized intelligence" to create the narrative that Russia was attempting to influence the 2016 presidential election, despite intelligence community assessments to the contrary.[{n}] According to the reporting, after [[donald-trump|Donald Trump]] defeated [[hillary-clinton|Hillary Clinton]], Obama and his national security team laid the groundwork for the years-long Trump–Russia collusion probe, even though in the months before the November 2016 vote the intelligence community had consistently assessed that Russia was "probably not trying…to influence the election by using cyber means."[{n}] More than 100 pages of memos and emails released by Gabbard's team indicated the administration had quietly concluded that Russia did not affect vote totals through cyberattacks; Gabbard characterized this as a "treasonous conspiracy" and called for former officials to be prosecuted.[{n}]"""

S['entities/joe-biden.md'] = u"""## Russiagate declassification and the Garland memo documents (July 2025)

Badlands commentary accompanying the July 2025 declassification by [[tulsi-gabbard|Tulsi Gabbard]] highlighted remarks Biden made on January 5, 2017, the day before the release of the Intelligence Community Assessment, arguing that he knew the claim that Russia was trying to help [[donald-trump|Donald Trump]] was false yet pushed the narrative anyway, while calling Trump's criticisms of the intelligence community "dangerous" and "mindless."[{n}] One Badlands contributor remarked that the 2017 footage seemed to show "a different Biden."[{n}]

Separately, documents released on July 18, 2025 by [[america-first-legal|America First Legal]] were said to prove that the October 2021 [[garland-memo|Garland memo]] treating concerned parents as domestic terrorists had been politically orchestrated and coordinated with the Biden [[white-house|White House]], with political leadership overriding the advice of career [[department-of-justice|Department of Justice]] lawyers.[{n}] Badlands commentary noted that the weaponization of government under the Biden administration affected thousands of ordinary Americans, not only Trump.[{n}] The record of Biden's National Security Adviser [[jake-sullivan|Jake Sullivan]] — including the 2021 Afghanistan withdrawal, public defenses of Biden's mental fitness, and involvement in national security decisions during the autopen controversy — also drew renewed attention that weekend.[{n}]"""

S['entities/shigeru-ishiba.md'] = u"""## 2025 upper house election defeat

In Japan's upper house election held on Sunday, July 20, 2025, Ishiba's Liberal Democratic Party and its coalition partner Komeito lost their majority in the chamber, leaving the government further beholden to opposition support after a lower house defeat the previous October.[{n}] The election's biggest surprise was the rise of the populist party [[sanseito|Sanseito]] under [[sohei-kamiya|Sohei Kamiya]], which won 14 seats on a "Japanese First" platform warning of a "silent invasion" of immigrants.[{n}]

Badlands commentary noted that President [[donald-trump|Donald Trump]] had been engaged in heated trade negotiations with Ishiba, particularly after Trump blocked Nippon Steel's acquisition of U.S. Steel — a deal first blocked by [[joe-biden|Joe Biden]] in January 2025 — and argued that a genuine populist-nationalist movement in Japan could turn the country into a real ally rather than a postwar vassal state.[{n}]"""

S['entities/jeffrey-epstein.md'] = u"""## Grand jury transcript debate (July 2025)

On Sunday, July 20, 2025, [[alan-dershowitz|Alan Dershowitz]], a former lawyer for Epstein, said on "Fox News Sunday" that key information about Epstein's relationships with the rich and powerful was unlikely to appear in the grand jury transcripts the [[white-house|White House]] wanted unsealed, and that the relevant material sat in "sealed records by two or three federal judges in the New York courts."[{n}] The White House had drawn criticism from some prominent supporters after stating in early July 2025 that a [[department-of-justice|Department of Justice]] and FBI investigation found no evidence of an incriminating client list maintained by Epstein.[{n}] Days later, a Wall Street Journal article reported that President [[donald-trump|Donald Trump]] had sent Epstein a letter marked with innuendo for the financier's 50th birthday; Trump denied the report and Politico said it had not independently verified the letter's existence.[{n}] Badlands commentary argued the Epstein narrative was consuming disproportionate public attention and would look like "a quaint fake scandal" beside larger geopolitical developments.[{n}]"""

S['entities/marco-rubio.md'] = u"""## Rejection of the WHO's 2024 health regulation amendments

On Friday, July 18, 2025, one day before the deadline, the [[state-department|State Department]] under Secretary Rubio, together with the U.S. Department of Health and Human Services, formally refused the [[world-health-organization|World Health Organization]]'s 2024 amendments to the International Health Regulations, which would otherwise have become binding.[{n}] The rejection argued the amendments would give the WHO "undue influence on our domestic health responses."[{n}] Rubio said: "Terminology throughout the amendments to the 2024 International Health Regulations is vague and broad, risking WHO-coordinated international responses that focus on political issues like solidarity, rather than rapid and effective actions."[{n}]"""

S['concepts/russiagate-hoax.md'] = u"""## July 2025 declassification

On Friday, July 18, 2025, Director of National Intelligence [[tulsi-gabbard|Tulsi Gabbard]] declassified documents that Fox News Digital reported as "overwhelming evidence" that the Obama administration had "manufactured and politicized intelligence" to build the narrative of Russian interference in the 2016 election, despite intelligence community assessments to the contrary.[{n}] The material showed that in the months before the November 2016 election the intelligence community consistently judged that Russia was "probably not trying…to influence the election by using cyber means," and that after [[donald-trump|Donald Trump]]'s victory over [[hillary-clinton|Hillary Clinton]], [[barack-obama|Barack Obama]] and his national security team laid the groundwork for the collusion probe.[{n}]

Gabbard's team released over 100 pages of memos and emails, which she described as evidence of a "treasonous conspiracy" and a "years-long coup against President Trump," calling for former officials to be prosecuted and saying there was "no rational or logical explanation" for why the investigations run by [[robert-mueller|Robert Mueller]] and [[john-durham|John Durham]] failed to surface the same evidence.[{n}] Badlands commentary pointed to remarks by [[joe-biden|Joe Biden]] on January 5, 2017, the day before the Intelligence Community Assessment was released, as evidence that senior officials pushed a narrative they knew to be false.[{n}]"""

S['concepts/codex-911.md'] = u"""## Premiere and inspiration

In July 2025 Badlands Media promoted the premiere of CODEX 911 at GART Deadwood, offering virtual tickets through its events page.[{n}] The network published filmmaker [[brad-zerbo|Brad Zerbo]]'s personal essay "September 11th 2001" as the back story and personal inspiration for the film, in which Zerbo recounted watching the towers burn and seeing United Flight 175 strike the second tower, writing that "everything changed" and that it was the moment "Flight 11 became no accident, and crisis became King."[{n}]"""

for rel, sec in S.items():
    merge(W + rel, RAW, REF, sec)
