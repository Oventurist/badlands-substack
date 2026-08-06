---
title: "Trusted Build"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [elections, voting-systems, certification, election-integrity, software]
sources: [raw/us-elections-must-be-independent.md]
confidence: medium
---

# Trusted Build

The "Trusted Build" is the master file — the golden image — of the software installed on US election machines, publicly messaged as a routine software update preparing equipment for the next election event.[1] The Badlands Media essay "US Elections Must Be Independent" by [[ashe-in-america|Ashe in America]] treats the Trusted Build process as the clearest example of how the diffuse, plausible-deniability structure of US election administration violates every principle of [[auditor-independence|auditor independence]].[1]

## The process

The essay lays out six steps:[1]

1. The [[election-assistance-commission|US Election Assistance Commission]] accredits a Voting Systems Testing Lab — such as [[pro-v-and-v|Pro V&V]] or [[sli-compliance|SLI Compliance]] — permitting it to test election technologies for certification.
2. Election technology vendors such as [[dominion-voting-systems|Dominion]] or [[election-systems-software|ES&S]] complete their Trusted Build, finishing the code that will be installed on election machines.
3. The lab tests the Trusted Build and reports to the Secretary of State whether it complies with all federal and state voting system standards — in theory it could fail, but on the available record the builds always seem to be good enough.
4. The Secretary of State, an elected official who historically has little to no technology experience, takes the lab's word — effectively outsourcing her responsibility — and certifies the Trusted Build.
5. In a collaborative, or highly *familiar*, relationship, State Department staff and the vendor's team together deliver and install the lab-tested, government-approved Trusted Build into county voting machines.
6. The state team then hands the keys to the county Clerk and local IT team, even though the Clerk carries responsibility for executing the election and accountability for the integrity of its outcome.

## Criticism

On paper the county Clerk is responsible for the integrity of the election in her county; in practice that integrity depends entirely on the security, integrity and availability of hardware and software the local official has zero visibility into or control over — a structure the essay characterizes as a scapegoat arrangement.[1] The state's own ability to verify the build is described as ceremonial at best, because the lab is billed as the seemingly independent authority on system security.[1]

That premise is undercut by testimony from certified ethical hacker [[clay-parikh|Clay Parikh]], who has tested voting machines for the labs and told the author that there are critical parts of US voting systems that VSTL testers are prohibited from testing, and that those areas are not, on paper, tested or audited by anyone else.[1] "The lab always told me that level of testing would occur later. They never stated specifically who would conduct it, except in state certification, they said, 'the state would do it,'" Parikh said. "I have yet to see where a state ever did a higher level of security testing."[1] The implication is that the only conceivable review of those components is the vendor's internal code review — textbook self-review — and that the Secretary of State's sign-off is also self-review, since she is already relying on the vendor as an extension of her office.[1]

The essay contrasts the Enron response with the 2020 election: where [[arthur-andersen|Arthur Andersen]] shredded documents and faced accountability, "when the 2020 election began to unravel, the auditors needed only to deploy the Trusted Build."[1]

## References
1. Badlands Brief — "US Elections Must Be Independent", URL: https://badlands.substack.com/p/us-elections-must-be-independent
