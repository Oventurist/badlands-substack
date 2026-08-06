"""Validate every wiki page's frontmatter parses as YAML (the same failure
mode that broke Vercel: 'title: JFK: What the Doctors Saw' is invalid YAML).
Also fixes the common hazard: unquoted titles containing a colon."""
import glob, os, re, sys

try:
    import yaml
except ImportError:
    print("ERROR: pyyaml not installed")
    sys.exit(2)

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')

FM_RE = re.compile(r'^---\n(.*?)\n---', re.S)


def check_file(path):
    text = open(path, encoding='utf-8', errors='replace').read()
    fm = FM_RE.search(text)
    if not fm:
        return None, "no frontmatter block"
    try:
        data = yaml.safe_load(fm.group(1))
        if not isinstance(data, dict):
            return None, "frontmatter not a mapping"
        return data, None
    except yaml.YAMLError as e:
        return None, str(e).splitlines()[0][:120]


def main():
    bad = []
    for d in ('entities', 'concepts'):
        for p in glob.glob(os.path.join(WIKI, d, '*.md')):
            data, err = check_file(p)
            if err:
                bad.append((os.path.relpath(p, PROJ), err))
    print(f"pages with INVALID frontmatter: {len(bad)}")
    for path, err in bad[:40]:
        print(f"  {path}: {err}")
    if len(bad) > 40:
        print(f"  ... and {len(bad)-40} more")
    return 0


if __name__ == "__main__":
    sys.exit(main())
