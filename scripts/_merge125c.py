import io
CIT = 'Badlands Brief — "Badlands News Brief: Fake Polls Abound as the Sovereign Alliance Makes Moves", URL: https://badlands.substack.com/p/badlands-news-brief-125'
BASE = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'

def merge(path, n, body):
    p = BASE + path
    s = io.open(p, encoding='utf-8').read().replace('\r\n', '\n')
    old = [l for l in s.split('\n') if l.startswith('sources: [')][0]
    if 'badlands-news-brief-125' not in old:
        s = s.replace(old, old[:-1] + ', raw/badlands-news-brief-125.md]')
    i = s.index('## References')
    s = s[:i] + body.strip() + '\n\n' + s[i:]
    s = s.rstrip('\n') + '\n%d. %s\n' % (n, CIT)
    io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
    print('ok', path)

merge('entities/benjamin-netanyahu.md', 62, """
## Dissolution of the war cabinet (June 2024)

On Monday, June 17, 2024, Netanyahu dissolved his six-member Israel–[[hamas|Hamas]] war cabinet following the departure of former general [[benny-gantz|Benny Gantz]] from the government.[62] He reminded his security cabinet the previous day that "the cabinet was in the coalition agreement with Gantz at his request" and that "as soon as Gantz left – there was no need for a cabinet anymore."[62] With the body dissolved, Netanyahu was left to rely on a smaller group of ministers to guide the war, including the former war cabinet members [[yoav-gallant|Yoav Gallant]], minister of defense, and [[ron-dermer|Ron Dermer]], minister of strategic affairs.[62]

## Badlands assessment of the Trump relationship

Badlands writer [[ghostofbasedpatrickhenry|GhostofBasedPatrickHenry]] argued in June 2024 that [[donald-trump|Donald Trump]] and Netanyahu did not personally like one another, citing body language and a strange tension in their interactions and instances in which the two sniped at each other even in person.[62] While describing their conduct as professional and diplomatic, he contrasted it with the visible chemistry between Trump and leaders such as [[jair-bolsonaro|Jair Bolsonaro]], [[viktor-orban|Viktor Orbán]], [[shinzo-abe|Shinzo Abe]], [[nigel-farage|Nigel Farage]] and [[kim-jong-un|Kim Jong Un]].[62]

He placed Netanyahu within the [[old-guard|Old Guard]], arguing that Trump therefore represented a threat to Netanyahu's status quo just as he did to every other establishment status quo, and that this explained the subtle hostility in their exchanges.[62] On the same reasoning he characterized the [[abraham-accords|Abraham Accords]] as an offensive diplomatic weapon designed to catalyze bad actors into accelerating plans laid long before Trump — a framing he connected to the September 2023 Saudi peace initiative with Israel, contingent on the creation of a Palestinian state, which he had warned interested parties would seek to subvert.[62]
""")
