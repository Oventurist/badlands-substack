#!/usr/bin/env python3
"""One-shot merge helper for ingest tick badlands-brief-6f0.
Appends the new source to each page's sources: frontmatter, bumps updated:,
inserts a new prose section before '## Sources' (or appends at EOF), and
adds a Sources bullet. Then appends the log.md entry.
"""
import re, io

DATE = "2026-08-06"
SRC = "raw/badlands-brief-6f0.md"
BULLET = "- [badlands brief 6f0](https://badlands.substack.com/p/badlands-brief-6f0)"

SPEC = [
    {"path": "wiki/entities/benjamin-netanyahu.md", "section": """## June 2026: defying Trump over Iran

The Badlands Brief of June 8, 2026 reports that Netanyahu struck [[iran|Iran]] in defiance of President [[donald-trump|Donald Trump]]'s explicit urging not to retaliate for the Iranian ballistic-missile attack that day. [[axios|Axios]], citing a senior U.S. official and an Israeli source, reported that Trump had urged Netanyahu against retaliation, and Trump told the [[financial-times|Financial Times]] that Netanyahu would have "no choice" but to accept any agreement the United States negotiates with Iran: "I call the shots. I call all the shots. He doesn't call the shots." The [[israel-defense-forces|Israeli Air Force]] carried out strikes on military targets in central and western Iran on June 8, with Israeli Ambassador [[yechiel-leiter|Yechiel Leiter]] saying the operation focused on missile launch sites and related infrastructure and did not target energy facilities.

The Brief recalls that exactly one month earlier, on May 9, Netanyahu told [[yad-vashem|Yad Vashem]] that "If Israel is forced to stand alone - Israel will stand alone," and argues that with Israeli election season underway, "the knives are out for Bibi": his political opponents are calling him weak for capitulating to Trump and failing to finish the job with [[hezbollah|Hezbollah]] and Iran. [[ghost-of-based-patrick-henry|GhostofBasedPatrickHenry]] reads the dynamic as Trump baiting Netanyahu into standing alone using Game Theory, and notes that the strike on Beirut that provoked Iran's attack was, per two [[white-house|White House]] sources reported by [[barak-ravid|Barak Ravid]], neither played a part in nor blessed by the United States."""},
    {"path": "wiki/entities/donald-trump.md", "section": """## "I call the shots": Iran, Israel, and the nuclear talks (June 2026)

Around the June 8, 2026 Iranian missile attack on [[israel|Israel]], President Trump urged Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] not to retaliate, according to [[axios|Axios]] citing a senior U.S. official and an Israeli source. In a phone interview with the [[financial-times|Financial Times]], Trump said Netanyahu would have "no choice" but to accept any agreement the United States negotiates with Iran — "I call the shots. I call all the shots. He doesn't call the shots" — and said Iran's strikes would have no impact on the deal: "It's not going to have any impact on the deal." He separately told [[fox-news|Fox News]] he would instruct Netanyahu to refrain from retaliatory action, a position at odds with statements from the Israeli military. The Brief's commentary reads the episode as Trump baiting Netanyahu into standing alone, noting that two [[white-house|White House]] sources told [[barak-ravid|Barak Ravid]] the United States played no part in the Beirut strike that provoked Iran.

On June 4, 2026, Trump said the United States does not need a formal agreement with [[iran|Iran]] to obtain the country's enriched uranium — a notable shift from earlier negotiations in which surrendering the stockpile was reported as a central element of a potential deal — asserting the material is effectively "entombed" at damaged nuclear sites, that the US is closely monitoring them, and that any recovery operation would be difficult and risky. He struck a conciliatory tone toward Supreme Leader [[mojtaba-khamenei|Ayatollah Mojtaba Khamenei]], saying he would consider a meeting if a deal is reached and would approach it respectfully, and stated that Iran has already agreed not to obtain nuclear weapons.

## Directing the ODNI purge and the Meet the Press walkout (June 2026)

In an interview with the [[wall-street-journal|Wall Street Journal]], Trump said he had privately instructed acting Director of National Intelligence [[william-pulte|Bill Pulte]] to "start the process" of reducing personnel within the [[office-of-the-director-of-national-intelligence|ODNI]], which he called "unnecessary and/or too big," telling [[reuters|Reuters]]: "I'd like to see it smaller. I think there are a lot of people in there that shouldn't be there." In a viral moment on Sunday, June 7, 2026, Trump walked out on [[kristen-welker|Kristen Welker]] of [[meet-the-press|Meet the Press]] after a heated exchange about elections being fake; the Brief's commentary ties the walkout to the claim that the United States lacks real elections."""},
    {"path": "wiki/entities/william-pulte.md", "section": """## Acting DNI and the intelligence-community purge (June 2026)

In an interview with the [[wall-street-journal|Wall Street Journal]], President [[donald-trump|Donald Trump]] said he had privately instructed Pulte to "start the process" of reducing personnel within the [[office-of-the-director-of-national-intelligence|Office of the Director of National Intelligence]], which Trump described as "unnecessary and/or too big," telling [[reuters|Reuters]]: "I'd like to see it smaller. I think there are a lot of people in there that shouldn't be there." Pulte was selected by Trump to serve as acting DNI following the announced departure of [[tulsi-gabbard|Tulsi Gabbard]], scheduled to take effect June 30, 2026, and Trump indicated he does not plan to nominate Pulte for the post on a permanent basis. [[burning-bright|Burning Bright]]'s commentary frames the appointment as part of "the architecture of a controlled demolition and constitutional reset" of an intelligence community that "became a node in a narrative war for domestic political enforcement."""},
    {"path": "wiki/entities/tulsi-gabbard.md", "section": """## Departure from ODNI (June 2026)

The June 8, 2026 Badlands Brief reports that President [[donald-trump|Donald Trump]] selected [[william-pulte|Bill Pulte]] to serve as acting Director of National Intelligence following Gabbard's announced departure, scheduled to take effect June 30, 2026, and that Trump indicated he does not plan to nominate Pulte on a permanent basis after the acting appointment concludes."""},
    {"path": "wiki/entities/iran.md", "section": """## June 8, 2026 missile attack on Israel

On June 8, 2026, Iran launched 11 ballistic missiles toward [[israel|Israel]], according to Israeli officials cited by [[axios|Axios]] — the first direct Iranian attack since the April 8 ceasefire. The attack was retaliation for Israel's strike on Beirut, the capital of [[lebanon|Lebanon]]; two [[white-house|White House]] sources told [[barak-ravid|Barak Ravid]] that the United States played no part in, and gave no blessing to, that operation. Iran warned that further Israeli attacks could prompt additional responses, raising concerns about broader regional escalation. The [[israel-defense-forces|Israeli Air Force]] carried out strikes on military targets in central and western Iran the same day.

## Nuclear file and the entombed stockpile (June 2026)

President [[donald-trump|Donald Trump]] said on June 4, 2026 that the United States does not need a formal agreement to obtain Iran's enriched uranium — a shift from earlier negotiations in which surrendering the stockpile was reported as a central element of a potential deal — describing the material as effectively "entombed" at damaged nuclear sites and claiming any recovery operation would be difficult and risky. Trump said Iran has already agreed not to obtain nuclear weapons and indicated he would consider a respectful meeting with Supreme Leader [[mojtaba-khamenei|Ayatollah Mojtaba Khamenei]] if a deal is reached."""},
    {"path": "wiki/entities/israel.md", "section": """## June 2026: war restart and the American rift

On June 8, 2026, [[iran|Iran]] launched 11 ballistic missiles at Israel — the first direct Iranian attack since the April 8 ceasefire — in retaliation for Israel's strike on Beirut, the capital of [[lebanon|Lebanon]]. The [[israel-defense-forces|Israeli Air Force]] struck military targets in central and western Iran the same day; Israeli Ambassador [[yechiel-leiter|Yechiel Leiter]] said the operation focused on missile launch sites and related infrastructure and did not target energy facilities. Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] defied President [[donald-trump|Donald Trump]]'s urging not to retaliate, with Trump telling the [[financial-times|Financial Times]] that Netanyahu "won't have any choice" but to accept a US-negotiated agreement with Iran. The Brief also notes reporting by [[nbc-news|NBC News]] and the [[new-york-times|New York Times]] that the [[defense-intelligence-agency|Defense Intelligence Agency]] elevated the Israeli espionage threat to "critical" — a story a [[white-house|White House]] official called entirely false, and which the Israeli Embassy in Washington dismissed as politically motivated."""},
    {"path": "wiki/entities/israel-defense-forces.md", "section": """## June 8, 2026 strikes on Iran

The June 8, 2026 Badlands Brief reports that the Israeli Air Force carried out strikes against military targets in central and western [[iran|Iran]] in response to the Iranian ballistic-missile attack that day, the first direct Iranian attack since the April 8 ceasefire. Israeli Ambassador [[yechiel-leiter|Yechiel Leiter]] said the operation focused on missile launch sites and related infrastructure and did not target energy facilities; explosions were reported in multiple Iranian cities. A U.S. defense official told [[axios|Axios]] that American forces did not participate in the strikes, which Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] ordered in defiance of President [[donald-trump|Donald Trump]]'s urging not to retaliate."""},
    {"path": "wiki/entities/pentagon.md", "section": """## Israeli espionage threat assessment (June 2026)

[[nbc-news|NBC News]] and the [[new-york-times|New York Times]] reported that the Pentagon's [[defense-intelligence-agency|Defense Intelligence Agency]] elevated its assessment of the threat posed by Israeli espionage to "critical," in a seven-page document with an accompanying chart evaluating Israeli intelligence-gathering capabilities. The assessment allegedly identified concerns about Israeli efforts to gather information on U.S. administration deliberations on [[iran|Iran]] and [[lebanon|Lebanon]], naming [[steve-witkoff|Steve Witkoff]], [[elbridge-colby|Elbridge Colby]] and [[michael-dimino|Michael DiMino]] among officials allegedly targeted by intelligence collection. The Pentagon declined comment; a [[white-house|White House]] official told NBC News that "the entire story is false," and a spokesperson for the Israeli Embassy in Washington dismissed the allegations as politically motivated. The reporting surfaced amid broader tensions between the Trump administration and the Israeli government over Iran and developments in Lebanon."""},
    {"path": "wiki/entities/mossad.md", "section": """## Alleged collection on US officials (June 2026)

The [[defense-intelligence-agency|Defense Intelligence Agency]] reportedly elevated the threat posed by Israeli espionage to "critical," alleging Israeli efforts to gather information about U.S. administration deliberations on [[iran|Iran]] and [[lebanon|Lebanon]] and naming [[steve-witkoff|Steve Witkoff]], [[elbridge-colby|Elbridge Colby]] and [[michael-dimino|Michael DiMino]] among targeted officials — reporting that a [[white-house|White House]] official called entirely false and the Israeli Embassy dismissed as politically motivated. [[ghost-of-based-patrick-henry|GhostofBasedPatrickHenry]] argues that Mossad spying on DiMino, a senior Pentagon official who holds that [[israel|Israel]] is a security liability for the United States, would make sense."""},
    {"path": "wiki/entities/todd-blanche.md", "section": """## Ethics complaint over the Abrego Garcia case (May–June 2026)

A public interest group filed an ethics complaint against Blanche after U.S. District Judge [[waverly-crenshaw|Waverly Crenshaw]] dismissed the Tennessee criminal case against [[kilmar-abrego-garcia|Kilmar Abrego Garcia]], according to a May 31, 2026 commentary by [[jonathan-turley|Jonathan Turley]]; the underlying complaint PDF could not be accessed in-browser and was not used to establish independent facts. Crenshaw dismissed the human-smuggling case on May 22, 2026 after granting Abrego Garcia's motion alleging vindictive prosecution, finding the government had not rebutted a presumption of vindictiveness, per [[abc|ABC News]]. [[ed-martin|Ed Martin]]'s accompanying commentary — "The Bar Associations are ending themselves" — frames the complaint within the broader assault on the [[american-bar-association|bar associations]]."""},
    {"path": "wiki/entities/american-bar-association.md", "section": """## Bar associations "ending themselves" (June 2026)

The June 8, 2026 Badlands Brief returns to the assault on bar associations. [[ed-martin|Ed Martin]] is quoted declaring "The Bar Associations are ending themselves. Soon, they will be like the Guilds of Florence" — a reference to the medieval Florentine guilds abolished by decree in 1770 after popular uprising. [[ashe-in-america|Ashe in America]] amplifies the remark, recalling the [[pam-bondi|Pam Bondi]] [[department-of-justice|DOJ]] letter stating that "while the ABA is free to comment on judicial nominations along with other activist organizations, there is no justification for treating the ABA differently from such other activist organizations and the Department of Justice will not do so," and listing [[jeff-clark|Jeff Clark]], John Eastman, Rachel Alexander and Brian Blehm as figures targeted by bar-association authority. Ashe characterizes the professional associations as an unaccountable "expert class" that acts "more like unions when the attorney or law firm conduct confirms their political biases." The complaint that prompted the commentary was an ethics filing against Acting Attorney General [[todd-blanche|Todd Blanche]] over the dismissed [[kilmar-abrego-garcia|Kilmar Abrego Garcia]] case."""},
    {"path": "wiki/entities/ed-martin.md", "section": """## On bar associations (June 2026)

In the June 8, 2026 Badlands Brief, Ed Martin is quoted declaring "The Bar Associations are ending themselves. Soon, they will be like the Guilds of Florence" — a reference to the medieval Florentine guilds abolished by decree in 1770 after the people rose up against them. [[ashe-in-america|Ashe in America]] amplifies the remark in a broader attack on professional associations as unaccountable "expert class" bodies with "enormous powers to affect change," in the context of an ethics complaint against Acting Attorney General [[todd-blanche|Todd Blanche]]."""},
    {"path": "wiki/entities/pam-bondi.md", "section": """## DOJ letter on the ABA (2026)

The June 8, 2026 Badlands Brief recalls the [[department-of-justice|DOJ]] letter from Bondi stating the administration's position on the [[american-bar-association|American Bar Association]]: "while the ABA is free to comment on judicial nominations along with other activist organizations, there is no justification for treating the ABA differently from such other activist organizations and the Department of Justice will not do so." The letter is cited in Badlands commentary on bar associations "ending themselves."""},
    {"path": "wiki/entities/jonathan-turley.md", "section": """## Blanche ethics complaint commentary (May 2026)

A May 31, 2026 commentary by Turley reported that a public interest group filed an ethics complaint against Acting Attorney General [[todd-blanche|Todd Blanche]] after a federal judge dismissed the Tennessee criminal case against [[kilmar-abrego-garcia|Kilmar Abrego Garcia]]; the underlying complaint PDF could not be accessed in-browser and was not used to establish independent facts."""},
    {"path": "wiki/entities/steve-witkoff.md", "section": """## Reported Israeli intelligence targeting (June 2026)

[[nbc-news|NBC News]] and the [[new-york-times|New York Times]] reported that the [[defense-intelligence-agency|Defense Intelligence Agency]] named Witkoff among U.S. officials allegedly targeted by Israeli intelligence collection on administration deliberations over [[iran|Iran]] and [[lebanon|Lebanon]]; the [[white-house|White House]] called the story entirely false and the Israeli Embassy in Washington dismissed the allegations as politically motivated."""},
    {"path": "wiki/entities/elbridge-colby.md", "section": """## Reported Israeli intelligence targeting (June 2026)

[[nbc-news|NBC News]] and the [[new-york-times|New York Times]] reported that the [[defense-intelligence-agency|Defense Intelligence Agency]] named Colby among U.S. officials allegedly targeted by Israeli intelligence collection on administration deliberations over [[iran|Iran]] and [[lebanon|Lebanon]]; a [[white-house|White House]] official said "the entire story is false," and the Israeli Embassy in Washington dismissed the allegations as politically motivated."""},
    {"path": "wiki/entities/financial-times.md", "section": """## Trump interview on Iran (June 2026)

In a phone interview published around June 8, 2026, President [[donald-trump|Donald Trump]] told the Financial Times that Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] "won't have any choice" but to accept any agreement the United States negotiates with [[iran|Iran]]: "I call the shots. I call all the shots. He doesn't call the shots." Trump said Iran's missile strikes were "not going to have any impact on the deal," describing them as "attacks that did not kick at all" in a conflict that has "been going for 3,000 years, or 47 years, depending on how you count."""},
    {"path": "wiki/entities/axios.md", "section": """## June 2026 Iran–Israel reporting

Axios, citing a senior U.S. official and an Israeli source, reported that President [[donald-trump|Donald Trump]] urged Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] not to retaliate against [[iran|Iran]] following the June 8, 2026 missile attack, and reported that Iran launched 11 ballistic missiles toward [[israel|Israel]] — the first direct Iranian attack since the April 8 ceasefire. A U.S. defense official told Axios that American forces did not participate in the Israeli strikes on Iran. Axios's [[barak-ravid|Barak Ravid]] also reported that two separate [[white-house|White House]] sources confirmed the United States played no part in, and gave no blessing to, Israel's strike on Beirut that provoked the Iranian attack."""},
    {"path": "wiki/entities/barak-ravid.md", "section": """## June 2026 reporting

The June 8, 2026 Badlands Brief highlights Ravid's privileged access to President [[donald-trump|Donald Trump]], whose phone calls to the [[axios|Axios]] journalist are now happening "every few weeks." Ravid reported that two separate sources at the [[white-house|White House]] confirmed the United States played no part in, and gave no blessing to, Israel's strike on Beirut that provoked [[iran|Iran]]'s missile attack, and — via Axios — that Trump urged Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] not to retaliate against Iran after the June 8 attack."""},
    {"path": "wiki/entities/why-we-vote.md", "section": """## Election Truth Alliance outreach (June 2026)

In the June 8, 2026 Badlands Brief, [[ashe-in-america|Ashe in America]] says he and [[canncon|Brian]] intend to invite the [[election-truth-alliance|Election Truth Alliance]] — described as "the left's" new election-denial movement — onto Why We Vote, arguing that "no one has covered election integrity in greater depth or with more integrity than Badlands Media across shows," and noting the show has run weekly for three years. The commentary frames the outreach around President [[donald-trump|Donald Trump]]'s walkout on [[kristen-welker|Kristen Welker]] over elections being fake."""},
    {"path": "wiki/entities/yad-vashem.md", "section": """## Netanyahu's May 9, 2026 speech

On May 9, 2026, Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] spoke at Yad Vashem, the World Holocaust Remembrance Center in Jerusalem, declaring: "If Israel is forced to stand alone - Israel will stand alone." The June 8, 2026 Badlands Brief presents the speech as the prelude to Netanyahu's defiance of President [[donald-trump|Donald Trump]] over retaliatory strikes on [[iran|Iran]]."""},
    {"path": "wiki/entities/nbc-news.md", "section": """## Israeli espionage reporting (June 2026)

NBC News, with the [[new-york-times|New York Times]], reported that the [[defense-intelligence-agency|Defense Intelligence Agency]] elevated its assessment of the threat posed by Israeli espionage to "critical," naming [[steve-witkoff|Steve Witkoff]], [[elbridge-colby|Elbridge Colby]] and [[michael-dimino|Michael DiMino]] among officials allegedly targeted. A [[white-house|White House]] official told NBC News that "the entire story is false."""},
    {"path": "wiki/entities/new-york-times.md", "section": """## Israeli espionage reporting (June 2026)

The Times, with [[nbc-news|NBC News]], reported that the [[defense-intelligence-agency|Defense Intelligence Agency]] elevated its assessment of the Israeli espionage threat to "critical," naming [[steve-witkoff|Steve Witkoff]], [[elbridge-colby|Elbridge Colby]] and [[michael-dimino|Michael DiMino]] among officials allegedly targeted by Israeli intelligence collection. A [[white-house|White House]] official called the story entirely false."""},
    {"path": "wiki/entities/wall-street-journal.md", "section": """## Trump on the ODNI (June 2026)

In an interview with the Journal, President [[donald-trump|Donald Trump]] said he had privately instructed acting Director of National Intelligence [[william-pulte|Bill Pulte]] to "start the process" of reducing personnel within the [[office-of-the-director-of-national-intelligence|ODNI]], which Trump called "unnecessary and/or too big," adding that some employees "should no longer be in their positions." Trump also said he does not plan to nominate Pulte for the post on a permanent basis."""},
    {"path": "wiki/entities/reuters.md", "section": """## ODNI reporting (June 2026)

Reuters reported President [[donald-trump|Donald Trump]] as saying of the [[office-of-the-director-of-national-intelligence|ODNI]]: "I'd like to see it smaller. I think there are a lot of people in there that shouldn't be there."""},
    {"path": "wiki/entities/ashe-in-america.md", "section": """## June 2026 Brief comments

In the June 8, 2026 Badlands Brief, Ashe comments on [[ed-martin|Ed Martin]]'s declaration that bar associations are "ending themselves," on President [[donald-trump|Donald Trump]]'s walkout on [[kristen-welker|Kristen Welker]] of [[meet-the-press|Meet the Press]] over "fake elections," and on the plan to invite the [[election-truth-alliance|Election Truth Alliance]] onto [[why-we-vote|Why We Vote]]. He argues that continuing to pretend elections are real harms the America First agenda and that Trump's remarks to Welker were "true and justified," and characterizes the professional associations as an unaccountable "expert class" that acts "more like unions when the attorney or law firm conduct confirms their political biases," citing the [[pam-bondi|Pam Bondi]] [[department-of-justice|DOJ]] letter on the [[american-bar-association|ABA]]."""},
    {"path": "wiki/entities/burning-bright.md", "section": """## On the ODNI purge (June 2026)

Commenting on [[william-pulte|Bill Pulte]]'s selection as acting Director of National Intelligence, Burning Bright argues that whether Trump's appointments register as prudent or dangerous depends on what the architect believes the institution is ultimately for: those who read the project as restoration see erratic disruption, while those who recognize "the architecture of a controlled demolition and constitutional reset" see the [[office-of-the-director-of-national-intelligence|ODNI]] as a post-9/11 layer that "concentrated power and, over time became a node in a narrative war for domestic political enforcement." The commentary concludes that an acting director drawn from outside the intelligence guild, given license to reduce headcount and operating scope before a permanent hand takes over, "is not a bug in Trump's restoration. It is the feature required when the institution itself has become part of the problem it was meant to solve."""},
    {"path": "wiki/entities/ghostofbasedpatrickhenry.md", "section": """## June 2026 Brief comments

In the June 8, 2026 Brief, GhostofBasedPatrickHenry documents the now-routine phone calls between President [[donald-trump|Donald Trump]] and [[barak-ravid|Barak Ravid]], presenting Trump's "I call the shots" interview with the [[financial-times|Financial Times]] as evidence that Trump is baiting Prime Minister [[benjamin-netanyahu|Benjamin Netanyahu]] into standing alone using Game Theory — the same dynamic flagged in Netanyahu's [[yad-vashem|Yad Vashem]] speech. He also analyzes the [[pentagon|Pentagon]]/[[defense-intelligence-agency|DIA]] Israeli-espionage story as a possible narrative deployment whose timing "cannot be ignored," and notes that Badlands has tracked [[michael-dimino|Michael DiMino]] since his January 20, 2025 Pentagon swearing-in, calling him a plausible Mossad target given his position that [[israel|Israel]] is a security liability for the United States."""},
    {"path": "wiki/entities/office-of-the-director-of-national-intelligence.md", "section": """## Trump's purge directive (June 2026)

The June 8, 2026 Badlands Brief reports that President [[donald-trump|Donald Trump]] told the [[wall-street-journal|Wall Street Journal]] he had privately instructed acting Director of National Intelligence [[william-pulte|William Pulte]] to "start the process" of firing employees as part of an effort to reshape the U.S. intelligence community, calling the ODNI, which oversees 18 U.S. intelligence agencies and units, "unnecessary and/or too big." Trump told [[reuters|Reuters]]: "I'd like to see it smaller. I think there are a lot of people in there that shouldn't be there." Pulte was selected following the announced departure of [[tulsi-gabbard|Tulsi Gabbard]], scheduled to take effect June 30, 2026, and Trump indicated he does not plan to nominate Pulte permanently. [[burning-bright|Burning Bright]]'s commentary reads the pick as a feature of "controlled demolition": an acting director drawn from outside the intelligence guild, given explicit license to reduce headcount and operating scope before a permanent hand takes over."""},
    {"path": "wiki/entities/mojtaba-khamenei.md", "section": """## June 8, 2026 Brief

The June 8, 2026 Badlands Brief repeats Trump's conciliatory posture toward Khamenei in the context of the Iranian missile attack on [[israel|Israel]]: while not currently seeking a meeting with the Supreme Leader, President [[donald-trump|Donald Trump]] said he would consider one if a deal is reached and would approach it respectfully, and reiterated that [[iran|Iran]] has already agreed not to obtain nuclear weapons, describing that commitment as the central issue in the ongoing discussions. The Brief presents Trump's remarks as evidence that Iran's strikes "did not kick at all" and would not deter his pursuit of a deal."""},
]


