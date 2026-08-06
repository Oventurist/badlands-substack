"""Append a section to an existing wiki page: add source, bump updated, add reference.
Usage: merge_append.py <pagefile> <rawbasename> <reftitle> <refurl> <sectionfile>
Prints the citation number used.
"""
import sys, re, io

page, rawb, title, url, secfile = sys.argv[1:6]
txt = io.open(page, encoding='utf-8').read()
lines = txt.split('\n')
# frontmatter
end = lines.index('---', 1)
fm = lines[:end]
src_i = next(i for i, l in enumerate(fm) if l.startswith('sources:'))
m = re.match(r'sources:\s*\[(.*)\]\s*$', fm[src_i])
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
entry = 'raw/%s.md' % rawb
if entry in items:
    n = items.index(entry) + 1
else:
    items.append(entry)
    n = len(items)
    fm[src_i] = 'sources: [%s]' % ', '.join(items)
for i, l in enumerate(fm):
    if l.startswith('updated:'):
        fm[i] = 'updated: 2026-08-06'
body = '\n'.join(lines[end:])
sec = io.open(secfile, encoding='utf-8').read().replace('{N}', str(n)).rstrip() + '\n'

refline = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if '## References' in body:
    idx = body.rindex('## References')
    head, tail = body[:idx], body[idx:]
    if refline not in tail:
        tail = tail.rstrip() + '\n' + refline + '\n'
    body = head.rstrip() + '\n\n' + sec + '\n' + tail
else:
    body = body.rstrip() + '\n\n' + sec + '\n## References\n' + refline + '\n'
io.open(page, 'w', encoding='utf-8', newline='\n').write('\n'.join(fm) + '\n' + body)
print(n)
