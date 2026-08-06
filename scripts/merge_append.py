import sys, re, io, os
# usage: merge_append.py <pagepath> <rawbase> <refline_without_number> <bodyfile>
page, rawbase, refline, bodyfile = sys.argv[1:5]
txt = io.open(page, encoding='utf-8').read()
body = io.open(bodyfile, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
if not m:
    print('NO SOURCES'); sys.exit(2)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry) + 1
    changed = False
else:
    items.append(entry); n = len(items); changed = True
    txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
body = body.replace('{N}', str(n)).rstrip() + '\n'
if '## References' in txt:
    head, refs = txt.rsplit('## References', 1)
    reflines = refs.rstrip().split('\n')
    if changed or not any(l.strip().startswith('%d.' % n) for l in reflines):
        reflines.append('%d. %s' % (n, refline))
    txt = head.rstrip('\n') + '\n\n' + body + '\n## References\n' + '\n'.join(l for l in reflines if l.strip()) + '\n'
else:
    txt = txt.rstrip('\n') + '\n\n' + body + '\n## References\n%d. %s\n' % (n, refline)
io.open(page, 'w', encoding='utf-8').write(txt)
print('OK n=%d %s' % (n, page))
