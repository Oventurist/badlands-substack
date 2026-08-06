import json,re,sys
base="C:/Users/14053/hermes-projects/badlands-substack/wiki/"
d=json.load(open(sys.argv[1],encoding='utf-8'))
for path,sec in d.items():
    p=base+path
    t=open(p,encoding='utf-8').read()
    nl='\r\n' if '\r\n' in t else '\n'
    t=t.replace('\r\n','\n')
    i=t.rindex('## References')
    t=t[:i]+sec.strip()+'\n\n'+t[i:]
    open(p,'w',encoding='utf-8',newline=nl).write(t)
    print("ok",path)
