import re, pathlib, sys

root = pathlib.Path("C:/Users/14053/hermes-projects/badlands-substack/wiki")
changed = []
for p in list(root.glob("entities/*.md")) + list(root.glob("concepts/*.md")):
    text = p.read_text(encoding="utf-8")
    lines = text.split("\n")
    if not lines or lines[0].strip() != "---":
        continue
    try:
        end = lines.index("---", 1)
    except ValueError:
        continue
    fm = lines[1:end]
    out = []
    i = 0
    modified = False
    while i < len(fm):
        line = fm[i]
        if line.startswith("sources:"):
            rest = line[len("sources:"):].strip()
            items = []
            if rest:
                if rest.startswith("["):
                    items = [x.strip() for x in rest.strip("[]").split(",") if x.strip()]
                else:
                    items = [rest]
                i += 1
            else:
                i += 1
                while i < len(fm) and re.match(r"^\s*-\s+", fm[i]):
                    items.append(re.sub(r"^\s*-\s+", "", fm[i]).strip())
                    i += 1
            norm = []
            for it in items:
                it = it.strip().strip('"\'')
                if not it.startswith("raw/"):
                    it = "raw/" + it.lstrip("/")
                if not it.endswith(".md"):
                    it += ".md"
                if it not in norm:
                    norm.append(it)
            new = "sources: [" + ", ".join(norm) + "]"
            out.append(new)
            if new != line:
                modified = True
            continue
        out.append(line)
        i += 1
    if modified:
        newtext = "\n".join(["---"] + out + lines[end:])
        p.write_text(newtext, encoding="utf-8")
        changed.append(p.name)
print(len(changed), "changed")
