import io,os,re,sys,datetime
W=r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
new=["entities/tucker-carlson.md","entities/kevin-hassett.md","entities/national-economic-council.md","entities/john-kiriakou.md","entities/max-miller.md","entities/chabad-lubavitch.md","entities/republican-jewish-coalition.md","entities/rt.md","entities/zerohedge.md","entities/axios.md","entities/marc-caputo.md","entities/sean-hannity.md","entities/gideon-saar.md","entities/ali-larijani.md","entities/kharg-island.md","entities/cuba.md","entities/miguel-diaz-canel.md","entities/raul-castro.md","entities/raulito-castro.md","entities/fidel-castro.md","entities/antifa.md","entities/benjamin-song.md","entities/prairieland-detention-center.md","concepts/foreign-agents-registration-act.md","concepts/hegelian-dialectic.md","concepts/badlands-brief-095.md"]
bad=set()
for f in new:
    t=io.open(os.path.join(W,f),encoding='utf-8').read()
    for m in re.findall(r"\[\[([^\]\|]+)",t):
        s=m.strip()
        if not (os.path.exists(os.path.join(W,'entities',s+'.md')) or os.path.exists(os.path.join(W,'concepts',s+'.md'))):
            bad.add((f,s))
print("BROKEN:",sorted(bad) if bad else "none")
