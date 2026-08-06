import re, sys, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-01d.md"
REFTXT = 'Badlands News Brief — "Durham\'s Dance, Putin\'s Warning and Xi\'s Rebuke", URL: https://badlands.substack.com/p/badlands-news-brief-01d'

def merge(relpath, body_fn):
    p = os.path.join(BASE, relpath)
    s = open(p, encoding='utf-8').read()
    nl = '\r\n' if '\r\n' in s else '\n'
    m = re.search(r'^sources: \[(.*?)\]\s*$', s, re.M)
    srcs = [x.strip() for x in m.group(1).split(',') if x.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    s = s[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + s[m.end():]
    s = re.sub(r'^updated: .*$', 'updated: 2026-08-06', s, count=1, flags=re.M)
    body = body_fn(n).strip().replace('\n', nl)
    idx = s.find('## References')
    refline = '%d. %s' % (n, REFTXT)
    if idx == -1:
        s = s.rstrip() + nl+nl + body + nl+nl + '## References' + nl+nl + refline + nl
    else:
        head = s[:idx].rstrip()
        tail = s[idx:].rstrip()
        s = head + nl+nl + body + nl+nl + tail + nl + refline + nl
    open(p, 'w', encoding='utf-8', newline='').write(s)
    print('merged', relpath, 'as [%d]' % n)
