# -*- coding: utf-8 -*-
"""Insert new index entries for badlands-brief-5ba ingest and bump Total pages."""
import io

PATH = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/index.md"

ENTRIES = [
    # (anchor substring, line to insert AFTER anchor)
    ("- [[abe-hamadeh]]:",
     "- [[abelardo-de-la-espriella]]: Colombian politician who won the country's June 21, 2026 presidential election, defeating a challenge from incumbent Gustavo Petro. (Created: 2026-08-05)"),
    ("- [[council-on-foreign-relations]]:",
     "- [[court-tv]]: American cable network broadcasting courtroom proceedings; the supposedly secret \"4K video\" in the Tyler Robinson case proved to be Court TV footage. (Created: 2026-08-05)"),
    ("- [[david-ames-wells]]:",
     "- [[david-barnea]]: Outgoing Mossad director; Badlands commentary alleges his Mossad deeply infiltrated Iran's government and that Qassem Soleimani was his mole. (Created: 2026-08-05)"),
    ("- [[department-of-war]]:",
     "- [[derek-chauvin]]: Former Minneapolis police officer convicted of murder in George Floyd's death; cited by Ashe in America as a precedent for jury-pool influence campaigns. (Created: 2026-08-05)"),
    ("- [[digital-services-act]]:",
     "- [[dinesh-dsouza]]: American conservative author and filmmaker who called Candace Owens a \"malignant narcissist\" amid the Tyler Robinson hearing fallout. (Created: 2026-08-05)"),
    ("- [[erik-prince]]:",
     "- [[erika-kirk]]: Widow of Charlie Kirk; Candace Owens implicated her in conspiracy claims about Kirk's murder, drawing condemnation from conservative figures. (Created: 2026-08-05)"),
    ("- [[hasan-piker]]:",
     "- [[hassan-rouhani]]: Iranian president (2013-2021) whose tenure marked Iran's pivot toward Russia, the nuclear deal with the Obama administration, and 2018 central banker arrests. (Created: 2026-08-05)"),
    ("- [[human-artistry-campaign]]",
     "- [[hunter-biden]]: Son of Joe Biden; awarded $1.7 million in punitive damages in his defamation suit against Patrick Byrne over Iranian bribery claims. (Created: 2026-08-05)"),
    ("- [[itamar-ben-gvir]]",
     "- [[ivan-cepeda]]: Colombian senator whom Gustavo Petro claimed was the real winner of the June 21, 2026 Colombian election. (Created: 2026-08-05)"),
    ("- [[jason-reding-quinones]]:",
     "- [[javad-zarif]]: Iranian diplomat credited as prime contact and principal negotiator for the Iranian side of the Iran nuclear deal under President Rouhani. (Created: 2026-08-05)"),
    ("- [[jonas-gahr-store]]:",
     "- [[jonathan-drake]]: Badlands Media contributor who debuted the Badlands Jury with Ashe in America and joined Culture of Change Episode 154. (Created: 2026-08-05)"),
    ("- [[lauren-boebert]]:",
     "- [[lauren-southern]]: Canadian right-wing activist and commentator who condemned Candace Owens after the Tyler Robinson preliminary hearing. (Created: 2026-08-05)"),
    ("- [[mahmoud-abbas]]",
     "- [[mahmoud-ahmadinejad]]: Iranian president (2005-2013) reportedly placed under house arrest in July 2026 amid Iran's purge of suspected Mossad infiltration. (Created: 2026-08-05)"),
    ("- [[media-matters]]:",
     "- [[megyn-kelly]]: American journalist and former anchor who faced backlash for standing by Candace Owens amid the conservative rift over the Tyler Robinson case. (Created: 2026-08-05)"),
    ("- [[ottoman-empire]]:",
     "- [[overstock]]: American online retailer whose former CEO Patrick Byrne was found liable for defaming Hunter Biden with Iranian bribery claims. (Created: 2026-08-05)"),
    ("- [[sheila-jackson-lee]]:",
     "- [[shield-of-the-americas]]: Coalition of the United States and twelve regional partners that issued the July 2026 joint statement rejecting Gustavo Petro's election challenge in Colombia. (Created: 2026-08-05)"),
    ("- [[stephen-richer]]:",
     "- [[stephen-wilson]]: U.S. district judge who ruled Patrick Byrne defamed Hunter Biden, awarding $1.7 million in punitive damages. (Created: 2026-08-05)"),
    ("- [[turkey]]:",
     "- [[turning-point-usa]]: Conservative youth organization founded by Charlie Kirk; staff received death threats after Candace Owens named them in Kirk murder conspiracy claims. (Created: 2026-08-05)"),
    # Concepts
    ("- [[2022-united-states-midterm-elections]]:",
     "- [[2026-colombian-presidential-election]]: June 21, 2026 Colombian election won by Abelardo de la Espriella; Petro's challenge drew a joint Shield of the Americas statement. (Created: 2026-08-05)"),
    ("- [[ai-can-help-us-expose-the-nwo]]:",
     "- [[air-force-one]]: Presidential aircraft call sign; Trump's new Air Force One was donated by Qatar, sparking media subpoenas after NYT reporting. (Created: 2026-08-05)"),
    ("- [[badlands-news-brief]]:",
     "- [[badlands-jury]]: Badlands Media civic-education experience debuted at Deadwood GART, staging a fictitious trial over a made-up \"Electoral Confidence Preservation Act.\" (Created: 2026-08-05)"),
    ("- [[invisible-enemy]]:",
     "- [[iranian-blockade]]: Restriction barring Iran and its customers from the Strait of Hormuz under Trump's \"Guardian of the Hormuz Strait\" announcement. (Created: 2026-08-05)"),
]

with io.open(PATH, "r", encoding="utf-8") as f:
    lines = f.readlines()

errors = []
for anchor, entry in ENTRIES:
    idx = None
    for i, line in enumerate(lines):
        if anchor in line:
            idx = i
            break
    if idx is None:
        errors.append("ANCHOR NOT FOUND: " + anchor)
        continue
    lines.insert(idx + 1, entry + "\n")

# bump total pages
found_total = False
for i, line in enumerate(lines):
    if "Total pages:" in line:
        import re
        m = re.search(r"Total pages: (\d+)", line)
        if m:
            new = int(m.group(1)) + len(ENTRIES) - len(errors)
            lines[i] = line.replace("Total pages: " + m.group(1), "Total pages: " + str(new))
            found_total = True
        break

with io.open(PATH, "w", encoding="utf-8", newline="\n") as f:
    f.writelines(lines)

print("inserted:", len(ENTRIES) - len(errors), "of", len(ENTRIES))
print("total updated:", found_total)
for e in errors:
    print(e)
