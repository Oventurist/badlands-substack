import sys, re, io, json
# usage: python append_section.py <path> <rawbase> <jsonfile-with-body-template>
path, rawbase, bodyfile = sys.argv[1], sys.argv[2], sys.argv[3]
txt = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
t = txt.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
entry = 'raw/%s.md' % rawbase
if entry in srcs:
    n = srcs.index(entry) + 1
else:
    srcs.append(entry); n = len(srcs)
    t = t[:m.start()] + 'sources: [%s]' % ', '.join(srcs) + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
body = io.open(bodyfile, encoding='utf-8').read().replace('{N}', str(n))
t = t.rstrip('\n') + '\n\n' + body.strip() + '\n'
io.open(path, 'w', encoding='utf-8', newline=nl).write(t)
print('OK', path, 'n=', n)
