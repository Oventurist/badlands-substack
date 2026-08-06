#!/usr/bin/env python
"""Append a source + reference + section to an existing wiki page.
Usage: wiki_append.py <path> <rawbase> <reftitle> <refurl> <sectionfile>
Section file text may contain {n} placeholder for citation number.
Prints the citation number.
"""
import sys, re, io

path, rawbase, reftitle, refurl, secfile = sys.argv[1:6]
txt = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
t = txt.replace('\r\n', '\n')

m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
if not m:
    sys.exit('no sources line in ' + path)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawbase
if entry in items:
    n = items.index(entry) + 1
    newsrc = m.group(0)
else:
    items.append(entry)
    n = len(items)
    newsrc = 'sources: [%s]' % ', '.join(items)
t = t[:m.start()] + newsrc + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)

sec = io.open(secfile, encoding='utf-8').read().replace('\r\n', '\n').format(n=n)

refline = '%d. Badlands Brief — "%s", URL: %s' % (n, reftitle, refurl)
if '## References' in t:
    head, refs = t.rsplit('## References', 1)
    refs = refs.rstrip('\n')
    if ('\n%d. ' % n) not in ('\n' + refs.lstrip('\n')):
        refs = refs + '\n' + refline
    t = head.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + refs.lstrip('\n') + '\n'
else:
    t = t.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + refline + '\n'

io.open(path, 'w', encoding='utf-8', newline=nl).write(t)
print(n)
