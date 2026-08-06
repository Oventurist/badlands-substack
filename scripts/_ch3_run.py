import subprocess, sys, os, io, time
BASE = r'C:/Users/14053/hermes-projects/badlands-substack'
REF = 'Badlands Brief — "Q for Dummies - Chapter 3", URL: https://badlands.substack.com/p/q-for-dummies-chapter-3'
RAW = 'q-for-dummies-chapter-3'
sys.path.insert(0, os.path.join(BASE, 'scripts'))
from _ch3_merge import SECTIONS

def run(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True)

for (folder, slug), sec in SECTIONS.items():
    path = '%s/wiki/%s/%s.md' % (BASE, folder, slug)
    if not os.path.exists(path):
        print('MISSING', path); continue
    ok = False
    for _ in range(6):
        r = run('python "%s/scripts/wiki_page_lock.py" acquire %s' % (BASE, slug))
        if r.returncode == 0:
            ok = True; break
        time.sleep(2)
    if not ok:
        print('LOCKFAIL', slug); continue
    try:
        tmp = os.path.join(BASE, 'scripts', '_sec_%s.tmp' % slug)
        with io.open(tmp, 'w', encoding='utf-8') as f:
            f.write(sec)
        r = run('python "%s/scripts/merge_helper.py" "%s" %s "%s" "%s"' % (BASE, path, RAW, REF, tmp))
        print(slug, r.returncode, r.stdout.strip(), r.stderr.strip()[-200:])
        os.remove(tmp)
    finally:
        run('python "%s/scripts/wiki_page_lock.py" release %s' % (BASE, slug))
