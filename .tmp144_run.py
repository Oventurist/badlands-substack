import os, subprocess, sys, io
base = r'C:/Users/14053/hermes-projects/badlands-substack'
raw = 'badlands-news-brief-144'
title = 'Cartels, Crucibles, & Convictions'
url = 'https://badlands.substack.com/p/badlands-news-brief-144'
tmp = os.path.join(base, '.tmp144')
lock = os.path.join(base, 'scripts', 'wiki_page_lock.py')
app = os.path.join(base, 'scripts', 'wiki_append.py')
for fn in sorted(os.listdir(tmp)):
    if not fn.endswith('.md') or fn == 'trump.md':
        continue
    slug = fn[:-3]
    p = None
    for d in ('entities', 'concepts'):
        cand = os.path.join(base, 'wiki', d, slug + '.md')
        if os.path.exists(cand):
            p = cand
    if not p:
        print('MISSING', slug); continue
    r = subprocess.run([sys.executable, lock, 'acquire', slug], capture_output=True, text=True)
    if r.returncode != 0:
        print('BUSY', slug); continue
    try:
        r2 = subprocess.run([sys.executable, app, p, raw, title, url, os.path.join(tmp, fn)], capture_output=True, text=True)
        print(slug, r2.returncode, r2.stdout.strip(), r2.stderr.strip()[-200:])
    finally:
        subprocess.run([sys.executable, lock, 'release', slug], capture_output=True, text=True)
