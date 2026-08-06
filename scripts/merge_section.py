import sys, re, io, os, datetime
# usage: merge_section.py <path> <rawbase> <reftext> <sectionfile>
path, rawbase, reftext, secfile = sys.argv[1:5]
txt = open(path, encoding='utf-8').read()
m = re.search(r'^sources:\s*\[(.*?)\]\s*$', txt, re.M)
if not m: sys.exit('no sources line: '+path)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry)+1
    new = False
else:
    items.append(entry); n = len(items); new = True
    txt = txt[:m.start()] + 'sources: [' + ', '.join(items) + ']' + txt[m.end():]
txt = re.sub(r'^updated:.*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
sec = open(secfile, encoding='utf-8').read().replace('{N}', str(n)).rstrip()+'\n'
if '## References' in txt:
    head, refs = txt.split('## References', 1)
    head = head.rstrip()+'\n\n'+sec+'\n'
    refs = refs.rstrip()
    if new:
        refs += '\n%d. %s\n' % (n, reftext)
    else:
        refs += '\n'
    txt = head + '## References' + refs
else:
    txt = txt.rstrip()+'\n\n'+sec+'\n## References\n%d. %s\n' % (n, reftext)
open(path,'w',encoding='utf-8').write(txt)
print('ok', path, 'n=', n)
