import re, sys, io

REF = 'Badlands Brief — "Badlands News Brief: Wins at Home and Deals Abroad", URL: https://badlands.substack.com/p/badlands-news-brief-aac'
SRC = 'raw/badlands-news-brief-aac.md'

def merge(path, section):
    t = open(path, encoding='utf-8').read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
    srcs = [x.strip() for x in m.group(1).split(',') if x.strip()]
    if SRC not in srcs:
        srcs.append(SRC)
    n = srcs.index(SRC) + 1
    t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    idx = t.rindex('## References')
    body = section.replace('[N]', '[%d]' % n).rstrip() + '\n\n'
    t = t[:idx] + body + t[idx:]
    t = t.rstrip('\n') + '\n' + '%d. %s\n' % (n, REF)
    open(path, 'w', encoding='utf-8', newline='\n').write(t)
    print('merged', path, 'as [%d]' % n)
