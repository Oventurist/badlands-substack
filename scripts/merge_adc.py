import re,sys,io,os
BASE=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW="raw/badlands-news-brief-adc.md"
REF='Badlands Brief — "Badlands News Brief: Globalists Panic as Populism Takes Over the Zeitgeist", URL: https://badlands.substack.com/p/badlands-news-brief-adc'

def merge(path, section):
    p=os.path.join(BASE,path)
    t=io.open(p,encoding="utf-8").read()
    nl="\r\n" if "\r\n" in t else "\n"
    t=t.replace("\r\n","\n")
    m=re.search(r"^sources: \[(.*?)\]$",t,re.M)
    srcs=[s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW not in srcs: srcs.append(RAW)
    n=srcs.index(RAW)+1
    t=t[:m.start()]+"sources: ["+", ".join(srcs)+"]"+t[m.end():]
    t=re.sub(r"^updated: .*$","updated: 2026-08-06",t,count=1,flags=re.M)
    body=section.replace("{N}",str(n)).strip()
    if "## References" in body:
        raise SystemExit("bad")
    idx=t.find("## References")
    refline="%d. %s"%(n,REF)
    if idx==-1:
        t=t.rstrip()+"\n\n"+body+"\n\n## References\n"+refline+"\n"
    else:
        head=t[:idx].rstrip()
        tail=t[idx:].rstrip()
        if refline not in tail:
            tail=tail+"\n"+refline
        t=head+"\n\n"+body+"\n\n"+tail+"\n"
    io.open(p,"w",encoding="utf-8",newline=nl).write(t)
    print("merged",path,"as [%d]"%n)
