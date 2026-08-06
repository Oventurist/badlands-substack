import sys, re, io

# usage: merge_helper.py <file> <rawbasename> <refline_without_number> <sectionfile>
path, raw, refline, secfile = sys.argv[1:5]
txt = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
t = txt.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
entry = 'raw/%s.md' % raw
if entry in srcs:
    n = srcs.index(entry) + 1
    newsrc = m.group(0)
else:
    srcs.append(entry)
    n = len(srcs)
    newsrc = 'sources: [%s]' % ', '.join(srcs)
t = t[:m.start()] + newsrc + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)

sec = io.open(secfile, encoding='utf-8').read().replace('\r\n', '\n').replace('[N]', '[%d]' % n)
refl = '%d. %s' % (n, refline)

if '## References' in t:
    idx = t.rindex('## References')
    body, refs = t[:idx], t[idx:]
    if refl not in refs:
        refs = refs.rstrip('\n') + '\n' + refl + '\n'
    t = body.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n' + refs
else:
    t = t.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n' + refl + '\n'

io.open(path, 'w', encoding='utf-8', newline=nl).write(t)
print('%s -> [%d]' % (path, n))
