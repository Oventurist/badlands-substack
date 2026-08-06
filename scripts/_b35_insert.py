import io,sys,json
# usage: python _b35_insert.py payload.json
data=json.load(io.open(sys.argv[1],encoding='utf-8'))
for slug,(d,body) in data.items():
    p=f'C:/Users/14053/hermes-projects/badlands-substack/wiki/{d}/{slug}.md'
    t=io.open(p,encoding='utf-8').read()
    i=t.index('## References')
    t=t[:i]+body.strip()+'\n\n'+t[i:]
    io.open(p,'w',encoding='utf-8').write(t)
    print('ins',slug)
