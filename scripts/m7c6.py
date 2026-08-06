# -*- coding: utf-8 -*-
import sys, re, io, os, subprocess, json
BASE = r'C:/Users/14053/hermes-projects/badlands-substack'
RAW = 'badlands-news-brief-7c6'
REFTXT = 'Badlands Brief \u2014 "Badlands News Brief: Trump\u2019s Defense Rests, but the Info War Accelerates", URL: https://badlands.substack.com/p/badlands-news-brief-7c6'

def find(slug):
    for d in ('entities', 'concepts'):
        p = '%s/wiki/%s/%s.md' % (BASE, d, slug)
        if os.path.exists(p):
            return p
    return None

def merge(slug, heading, body):
    p = find(slug)
    if not p:
        print('MISSING', slug); return
    lk = subprocess.run([sys.executable, BASE + '/scripts/wiki_page_lock.py', 'acquire', slug])
    if lk.returncode != 0:
        print('BUSY', slug); return
    try:
        txt = io.open(p, encoding='utf-8').read()
        m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
        items = [x.strip() for x in m.group(1).split(',') if x.strip()]
        tag = 'raw/%s.md' % RAW
        if tag not in items:
            items.append(tag)
        n = items.index(tag) + 1
        txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
        txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
        chunk = '## %s\n\n%s\n' % (heading, body.replace('{n}', str(n)).strip())
        refline = '%d. %s\n' % (n, REFTXT)
        if '## References' in txt:
            head, refs = txt.rsplit('## References', 1)
            if RAW in refs:
                print('ALREADY', slug); return
            txt = head.rstrip() + '\n\n' + chunk + '\n## References' + refs.rstrip() + '\n' + refline
        else:
            txt = txt.rstrip() + '\n\n' + chunk + '\n## References\n\n' + refline
        io.open(p, 'w', encoding='utf-8', newline='\n').write(txt)
        print('OK', slug, n)
    finally:
        subprocess.run([sys.executable, BASE + '/scripts/wiki_page_lock.py', 'release', slug])

if __name__ == '__main__':
    data = json.load(io.open(sys.argv[1], encoding='utf-8'))
    for slug, heading, body in data:
        merge(slug, heading, body)
