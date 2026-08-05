import io, os, re, sys, json, subprocess, time

WIKI = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
LOCK = r'C:/Users/14053/hermes-projects/badlands-substack/scripts/wiki_page_lock.py'
SRC = 'badlands-brief-7bf.md'
SLUG = SRC[:-3]
REFTITLE = 'Badlands Brief \u2014 "Entertaining Obstruction & Artificial Shadow Wars", URL: https://badlands.substack.com/p/%s' % SLUG


def find(slug):
    for d in ('entities', 'concepts'):
        p = os.path.join(WIKI, d, slug + '.md')
        if os.path.exists(p):
            return p
    return None


def acquire(slug):
    for _ in range(12):
        r = subprocess.run([sys.executable, LOCK, 'acquire', slug], capture_output=True, text=True)
        if r.returncode == 0:
            return True
        time.sleep(4)
    return False


def release(slug):
    subprocess.run([sys.executable, LOCK, 'release', slug], capture_output=True, text=True)


def merge(slug, body):
    path = find(slug)
    if not path:
        print('MISSING', slug)
        return 0
    if not acquire(slug):
        print('LOCKED', slug)
        return 0
    try:
        t = io.open(path, encoding='utf-8').read()
        nl = '\r\n' if '\r\n' in t[:400] else '\n'
        t = t.replace('\r\n', '\n')
        if 'raw/' + SRC not in t:
            m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
            items = [x.strip() for x in m.group(1).split(',') if x.strip()]
            items.append('raw/' + SRC)
            items = sorted(set(items))
            t = t[:m.start()] + 'sources: [%s]' % ', '.join(items) + t[m.end():]
        t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
        mr = re.search(r'^## References\s*$', t, re.M)
        if mr:
            head = t[:mr.start()].rstrip()
            tail = t[mr.start():].rstrip()
            nums = [int(x) for x in re.findall(r'^(\d+)\.\s', tail, re.M)]
            n = (max(nums) + 1) if nums else 1
            if SLUG in tail:
                n = None
            b = body.replace('{n}', str(n if n else nums[-1]))
            t = head + '\n\n' + b.strip() + '\n\n' + tail + ('\n%d. %s\n' % (n, REFTITLE) if n else '\n')
        else:
            t = t.rstrip() + '\n\n' + body.replace('{n}', '1').strip() + '\n\n## References\n1. ' + REFTITLE + '\n'
        io.open(path, 'w', encoding='utf-8', newline='').write(t.replace('\n', nl))
        print('merged', slug)
        return 1
    finally:
        release(slug)


if __name__ == '__main__':
    data = json.load(io.open(sys.argv[1], encoding='utf-8'))
    c = 0
    for slug, body in data.items():
        c += merge(slug, body)
    print('updated', c)