def merge(path, section):
    with io.open(path, encoding="utf-8") as f:
        c = f.read()

    # 1) append src to frontmatter sources line
    m = re.search(r"^sources:\s*\[(.*?)\]", c, re.M | re.S)
    if m:
        existing = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if SRC not in existing:
            existing.append(SRC)
        c = c[:m.start()] + "sources: [" + ", ".join(existing) + "]" + c[m.end():]
    else:
        print("WARN: no sources line in", path)

    # 2) bump updated date
    c = re.sub(r"^updated:.*$", "updated: " + DATE, c, count=1, flags=re.M)

    # 3) insert section before '## Sources' or append at EOF
    sec = section.strip() + "\n"
    idx = c.find("## Sources")
    if idx != -1:
        c = c[:idx] + sec + "\n" + c[idx:]
    else:
        c = c.rstrip() + "\n\n" + sec

    # 4) add bullet to Sources list
    idx = c.find("## Sources")
    if idx != -1:
        tail = c[idx:]
        # find end of sources section (next '## ' heading or EOF)
        m2 = re.search(r"^## ", tail, re.M)
        end = m2.start() if m2 else len(tail)
        sec_text = tail[:end]
        if BULLET not in sec_text:
            sec_text = sec_text.rstrip() + "\n" + BULLET + "\n"
            c = c[:idx] + sec_text + tail[end:]

    with io.open(path, "w", encoding="utf-8", newline="") as f:
        f.write(c)


