"""Find pages with 2+ sources in frontmatter (multi-article merges)."""
import os, glob, re

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')

multi = 0
for d in ('entities', 'concepts'):
    for f in glob.glob(os.path.join(WIKI, d, '*.md')):
        t = open(f, encoding='utf-8', errors='replace').read()
        m = re.search(r'^sources:\s*\[([^\]]+)\]', t, re.M)
        if m:
            srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
            if len(srcs) >= 2:
                multi += 1
                if multi <= 6:
                    print(f"{os.path.join(d, os.path.basename(f))}: {len(srcs)} sources")
                    # check citations
                    has_refs = '## References' in t
                    nums = sorted(set(int(x) for x in re.findall(r'\[(\d+)\]', t)))
                    print(f"   inline citation numbers: {nums} | has ## References: {has_refs}")
                    rm = re.search(r'## References\n(.*?)(?:\n##|\Z)', t, re.S)
                    if rm:
                        print(f"   refs: {rm.group(1).strip()[:250]}")
print(f"\ntotal multi-source pages: {multi}")
