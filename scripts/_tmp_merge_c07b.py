import io, os, sys
sys.path.insert(0, os.path.dirname(__file__))
W = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
SRC = "raw/badlands-brief-c07.md"
REFLINE = '{n}. Badlands Brief — "13 Germans, A Seized Smartwatch, & An American Tithe\'s Worth of Fraud", URL: https://badlands.substack.com/p/badlands-brief-c07'

def merge(rel, body):
    p = os.path.join(W, rel)
    t = io.open(p, encoding="utf-8").read()
    lines = t.split("\n")
    n = None
    for i, l in enumerate(lines):
        if l.startswith("sources:"):
            inner = l[l.index("[")+1:l.rindex("]")]
            items = [x.strip() for x in inner.split(",") if x.strip()]
            if SRC not in items:
                items.append(SRC)
            n = items.index(SRC) + 1
            lines[i] = "sources: [" + ", ".join(items) + "]"
        elif l.startswith("updated:"):
            lines[i] = "updated: 2026-08-06"
    t = "\n".join(lines)
    ref = REFLINE.format(n=n)
    if "## References" not in t:
        t = t.rstrip("\n") + "\n\n## References\n"
    if ref not in t:
        t = t.rstrip("\n") + "\n" + ref + "\n"
    idx = t.index("## References")
    t = t[:idx] + body.replace("{n}", str(n)).strip() + "\n\n" + t[idx:]
    io.open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("merged", rel, "as [%d]" % n)

M = {}

M["entities/steve-witkoff.md"] = """
## Launch of Phase Two in Gaza (January 2026)

On January 15, 2026, Witkoff, as Special Envoy for Peace Missions, announced the start of Phase Two of the Gaza ceasefire framework, stating: "Today, on behalf of President Trump, we are announcing the launch of Phase Two of the President's 20-Point Plan to End the Gaza Conflict, moving from ceasefire to demilitarization, technocratic governance, and reconstruction."[{n}] Witkoff credited [[egypt|Egypt]], [[qatar|Qatar]] and [[turkey|Turkey]] with finalizing the plan's particulars.[{n}]

The announcement followed days of heightened regional tension involving [[israel|Israel]], [[iran|Iran]] and the United States, during which Iran briefly closed its airspace and unsourced reports of an imminent US strike on Iran circulated in regional and Russian state media.[{n}] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued that the Iran war narrative functioned as a distraction operation covering the finalization of Phase Two, and described Phase Two as the critical step because it is when Arab states take control of Gaza from the [[israel-defense-forces|IDF]].[{n}]
"""

M["concepts/comprehensive-plan-to-end-the-gaza-conflict.md"] = """
## Phase Two (January 2026)

Special Envoy [[steve-witkoff|Steve Witkoff]] announced on January 15, 2026 the launch of Phase Two of the 20-Point Plan, describing the transition as moving "from ceasefire to demilitarization, technocratic governance, and reconstruction."[{n}] Witkoff credited [[egypt|Egypt]], [[qatar|Qatar]] and [[turkey|Turkey]] with finalizing the necessary particulars.[{n}]

[[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] characterized Phase Two as the pivotal stage, since it is the point at which Arab states assume control of Gaza from the [[israel-defense-forces|IDF]], and predicted Israeli resistance: most of the Israeli political establishment opposes any leadership role for Turkey or Qatar in the International Stabilization Force, while President [[donald-trump|Trump]] has insisted on including both.[{n}] He attributed Israeli hostility to Qatar to the internal Israeli scandal over funding of [[hamas|Hamas]] before October 7 and the [[benjamin-netanyahu|Netanyahu]] government's alleged involvement, and hostility to Turkey to two and a half years of mutual threats — noting that Turkey's [[nato|NATO]] membership means any Israeli action against it could trigger [[article-5|Article 5]].[{n}]
"""

