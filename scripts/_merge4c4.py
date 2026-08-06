import re,sys,subprocess,time,os
BASE=r"C:/Users/14053/hermes-projects/badlands-substack"
RAW="raw/badlands-news-brief-4c4.md"
REF='Badlands Brief — "Badlands News Brief: Sovereign Statehood, Tariff Triumphs, & Intersectional Insubordination", URL: https://badlands.substack.com/p/badlands-news-brief-4c4'
LOCK=BASE+"/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities","concepts"):
        p=f"{BASE}/wiki/{d}/{slug}.md"
        if os.path.exists(p): return p
    return None

def merge(slug, section):
    p=find(slug)
    if not p: print("MISSING",slug); return
    for _ in range(20):
        r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
        if r.returncode==0: break
        time.sleep(3)
    else:
        print("LOCKFAIL",slug); return
    try:
        t=open(p,encoding="utf-8").read()
        m=re.search(r"^sources:\s*\[(.*?)\]\s*$",t,re.M)
        if m:
            items=[x.strip() for x in m.group(1).split(",") if x.strip()]
        else:
            items=[]
        if RAW in items:
            n=items.index(RAW)+1
        else:
            items.append(RAW); n=len(items)
            if m:
                t=t[:m.start()]+"sources: ["+", ".join(items)+"]"+t[m.end():]
        t=re.sub(r"^updated:.*$","updated: 2026-08-06",t,count=1,flags=re.M)
        body=section.replace("[n]",f"[{n}]").rstrip()+"\n"
        if "## References" in t:
            head,ref=t.split("## References",1)
            reflines=ref.rstrip()+"\n"
            if REF not in reflines:
                reflines=reflines+f"{n}. {REF}\n"
            t=head.rstrip()+"\n\n"+body+"\n## References"+ (reflines if reflines.startswith("\n") else "\n"+reflines.lstrip("\n"))
        else:
            t=t.rstrip()+"\n\n"+body+f"\n## References\n{n}. {REF}\n"
        open(p,"w",encoding="utf-8").write(t)
        print("OK",slug,n)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)
