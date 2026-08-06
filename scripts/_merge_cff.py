import re, sys, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-cff.md"
REFTITLE = 'Badlands Brief — "Letters of Credence, More Evidence of Treason, & Allegedly Super-Intelligent AI", URL: https://badlands.substack.com/p/badlands-news-brief-cff'

def merge(relpath, section):
    p = os.path.join(BASE, relpath)
    t = io.open(p, encoding='utf-8').read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', t, re.M)
    srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
    if RAW in srcs:
        n = srcs.index(RAW)+1
    else:
        srcs.append(RAW); n = len(srcs)
        t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    body = section.replace('{n}', str(n)).rstrip() + '\n'
    refline = '%d. %s' % (n, REFTITLE)
    if '## References' in t:
        t = t.rstrip('\n') + '\n' + refline + '\n'
        # insert body before the References heading
        i = t.index('## References')
        t = t[:i] + body + '\n' + t[i:]
    else:
        t = t.rstrip('\n') + '\n\n' + body + '\n## References\n' + refline + '\n'
    io.open(p, 'w', encoding='utf-8', newline='\n').write(t)
    print('merged', relpath, 'as [%d]' % n)
