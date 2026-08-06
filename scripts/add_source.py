import sys,re,io
path,basename=sys.argv[1],sys.argv[2]
s=io.open(path,encoding='utf-8').read()
m=re.search(r'^sources: \[(.*?)\]\s*$',s,re.M)
items=[x.strip() for x in m.group(1).split(',') if x.strip()]
tgt='raw/%s.md'%basename
if tgt in items:
    print(items.index(tgt)+1)
else:
    items.append(tgt)
    s=s[:m.start()]+'sources: ['+', '.join(items)+']'+s[m.end():]
    s=re.sub(r'^updated: .*$','updated: 2026-08-06',s,count=1,flags=re.M)
    io.open(path,'w',encoding='utf-8',newline='').write(s)
    print(len(items))
