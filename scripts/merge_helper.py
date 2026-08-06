import sys, re, io, os
# usage: merge_helper.py <pagepath> <rawbase> <reftext> <sectionfile>
page, rawbase, reftext, secfile = sys.argv[1:5]
txt = io.open(page, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
entry = 'raw/%s.md' % rawbase
if entry in srcs:
    n = srcs.index(entry) + 1
    new_ref = False
else:
    srcs.append(entry); n = len(srcs); new_ref = True
    txt = txt[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + txt[m.end():]
txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
sec = io.open(secfile, encoding='utf-8').read().replace('[N]', '[%d]' % n)
txt = txt.rstrip() + '\n\n' + sec.strip() + '\n'
if new_ref:
    txt += '\n%d. %s\n' % (n, reftext)
io.open(page, 'w', encoding='utf-8').write(txt)
print('ok', page, n)
