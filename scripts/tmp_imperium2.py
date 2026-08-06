import subprocess, re, os, time

REF = '{n}. Badlands Brief \u2014 "The Information Imperium", URL: https://badlands.substack.com/p/the-information-imperium\n'
LOCK = "scripts/wiki_page_lock.py"

adds = {
"wiki/entities/ryan-delarme.md": """
## "The Information Imperium" (2025)

In March 2025 DeLarme published "The Information Imperium," a survey of what he describes as the world's most powerful propaganda apparatus and a companion piece to his earlier "Two Wings, One Ugly Bird."[{n}] The article traces a triad of the [[central-intelligence-agency|CIA]], the [[national-endowment-for-democracy|National Endowment for Democracy]] and [[usaid|USAID]], then examines two media-facing instruments in detail: [[newsguard|NewsGuard]], which rates news sites for trustworthiness at home, and [[internews|Internews]], which trains journalists and shapes media ecosystems abroad.[{n}] DeLarme's work also appears at his own publication, the Post-Liberal.[{n}]
""",
"wiki/concepts/operation-mockingbird.md": """
## Reference in "The Information Imperium"

Badlands Media's "The Information Imperium" invokes Operation Mockingbird together with [[frank-wisner|Frank Wisner]]'s "Mighty Wurlitzer" as the foundational examples of [[central-intelligence-agency|CIA]] media manipulation, calling the combination the information-warfare equivalent of weapons of mass destruction.[{n}] The article argues that public exposure of these programmes in the 1970s pushed the same capability into overt institutions such as the [[national-endowment-for-democracy|National Endowment for Democracy]].[{n}]
""",
"wiki/concepts/lab-leak-theory.md": """
## NewsGuard and the lab leak

Badlands Media's "The Information Imperium" argues that [[newsguard|NewsGuard]] leaned hard into the "debunked conspiracy" framing of the lab leak hypothesis from 2020, awarding high scores - often 100/100 - to outlets that characterised the theory as a hoax or Russian disinformation, without independently rating the theory itself.[{n}] By mid-2021 the hypothesis had gained mainstream traction as Anthony Fauci softened his position, the WHO called for further investigation and Facebook reversed its ban on lab-leak posts, yet NewsGuard did not systematically revisit the ratings of outlets that had ruled it out; BuzzFeed News retained a perfect score despite early articles mocking the theory.[{n}] The article links this posture to NewsGuard's Department of Defense contracting and pharmaceutical-industry funding, and contrasts it with the 49.5/100 assigned to [[zerohedge|ZeroHedge]], which entertained the theory early.[{n}]
""",
"wiki/concepts/hunter-biden-laptop.md": """
## NewsGuard's handling of the story

When the [[new-york-post|New York Post]] published its October 2020 report on the laptop, [[newsguard|NewsGuard]] cast immediate doubt on it, with co-CEO [[steven-brill|Steven Brill]] calling the story a "hoax" in interviews and echoing the establishment framing that it was Russian disinformation.[{n}] After the New York Times and other outlets confirmed the laptop's authenticity in 2022, NewsGuard downgraded [[the-daily-beast|The Daily Beast]] from 87.5/100 to 57/100 while Axios, BuzzFeed News, USA Today and the Washington Post kept perfect 100/100 scores despite peddling the same skepticism - an asymmetry Badlands Media's "The Information Imperium" presents as selective credibility enforcement.[{n}]
""",
"wiki/concepts/orange-revolution.md": """
## Internews and the media groundwork

Badlands Media's "The Information Imperium" argues that the 2004 uprising was preceded by years of Western media investment in Ukraine: by 2001 [[internews|Internews]] had reportedly trained 1,900 journalists and supported 203 television stations and 126 radio outlets reaching 50 million viewers and 18 million listeners, though the article concedes these figures are hard to verify.[{n}] This activity is described as synchronised with the [[national-endowment-for-democracy|National Endowment for Democracy]]'s push to orient Ukraine westward, with the [[national-democratic-institute|NDI]] and [[international-republican-institute|IRI]] coaching the "spontaneous" uprising while Internews amplified pro-U.S. voices.[{n}]
""",
}

def bump(path, txt):
    t = open(path, encoding="utf-8").read()
    if "raw/the-information-imperium.md" in t:
        print("SKIP", path); return True
    m = re.search(r"^sources: \[(.*)\]$", t, re.M)
    if not m:
        print("NOSRC", path); return True
    n = len([x for x in m.group(1).split(",") if x.strip()]) + 1
    t = t[:m.end(1)] + ", raw/the-information-imperium.md" + t[m.end(1):]
    t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
    if "## References" not in t:
        t = t.rstrip() + "\n\n## References\n"
    t = t.rstrip() + "\n" + txt.format(n=n) + "\n" + REF.format(n=n)
    for attempt in range(6):
        try:
            open(path, "w", encoding="utf-8").write(t)
            print("OK", path, n); return True
        except OSError as e:
            print("retry", path, e); time.sleep(3)
    return False

for p, txt in adds.items():
    slug = os.path.basename(p)[:-3]
    for attempt in range(10):
        r = subprocess.run(["python", LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(4)
    bump(p, txt)
    subprocess.run(["python", LOCK, "release", slug], capture_output=True)
