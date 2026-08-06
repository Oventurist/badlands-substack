import sys, re, subprocess, os
BASE = r'C:/Users/14053/hermes-projects/badlands-substack'
RAW = 'badlands-news-brief-222'
REFLINE = 'Badlands Brief — "Badlands News Brief: Intelligence Narratives & Seemingly Impossible Deals", URL: https://badlands.substack.com/p/badlands-news-brief-222'

def run(slug, folder, heading, body):
    path = f'{BASE}/wiki/{folder}/{slug}.md'
    lock = subprocess.run([sys.executable, f'{BASE}/scripts/wiki_page_lock.py', 'acquire', slug])
    if lock.returncode != 0:
        print('BUSY', slug); return
    try:
        n = subprocess.run([sys.executable, f'{BASE}/scripts/merge_helper.py', path, RAW],
                           capture_output=True, text=True).stdout.strip()
        if not n.isdigit():
            print('ERR', slug, n); return
        t = open(path, encoding='utf-8').read()
        sec = '\n## ' + heading + '\n\n' + body.replace('[N]', '[%s]' % n).strip() + '\n'
        if '## References' in t:
            idx = t.index('## References')
            head, tail = t[:idx], t[idx:]
            lines = tail.rstrip().split('\n')
            existing = [l for l in lines if re.match(r'^\d+\.', l.strip())]
            if not any(RAW in l for l in existing):
                lines.append('%s. %s' % (n, REFLINE))
            t = head.rstrip() + '\n\n' + sec + '\n' + '\n'.join(lines) + '\n'
        else:
            t = t.rstrip() + '\n\n' + sec + '\n## References\n\n%s. %s\n' % (n, REFLINE)
        open(path, 'w', encoding='utf-8', newline='').write(t)
        print('OK', slug, n)
    finally:
        subprocess.run([sys.executable, f'{BASE}/scripts/wiki_page_lock.py', 'release', slug])
