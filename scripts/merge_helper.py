import sys, re, io, datetime
# usage: merge_helper.py <path> <rawbase> <sectionfile>
path, rawbase, secfile = sys.argv[1], sys.argv[2], sys.argv[3]
txt = open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
t = txt.replace('\r\n', '\n')
m = re.match(r'^---\n(.*?)\n---\n', t, re.S)
if not m:
    print('NOFM'); sys.exit(2)
fm = m.group(1)
sm = re.search(r'^sources: \[(.*?)\]$', fm, re.M)
if not sm:
    print('NOSOURCES'); sys.exit(3)
items = [x.strip() for x in sm.group(1).split(',') if x.strip()]
ref = 'raw/%s.md' % rawbase
if ref in items:
    n = items.index(ref)+1
    new = False
else:
    items.append(ref); n = len(items); new = True
fm2 = fm[:sm.start()] + 'sources: [%s]' % ', '.join(items) + fm[sm.end():]
fm2 = re.sub(r'^updated: .*$', 'updated: 2026-08-06', fm2, flags=re.M)
body = t[m.end():]
sec = open(secfile, encoding='utf-8').read().replace('\r\n', '\n').replace('{N}', str(n))
title = re.search(r'^title: (.*)$', fm, re.M).group(1).strip().strip('"')
refline = '%d. Badlands Brief — "Trump Secures Uneasy Peace in Gaza", URL: https://badlands.substack.com/p/%s' % (n, rawbase)
if '## References' in body:
    head, tail = body.split('## References', 1)
    tail_lines = tail.rstrip('\n')
    if new:
        tail_lines += '\n' + refline
    body = head.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + tail_lines.lstrip('\n') + '\n'
else:
    body = body.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + refline + '\n'
out = '---\n' + fm2 + '\n---\n' + body
open(path, 'w', encoding='utf-8', newline=nl).write(out)
print('OK n=%d new=%s' % (n, new))
