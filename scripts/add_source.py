import sys, re, io
path, base = sys.argv[1], sys.argv[2]
raw = open(path, 'r', encoding='utf-8', newline='').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', raw, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % base
if entry in items:
    print(items.index(entry) + 1, 'ALREADY')
else:
    items.append(entry)
    new = 'sources: [' + ', '.join(items) + ']'
    raw = raw[:m.start()] + new + raw[m.end():]
    raw = re.sub(r'^updated: .*$', 'updated: 2026-08-06', raw, count=1, flags=re.M)
    open(path, 'w', encoding='utf-8', newline='').write(raw)
    print(len(items), 'ADDED')
