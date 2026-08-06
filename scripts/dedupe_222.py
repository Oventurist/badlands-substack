import re, sys, glob, os
BASE = r'C:/Users/14053/hermes-projects/badlands-substack/wiki'
slugs = """donald-trump scott-bessent mike-lawler ed-martin thom-tillis tren-de-aragua nicolas-maduro
national-intelligence-council office-of-the-director-of-national-intelligence openai amazon nvidia
jensen-huang mark-carney houthis stephen-miller john-roberts america-first-legal
supreme-court-of-the-united-states sean-combs rapid-support-forces state-department
immigration-and-customs-enforcement barak-ravid jerusalem-post""".split()
for s in slugs:
    p = f'{BASE}/entities/{s}.md'
    t = open(p, encoding='utf-8').read()
    # split into sections at '## '
    parts = re.split(r'(?m)^(?=## )', t)
    seen = set(); out = []
    for part in parts:
        head = part.split('\n', 1)[0].strip()
        key = part.strip()
        if key in seen:
            print('dedupe', s, head); continue
        seen.add(key); out.append(part)
    n = ''.join(out)
    if n != t:
        open(p, 'w', encoding='utf-8', newline='').write(n)
