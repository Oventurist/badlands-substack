import sys, re, io, json
# usage: append_section.py <path> <rawbasename> <reftitle> <refurl> <bodyfile>
path, rawb, reftitle, refurl, bodyfile = sys.argv[1:6]
data = open(path, 'r', encoding='utf-8', newline='').read()
crlf = '\r\n' in data
t = data.replace('\r\n', '\n').replace('\r', '')
m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
tag = 'raw/%s.md' % rawb
if tag not in srcs:
    srcs.append(tag)
n = srcs.index(tag) + 1
t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
body = open(bodyfile, encoding='utf-8').read().replace('\r\n', '\n').replace('[[N]]', '[%d]' % n)
ref = '%d. Badlands Brief — "%s", URL: %s\n' % (n, reftitle, refurl)
if '## References' not in t:
    t = t.rstrip('\n') + '\n\n' + body.rstrip('\n') + '\n\n## References\n' + ref
else:
    t = t.rstrip('\n') + '\n\n' + body.rstrip('\n') + '\n\n' + ref
if crlf:
    t = t.replace('\n', '\r\n')
open(path, 'w', encoding='utf-8', newline='').write(t)
print('OK', path, 'citation', n)
