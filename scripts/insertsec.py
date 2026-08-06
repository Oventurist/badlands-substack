import sys, io
path = sys.argv[1]
sec = io.open(sys.argv[2], encoding='utf-8').read()
raw = io.open(path, encoding='utf-8', newline='').read()
i = raw.rindex('## References')
raw = raw[:i] + sec.rstrip() + '\n\n' + raw[i:]
io.open(path, 'w', encoding='utf-8', newline='').write(raw)
print('ok')
