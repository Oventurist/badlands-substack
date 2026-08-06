import io,sys,re
RAW='raw/badlands-news-brief-b64.md'
REFTXT='Badlands Brief — "Badlands News Brief: Bragg\'s Panic, Trump\'s Calm & China\'s Proposal", URL: https://badlands.substack.com/p/badlands-news-brief-b64'

def merge(path, section):
    t=io.open(path,encoding='utf-8').read()
    nl='\r\n' if '\r\n' in t else '\n'
    t=t.replace('\r\n','\n')
    m=re.search(r'^sources: \[(.*?)\]$', t, re.M)
    srcs=[s.strip() for s in m.group(1).split(',')]
    if RAW in srcs:
        n=srcs.index(RAW)+1
    else:
        srcs.append(RAW); n=len(srcs)
        t=t[:m.start()]+'sources: ['+', '.join(srcs)+']'+t[m.end():]
    t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
    body=section.replace('{n}',str(n)).strip()
    idx=t.find('\n## References')
    ref='%d. %s'%(n,REFTXT)
    if idx==-1:
        t=t.rstrip()+'\n\n'+body+'\n\n## References\n\n'+ref+'\n'
    else:
        head=t[:idx]; tail=t[idx:].rstrip()
        if ref not in tail:
            tail=tail+'\n'+ref
        t=head.rstrip()+'\n\n'+body+'\n\n'+tail+'\n'
    io.open(path,'w',encoding='utf-8',newline=nl).write(t)
    print('merged',path,'n=',n)

if __name__=='__main__':
    import json
    data=json.load(open(sys.argv[1],encoding='utf-8'))
    for p,s in data:
        merge(p,s)
