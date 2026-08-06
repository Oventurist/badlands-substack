---
title: "Operational Technology"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [cybersecurity, industrial-control-systems, critical-infrastructure, water-sector]
sources: [raw/watch-the-water-see-the-storm.md]
confidence: medium
---

# Operational Technology

"Operational technology" (OT) refers to the computing systems that monitor and control physical processes — pumps, valves, chemical dosing, pressure regulation, electrical substations, manufacturing lines — as distinct from information technology (IT), which handles data.[1] The category became a central focus of U.S. [[critical-infrastructure|critical infrastructure]] policy because the [[internet-of-things|Internet of Things]] has created entirely new classes of vulnerability in systems that were historically isolated.[1]

## The IT/OT distinction

[[robert-m-lee|Robert M. Lee]] of [[dragos|Dragos]] summarized the stakes at the February 6, 2024 [[house-committee-on-homeland-security|House Homeland Security Committee]] hearing "Securing Operational Technology: A Deep Dive into the Water Sector": "If you steal from IT, you steal somebody's data. You target OT, you kill people. You need to treat that differently."[1]

In the water context, OT is what governs a modern treatment plant. The Badlands author recounted a field trip to a local water treatment facility where testing was performed on screens rather than with strips and chemicals, chemical levels were adjusted digitally, and alarms were tied to digital readings that sounded only when the computers indicated they should.[1] A successful breach that altered chemical dosing could therefore poison a population, potentially without detection until people began dying.[1]

## Vulnerability profile

Witnesses at the hearing identified several structural weaknesses. [[marty-edwards|Marty Edwards]] of [[tenable|Tenable]] noted that the same programmable logic controllers appear in water treatment plants, electrical substations, and manufacturing plants, so a single malware or ransomware family could hold an enormous installed base hostage — and the supply chain lacks the capacity to replace those devices in any reasonable time.[1] [[charles-clancy|Charles Clancy]] of [[mitre-corporation|MITRE]] stressed cross-sector interdependency: an attack on energy takes down water and natural gas shortly thereafter.[1] The Badlands account added that the underlying hardware is largely foreign made, often by U.S. adversaries.[1]

## The irreversibility argument

Asked by Representative [[carlos-gimenez|Carlos Gimenez]] whether the country should revert to manual operation or closed intranets, Lee argued that this is no longer technically feasible given how original equipment manufacturers build modern systems: "you can no longer operate manually disconnected or in an intranet. And unfortunately, that's just reality."[1] He supported hardening selected strategic sites but said the approach could not scale across more than 50,000 water systems, especially amid roughly a trillion dollars of outstanding clean-water infrastructure needs.[1] The November 2023 intrusion at the [[aliquippa-municipal-authority|Aliquippa Municipal Authority]] was contained only because crews could switch to manual operation — a backup not every utility has.[1]

## References

1. Badlands Brief — "Watch the Water, See the Storm", URL: https://badlands.substack.com/p/watch-the-water-see-the-storm
