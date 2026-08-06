import sys, re, io, os
BASE=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW="raw/badlands-news-brief-357.md"
REF='Badlands Brief — "Unprecedented Opportunities & Rich Men\'s Tricks", URL: https://badlands.substack.com/p/badlands-news-brief-357'

def run(path, body):
    p=os.path.join(BASE,path)
    t=open(p,encoding='utf-8').read()
    nl='\r\n' if '\r\n' in t else '\n'
    t=t.replace('\r\n','\n')
    m=re.search(r'^sources: \[(.*?)\]$', t, re.M)
    if not m: raise SystemExit('no sources '+path)
    items=[x.strip() for x in m.group(1).split(',') if x.strip()]
    if RAW in items:
        n=items.index(RAW)+1
    else:
        items.append(RAW); n=len(items)
        t=t[:m.start()]+'sources: ['+', '.join(items)+']'+t[m.end():]
    t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
    sec=body.replace('[n]','[%d]'%n).strip()+'\n'
    idx=t.rfind('## References')
    if idx==-1:
        t=t.rstrip()+'\n\n'+sec+'\n## References\n%d. %s\n'%(n,REF)
    else:
        refblock=t[idx:]
        if ('%d. Badlands'%n) not in refblock:
            refblock=refblock.rstrip()+'\n%d. %s\n'%(n,REF)
        t=t[:idx].rstrip()+'\n\n'+sec+'\n'+refblock
    open(p,'w',encoding='utf-8',newline=nl).write(t)
    print('updated',path,'as [%d]'%n)
