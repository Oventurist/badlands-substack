import sys, re
# usage: append_merge.py <path> <n> <bodyfile>
path, n, bodyfile = sys.argv[1], sys.argv[2], sys.argv[3]
raw = open(path, 'r', encoding='utf-8', newline='').read()
body = open(bodyfile, 'r', encoding='utf-8').read().rstrip() + "\n\n"
ref = '%s. Badlands Brief — "Badlands News Brief: Trump Immunity, FED Panic & #MeToo Whiplash", URL: https://badlands.substack.com/p/badlands-news-brief-bad\n' % n
nl = '\r\n' if '\r\n' in raw else '\n'
body = body.replace('\n', nl)
ref = ref.replace('\n', nl)
i = raw.rindex('## References')
raw = raw[:i] + body + raw[i:]
if not raw.endswith(nl):
    raw += nl
raw += ref
open(path, 'w', encoding='utf-8', newline='').write(raw)
print('OK', path)
