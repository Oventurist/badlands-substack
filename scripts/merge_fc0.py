import sys, re, io, os, subprocess
BASE=r"C:/Users/14053/hermes-projects/badlands-substack"
RAW="raw/badlands-news-brief-fc0.md"
REF='Badlands Brief — "Simple Policy Sessions & Problematic Narrative Seeds", URL: https://badlands.substack.com/p/badlands-news-brief-fc0'
LOCK=BASE+"/scripts/wiki_page_lock.py"

def merge(path, slug, section):
    txt=open(path, encoding="utf-8").read()
    nl="\r\n" if "\r\n" in txt else "\n"
    t=txt.replace("\r\n","\n")
    m=re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    srcs=[s.strip() for s in m.group(1).split(",") if s.strip()]
    if RAW in srcs:
        n=srcs.index(RAW)+1
        already=True
    else:
        srcs.append(RAW); n=len(srcs); already=False
        t=t[:m.start()]+"sources: ["+", ".join(srcs)+"]"+t[m.end():]
    t=re.sub(r"^updated: .*$","updated: 2026-08-06",t,count=1,flags=re.M)
    body=section.replace("[n]","[%d]"%n).strip()
    if "## References" in t:
        head,ref=t.rsplit("## References",1)
        reflines=[l for l in ref.strip().split("\n") if l.strip()]
        if not already:
            reflines.append("%d. %s"%(n,REF))
        t=head.rstrip()+"\n\n"+body+"\n\n## References\n"+"\n".join(reflines)+"\n"
    else:
        t=t.rstrip()+"\n\n"+body+"\n\n## References\n%d. %s\n"%(n,REF)
    open(path,"w",encoding="utf-8",newline=nl).write(t)
    print("merged",slug,"as [%d]"%n)

def run(slug, folder, section):
    path="%s/wiki/%s/%s.md"%(BASE,folder,slug)
    r=subprocess.run([sys.executable,LOCK,"acquire",slug],capture_output=True,text=True)
    if r.returncode!=0:
        print("BUSY",slug); return False
    try:
        merge(path,slug,section)
    finally:
        subprocess.run([sys.executable,LOCK,"release",slug],capture_output=True,text=True)
    return True
