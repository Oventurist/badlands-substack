import sys, re, io
path, basename, title, url = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
body = sys.stdin.read()
t = io.open(path, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
src = 'raw/%s.md' % basename
if src in srcs:
    n = srcs.index(src) + 1
    newsrcs = srcs
else:
    newsrcs = srcs + [src]
    n = len(newsrcs)
t = t[:m.start()] + 'sources: [' + ', '.join(newsrcs) + ']' + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
t = t.rstrip() + '\n\n' + body.replace('[n]', '[%d]' % n).rstrip() + '\n'
ref = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if ref not in t:
    t += '\n' + ref + '\n'
io.open(path, 'w', encoding='utf-8').write(t)
print('merged as [%d] -> %s' % (n, path))
