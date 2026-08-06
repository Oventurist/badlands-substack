import sys, re, io, os
RAW="raw/badlands-news-brief-051.md"
REFLINE='Badlands News Brief — "Lawsuits Can Be Very Effective ...", URL: https://badlands.substack.com/p/badlands-news-brief-051'
DATE="2026-08-06"

def merge(path, section_tpl):
    t=open(path,encoding="utf-8").read()
    nl="\r\n" if "\r\n" in t else "\n"
    t=t.replace("\r\n","\n")
    m=re.search(r"^sources:\s*\[(.*?)\]\s*$", t, re.M)
    if not m: print("NOSOURCES",path); return
    items=[x.strip() for x in m.group(1).split(",") if x.strip()]
    if RAW in items:
        n=items.index(RAW)+1; changed_src=False
    else:
        items.append(RAW); n=len(items); changed_src=True
        t=t[:m.start()]+"sources: ["+", ".join(items)+"]"+t[m.end():]
    t=re.sub(r"^updated:.*$","updated: "+DATE,t,count=1,flags=re.M)
    sec=section_tpl.replace("[n]","[%d]"%n).strip()+"\n"
    if "## References" in t:
        i=t.index("## References")
        body=t[:i].rstrip()+"\n\n"+sec+"\n"
        refs=t[i:]
        if REFLINE not in refs:
            refs=refs.rstrip()+"\n%d. %s\n"%(n,REFLINE)
        t=body+refs
    else:
        t=t.rstrip()+"\n\n"+sec+"\n\n## References\n%d. %s\n"%(n,REFLINE)
    open(path,"w",encoding="utf-8",newline=nl).write(t)
    print("OK",path,"n=",n)
