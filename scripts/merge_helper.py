import sys, re, io, json, os
# usage: merge_helper.py <path> <rawbasename> <refline-without-number> <sectionfile>
path, rawbase, reftext, secfile = sys.argv[1:5]
txt = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
txt_n = txt.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]\s*$', txt_n, re.M)
if not m:
    print('NO SOURCES'); sys.exit(2)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry) + 1
    changed_src = False
else:
    items.append(entry); n = len(items); changed_src = True
    txt_n = txt_n[:m.start()] + 'sources: [' + ', '.join(items) + ']' + txt_n[m.end():]
txt_n = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt_n, count=1, flags=re.M)
sec = io.open(secfile, encoding='utf-8').read().replace('\r\n', '\n').replace('{N}', str(n))
refline = '%d. %s' % (n, reftext)
if '## References' in txt_n:
    # insert section before ## References, add refline after last numbered ref line
    idx = txt_n.index('## References')
    body, tail = txt_n[:idx], txt_n[idx:]
    lines = tail.split('\n')
    last = 0
    for i, l in enumerate(lines):
        if re.match(r'^\d+\. ', l):
            last = i
    if refline not in tail:
        lines.insert(last + 1, refline)
    tail = '\n'.join(lines)
    txt_n = body.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n' + tail
else:
    txt_n = txt_n.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + refline + '\n'
io.open(path, 'w', encoding='utf-8', newline=nl).write(txt_n)
print('OK n=%d src_added=%s' % (n, changed_src))
