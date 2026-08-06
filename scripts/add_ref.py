import sys, io
path, line = sys.argv[1], sys.argv[2]
s = io.open(path, encoding='utf-8').read().rstrip('\n')
io.open(path,'w',encoding='utf-8',newline='\n').write(s + '\n' + line + '\n')
