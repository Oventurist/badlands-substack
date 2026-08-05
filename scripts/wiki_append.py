import sys, re, io, os

def run(path, src, body):
    with io.open(path, encoding='utf-8') as f:
        t = f.read()
    nl = '\r\n' if '\r\n' in t[:400] else '\n'
    t = t.replace('\r\n', '\n')
    slug = src[:-3]
    if 'raw/%s' % src not in t:
        m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
        items = [x.strip() for x in m.group(1).split(',') if x.strip()]
        items.append('raw/%s' % src)
        items = sorted(set(items))
        t = t[:m.start()] + 'sources: [%s]' % ', '.join(items) + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    body = body.strip()
    ms = re.search(r'^## Sources\s*$', t, re.M)
    if ms:
        head, tail = t[:ms.start()], t[ms.start():]
        link = '- [%s](https://badlands.substack.com/p/%s)' % (slug.replace('-', ' '), slug)
        if slug not in tail:
            tail = tail.rstrip() + '\n' + link + '\n'
        t = head.rstrip() + '\n\n' + body + '\n\n' + tail
    else:
        t = t.rstrip() + '\n\n' + body + '\n'
    with io.open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(t.replace('\n', nl))
    print('ok', os.path.basename(path))

if __name__ == '__main__':
    run(sys.argv[1], sys.argv[2], sys.stdin.read())
