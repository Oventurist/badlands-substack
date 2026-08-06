import sys, io
path = sys.argv[1]
text = io.open(sys.argv[2], encoding='utf-8').read()
s = io.open(path, encoding='utf-8').read()
i = s.rindex('## References')
s = s[:i] + text.rstrip() + '\n\n' + s[i:]
io.open(path, 'w', encoding='utf-8').write(s)
print('ok')
