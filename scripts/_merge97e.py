import os,re,subprocess,sys,json,time
BASE=r"C:/Users/14053/hermes-projects/badlands-substack"
RAW="raw/badlands-news-brief-97e.md"
TITLE='Badlands News Brief — "Clinton\'s Count, Biden\'s Cancer, & America\'s Credit"'
URL="https://badlands.substack.com/p/badlands-news-brief-97e"
LOCK=BASE+"/scripts/wiki_page_lock.py"

def merge(rel, body_tpl):
    slug=os.path.basename(rel)
    path=f"{BASE}/wiki/{rel}.md"
    for attempt in range(12):
        r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
        if r.returncode==0: break
        time.sleep(5)
    else:
        print("LOCKFAIL",slug); return
    try:
        t=open(path,encoding="utf-8").read()
        m=re.search(r"^sources:\s*\[(.*?)\]\s*$",t,re.M)
        srcs=[s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs: srcs.append(RAW)
        n=srcs.index(RAW)+1
        t=t[:m.start()]+"sources: ["+", ".join(srcs)+"]"+t[m.end():]
        t=re.sub(r"^updated:.*$","updated: 2026-08-06",t,count=1,flags=re.M)
        body=body_tpl.replace("{n}",str(n)).rstrip()+"\n"
        refline=f"{n}. Badlands Brief — \"Clinton's Count, Biden's Cancer, & America's Credit\", URL: {URL}\n"
        if "## References" in t:
            if refline.strip() not in t:
                t=t.rstrip("\n")+"\n"+refline
            idx=t.index("## References")
            t=t[:idx].rstrip("\n")+"\n\n"+body+"\n"+t[idx:]
        else:
            t=t.rstrip("\n")+"\n\n"+body+"\n\n## References\n"+refline
        open(path,"w",encoding="utf-8").write(t)
        print("MERGED",slug,n)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)

if __name__=="__main__":
    data=json.load(open(BASE+"/scripts/_m97e.json",encoding="utf-8"))
    for rel,body in data.items(): merge(rel,body)
