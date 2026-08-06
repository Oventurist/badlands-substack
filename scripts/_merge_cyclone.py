import sys,re,subprocess,os
BASE=r'C:/Users/14053/hermes-projects/badlands-substack'
RAW='raw/operation-cyclone-the-seeds-of-terror.md'
REF='Badlands Brief — "Operation Cyclone - The Seeds of Terror", URL: https://badlands.substack.com/p/operation-cyclone-the-seeds-of-terror'
path=sys.argv[1]; body=open(sys.argv[2],encoding='utf-8').read()
p=os.path.join(BASE,path)
s=open(p,encoding='utf-8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
m=re.search(r'^sources: \[(.*?)\]\s*$',s,re.M)
srcs=[x.strip() for x in m.group(1).split(',') if x.strip()]
if RAW not in srcs: srcs.append(RAW)
n=srcs.index(RAW)+1
s=s[:m.start()]+'sources: ['+', '.join(srcs)+']'+s[m.end():]
s=re.sub(r'^updated: .*$','updated: 2026-08-06',s,count=1,flags=re.M)
body=body.replace('[[N]]',str(n)).replace('\r\n','\n').replace('\n',nl)
i=s.rindex('## References')
s=s[:i]+body+s[i:]
if not s.endswith(nl): s+=nl
s+=f'{n}. {REF}'+nl
open(p,'w',encoding='utf-8',newline='').write(s)
print('ok n=',n)
