import re, sys, io, os, json
BASE = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
RAW = 'raw/badlands-news-brief-169.md'
REFLINE = 'Badlands News Brief — "Battle Lines Drawn in All Theaters", URL: https://badlands.substack.com/p/badlands-news-brief-169'

def merge(rel, section):
    p = os.path.join(BASE, rel)
    t = open(p, encoding='utf-8').read()
    m = re.search(r'sources: \[(.*?)\]', t)
    srcs = [x.strip() for x in m.group(1).split(',') if x.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
    t = re.sub(r'updated: \d{4}-\d{2}-\d{2}', 'updated: 2026-08-06', t, count=1)
    body = section.replace('[[N]]', '[%d]' % n)
    idx = t.rfind('## References')
    if idx == -1:
        t = t.rstrip() + '\n\n' + body.strip() + '\n\n## References\n1. ' + REFLINE + '\n'
    else:
        head = t[:idx].rstrip()
        refs = t[idx:].rstrip()
        nums = [int(x) for x in re.findall(r'^(\d+)\.\s', refs, re.M)]
        nxt = max(nums) + 1 if nums else 1
        if REFLINE not in refs:
            refs = refs + '\n%d. %s' % (nxt, REFLINE)
        t = head + '\n\n' + body.strip() + '\n\n' + refs + '\n'
    open(p, 'w', encoding='utf-8').write(t)
    print('merged', rel, 'n=%d' % n)

if __name__ == '__main__':
    data = json.load(open(sys.argv[1], encoding='utf-8'))
    for rel, sec in data.items():
        merge(rel, sec)
