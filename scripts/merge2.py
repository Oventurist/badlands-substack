import sys, os, re, subprocess, time
# usage: merge2.py <wikipath> <secfile>
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path, secfile = sys.argv[1], sys.argv[2]
slug = os.path.splitext(os.path.basename(path))[0]
NEW = 'raw/the-men-behind-the-curtain-part-2.md'
REF = 'Badlands Brief — "The Men Behind the Curtain - Part 2", URL: https://badlands.substack.com/p/the-men-behind-the-curtain-part-2'
lock = os.path.join(ROOT, 'scripts', 'wiki_page_lock.py')
for i in range(10):
    r = subprocess.run([sys.executable, lock, 'acquire', slug], capture_output=True, text=True)
    if r.returncode == 0:
        break
    time.sleep(4)
else:
    print('LOCKFAIL', slug); sys.exit(2)
try:
    raw = open(path, encoding='utf-8').read()
    t = raw.replace('\r\n', '\n')
    m = re.search(r'^sources: \[(.*?)\]$', t, re.M)
    srcs = [s.strip() for s in m.group(1).split(',') if s.strip()]
    if NEW not in srcs:
        srcs.append(NEW)
    n = srcs.index(NEW) + 1
    t = t[:m.start()] + 'sources: [' + ', '.join(srcs) + ']' + t[m.end():]
    t = re.sub(r'^updated: .*$', 'updated: 2026-08-06', t, count=1, flags=re.M)
    sec = open(secfile, encoding='utf-8').read().replace('\r\n', '\n').rstrip('\n')
    sec = sec.replace('[N]', '[%d]' % n)
    if '## References' in t:
        idx = t.rindex('## References')
        head, tail = t[:idx], t[idx:].rstrip('\n')
        t = head + sec + '\n\n' + tail + '\n%d. %s\n' % (n, REF)
    else:
        t = t.rstrip('\n') + '\n\n' + sec + '\n\n## References\n%d. %s\n' % (n, REF)
    open(path, 'w', encoding='utf-8', newline='\n').write(t)
    print('MERGED', slug, 'as [%d]' % n)
finally:
    subprocess.run([sys.executable, lock, 'release', slug])
