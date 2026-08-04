import sys, io, re, os
# usage: merge_source.py <path> <rawbasename> <sectionfile>
path, raw, secfile = sys.argv[1], sys.argv[2], sys.argv[3]
txt = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
lines = txt.split(nl)
for i, l in enumerate(lines):
    if l.startswith('sources:'):
        if raw not in l:
            lines[i] = l.rstrip().rstrip(']') + (', ' if '[]' not in l else '') + 'raw/%s' % raw + ']'
            lines[i] = lines[i].replace('[, ', '[')
    if l.startswith('updated:'):
        lines[i] = 'updated: 2026-08-05'
txt = nl.join(lines)
sec = io.open(secfile, encoding='utf-8').read().strip().replace('\r\n', '\n').replace('\n', nl)
marker = nl + '## Sources' + nl
idx = txt.rfind(marker)
if idx == -1:
    marker = nl + '## References' + nl
    idx = txt.rfind(marker)
if idx != -1:
    txt = txt[:idx] + nl + sec + nl + txt[idx:]
else:
    if not txt.endswith(nl):
        txt += nl
    txt += nl + sec + nl
io.open(path, 'w', encoding='utf-8', newline='').write(txt)
print('merged', path)
