import os, re, glob

WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
entities = {os.path.splitext(os.path.basename(p))[0] for p in glob.glob(WIKI+"/entities/*.md")}
concepts = {os.path.splitext(os.path.basename(p))[0] for p in glob.glob(WIKI+"/concepts/*.md")}
existing = entities | concepts

# Manual alias map: link slug (normalized) -> real existing slug
alias = {
    "nelson-w.-aldrich": "nelson-aldrich",
    "robert-f.-kennedy-jr.": "robert-f-kennedy-jr",
    "burns-cable-(2008)": "burns-cable-2008",
    "anti-defamation-league-(adl)": "anti-defamation-league",
    "federal-reserve-act": "federal-reserve",
    "federal-reserve-act-of-1913": "federal-reserve",
    "5gw-counter-offensive-the-censorship": "5th-generation-warfare",
}

def norm(s):
    return s.strip().lower().replace(" ", "-").replace("’", "")

def resolve(slug):
    slug = slug.strip()
    n = norm(slug)
    if n in existing:
        return n
    if n in alias:
        return alias[n]
    # try stripping trailing punctuation/periods
    n2 = n.rstrip(".")
    if n2 in existing:
        return n2
    if n2 in alias:
        return alias[n2]
    return None

total_fixed = 0
total_unlinked = 0
files_changed = 0

for path in glob.glob(WIKI+"/entities/*.md") + glob.glob(WIKI+"/concepts/*.md"):
    text = open(path, encoding="utf-8").read()
    new = text
    for m in re.finditer(r"\[\[([^\]]+)\]\]", text):
        full = m.group(0)
        inner = m.group(1)
        if "|" in inner:
            slug, disp = inner.split("|", 1)
            display = disp.strip()
        else:
            slug, display = inner, inner
        target = resolve(slug)
        if target:
            # keep link; optionally normalize slug to target
            replacement = f"[[{target}|{display}]]" if "|" in inner or target != norm(slug) else full
            if replacement != full:
                new = new.replace(full, replacement, 1)
                total_fixed += 1
        else:
            # unlink: replace with plain display text (human readable)
            plain = display if display else slug.strip()
            # humanize: replace dashes with spaces, fix trailing period
            plain = plain.replace("-", " ").strip().rstrip(".")
            new = new.replace(full, plain, 1)
            total_unlinked += 1
    if new != text:
        open(path, "w", encoding="utf-8").write(new)
        files_changed += 1

print(f"Files changed: {files_changed}")
print(f"Links normalized to existing slug: {total_fixed}")
print(f"Links unlinked (no target): {total_unlinked}")
