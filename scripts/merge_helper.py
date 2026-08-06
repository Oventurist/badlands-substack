import sys, re, io, os, json
# usage: merge_helper.py <path> <rawbase> <secfile>
# secfile contains section text with {N} placeholders for citation number
path, rawbase, secfile = sys.argv[1], sys.argv[2], sys.argv[3]
REFLINE = '{N}. Badlands News Brief — "More Lawsuits, More Proxy Wars & More Bidens", URL: https://badlands.substack.com/p/badlands-news-brief-948'
t = io.open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in t else '\n'
t = t.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
tag = 'raw/%s.md' % rawbase
if tag in srcs:
    n = srcs.index(tag) + 1
    new = False
else:
    srcs.append(tag); n = len(srcs); new = True
    t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
t = re.sub(r'^updated:.*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
sec = io.open(secfile, encoding='utf-8').read().replace('{N}', str(n)).strip()
if '## References' in t:
    head, refs = t.rsplit('## References', 1)
    refs = refs.rstrip()
    if new:
        refs += '\n' + REFLINE.replace('{N}', str(n))
    t = head.rstrip() + '\n\n' + sec + '\n\n## References' + refs + '\n'
else:
    t = t.rstrip() + '\n\n' + sec + '\n\n## References\n' + REFLINE.replace('{N}', str(n)) + '\n'
io.open(path, 'w', encoding='utf-8', newline=nl).write(t)
print('ok', path, 'cite', n)
