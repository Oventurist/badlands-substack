import sys,io,os,re,subprocess,datetime
BASE=r"C:/Users/14053/hermes-projects/badlands-substack"
WIKI=BASE+"/wiki"
LOCK=BASE+"/scripts/wiki_page_lock.py"
RAW="raw/badlands-news-brief-351.md"
REFLINE='Badlands News Brief \u2014 "Mid-Transition \u201cQAnon\u201d Claims & A Not Quite Final Farewell", URL: https://badlands.substack.com/p/badlands-news-brief-351'
TODAY="2026-08-06"

def find(slug):
    for d in ("entities","concepts"):
        p=os.path.join(WIKI,d,slug+".md")
        if os.path.exists(p): return p
    return None

def merge(slug, body):
    p=find(slug)
    if not p: print("MISSING",slug); return
    r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
    if r.returncode!=0:
        import time; time.sleep(5)
        r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
        if r.returncode!=0: print("LOCKED",slug); return
    try:
        t=io.open(p,encoding="utf-8",newline="").read()
        nl="\r\n" if "\r\n" in t else "\n"
        m=re.search(r"^sources: \[(.*?)\]\s*$",t,re.M)
        srcs=[s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW in srcs:
            n=srcs.index(RAW)+1; changed_src=False
        else:
            srcs.append(RAW); n=len(srcs); changed_src=True
            t=t[:m.start()]+"sources: ["+", ".join(srcs)+"]"+t[m.end():]
        t=re.sub(r"^updated:.*$","updated: "+TODAY,t,count=1,flags=re.M)
        txt=body.replace("[n]","[%d]"%n).replace("\n",nl)
        i=t.find("## References")
        if i<0:
            t=t.rstrip()+nl+nl+txt+nl+nl+"## References"+nl+"%d. %s"%(n,REFLINE)+nl
        else:
            head=t[:i].rstrip()+nl+nl+txt+nl+nl
            refs=t[i:].rstrip()
            if changed_src or ("%d. Badlands"%n) not in refs:
                refs=refs+nl+"%d. %s"%(n,REFLINE)
            t=head+refs+nl
        io.open(p,"w",encoding="utf-8",newline="").write(t)
        print("UPDATED",slug,"as [%d]"%n)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)

if __name__=="__main__":
    import json
    data=json.load(io.open(sys.argv[1],encoding="utf-8"))
    for slug,body in data:
        merge(slug,body)
