import subprocess, sys, os, glob
base = 'C:/Users/14053/hermes-projects/badlands-substack'
RAW='badlands-news-brief-a6c'
TITLE='Badlands News Brief: An Avalanche of Action & A Triple Front Freeze'
URL='https://badlands.substack.com/p/badlands-news-brief-a6c'
secdir = sys.argv[1]
for f in sorted(glob.glob(secdir + '/*.txt')):
    name = os.path.basename(f)[:-4]
    kind, slug = name.split('__', 1)
    path = '%s/wiki/%s/%s.md' % (base, kind, slug)
    if not os.path.exists(path):
        print('MISSING', path); continue
    r = subprocess.run([sys.executable, base+'/scripts/wiki_page_lock.py', 'acquire', slug], capture_output=True, text=True)
    tries=0
    while r.returncode != 0 and tries < 10:
        import time; time.sleep(4); tries+=1
        r = subprocess.run([sys.executable, base+'/scripts/wiki_page_lock.py', 'acquire', slug], capture_output=True, text=True)
    if r.returncode != 0:
        print('LOCKFAIL', slug); continue
    try:
        out = subprocess.run([sys.executable, base+'/scripts/merge_helper.py', path, RAW, TITLE, URL, f], capture_output=True, text=True)
        print(slug, out.stdout.strip(), out.stderr.strip()[:200])
    finally:
        subprocess.run([sys.executable, base+'/scripts/wiki_page_lock.py', 'release', slug], capture_output=True, text=True)
