import sys, io, re
# usage: merge_append.py <file> <rawbase> <reftitle> <refurl> <bodyfile>
f, rawbase, reftitle, refurl, bodyfile = sys.argv[1:6]
data = open(f, encoding='utf-8', newline='').read()
crlf = '\r\n' in data
txt = data.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]$', txt, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry) + 1
else:
    items.append(entry); n = len(items)
    txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
body = open(bodyfile, encoding='utf-8').read().replace('\r\n', '\n').replace('[n]', '[%d]' % n).rstrip()
refline = '%d. Badlands Brief — "%s", URL: %s' % (n, reftitle, refurl)
if '## References' in txt:
    head, refs = txt.rsplit('## References', 1)
    txt = head.rstrip('\n') + '\n\n' + body + '\n\n## References' + refs.rstrip('\n') + ('\n' + refline if refline not in refs else '') + '\n'
else:
    txt = txt.rstrip('\n') + '\n\n' + body + '\n\n## References\n' + refline + '\n'
if crlf:
    txt = txt.replace('\n', '\r\n')
open(f, 'w', encoding='utf-8', newline='').write(txt)
print('ok', f, 'n=%d' % n)
