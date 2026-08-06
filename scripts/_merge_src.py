import sys, re, io
path, base, title, url, today = sys.argv[1:6]
s = io.open(path, encoding='utf-8').read()
m = re.search(r'^sources: \[(.*?)\]\s*$', s, re.M)
items = [x.strip() for x in m.group(1).split(',') if x.strip()]
tgt = 'raw/%s.md' % base
if tgt not in items:
    items.append(tgt)
    s = s[:m.start()] + 'sources: [' + ', '.join(items) + ']' + s[m.end():]
n = items.index(tgt) + 1
s = re.sub(r'^updated: .*$', 'updated: ' + today, s, count=1, flags=re.M)
if '## References' not in s:
    s = s.rstrip() + '\n\n## References\n'
line = '%d. Badlands Brief — "%s", URL: %s' % (n, title, url)
if line not in s:
    s = s.rstrip() + '\n' + line + '\n'
io.open(path, 'w', encoding='utf-8').write(s)
print(n)
