import re, importlib.util, sys
spec = None
BASE = 'C:/Users/14053/hermes-projects/badlands-substack'
src = open(BASE + '/scripts/merge_669.py', encoding='utf-8').read()
ns = {}
head = src.split("def run(")[0]
exec(head, ns)
CH = ns['CH']
nums = {}
for line in open(BASE + '/scripts/last_nums.txt', encoding='utf-8'):
    p, n = line.rsplit('->', 1)
    nums[p.strip()] = int(n.strip().strip('[]'))
fixed = 0
for rel, chunk in CH.items():
    path = '%s/wiki/%s.md' % (BASE, rel)
    n = nums[path]
    broken = chunk.replace('{n}', str(n)).rstrip()
    good = chunk.replace('{n}', '[%d]' % n).rstrip()
    txt = open(path, encoding='utf-8').read()
    if broken in txt:
        txt = txt.replace(broken, good)
        open(path, 'w', encoding='utf-8', newline='\n').write(txt)
        fixed += 1
        print('fixed', rel)
    else:
        print('NOT FOUND', rel)
print('fixed', fixed)
