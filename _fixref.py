import io
p = 'wiki/entities/aileen-cannon.md'
s = open(p, encoding='utf-8', newline='').read()
tail = s.split('## References')[-1]
if 'badlands-news-brief-d24' not in tail:
    if not s.endswith('\n'):
        s += '\r\n'
    s += '21. Badlands Brief \u2014 "Badlands News Brief: Hunter\'s Slap ' + chr(38) + ' Trump\'s Trap", URL: https://badlands.substack.com/p/badlands-news-brief-d24\r\n'
open(p, 'w', encoding='utf-8', newline='').write(s)
print('ok')
