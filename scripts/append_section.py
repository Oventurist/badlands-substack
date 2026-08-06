import sys, re, io, json

def run(path, basename, refline, section):
    with open(path, 'r', encoding='utf-8', newline='') as f:
        txt = f.read()
    nl = '\r\n' if '\r\n' in txt else '\n'
    m = re.search(r'^sources: \[(.*?)\]', txt, re.M)
    if not m:
        raise SystemExit('no sources line in ' + path)
    items = [x.strip() for x in m.group(1).split(',') if x.strip()]
    src = 'raw/%s.md' % basename
    if src in items:
        n = items.index(src) + 1
        newsrc = m.group(0)
    else:
        items.append(src)
        n = len(items)
        newsrc = 'sources: [%s]' % ', '.join(items)
    txt = txt[:m.start()] + newsrc + txt[m.end():]
    txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
    body = section.replace('{n}', str(n)).replace('\r\n', '\n').replace('\n', nl)
    ref = ('%d. %s' % (n, refline)).replace('\n', nl)
    if not txt.endswith(nl):
        txt += nl
    txt += nl + body.rstrip() + nl + nl + ref + nl
    with open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(txt)
    print('%s -> [%d]' % (path, n))

if __name__ == '__main__':
    spec = json.load(open(sys.argv[1], encoding='utf-8'))
    for item in spec['pages']:
        run(item['path'], spec['basename'], spec['refline'], item['section'])
