---
title: "Dominion ImageCast X"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [voting-machines, georgia, election-integrity, cybersecurity, dominion-voting-systems]
sources: [raw/previously-sealed-report-on-dominion.md]
confidence: medium
---

# Dominion ImageCast X

The Dominion ImageCast X (ICX) is the [[ballot-marking-device|ballot marking device]] manufactured by [[dominion-voting-systems|Dominion Voting Systems]] and deployed statewide in Georgia after the state retired its legacy Diebold paperless touchscreen equipment at the end of 2019.[1] Georgia adopted the ICX against the advice of election security experts, "including the lone cybersecurity expert on the Governor's commission to recommend a new voting system."[1]

## Design and the QR code controversy

On the ICX, the voter makes selections on a touchscreen and the machine prints a paper ballot containing both human-readable text and a QR code.[1] Because Georgia's scanners tabulate the QR code rather than the printed bubbles or text, the QR code — which the voter cannot read or verify — is what actually records voter intent.[1] Election-integrity advocate [[garland-favorito|Garland Favorito]] of [[voterga|VoterGA]] argued that the vulnerabilities disclosed in the [[halderman-report|Halderman Report]] could be used to "alter the QR codes on the printed ballots to modify voter selections," with the voter having no way to detect the alteration.[1]

## Documented vulnerabilities

The security analysis conducted by [[j-alex-halderman|Dr. J. Alex Halderman]] and [[drew-springall|Prof. Drew Springall]] identified flaws in "nearly every part of the system that is exposed to potential attackers."[1] Two were highlighted publicly:

- A **directory traversal vulnerability** in the ICX software, which "allows a maliciously-modified election definition file to overwrite arbitrary files." Halderman wrote that "an attacker can create a modified election definition file that will create or overwrite files in any location on the device that is writable to the ICX App ... an attacker can leverage this capability to execute arbitrary code and install malware."[1]
- An **arbitrary-code-execution vulnerability**, described as the most critical issue found, which can spread malware from a county's central election management system (EMS) to all ballot marking devices in the jurisdiction and run it as root — making it possible to attack the devices "at scale, over a wide area, without needing physical access to them."[1]

Halderman stated that the researchers were "not aware of any evidence that the vulnerabilities have been exploited to change votes in past elections," but warned of a serious risk of future exploitation absent remediation.[1]

## Software updates and the 2024 deferral

Halderman's findings were shared with the [[cybersecurity-and-infrastructure-security-agency|Cybersecurity and Infrastructure Security Agency]] in June 2022, which allowed Dominion to update its software to "purportedly address at least some of the problems."[1] Nevertheless, Georgia Secretary of State [[brad-raffensperger|Brad Raffensperger]] announced that the state would not install the updated software until after the 2024 presidential election, citing pilots of the [[election-assistance-commission|Election Assistance Commission]]-certified Democracy Suite 5.17 in 2023 and the tens of thousands of man-hours required to update nearly 45,000 pieces of voting equipment with subsequent acceptance testing.[1]

## Ballot display dispute (2020)

In September 2020, during testing, a problem with the display on the Dominion ballot marking devices was discovered, prompting a court battle over how to correct it; the changes were ultimately ruled "de minimis."[1] It is unclear whether the change permitted by Judge [[amy-totenberg|Amy Totenberg]] in October 2020 was applied to the machine Halderman and Springall had received in September 2020.[1] Halderman testified that the certification report made clear that [[pro-v-and-v|Pro V&V]] had performed "only cursory testing" of the new software, had not independently verified the cause of the display problem, had not adequately verified that the changes were an effective solution, and appeared to have made "no effort to test whether the changes create new problems that impact the reliability, accuracy, or security of the BMD system."[1]

## References
1. Badlands Brief — "Previously *SEALED* Report on Dominion Voting Machines in Georgia Shows Critical Vulnerabilities", URL: https://badlands.substack.com/p/previously-sealed-report-on-dominion
