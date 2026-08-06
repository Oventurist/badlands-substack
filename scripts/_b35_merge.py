import re,sys,io
RAW='raw/badlands-news-brief-b35.md'
REF='Badlands Brief — "Badlands News Brief: Trump & Musk Meet as RINOs Run for the Hills", URL: https://badlands.substack.com/p/badlands-news-brief-b35'
for slug in sys.argv[1:]:
    for d in ('entities','concepts'):
        p=f'C:/Users/14053/hermes-projects/badlands-substack/wiki/{d}/{slug}.md'
        try: t=io.open(p,encoding='utf-8').read()
        except OSError: continue
        m=re.search(r'^sources: \[(.*?)\]\s*$',t,re.M)
        items=[x.strip() for x in m.group(1).split(',') if x.strip()]
        if RAW in items:
            n=items.index(RAW)+1
        else:
            items.append(RAW); n=len(items)
            t=t[:m.start()]+'sources: ['+', '.join(items)+']'+t[m.end():]
            t=re.sub(r'^updated: .*$','updated: 2026-08-06',t,count=1,flags=re.M)
            if '## References' in t:
                t=t.rstrip()+f'\n{n}. {REF}\n'
            else:
                t=t.rstrip()+f'\n\n## References\n{n}. {REF}\n'
        io.open(p,'w',encoding='utf-8').write(t)
        print(slug,n)
