import sys,io,re,os
base=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
for slug in sys.argv[1:]:
    for d in ("entities","concepts"):
        p=os.path.join(base,d,slug+".md")
        if os.path.exists(p):
            t=io.open(p,encoding="utf-8").read()
            print("=== %s/%s"%(d,slug))
            for line in t.splitlines():
                if line.startswith(("sources:","updated:","type:","title:")):
                    print(line)
            i=t.rfind("## References")
            print(t[i:i+1200] if i>=0 else "(no refs)")
            print()
