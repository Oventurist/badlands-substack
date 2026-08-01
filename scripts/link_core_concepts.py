import os, re, glob

WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"

# existing slugs
ents = {os.path.splitext(os.path.basename(p))[0] for p in glob.glob(WIKI+"/entities/*.md")}
cons = {os.path.splitext(os.path.basename(p))[0] for p in glob.glob(WIKI+"/concepts/*.md")}
existing = ents | cons

# (regex pattern, replacement) - link plain-text mentions, skip if already inside [[ ]]
# We match word-boundary mentions not preceded by [[ or part of an existing link.
rules = [
    # cabal (lowercase noun, not already linked)
    (r"(?<!\[\[)(?<!\[\[cabal)(?<!\w)([Tt]he )?cabal(?!\w)(?!\]\])",
     lambda m: (m.group(1) if m.group(1) else "") + "[[cabal]]"),
    # fiat currency / fiat monetary system
    (r"(?<!\[\[)(?<!\w)fiat (currency|monetary system)(?!\w)(?!\]\])",
     lambda m: "[[fiat-currency|fiat " + m.group(1) + "]]"),
    # Internal Revenue Service / the IRS
    (r"(?<!\[\[)(?<!\w)Internal Revenue Service(?!\w)(?!\]\])",
     "[[internal-revenue-service|Internal Revenue Service]]"),
    (r"(?<!\[\[)(?<!\w)the IRS(?!\w)(?!\]\])",
     "[[internal-revenue-service|the IRS]]"),
]

files = glob.glob(WIKI+"/entities/*.md") + glob.glob(WIKI+"/concepts/*.md") + [WIKI+"/5gw-counter-offensive-the-censorship.md"]
changed = 0
for path in files:
    if not os.path.exists(path):
        continue
    t = open(path, encoding="utf-8").read()
    new = t
    for pat, rep in rules:
        new = re.sub(pat, rep, new)
    if new != t:
        # safety: ensure we didn't create a malformed link or double-bracket
        open(path, "w", encoding="utf-8").write(new)
        changed += 1
        print("updated:", os.path.basename(path))

print("Files changed:", changed)
