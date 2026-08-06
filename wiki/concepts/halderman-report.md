---
title: Halderman Report
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [election-integrity, dominion-voting-systems, georgia, cybersecurity]
sources: [raw/badlands-news-brief-3bc.md, raw/previously-sealed-report-on-dominion.md, raw/the-devil-is-still-in-georgia.md]
confidence: medium
---

# Halderman Report

The Halderman Report is the common name for the 96-page "Security Analysis of Georgia's ImageCast X Ballot Marking Devices," a court-commissioned technical study of the electronic voting equipment used statewide in Georgia.[1] It was authored by University of Michigan Professor of Computer Science and Engineering [[j-alex-halderman|J. Alex Halderman]] together with security researcher and Auburn University assistant professor Drew Springall.[1]

## Contents and unsealing

The report documented many exploitable vulnerabilities in the [[dominion-voting-systems|Dominion Voting Systems]] ImageCast X system.[1] It remained under seal for approximately two years before the Federal District Court for the Northern District of Georgia unsealed it in June 2023; Judge [[amy-totenberg|Amy Totenberg]] was accused by The Gateway Pundit of having sealed and "covered up" the findings during that period.[1]

## Reception in the Truth Community

Badlands Media writer [[ashe-in-america|Ashe in America]] stated that she, [[brian-lupo|Brian Lupo]] and voting-systems expert [[clay-parikh|Clay Parikh]] reviewed the unsealed report line by line, concluding that its findings constituted "an astonishing rebuke of the 'safest and most secure election in history' narrative."[1] She emphasized that a well-respected Democrat cyber expert had proven [[chris-krebs|Chris Krebs]] wrong about the security of the 2020 presidential election, arguing that Krebs's claim had been propagated for three years by institutional figures with "big mouths and impressive talking point discipline — but no credible expertise."[1]

## Unsealing and public findings (June 2023)

The report was unsealed in June 2023, almost two years after it was initially submitted in [[curling-v-raffensperger|Curling v. Raffensperger]] and sealed by Judge [[amy-totenberg|Amy Totenberg]].[2] While the document itself runs to 96 pages, [[j-alex-halderman|Halderman]] summarized its findings in a Twitter thread and a blog post, "Security Analysis of the Dominion ImageCast X."[2] Among the disclosed issues was a directory traversal vulnerability in the [[dominion-imagecast-x|Dominion ICX]] software that "allows a maliciously-modified election definition file to overwrite arbitrary files," which Halderman said an attacker could leverage "to execute arbitrary code and install malware."[2] The most critical issue was an arbitrary-code-execution vulnerability capable of spreading malware from a county's central election management system to all [[ballot-marking-device|ballot marking devices]] in a jurisdiction and running it as root, permitting attacks "at scale, over a wide area, without needing physical access to them," including by changing the ballot QR codes that scanners count.[2] Halderman stated that the researchers were not aware of evidence that the vulnerabilities had been exploited to change votes in past elections, but warned of serious future risk absent stronger security.[2] Halderman and [[drew-springall|Drew Springall]] found vulnerabilities in "nearly every part of the system that is exposed to potential attackers."[2]

The report was shared with the [[cybersecurity-and-infrastructure-security-agency|Cybersecurity and Infrastructure Security Agency]] in June 2022, which allowed [[dominion-voting-systems|Dominion]] to update its software to "purportedly address at least some of the problems."[2] [[garland-favorito|Garland Favorito]] of [[voterga|VoterGA]] discussed the contents on Bannon's [[war-room|War Room]], emphasizing that the flaws could be used to alter ballot QR codes and that Georgia voters cannot verify the codes that encode their intent.[2] Halderman closed his thread by criticizing [[brad-raffensperger|Raffensperger]] not only for declining to fix the vulnerabilities before the 2024 presidential election but for announcing the delay publicly, giving "would-be adversaries a whole 18 months to develop and execute attacks that exploit the unknown-vulnerable machines."[2]

## Aftermath: unpatched machines

Halderman observed that Georgia Secretary of State [[brad-raffensperger|Brad Raffensperger]], aware of the findings for two years, announced the state would not install Dominion's security patches until after the 2024 presidential election.[1] Raffensperger's office cited the burden of updating nearly 45,000 pieces of voting equipment and the associated acceptance testing — "tens of thousands of manhours" — so that the statewide move to version 5.17 would "occur following the 2024 election cycle."[1] Critics characterized this as a knowing decision to leave documented vulnerabilities in place through a presidential election year, with the related [[curling-v-raffensperger|Curling v. Raffensperger]] litigation set to bring the issue to trial in early 2024.[1]

## References
1. Badlands Brief — "Badlands News Brief: Election Fraud Starts Early While the CIA Whines", URL: https://badlands.substack.com/p/badlands-news-brief-3bc
2. Badlands Brief — "Previously *SEALED* Report on Dominion Voting Machines in Georgia Shows Critical Vulnerabilities", URL: https://badlands.substack.com/p/previously-sealed-report-on-dominion

## State inaction after unsealing

The report's findings were released in June 2023 after having remained under seal since July 2021, and as of November 2023 Georgia election officials had refused to address or patch the identified vulnerabilities in advance of the 2024 election.[3] [[j-alex-halderman|Halderman]] is on record that patching would not, in any case, repair the underlying weaknesses.[3] The devices covered by the report are used statewide, including in [[fulton-county|Fulton]] and [[spalding-county|Spalding]] counties, where the [[2023-georgia-municipal-election-discrepancies|2023 municipal election discrepancies]] were reported, and they remained at issue in [[curling-v-raffensperger|*Curling et al v. Raffensperger et al*]], set for trial on January 9, 2024.[3]

3. Badlands Brief — "The Devil is Still in Georgia", URL: https://badlands.substack.com/p/the-devil-is-still-in-georgia
