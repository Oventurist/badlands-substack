import re,sys,io
RAW="raw/badlands-news-brief-e37.md"
REF='Badlands Media — "The King Is Back ... Like He Never Left", URL: https://badlands.substack.com/p/badlands-news-brief-e37'

def merge(path, body_title, body):
    t=io.open(path,encoding='utf-8').read()
    m=re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
    srcs=[s.strip() for s in m.group(1).split(',') if s.strip()]
    if RAW not in srcs: srcs.append(RAW)
    n=srcs.index(RAW)+1
    t=t[:m.start()]+'sources: ['+', '.join(srcs)+']'+t[m.end():]
    t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
    sec=("\n\n## "+body_title+"\n\n"+body.replace('[n]','['+str(n)+']')).rstrip()+"\n"
    refline="%d. %s\n"%(n,REF)
    if '\n## References' in t:
        head,refs=t.rsplit('\n## References',1)
        t=head.rstrip()+sec+"\n## References"+refs.rstrip()+"\n"+refline
    else:
        t=t.rstrip()+sec+"\n\n## References\n"+refline
    io.open(path,'w',encoding='utf-8',newline='\n').write(t)
    print("merged",path,"as [%d]"%n)

if __name__=='__main__':
    import json
    jobs=json.load(io.open(sys.argv[1],encoding='utf-8'))
    for j in jobs: merge(j['path'],j['title'],j['body'])
