import sys, re, io, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
RAW = "raw/badlands-news-brief-d8e.md"
REFTITLE = 'Badlands Brief — "Badlands News Brief: Zelensky Rages, COVID Concedes & Soros Surrounded", URL: https://badlands.substack.com/p/badlands-news-brief-d8e'

def main(path, section):
    p = os.path.join(BASE, path)
    txt = io.open(p, encoding='utf-8').read()
    m = re.search(r'^sources: \[(.*?)\]\s*$', txt, re.M)
    srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
    if RAW not in srcs:
        srcs.append(RAW)
    n = srcs.index(RAW) + 1
    txt = txt[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + txt[m.end():]
    txt = re.sub(r'^updated: .*$', 'updated: 2026-08-06', txt, count=1, flags=re.M)
    body = section.replace('{n}', str(n)).strip() + "\n"
    if '## References' in txt:
        i = txt.index('## References')
        txt = txt[:i] + body + "\n" + txt[i:]
        # append ref line
        if not txt.endswith('\n'):
            txt += '\n'
        txt = txt.rstrip('\n') + '\n' + str(n) + '. ' + REFTITLE + '\n'
    else:
        txt = txt.rstrip('\n') + '\n\n' + body + '\n## References\n' + str(n) + '. ' + REFTITLE + '\n'
    io.open(p, 'w', encoding='utf-8', newline='\n').write(txt)
    print('merged', path, 'as [%d]' % n)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
