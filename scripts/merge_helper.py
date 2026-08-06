import sys, re, os, io
# usage: merge_helper.py <path> <rawbasename> <refline> <sectionfile>
path, rawb, refline, secfile = sys.argv[1:5]
txt = io.open(path, encoding='utf-8').read()
lines = txt.split('\n')
# frontmatter
assert lines[0].strip() == '---'
end = lines.index('---', 1)
fm = lines[1:end]
n = None
for i, l in enumerate(fm):
    if l.startswith('sources:'):
        m = re.match(r'sources:\s*\[(.*)\]\s*$', l)
        items = [x.strip() for x in m.group(1).split(',') if x.strip()]
        key = 'raw/%s.md' % rawb
        if key in items:
            n = items.index(key) + 1
        else:
            items.append(key)
            n = len(items)
        fm[i] = 'sources: [%s]' % ', '.join(items)
    if l.startswith('updated:'):
        fm[i] = 'updated: 2026-08-06'
body = '\n'.join(lines[end+1:])
sec = io.open(secfile, encoding='utf-8').read().replace('[[N]]', '[%d]' % n)
if '## References' in body:
    head, refs = body.split('## References', 1)
    reflines = [x for x in refs.strip().split('\n') if x.strip()]
    if not any(refline.split('URL:')[-1].strip() in x for x in reflines):
        reflines.append('%d. %s' % (n, refline))
    body = head.rstrip() + '\n\n' + sec.strip() + '\n\n## References\n\n' + '\n'.join(reflines) + '\n'
else:
    body = body.rstrip() + '\n\n' + sec.strip() + '\n\n## References\n\n%d. %s\n' % (n, refline)
out = '---\n' + '\n'.join(fm) + '\n---\n' + body
io.open(path, 'w', encoding='utf-8', newline='\n').write(out)
print('MERGED %s as [%d]' % (path, n))
