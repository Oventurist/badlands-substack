import sys, re, io, os
BASE=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW="raw/badlands-news-brief-1ae.md"
REFLINE='Badlands Brief \u2014 "Badlands News Brief: Playing the Opposite Game with Deep State Propaganda", URL: https://badlands.substack.com/p/badlands-news-brief-1ae'
TODAY="2026-08-06"

def merge(path, heading, body_tmpl):
    p=os.path.join(BASE,path)
    s=io.open(p,encoding='utf-8').read()
    nl='\r\n' if '\r\n' in s else '\n'
    s2=s.replace('\r\n','\n')
    m=re.search(r'^sources:\s*\[(.*?)\]\s*$', s2, re.M)
    if not m:
        print("NOSOURCES",path); return
    items=[x.strip() for x in m.group(1).split(',') if x.strip()]
    if RAW in items:
        n=items.index(RAW)+1
    else:
        items.append(RAW); n=len(items)
        s2=s2[:m.start()]+"sources: ["+", ".join(items)+"]"+s2[m.end():]
    s2=re.sub(r'^updated:.*$', 'updated: '+TODAY, s2, count=1, flags=re.M)
    body=body_tmpl.replace('[n]','['+str(n)+']')
    if '## References' in s2:
        head, tail = s2.split('## References',1)
        # tail: existing numbered list
        lines=tail.split('\n')
        if not re.search(r'^\s*%d\.\s'%n, tail, re.M):
            # append ref line at end of ref list
            tail=tail.rstrip('\n')+'\n%d. %s\n'%(n,REFLINE)
        s2=head.rstrip('\n')+'\n\n'+heading+'\n\n'+body.strip()+'\n\n## References'+tail
    else:
        s2=s2.rstrip('\n')+'\n\n'+heading+'\n\n'+body.strip()+'\n\n## References\n%d. %s\n'%(n,REFLINE)
    io.open(p,'w',encoding='utf-8',newline=nl).write(s2)
    print("OK",path,"cite",n)