def main():
    for item in SPEC:
        merge(item["path"], item["section"])
        print("merged", item["path"])

    # log.md append
    log_line = (
        "## [2026-08-06] ingest | Badlands Brief: The Bibi Break-Up Begins, As Does The IC Purge... "
        "-> created: [defense-intelligence-agency, election-truth-alliance, kilmar-abrego-garcia, "
        "kristen-welker, meet-the-press, michael-dimino, ms-13, waverly-crenshaw, yechiel-leiter], "
        "updated: [american-bar-association, ashe-in-america, axios, barak-ravid, benjamin-netanyahu, "
        "burning-bright, donald-trump, ed-martin, elbridge-colby, financial-times, ghostofbasedpatrickhenry, "
        "index, iran, israel, israel-defense-forces, jonathan-turley, mojtaba-khamenei, mossad, nbc-news, "
        "new-york-times, office-of-the-director-of-national-intelligence, pam-bondi, pentagon, reuters, "
        "steve-witkoff, todd-blanche, tulsi-gabbard, wall-street-journal, why-we-vote, william-pulte, yad-vashem]"
    )
    with io.open("wiki/log.md", "a", encoding="utf-8") as f:
        f.write("\n" + log_line + "\n")
    print("log appended")


if __name__ == "__main__":
    main()
