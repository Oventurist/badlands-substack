import sys, re, io, json
# usage: merge_helper.py <path> <section_file>
path, secfile = sys.argv[1], sys.argv[2]
RAW = "raw/badlands-news-brief-8ae.md"
REFTITLE = 'Badlands Media — "Badlands News Brief: Vance Takes the Stage as Biden Takes the Basement", URL: https://badlands.substack.com/p/badlands-news-brief-8ae'
txt = open(path, encoding='utf-8').read()
nl = '\r\n' if '\r\n' in txt else '\n'
t = txt.replace('\r\n', '\n')
m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
if RAW in srcs:
    n = srcs.index(RAW) + 1
else:
    srcs.append(RAW); n = len(srcs)
    t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
sec = open(secfile, encoding='utf-8').read().replace('\r\n', '\n').replace('[n]', '[%d]' % n)
if '## References' in t:
    head, tail = t.split('## References', 1)
    refline = '%d. %s' % (n, REFTITLE)
    if REFTITLE not in tail:
        tail = tail.rstrip('\n') + '\n' + refline + '\n'
    t = head.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References' + tail
else:
    t = t.rstrip('\n') + '\n\n' + sec.strip('\n') + '\n\n## References\n%d. %s\n' % (n, REFTITLE)
open(path, 'w', encoding='utf-8', newline=nl).write(t)
print('merged', path, 'as citation', n)
