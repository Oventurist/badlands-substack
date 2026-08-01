import os, re, glob

WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"

# exact article-title strings -> target slug (with display)
replacements = [
    ("1913: The Year the Cabal Enslaved America",
     "[[1913-the-year-the-cabal-enslaved-america|1913: The Year the Cabal Enslaved America]]"),
    ("5GW Counter-Offensive \u2013 The Censorship Regime and the Road to 2024",
     "[[5gw-counter-offensive-the-censorship|5GW Counter-Offensive \u2013 The Censorship Regime and the Road to 2024]]"),
    ("5GW Counter-Offensive - The Censorship Regime and the Road to 2024",
     "[[5gw-counter-offensive-the-censorship|5GW Counter-Offensive - The Censorship Regime and the Road to 2024]]"),
]

# special: donald-trump bullet "1913 — the year of the cabal's alleged consolidation that Trump seeks to reverse"
dt_special = ("1913 \u2014 the year of the cabal's alleged consolidation that Trump seeks to reverse",
              "[[1913-the-year-the-cabal-enslaved-america|1913]] \u2014 the year of the cabal's alleged consolidation that Trump seeks to reverse")

files = glob.glob(WIKI+"/entities/*.md") + glob.glob(WIKI+"/concepts/*.md") + [WIKI+"/5gw-counter-offensive-the-censorship.md"]
changed = 0
for path in files:
    if not os.path.exists(path):
        continue
    t = open(path, encoding="utf-8").read()
    new = t
    for src, dst in replacements:
        if src in new and dst not in new:
            new = new.replace(src, dst)
    if os.path.basename(path) == "donald-trump.md":
        if dt_special[0] in new:
            new = new.replace(dt_special[0], dt_special[1])
    if new != t:
        open(path, "w", encoding="utf-8").write(new)
        changed += 1
        print("updated:", os.path.basename(path))

print("Files changed:", changed)
