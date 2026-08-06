import sys, re, io, os
# usage: merge_append.py <path> <rawbasename> <reftitle> <refurl> <bodyfile>
path, raw, title, url, bodyfile = sys.argv[1:6]
data = open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in data else '\n'
m = re.search(r'^sources: \[(.*?)\]\s*$', data, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
entry = 'raw/%s.md' % raw
if entry in srcs:
    n = srcs.index(entry)+1
else:
    srcs.append(entry); n = len(srcs)
    data = data[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + data[m.end():]
data = re.sub(r'^updated: .*$', 'updated: 2026-08-06', data, count=1, flags=re.M)
body = open(bodyfile, encoding='utf-8').read().replace('{N}', str(n)).replace('\r\n','\n')
if not data.endswith('\n'): data += nl
data += nl + body.replace('\n', nl).rstrip(nl) + nl
data += nl + '%d. Badlands Brief — "%s", URL: %s%s' % (n, title, url, nl)
open(path, 'w', encoding='utf-8', newline='').write(data)
print('OK', path, 'n=', n)
