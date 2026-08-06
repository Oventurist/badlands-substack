import sys, re, io, os, json, subprocess
BASE=r"C:/Users/14053/hermes-projects/badlands-substack"
RAW="the-decade-we-all-became-slaves"
REFLINE='Badlands Brief \u2014 "The Decade We All Became Slaves", URL: https://badlands.substack.com/p/the-decade-we-all-became-slaves'
LOCK=BASE+"/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities","concepts"):
        p=f"{BASE}/wiki/{d}/{slug}.md"
        if os.path.exists(p): return p
    return None

def merge(slug, body_tmpl):
    p=find(slug)
    if not p: return ("MISSING",slug,None)
    r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
    if r.returncode!=0: return ("BUSY",slug,None)
    try:
        t=io.open(p,encoding="utf-8").read()
        m=re.search(r'^sources:\s*\[(.*?)\]\s*$',t,re.M)
        if not m: return ("NOSRC",slug,None)
        items=[x.strip() for x in m.group(1).split(",") if x.strip()]
        tgt=f"raw/{RAW}.md"
        if tgt in items:
            n=items.index(tgt)+1
        else:
            items.append(tgt); n=len(items)
            t=t[:m.start()]+"sources: ["+", ".join(items)+"]"+t[m.end():]
        t=re.sub(r'^updated:.*$','updated: 2026-08-06',t,count=1,flags=re.M)
        body=body_tmpl.replace("[n]",f"[{n}]")
        if "## References" in t:
            head,ref=t.split("## References",1)
            reflines=ref.rstrip()
            if REFLINE not in reflines:
                reflines=reflines+f"\n{n}. {REFLINE}"
            t=head.rstrip()+"\n\n"+body.strip()+"\n\n## References"+reflines+"\n"
        else:
            t=t.rstrip()+"\n\n"+body.strip()+f"\n\n## References\n{n}. {REFLINE}\n"
        io.open(p,"w",encoding="utf-8",newline="\n").write(t)
        return ("OK",slug,n)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)

if __name__=="__main__":
    data=json.load(io.open(sys.argv[1],encoding="utf-8"))
    for slug,body in data.items():
        print(merge(slug,body))
