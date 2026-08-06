import subprocess, sys, os, time
os.chdir(r'C:/Users/14053/hermes-projects/badlands-substack')
jobs = [
 ('hillary-clinton','wiki/entities/hillary-clinton.md','tmp/hrc.md'),
 ('robert-f-kennedy','wiki/entities/robert-f-kennedy.md','tmp/rfk.md'),
 ('robert-f-kennedy-jr','wiki/entities/robert-f-kennedy-jr.md','tmp/rfkjr.md'),
 ('martin-luther-king-jr','wiki/entities/martin-luther-king-jr.md','tmp/mlk.md'),
 ('tucker-carlson','wiki/entities/tucker-carlson.md','tmp/tucker.md'),
 ('sean-morgan','wiki/entities/sean-morgan.md','tmp/sm.md'),
 ('badlands-media','wiki/entities/badlands-media.md','tmp/bm.md'),
 ('rumble','wiki/entities/rumble.md','tmp/rumble.md'),
 ('twitter','wiki/entities/twitter.md','tmp/twitter.md'),
 ('deep-state','wiki/concepts/deep-state.md','tmp/ds.md'),
 ('great-awakening','wiki/concepts/great-awakening.md','tmp/ga.md'),
 ('military-industrial-complex','wiki/concepts/military-industrial-complex.md','tmp/mic.md'),
 ('information-war','wiki/concepts/information-war.md','tmp/iw.md'),
 ('clinton-body-count','wiki/concepts/clinton-body-count.md','tmp/cbc.md'),
]
T='Heroes of the Great Awakening'
U='https://badlands.substack.com/p/heroes-of-the-great-awakening'
for slug, path, pf in jobs:
    if not os.path.exists(pf):
        print('MISSING', pf); continue
    ok = False
    for attempt in range(6):
        r = subprocess.run([sys.executable,'scripts/wiki_page_lock.py','acquire',slug],capture_output=True,text=True)
        if 'ACQUIRED' in r.stdout:
            ok = True; break
        time.sleep(5)
    if not ok:
        print('LOCKFAIL', slug); continue
    r = subprocess.run([sys.executable,'scripts/merge_helper.py',path,'heroes-of-the-great-awakening',T,U,pf],capture_output=True,text=True)
    print(slug, r.stdout.strip(), r.stderr.strip()[:200])
    subprocess.run([sys.executable,'scripts/wiki_page_lock.py','release',slug],capture_output=True,text=True)
