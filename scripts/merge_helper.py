import sys, re, io, os, json
# usage: merge_helper.py <path> <rawbasename> <reftitle> <refurl> <sectionfile>
path, raw, title, url, secfile = sys.argv[1:6]
txt = open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
txt_n = txt.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]\s*$', txt_n, re.M)
if not m:
    print('NO_SOURCES'); sys.exit(2)
items = [s.strip() for s in m.group(1).split(',') if s.strip()]
tag = 'raw/%s.md' % raw
if tag in items:
    n = items.index(tag)+1
else:
    items.append(tag); n = len(items)
    txt_n = txt_n[:m.start()] + 'sources: [' + ', '.join(items) + ']' + txt_n[m.end():]
txt_n = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt_n, count=1, flags=re.M)
sec = open(secfile, encoding='utf-8').read().replace('\r\n','\n').replace('{N}', str(n)).strip()
refline = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if '## References' in txt_n:
    head, tail = txt_n.split('## References', 1)
    head = head.rstrip('\n') + '\n\n' + sec + '\n\n'
    tail = tail.rstrip('\n')
    if refline not in tail:
        tail = tail + '\n' + refline
    txt_n = head + '## References' + tail + '\n'
else:
    txt_n = txt_n.rstrip('\n') + '\n\n' + sec + '\n\n## References\n' + refline + '\n'
open(path, 'w', encoding='utf-8', newline=nl).write(txt_n)
print('OK n=%d' % n)
