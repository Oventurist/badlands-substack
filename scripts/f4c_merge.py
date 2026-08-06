import sys, re, io, os
BASE=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW="raw/badlands-news-brief-f4c.md"
REF='Badlands Brief — "Badlands News Brief: Dollars, Saudis and Globalist Elites", URL: https://badlands.substack.com/p/badlands-news-brief-f4c'
slug=sys.argv[1]
p=None
for d in ("entities","concepts"):
    q=os.path.join(BASE,d,slug+".md")
    if os.path.exists(q): p=q
if not p: print("MISSING"); sys.exit(2)
t=io.open(p,encoding="utf-8").read()
m=re.search(r"^sources:\s*\[(.*?)\]\s*$", t, re.M)
if not m: print("NOSRC"); sys.exit(3)
items=[x.strip() for x in m.group(1).split(",") if x.strip()]
if RAW in items:
    n=items.index(RAW)+1
    print(n); sys.exit(0)
items.append(RAW); n=len(items)
t=t[:m.start()]+"sources: ["+", ".join(items)+"]"+t[m.end():]
t=re.sub(r"^updated:.*$","updated: 2026-08-06",t,count=1,flags=re.M)
if "## References" not in t:
    t=t.rstrip()+"\n\n## References\n\n"
t=t.rstrip()+"\n%d. %s\n"%(n,REF)
io.open(p,"w",encoding="utf-8",newline="\n").write(t)
print(n)
