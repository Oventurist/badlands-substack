import sys, re, io, os
# usage: merge_helper.py <path> <rawbase> <title> <url> <paragraph-file>
path, rawbase, title, url, pfile = sys.argv[1:6]
data = open(path, 'r', encoding='utf-8', newline='').read()
crlf = '\r\n' in data
txt = data.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
if not m:
    print('NOSOURCES'); sys.exit(2)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry) + 1
else:
    items.append(entry); n = len(items)
    txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
txt = re.sub(r'^updated:.*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
para = open(pfile, 'r', encoding='utf-8').read().strip().replace('[n]', '[%d]' % n)
refline = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if '## References' in txt:
    head, tail = txt.split('## References', 1)
    head = head.rstrip('\n') + '\n\n' + para + '\n'
    tail = tail.rstrip('\n')
    if refline not in tail:
        tail = tail + '\n' + refline
    txt = head + '\n## References' + tail + '\n'
else:
    txt = txt.rstrip('\n') + '\n\n' + para + '\n\n## References\n' + refline + '\n'
if crlf:
    txt = txt.replace('\n', '\r\n')
open(path, 'w', encoding='utf-8', newline='').write(txt)
print('OK n=%d' % n)
