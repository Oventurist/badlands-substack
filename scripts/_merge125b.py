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

merge('entities/joe-biden.md', 30, """
## Los Angeles fundraiser freeze and campaign–media conflict (June 2024)

At a star-studded campaign fundraiser at the Peacock Theater in Los Angeles on Saturday, June 15, 2024, Biden appeared to freeze up on stage and had to be led off by [[barack-obama|Barack Obama]].[30] The moment came at the end of a 45-minute interview the two men gave to late-night host Jimmy Kimmel; as the men stood for applause, Biden's gaze became fixed on the crowd for a full ten seconds until Obama took his wrist and guided him offstage.[30] The incident followed a spate of caught-on-camera moments in which the president appeared dazed or confused, including wandering off during a parachute exhibition at the G7 summit in Apulia, Italy, where Italian Prime Minister [[giorgia-meloni|Giorgia Meloni]] redirected him.[30]

Badlands commentary described the viral clip as Biden's "latest senior moment" and noted that conservative influencers were speculating about who might replace him at the Democratic convention, while left-leaning influencers were instead doubling down to shield him and denying the footage showed what viewers had seen.[30] [[ashe-in-america|Ashe in America]] argued that if Democrats intended to seed a replacement narrative, this was the moment to do it, and that their failure to do so suggested he could not be replaced — a development she welcomed given the first debate was scheduled for June 27 and a late substitution would be unforgivable to the electorate.[30] [[burning-bright|Burning Bright]] framed the episode as the endpoint of a party trajectory from the party of the working class to the party of the under-class to "the party of glitz, glamor ... and bullshit," invoking the maxim "Never interfere with an enemy while he's in the process of destroying himself."[30]

His campaign's relationship with the press deteriorated in parallel. [[the-atlantic|The Atlantic]] reported that Biden staff and allied Democrats spent hours each week publicly feuding not only with [[donald-trump|Donald Trump]] but with journalists, epitomized by senior communications adviser [[tj-ducklo|TJ Ducklo]]'s complaint that networks ignored a Philadelphia address to roughly 1,000 mostly Black voters in favor of Trump's trial coverage.[30] Separately, a Politico–[[ipsos|Ipsos]] survey found that 43 percent of respondents agreed the Manhattan prosecution of Trump had been brought to help Biden.[30]
""")
