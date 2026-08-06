import io,re,sys,os
RAW='raw/badlands-news-brief-051.md'
REF='Badlands Brief — "Lawsuits Can Be Very Effective ...", URL: https://badlands.substack.com/p/badlands-news-brief-051'
def merge(path, heading, body):
    with io.open(path,encoding='utf-8') as f: t=f.read()
    if RAW in t:
        print('ALREADY',path); return
    m=re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
    srcs=[s.strip() for s in m.group(1).split(',') if s.strip()]
    srcs.append(RAW)
    n=len(srcs)
    t=t[:m.start()]+'sources: ['+', '.join(srcs)+']'+t[m.end():]
    t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
    body=body.replace('[n]','[%d]'%n)
    ri=t.find('## References')
    if ri==-1:
        t=t.rstrip()+'\n\n## '+heading+'\n\n'+body.strip()+'\n\n## References\n\n%d. %s\n'%(n,REF)
    else:
        t=t[:ri].rstrip()+'\n\n## '+heading+'\n\n'+body.strip()+'\n\n'+t[ri:].rstrip()+'\n%d. %s\n'%(n,REF)
    with io.open(path,'w',encoding='utf-8',newline='') as f: f.write(t)
    print('UPDATED',path,'as [%d]'%n)
if __name__=='__main__':
    pass
