---
title: J. Alex Halderman
created: 2026-08-06
updated: 2026-08-06
type: entity
tags: [election-integrity, cybersecurity, academia, dominion-voting-systems, georgia]
sources: [raw/badlands-news-brief-3bc.md, raw/badlands-news-brief-a40.md, raw/previously-sealed-report-on-dominion.md]
confidence: medium
---

# J. Alex Halderman

J. Alex Halderman is a Professor of Computer Science and Engineering at the University of Michigan and one of the principal academic authorities on the security of American electronic voting equipment.[1] He is best known within election-integrity circles as the author of the court-commissioned security analysis of Georgia's Dominion Voting Systems ImageCast X ballot-marking devices, a study widely referred to as the [[halderman-report|Halderman Report]].[1]

## The Georgia ImageCast X analysis

Halderman collaborated with Drew Springall, a security researcher and assistant professor at Auburn University, on a 96-page security analysis of Georgia's ImageCast X ballot-marking devices, produced in connection with litigation over the state's voting system.[1] The report identified numerous exploitable vulnerabilities in the [[dominion-voting-systems|Dominion Voting Systems]] equipment used statewide in Georgia.[1] The document was filed under seal and remained unavailable to the public for roughly two years before the Federal District Court for the Northern District of Georgia unsealed it in June 2023.[1] Federal judge [[amy-totenberg|Amy Totenberg]], described by The Gateway Pundit as having "sealed and covered up" the findings, retained the report during that period.[1]

## Significance in the election-integrity debate

Badlands Media writer [[ashe-in-america|Ashe in America]] reported that she and [[brian-lupo|Brian Lupo]] reviewed the report line by line with voting-systems expert [[clay-parikh|Clay Parikh]] after it was unsealed, characterizing its findings as "an astonishing rebuke" of the claim that the 2020 contest was the "safest and most secure election in history."[1] In her framing, the significance of Halderman's work lies partly in his professional and political profile: a well-respected Democrat and cyber expert had demonstrated that [[chris-krebs|Chris Krebs]] — a lawyer with an undergraduate degree in environmental science — was wrong about the security of the 2020 presidential election.[1]

Halderman has also publicly criticized Georgia's response to his findings. He noted that Georgia Secretary of State [[brad-raffensperger|Brad Raffensperger]], aware of the findings for two years, announced that the state would not install Dominion's security patches until after the 2024 presidential election, a decision Halderman called "astonishing."[1] Raffensperger's office justified the delay by citing the need to update nearly 45,000 pieces of voting equipment plus subsequent acceptance testing, a process it said would require tens of thousands of man-hours, so that the statewide move to version 5.17 would "occur following the 2024 election cycle."[1]

## June 2025 testimony

Badlands writer [[ashe-in-america|Ashe in America]] noted that Halderman cited [[chris-krebs|Chris Krebs]] as an authority in congressional testimony in June 2025.[2] She invoked this while contrasting the [[2025-16-billion-credential-leak|leak of sixteen billion credentials]] from [[apple|Apple]], [[facebook|Facebook]], [[google|Google]] and government services with the elections industry's insistence that American elections are impenetrable — an assurance she characterized as resting on the word of "a lawyer with his undergrad in environmental science."[2]

## References
1. Badlands Brief — "Badlands News Brief: Election Fraud Starts Early While the CIA Whines", URL: https://badlands.substack.com/p/badlands-news-brief-3bc
2. Badlands News Brief — "A Constellation of Corruption & A Goldilocks Galaxy", URL: https://badlands.substack.com/p/badlands-news-brief-a40
3. Badlands Brief — "Previously *SEALED* Report on Dominion Voting Machines in Georgia Shows Critical Vulnerabilities", URL: https://badlands.substack.com/p/previously-sealed-report-on-dominion

## Unsealing of the Georgia report (June 2023)

Halderman's report was unsealed in June 2023, nearly two years after submission in [[curling-v-raffensperger|Curling v. Raffensperger]], and he published a Twitter thread and a blog post, "Security Analysis of the Dominion ImageCast X," summarizing the 96-page document.[3] He described a directory traversal vulnerability in the [[dominion-imagecast-x|Dominion ICX]] software allowing a maliciously modified election definition file to overwrite arbitrary files and thereby "execute arbitrary code and install malware," and an arbitrary-code-execution vulnerability able to spread malware from a county's central election management system to all [[ballot-marking-device|ballot marking devices]] in the jurisdiction and run it as root.[3] He wrote that "despite our responsible disclosure efforts, the flaws remain unpatched in GA," and that the flaws made it possible to attack devices "at scale, over a wide area, without needing physical access to them," including by changing ballot QR codes.[3] He added that he was not aware of evidence the vulnerabilities had been exploited to change votes in past elections but warned of serious future risk.[3]

Halderman and [[drew-springall|Drew Springall]] had been granted access to a Georgia ballot marking device in September 2020, before that year's presidential election.[3] Halderman testified that [[pro-v-and-v|Pro V&V]] performed "only cursory testing" of the new software issued to fix a ballot display problem, did not independently verify the cause of that problem, and made "no effort to test whether the changes create new problems that impact the reliability, accuracy, or security of the BMD system."[3] Earlier in his career he co-authored a "Source Code Review of the Diebold Voting System," which led California to de-certify [[diebold-election-systems|Diebold]] machines; Georgia, he noted, continued using them for another decade until the end of 2019 "without even patching the security flaws."[3] He criticized [[brad-raffensperger|Brad Raffensperger]] for publicly announcing the deferral of the patch, thereby giving "would-be adversaries a whole 18 months to develop and execute attacks that exploit the unknown-vulnerable machines."[3] Badlands reporter [[brian-lupo|Brian Lupo]] characterized Halderman as one of the "good guys" genuinely interested in election integrity and said he had invited him to discuss evidence from the 2020 and 2022 elections.[3]
