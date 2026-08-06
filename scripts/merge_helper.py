import sys, re, io, os
def merge(path, raw, reftext, section):
    s = io.open(path, encoding='utf-8').read()
    nl = '\r\n' if '\r\n' in s else '\n'
    m = re.search(r'^sources: \[(.*?)\]\s*$', s, re.M)
    items = [x.strip() for x in m.group(1).split(',') if x.strip()]
    if raw not in items:
        items.append(raw)
        s = s[:m.start()] + 'sources: [' + ', '.join(items) + ']' + s[m.end():]
    n = items.index(raw) + 1
    s = re.sub(r'^updated: .*$', 'updated: 2026-08-06', s, count=1, flags=re.M)
    # find references section
    i = s.rindex('## References')
    body = s[:i].rstrip() + nl + nl + section.replace('{n}', str(n)).replace('\n', nl) + nl + nl
    refs = s[i:].rstrip()
    # determine next ref number
    nums = [int(x) for x in re.findall(r'^(\d+)\.\s', refs, re.M)]
    nxt = max(nums) + 1 if nums else 1
    if nxt != n:
        print('WARN number mismatch', path, nxt, n)
    refs = refs + nl + '%d. %s' % (n, reftext) + nl
    io.open(path, 'w', encoding='utf-8', newline='').write(body + refs)
    print('OK', path, 'cite', n)

if __name__ == '__main__':
    pass
