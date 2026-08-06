import sys, re, io
f, raw, title, url, bodyfile = sys.argv[1:6]
t = io.open(f, encoding='utf-8').read()
body = io.open(bodyfile, encoding='utf-8').read().replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
tag = 'raw/%s.md' % raw
if tag not in srcs:
    srcs.append(tag)
n = srcs.index(tag) + 1
t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
body = body.replace('[N]', '[%d]' % n)
refline = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if '## References' in t:
    idx = t.index('## References')
    head, tail = t[:idx], t[idx:]
    if url not in tail:
        tail = tail.rstrip('\n') + '\n' + refline + '\n'
    t = head.rstrip('\n') + '\n\n' + body.strip() + '\n\n' + tail
else:
    t = t.rstrip('\n') + '\n\n' + body.strip() + '\n\n## References\n' + refline + '\n'
io.open(f, 'w', encoding='utf-8', newline='\n').write(t)
print('%s -> [%d]' % (f, n))
