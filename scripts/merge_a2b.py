import re, sys, io, os
RAW='raw/the-accomplishments-of-president-a2b.md'
TITLE='The Accomplishments of President Trump - Part 2'
URL='https://badlands.substack.com/p/the-accomplishments-of-president-a2b'
BASE='C:/Users/14053/hermes-projects/badlands-substack/wiki/'

def merge(path, section_title, body_tmpl):
    p=BASE+path
    t=io.open(p,encoding='utf-8').read()
    m=re.search(r'^sources: \[(.*?)\]$', t, re.M)
    srcs=[s.strip() for s in m.group(1).split(',') if s.strip()]
    if RAW in srcs:
        n=srcs.index(RAW)+1
    else:
        srcs.append(RAW); n=len(srcs)
        t=t[:m.start()]+'sources: ['+', '.join(srcs)+']'+t[m.end():]
    t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
    body=body_tmpl.replace('[n]','[%d]'%n)
    ref='%d. Badlands Brief — "%s", URL: %s' % (n, TITLE, URL)
    if '## References' in t:
        head,tail=t.split('## References',1)
        # tail: existing numbered list
        if ref not in tail:
            tail=tail.rstrip()+'\n'+ref+'\n'
        t=head.rstrip()+'\n\n'+section_title+'\n\n'+body.strip()+'\n\n## References\n'+tail.lstrip('\n')
    else:
        t=t.rstrip()+'\n\n'+section_title+'\n\n'+body.strip()+'\n\n## References\n\n'+ref+'\n'
    io.open(p,'w',encoding='utf-8').write(t)
    print('updated',path,'as citation',n)

if __name__=='__main__':
    import json
    spec=json.load(io.open(sys.argv[1],encoding='utf-8'))
    for item in spec:
        merge(item['path'], item['section'], item['body'])
