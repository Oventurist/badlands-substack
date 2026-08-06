import sys, re, io
path, basename, title, url = sys.argv[1:5]
raw = io.open(path, encoding='utf-8', newline='').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', raw, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
tag = 'raw/%s.md' % basename
if tag not in items:
    items.append(tag)
n = items.index(tag) + 1
raw = raw[:m.start()] + 'sources: [' + ', '.join(items) + ']' + raw[m.end():]
raw = re.sub(r'^updated: .*$', 'updated: 2026-08-06', raw, count=1, flags=re.M)
refline = '%d. Badlands Brief \u2014 "%s", URL: %s' % (n, title, url)
if refline not in raw:
    if '## References' not in raw:
        raw = raw.rstrip() + '\n\n## References\n'
    raw = raw.rstrip() + '\n' + refline + '\n'
print(n)
io.open(path, 'w', encoding='utf-8', newline='').write(raw)
