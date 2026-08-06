import sys, io
f = sys.argv[1]
txt = sys.stdin.read()
s = io.open(f, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in s[:400] else '\n'
if not s.endswith('\n'): s += nl
s += nl + txt.replace('\r\n','\n').replace('\n', nl)
io.open(f,'w',encoding='utf-8',newline='').write(s)
print('appended', f)
