import sys, io, re
path = sys.argv[1]; n = sys.argv[2]
body = io.open(sys.argv[3], encoding='utf-8').read()
ref = '%s. Badlands Brief — "Fauci Squirms, Pollsters Panic & Elections Erupt", URL: https://badlands.substack.com/p/badlands-news-brief-3e8' % n
s = io.open(path, encoding='utf-8').read().replace('\r\n', '\n')
i = s.rindex('## References')
s = s[:i] + body.strip() + '\n\n' + s[i:]
s = s.rstrip('\n') + '\n' + ref + '\n'
io.open(path, 'w', encoding='utf-8', newline='').write(s)
print('ok')
