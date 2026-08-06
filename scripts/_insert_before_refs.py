import io,sys,os
p=sys.argv[1]; add=open(sys.argv[2],encoding='utf-8').read()
s=open(p,encoding='utf-8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
add=add.replace('\r\n','\n').replace('\n',nl)
i=s.rindex('## References')
s=s[:i]+add+s[i:]
open(p,'w',encoding='utf-8',newline='').write(s)
print('ok')
