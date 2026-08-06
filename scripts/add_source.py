import sys, re, io, os
RAW="badlands-news-brief-b1d.md"
REF='Badlands Brief — "Badlands News Brief: Trump Skips Debates, FED Paralyzed & Garland Grilled", URL: https://badlands.substack.com/p/badlands-news-brief-b1d'
base="C:/Users/14053/hermes-projects/badlands-substack/wiki/"
for path in sys.argv[1:]:
    p=base+path
    t=open(p,encoding='utf-8').read()
    nl='\r\n' if '\r\n' in t else '\n'
    t2=t.replace('\r\n','\n')
    m=re.search(r'^sources: \[(.*?)\]$', t2, re.M)
    items=[x.strip() for x in m.group(1).split(',') if x.strip()]
    tgt='raw/'+RAW
    if tgt in items:
        n=items.index(tgt)+1
    else:
        items.append(tgt); n=len(items)
        t2=t2[:m.start()]+'sources: ['+', '.join(items)+']'+t2[m.end():]
        t2=re.sub(r'^updated: .*$','updated: 2026-08-06',t2,count=1,flags=re.M)
        if '## References' in t2:
            t2=t2.rstrip('\n')+'\n%d. %s\n'%(n,REF)
        else:
            t2=t2.rstrip('\n')+'\n\n## References\n\n%d. %s\n'%(n,REF)
        open(p,'w',encoding='utf-8',newline=nl).write(t2)
    print(path, n)
