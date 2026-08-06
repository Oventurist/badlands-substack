---
title: "Ballot Marking Device"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [voting-machines, election-integrity, georgia, cybersecurity]
sources: [raw/previously-sealed-report-on-dominion.md]
confidence: medium
---

# Ballot Marking Device

A ballot marking device (BMD) is an electronic voting terminal on which a voter makes selections via touchscreen and which then prints a paper ballot that is subsequently scanned and tabulated.[1] Georgia adopted BMDs statewide in the form of the [[dominion-imagecast-x|Dominion ImageCast X]] after Judge [[amy-totenberg|Amy Totenberg]] ordered the state in 2020 to replace its aging Diebold paperless touchscreen machines.[1]

## Verifiability concerns

The central criticism of the BMD model as implemented in Georgia is that the machine-printed QR code, not the human-readable filled bubble, is what the scanner counts.[1] Because the QR code contains the recorded voter intent and cannot be read by the voter, an attacker able to modify the code could change a selection without the voter detecting it.[1] [[garland-favorito|Garland Favorito]] of [[voterga|VoterGA]] made precisely this argument after the unsealing of the [[halderman-report|Halderman Report]].[1]

## Security findings

The court-commissioned analysis by [[j-alex-halderman|Dr. J. Alex Halderman]] and [[drew-springall|Prof. Drew Springall]] found vulnerabilities in "nearly every part of the system that is exposed to potential attackers," the most critical being an arbitrary-code-execution flaw capable of spreading malware from a county's central election management system to every BMD in a jurisdiction, running as root and requiring no physical access to individual devices.[1] Halderman warned this made it possible to attack BMDs "at scale, over a wide area."[1]

## References
1. Badlands Brief — "Previously *SEALED* Report on Dominion Voting Machines in Georgia Shows Critical Vulnerabilities", URL: https://badlands.substack.com/p/previously-sealed-report-on-dominion
