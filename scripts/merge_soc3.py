import sys, re, io, os, json
# usage: merge_helper.py <file> <rawbasename> <title> <url> <sectionfile>
f, raw, title, url, secfile = sys.argv[1:6]
txt = open(f, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
key = 'raw/%s.md' % raw
if key in items:
    n = items.index(key)+1
    new = False
else:
    items.append(key); n = len(items); new = True
    txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
sec = open(secfile, encoding='utf-8').read().replace('[N]', '[%d]' % n)
ref = '%d. Badlands Brief — "%s", URL: %s\n' % (n, title, url)
if not txt.endswith('\n'): txt += '\n'
txt += '\n' + sec.rstrip('\n') + '\n\n' + ref
open(f, 'w', encoding='utf-8', newline='').write(txt)
print('OK', f, 'cite', n)