M["entities/reza-pahlavi.md"] = """
## Trump's January 2026 remarks

On January 15, 2026, President [[donald-trump|Donald Trump]] publicly questioned whether Pahlavi could unify opposition support inside [[iran|Iran]], telling reporters: "He seems very nice, but I don't know how he'd play within his own country... And we really aren't up to that point yet... I don't know whether or not his country would accept his leadership, and certainly if they would, that would be fine with me."[{n}] [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] read the comment as Trump dismissing the idea of installing Pahlavi — whom he described as a "Deep-State darling" — as leader of Iran, and grouped it with other instances in which Trump declined to follow through on regime-change expectations.[{n}]
"""

M["entities/pam-bondi.md"] = """
## Washington Post reporter search (January 2026)

Attorney General Bondi publicly defended the January 14, 2026 [[fbi|FBI]] search of the Virginia home of [[washington-post|Washington Post]] reporter [[hannah-natanson|Hannah Natanson]], saying the raid was conducted at the [[pentagon|Pentagon]]'s request and stressing a zero-tolerance approach to leaks of classified information.[{n}] She stated that the individual suspected of the leak — [[pentagon|Pentagon]] contractor [[aurelio-perez-lugones|Aurelio Perez-Lugones]] — was "behind bars."[{n}] Press freedom groups condemned the operation as highly unusual and a potential threat to [[first-amendment|First Amendment]] protections.[{n}]
"""

M["entities/kash-patel.md"] = """
## Natanson search (January 2026)

As FBI Director, Patel echoed the national security rationale for the January 14, 2026 search of [[washington-post|Washington Post]] reporter [[hannah-natanson|Hannah Natanson]]'s Virginia home in posts on social media, following Attorney General [[pam-bondi|Pam Bondi]]'s statement that the action was taken at the [[pentagon|Pentagon]]'s request.[{n}] Agents seized Natanson's phone, two laptops and a smartwatch as part of the investigation into contractor [[aurelio-perez-lugones|Aurelio Perez-Lugones]]'s alleged unlawful retention of classified national defense information.[{n}]
"""

M["entities/washington-post.md"] = """
## FBI search of reporter Hannah Natanson (January 2026)

On January 14, 2026, [[fbi|FBI]] agents executed a search warrant at the Virginia home of Post reporter [[hannah-natanson|Hannah Natanson]], seizing her phone, a personal laptop, a Post-issued laptop and a smartwatch as part of a classified leak investigation centered on [[pentagon|Pentagon]] contractor [[aurelio-perez-lugones|Aurelio Perez-Lugones]].[{n}] Authorities said classified information had appeared in communications between the reporter and the contractor.[{n}]

The Post's editorial board framed the raid as a serious threat to constitutional press protections and emphasized the ongoing importance of robust reporting despite government pressure, while press freedom groups called the search "highly unusual" and "aggressive."[{n}] [[ashe-in-america|Ashe in America]] said she opposed violating journalists' rights in the name of national security while also arguing that the constitutional oath against "all enemies, foreign and domestic" admits no press-credential exception.[{n}]
"""

M["concepts/first-amendment.md"] = """
## Press freedom and the Natanson search (January 2026)

The January 14, 2026 [[fbi|FBI]] search of [[washington-post|Washington Post]] reporter [[hannah-natanson|Hannah Natanson]]'s home became a focal point in the debate over First Amendment press protections, with press freedom groups warning it could chill investigative journalism and the Post's editorial board describing it as a serious threat to constitutional press protections.[{n}] Attorney General [[pam-bondi|Pam Bondi]] and FBI Director [[kash-patel|Kash Patel]] defended the action on national security grounds.[{n}]

[[ashe-in-america|Ashe in America]] articulated a tension within the movement's own commitments, placing First Amendment freedoms at the top of the rights she would defend while arguing that the oath of office phrase "all enemies, foreign and domestic" contains no exemption for those holding press credentials.[{n}] She invoked the principle "all means all," drawing on a judge's rejection during the [[tina-peters|Tina Peters]] appeal oral arguments of the state's argument that destroying election records was acceptable so long as backups existed.[{n}]
"""

