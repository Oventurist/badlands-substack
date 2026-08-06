# -*- coding: utf-8 -*-
import io, os, re, subprocess, sys
ROOT = r'C:/Users/14053/hermes-projects/badlands-substack'
RAW = 'badlands-news-brief-f6e'
REF = 'Badlands Brief \u2014 "Badlands News Brief: Ghost Puppeteers, Sudanese Solutions, & Pam Bondi\'s Desk", URL: https://badlands.substack.com/p/badlands-news-brief-f6e'
LOCK = ROOT + '/scripts/wiki_page_lock.py'

def find(slug):
    for d in ('entities', 'concepts'):
        p = '%s/wiki/%s/%s.md' % (ROOT, d, slug)
        if os.path.exists(p):
            return p
    return None

def merge(path, body):
    txt = io.open(path, encoding='utf-8').read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
    if not m:
        print('NOSOURCES ' + path); return
    items = [x.strip() for x in m.group(1).split(',') if x.strip()]
    entry = 'raw/%s.md' % RAW
    if entry in items:
        n = items.index(entry) + 1
    else:
        items.append(entry); n = len(items)
        txt = txt[:m.start()] + 'sources: [%s]' % ', '.join(items) + txt[m.end():]
    txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
    b = body.replace('{N}', str(n)).strip() + '\n'
    if '## References' in txt:
        head, refs = txt.rsplit('## References', 1)
        reflines = [l.strip() for l in refs.strip().split('\n') if l.strip()]
        if not any(l.startswith('%d.' % n) for l in reflines):
            reflines.append('%d. %s' % (n, REF))
        txt = head.rstrip('\n') + '\n\n' + b + '\n## References\n' + '\n'.join(reflines) + '\n'
    else:
        txt = txt.rstrip('\n') + '\n\n' + b + '\n## References\n%d. %s\n' % (n, REF)
    io.open(path, 'w', encoding='utf-8').write(txt)
    print('MERGED n=%d %s' % (n, path))

def run(updates):
    for slug, body in updates:
        p = find(slug)
        if not p:
            print('MISSING ' + slug); continue
        r = subprocess.call([sys.executable, LOCK, 'acquire', slug])
        if r != 0:
            print('BUSY ' + slug); continue
        try:
            merge(p, body)
        finally:
            subprocess.call([sys.executable, LOCK, 'release', slug])
