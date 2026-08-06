import sys, re, io, os
# usage: append_src.py <pagefile> <rawbasename>
p, raw = sys.argv[1], sys.argv[2]
t = io.open(p, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
tag = 'raw/%s.md' % raw
if tag in items:
    print(items.index(tag)+1)
else:
    items.append(tag)
    t = t[:m.start()] + 'sources: [' + ', '.join(items) + ']' + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    io.open(p, 'w', encoding='utf-8', newline='\n').write(t)
    print(len(items))
