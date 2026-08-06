# -*- coding: utf-8 -*-
import io, os, re, sys, json, subprocess, time

WIKI = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
LOCK = r'C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py'
SRC = 'badlands-news-brief-02f.md'
SLUG = 'badlands-news-brief-02f'
REFLINE = '%d. Badlands Brief \u2014 "Lavish Courtships, Extremely Strong Relations, & Fake Election Rituals", URL: https://badlands.substack.com/p/badlands-news-brief-02f'

def find(slug):
    for d in ('entities', 'concepts'):
        p = os.path.join(WIKI, d, slug + '.md')
        if os.path.exists(p):
            return p
    return None

def merge(slug, body):
    p = find(slug)
    if not p:
        print('MISSING', slug); return
    subprocess.call([sys.executable, LOCK, 'acquire', slug])
    try:
        t = io.open(p, encoding='utf-8').read()
        nl = '\r\n' if '\r\n' in t[:400] else '\n'
        t = t.replace('\r\n', '\n')
        m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
        items = [x.strip() for x in m.group(1).split(',') if x.strip()]
        tag = 'raw/%s' % SRC
        if tag not in items:
            items.append(tag)
        n = items.index(tag) + 1
        t = t[:m.start()] + 'sources: [%s]' % ', '.join(items) + t[m.end():]
        t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
        b = body.strip().replace('[n]', '[%d]' % n)
        mr = re.search(r'^## References\s*$', t, re.M)
        if mr:
            head, tail = t[:mr.start()].rstrip(), t[mr.start():].rstrip()
            if SLUG not in tail:
                tail = tail + '\n' + (REFLINE % n)
            t = head + '\n\n' + b + '\n\n' + tail + '\n'
        else:
            t = t.rstrip() + '\n\n' + b + '\n\n## References\n' + (REFLINE % n) + '\n'
        io.open(p, 'w', encoding='utf-8', newline='').write(t.replace('\n', nl))
        print('ok', slug, '->', n)
    finally:
        subprocess.call([sys.executable, LOCK, 'release', slug])

if __name__ == '__main__':
    data = json.load(io.open(sys.argv[1], encoding='utf-8'))
    for slug, body in data.items():
        merge(slug, body)
