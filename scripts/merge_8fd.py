import re,sys,subprocess,os,json,time
ROOT=r"C:/Users/14053/hermes-projects/badlands-substack"
RAW="raw/badlands-news-brief-8fd.md"
REFLINE='Badlands Brief — "Badlands News Brief: Manic Midterms, Menopausal Marxists, & Musical Pipe Bombs", URL: https://badlands.substack.com/p/badlands-news-brief-8fd'
LOCK=ROOT+"/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities","concepts"):
        p=f"{ROOT}/wiki/{d}/{slug}.md"
        if os.path.exists(p): return p
    return None

def update(slug, heading, body):
    p=find(slug)
    if not p: print("MISSING",slug); return
    for _ in range(10):
        r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
        if r.returncode==0: break
        time.sleep(4)
    else:
        print("LOCKFAIL",slug); return
    try:
        t=open(p,encoding="utf-8").read()
        m=re.search(r"^sources:\s*\[(.*?)\]\s*$",t,re.M)
        if not m:
            print("NOSOURCES",slug); return
        items=[x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW in items:
            n=items.index(RAW)+1
        else:
            items.append(RAW); n=len(items)
            t=t[:m.start()]+"sources: ["+", ".join(items)+"]"+t[m.end():]
        t=re.sub(r"^updated:.*$","updated: 2026-08-06",t,count=1,flags=re.M)
        text=body.replace("[n]",f"[{n}]")
        sec=f"\n## {heading}\n\n{text}\n"
        if "## References" in t:
            i=t.index("## References")
            head=t[:i].rstrip()+"\n"+sec+"\n"
            refs=t[i:].rstrip()
            nums=[int(x) for x in re.findall(r"^(\d+)\.",refs,re.M)]
            if n not in nums:
                refs+=f"\n{n}. {REFLINE}"
            t=head+refs+"\n"
        else:
            t=t.rstrip()+"\n"+sec+f"\n## References\n{n}. {REFLINE}\n"
        open(p,"w",encoding="utf-8").write(t)
        print("UPDATED",slug,n)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)

if __name__=="__main__":
    data=json.load(open(sys.argv[1],encoding="utf-8"))
    for slug,(h,b) in data.items():
        update(slug,h,b)
