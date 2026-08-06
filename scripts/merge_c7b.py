import sys, io, re, os
WIKI = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
RAW = 'raw/badlands-brief-c7b.md'
REFTXT = 'Badlands Brief \u2014 "TACO Tuesday Returns as the War of Stories Gets Weird", URL: https://badlands.substack.com/p/badlands-brief-c7b'

def merge(page_path, body):
    data = io.open(page_path, encoding='utf-8', newline='').read()
    nl = '\r\n' if '\r\n' in data else '\n'
    m = re.search(r'^sources: \[(.*?)\]\s*$', data, re.M)
    srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    data = data[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + data[m.end():]
    data = re.sub(r'^updated: .*$', 'updated: 2026-08-06', data, count=1, flags=re.M)
    body = body.replace('{N}', str(n)).replace('\r\n', '\n').replace('\n', nl).strip(nl)
    idx = data.rfind('## References')
    refline = '%d. %s' % (n, REFTXT)
    if idx == -1:
        data = data.rstrip(nl) + nl + nl + body + nl + nl + '## References' + nl + refline + nl
    else:
        data = data[:idx] + body + nl + nl + data[idx:]
        data = data.rstrip(nl) + nl + refline + nl
    io.open(page_path, 'w', encoding='utf-8', newline='').write(data)
    print('MERGED', os.path.basename(page_path), 'as [%d]' % n)

if __name__ == '__main__':
    page = sys.argv[1]
    body = io.open(sys.argv[2], encoding='utf-8').read()
    merge(page, body)