M["concepts/operation-metro-surge.md"] = """
## January 2026 escalation

The [[department-of-homeland-security|Department of Homeland Security]] launched Operation Metro Surge in early January 2026, deploying approximately 2,000 federal agents from [[immigration-and-customs-enforcement|ICE]], [[customs-and-border-protection|Customs and Border Protection]] and [[homeland-security-investigations|Homeland Security Investigations]] to Minneapolis and St. Paul.[{n}] President [[donald-trump|Donald Trump]] subsequently ordered an additional 1,000 CBP agents to the Twin Cities, potentially bringing the total to roughly 3,000 federal personnel conducting immigration enforcement amid what Badlands described as a violent left-wing insurgency.[{n}] Trump posted on [[truth-social|Truth Social]]: "FEAR NOT, GREAT PEOPLE OF MINNESOTA, THE DAY OF RECKONING & RETRIBUTION IS COMING!"[{n}]

White House deputy chief of staff for policy [[stephen-miller|Stephen Miller]] addressed the deployed officers directly on Fox News' Will Cain Show, telling them they hold federal immunity in the conduct of their duties and that anyone who obstructs them commits a felony.[{n}]
"""

M["entities/stephen-miller.md"] = """
## Minnesota enforcement remarks (January 2026)

Appearing on Fox News' Will Cain Show on the evening of January 13, 2026, White House deputy chief of staff for policy Stephen Miller addressed federal officers deployed under [[operation-metro-surge|Operation Metro Surge]] in [[minnesota|Minnesota]], saying the administration had begun the work of identifying, disrupting and dismantling insurgent networks in the state.[{n}] He told the officers: "You have federal immunity in the conduct of your duties. Anybody who lays a hand on you or tries to stop you or tries to obstruct you is committing a felony," adding that no city official, state official, illegal alien, leftist agitator or domestic insurrectionist could prevent them from fulfilling their legal duties, and that the [[department-of-justice|Department of Justice]] would pursue officials who crossed into obstruction or criminal conspiracy against the United States or against [[immigration-and-customs-enforcement|ICE]] officers.[{n}]
"""

M["entities/jd-vance.md"] = """
## Greenland talks and the Venezuela tie-breaker (January 2026)

In mid-January 2026, Vance met Danish officials in Washington following President [[donald-trump|Trump]]'s Truth Social post asserting that US control of [[greenland|Greenland]] is necessary for American national security; Greenland was discussed and Danish officials reiterated that the territory is not for sale.[{n}] The Danish foreign minister said afterwards that "it's clear the president has a wish to conquer Greenland," and [[denmark|Denmark]] subsequently began moving military resources into the territory.[{n}]

On January 14, 2026, Vance cast the tie-breaking vote in the 51–50 [[united-states-senate|Senate]] decision to block the [[venezuela-war-powers-resolution|Venezuela war powers resolution]] led by Sen. [[tim-kaine|Tim Kaine]], which would have required congressional approval for further military action against [[venezuela|Venezuela]].[{n}]
"""

M["entities/united-states-senate.md"] = """
## Venezuela war powers vote (January 2026)

On January 8, 2026, the Senate advanced a bipartisan war powers resolution led by Sen. [[tim-kaine|Tim Kaine]] by a 52–47 procedural vote, with several Republicans joining Democrats; the measure would have required President [[donald-trump|Donald Trump]] to obtain congressional approval before further military action in or against [[venezuela|Venezuela]].[{n}] On January 14, 2026, after administration pressure, the Senate voted 51–50 to block the [[venezuela-war-powers-resolution|resolution]], with Vice President [[jd-vance|JD Vance]] casting the tie-breaking vote and Senators [[josh-hawley|Josh Hawley]] and [[todd-young|Todd Young]] reversing their earlier support.[{n}] The resolution did not become law and Democrats decried the outcome.[{n}]
"""

for rel, body in M.items():
    merge(rel, body)
