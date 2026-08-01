import os, re, glob

WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"

files = glob.glob(WIKI+"/entities/*.md") + glob.glob(WIKI+"/concepts/*.md") + [WIKI+"/5gw-counter-offensive-the-censorship.md"]

# 1) Fix the specific corruption from the bad cabal regex:
#    "1913-the-year-the-[[cabal]]-enslaved-america" or "...-[[cabal|-enslaved..." -> proper link
#    Also "[cabal]" (single bracket) and "...[[cabal" fragments.
for path in files:
    if not os.path.exists(path):
        continue
    t = open(path, encoding="utf-8").read()
    new = t
    # reconstruct the broken 1913 article link
    new = re.sub(r'\[\[1913-the-year-the-\[\[cabal\]\]-enslaved-america\]\]', '[[1913-the-year-the-cabal-enslaved-america]]', new)
    new = re.sub(r'\[\[1913-the-year-the-\[\[cabal\|-enslaved-america\]\]\]', '[[1913-the-year-the-cabal-enslaved-america]]', new)
    new = re.sub(r'1913-the-year-the-\[\[cabal', '[[1913-the-year-the-cabal-enslaved-america', new)
    # fix stray single-bracket [cabal]
    new = re.sub(r'(?<!\[)\[cabal\](?!\])', '[[cabal]]', new)
    # any remaining "[[cabal" without closing inside a link -> close it
    if new != t:
        open(path, "w", encoding="utf-8").write(new)
        print("repaired:", os.path.basename(path))
print("repair pass done")
