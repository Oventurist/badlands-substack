import io, os, re, sys, json, subprocess, time

BASE = r'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = BASE + '/wiki'
LOCK = BASE + '/scripts/wiki_page_lock.py'
SRC = 'badlands-brief-7bf.md'
SLUG = SRC[:-3]
REF = 'Badlands Brief \u2014 "Entertaining Obstruction & Artificial Shadow Wars", URL: https://badlands.substack.com/p/%s' % SLUG

created = updated = 0

def find(slug):
    for d in ('entities', 'concepts'):
        p = os.path.join(WIKI, d, slug + '.md')
        if os.path.exists(p):
            return p
    return None

def lock(action, slug):
    return subprocess.run([sys.executable, LOCK, action, slug], capture_output=True, text=True).returncode

def do(slug, meta):
    global created, updated
    body = meta['body']
    path = find(slug)
    if not path:
        d = 'concepts' if meta.get('type') == 'concept' else 'entities'
        path = os.path.join(WIKI, d, slug + '.md')
        fm = ('---\ntitle: %s\ncreated: 2026-08-06\nupdated: 2026-08-06\ntype: %s\ntags: [%s]\n'
              'sources: [raw/%s]\nconfidence: %s\ncontested: false\n---\n# %s\n\n'
              % (meta['title'], meta.get('type', 'entity'), meta.get('tags', ''), SRC,
                 meta.get('confidence', 'medium'), meta['title']))
        text = fm + body.replace('{n}', '1').strip() + '\n\n## References\n1. ' + REF + '\n'
        io.open(path, 'w', encoding='utf-8', newline='').write(text)
        created += 1
        print('created', slug)
        return
    ok = False
    for _ in range(15):
        if lock('acquire', slug) == 0:
            ok = True
            break
        time.sleep(4)
    if not ok:
        print('LOCKED-SKIP', slug)
        return
    try:
        t = io.open(path, encoding='utf-8').read()
        nl = '\r\n' if '\r\n' in t[:400] else '\n'
        t = t.replace('\r\n', '\n')
        if 'raw/' + SRC not in t:
            m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
            items = [x.strip() for x in m.group(1).split(',') if x.strip()]
            items.append('raw/' + SRC)
            t = t[:m.start()] + 'sources: [%s]' % ', '.join(sorted(set(items))) + t[m.end():]
        t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
        mr = re.search(r'^## References\s*$', t, re.M)
        if mr:
            head, tail = t[:mr.start()].rstrip(), t[mr.start():].rstrip()
            nums = [int(x) for x in re.findall(r'^(\d+)\.\s', tail, re.M)]
            if SLUG in tail:
                n = None
                use = str(max(nums) if nums else 1)
            else:
                n = (max(nums) + 1) if nums else 1
                use = str(n)
            t = head + '\n\n' + body.replace('{n}', use).strip() + '\n\n' + tail
            t += ('\n%d. %s\n' % (n, REF)) if n else '\n'
        else:
            t = t.rstrip() + '\n\n' + body.replace('{n}', '1').strip() + '\n\n## References\n1. ' + REF + '\n'
        io.open(path, 'w', encoding='utf-8', newline='').write(t.replace('\n', nl))
        updated += 1
        print('updated', slug)
    finally:
        lock('release', slug)

if __name__ == '__main__':
    for f in sys.argv[1:]:
        data = json.load(io.open(f, encoding='utf-8'))
        for slug, meta in data.items():
            do(slug, meta)
    print('TOTAL created', created, 'updated', updated)
