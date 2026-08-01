import os, re, glob

WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
files = glob.glob(WIKI+"/entities/*.md") + glob.glob(WIKI+"/concepts/*.md") + [WIKI+"/5gw-counter-offensive-the-censorship.md"]

for path in files:
    if not os.path.exists(path):
        continue
    lines = open(path, encoding="utf-8").read().split("\n")
    newlines = []
    for ln in lines:
        # 1) Fix frontmatter tags lines: strip all [ ] inside tags value
        if ln.strip().startswith("tags:"):
            # remove any [[ ]] or single brackets within the tags line
            fixed = re.sub(r'\[+\s*([a-z0-9\-]+)\s*\]+\]?', r'\1', ln)
            # also catch [[cabal]] style
            fixed = re.sub(r'\[\[([a-z0-9\-]+)\]\]', r'\1', fixed)
            fixed = re.sub(r'\[([a-z0-9\-]+)\]', r'\1', fixed)
            newlines.append(fixed)
            continue
        # 2) Fix the title-link corruption: [[[[1913...]]-enslaved-america|DISPLAY]] -> [[1913...|DISPLAY]]
        ln = re.sub(r'\[\[\[\[1913-the-year-the-cabal-enslaved-america\]\]-enslaved-america\|([^\]]*)\]\]',
                     r'[[1913-the-year-the-cabal-enslaved-america|\1]]', ln)
        # also the form with |1913]] (bullet variant)
        ln = re.sub(r'\[\[\[\[1913-the-year-the-cabal-enslaved-america\]\]-enslaved-america\|([^\]]*)\]\]',
                     r'[[1913-the-year-the-cabal-enslaved-america|\1]]', ln)
        # 3) Fix single-opening-bracket [cabal]] -> [[cabal]]
        ln = re.sub(r'(?<!\[)\[cabal\]\]', r'[[cabal]]', ln)
        # 4) Fix any [cabal]]-style where there might be a stray: [[cabal]]-s -> keep
        newlines.append(ln)
    out = "\n".join(newlines)
    # safety: ensure no line still has [[[[
    if "[[" in out and "[[[[" in out:
        print("WARN still malformed:", os.path.basename(path))
    open(path, "w", encoding="utf-8").write(out)
print("repair complete")
