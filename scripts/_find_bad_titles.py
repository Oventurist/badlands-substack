"""Find wiki pages whose frontmatter title contains an unquoted colon (YAML
parse hazard — breaks VitePress, e.g. 'title: JFK: What the Doctors Saw').
Properly scoped to the frontmatter block only."""
import glob, re, os

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')

FM_RE = re.compile(r'^---\n(.*?)\n---', re.S)
TITLE_LINE_RE = re.compile(r'^title:\s*(.*)$', re.M)

bad = []
for d in ('entities', 'concepts'):
    for p in glob.glob(os.path.join(WIKI, d, '*.md')):
        text = open(p, encoding='utf-8', errors='replace').read()
        fm = FM_RE.search(text)
        if not fm:
            continue
        m = TITLE_LINE_RE.search(fm.group(1))
        if not m:
            continue
        val = m.group(1).strip()
        # unquoted value with a colon inside (excluding URL-ish / parentheses ok)
        if val and not (val.startswith('"') or val.startswith("'")):
            if ':' in val:
                bad.append((os.path.relpath(p, PROJ), val[:80]))

print(f"pages with unquoted colon in title: {len(bad)}")
for path, title in bad:
    print(f"  {path}: {title}")
