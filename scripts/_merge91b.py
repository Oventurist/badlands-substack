import re,io
NEW="raw/badlands-news-brief-91b.md"
REF='Badlands Brief — "Badlands News Brief: The Corruption of Anti-Corruption & Obama Bites Back", URL: https://badlands.substack.com/p/badlands-news-brief-91b'
sections={
r"C:/Users/14053/hermes-projects/badlands-substack/wiki/entities/donald-trump.md":"""
## July 2025: Japan trade deal, treason claims, and women's sports

On July 22, 2025, Trump announced a "massive" trade deal with Japan under which Japan would open its market to American cars, trucks, rice and other agricultural products and invest $550 billion in the United States, with Japanese exports facing a 15 percent tariff rather than the 25 percent he had threatened.[{n}] See [[2025-us-japan-trade-agreement|2025 US–Japan trade agreement]].[{n}]

The same week, his administration's claims that [[barack-obama|Barack Obama]] administration officials had planned a "treasonous conspiracy" against him drew a rare public rebuke from Obama's office, which called them "a weak attempt at distraction."[{n}] The claims rested on material released by Director of National Intelligence [[tulsi-gabbard|Tulsi Gabbard]]; Trump summarized his position as "I caught them all… let's see what happens."[{n}]

His executive order "Keeping Men Out of Women's Sports," [[executive-order-14201|Executive Order 14201]], produced compliance from the [[us-olympic-and-paralympic-committee|U.S. Olympic and Paralympic Committee]], which in July 2025 replaced its transgender eligibility policy with a reference to an athlete safety policy citing the order.[{n}] Wyoming Secretary of State [[chuck-gray|Chuck Gray]] separately credited Trump's election integrity priorities when a federal judge dismissed the challenge to [[wyoming-house-bill-156|Wyoming House Bill 156]].[{n}]
""",
r"C:/Users/14053/hermes-projects/badlands-substack/wiki/concepts/codex-911.md":"""
## Premiere at GART Deadwood

CODEX 911 premiered at [[gart-9-deadwood|GART Deadwood]], with an early screening made available to holders of the GART 9 virtual pass alongside access to the conference, pre-livestreams and a behind-the-scenes Telegram chat.[{n}] In July 2025 [[badlands-media|Badlands Media]] promoted a personal Substack feature by director [[brad-zerbo|Brad Zerbo]] titled "September 11th 2001," describing it as the filmmaker's back story and the source of his personal inspiration for the documentary.[{n}] In the piece Zerbo recounts being woken on the morning of the attacks, watching United Flight 175 strike the second tower, and concluding that this was the moment "Flight 11 became no accident, and crisis became King."[{n}]
"""
}
for p,body in sections.items():
    t=io.open(p,encoding="utf-8").read()
    crlf="\r\n" in t
    t=t.replace("\r\n","\n")
    m=re.search(r"^sources: \[(.*?)\]$",t,re.M)
    srcs=[s.strip() for s in m.group(1).split(",") if s.strip()]
    if NEW not in srcs: srcs.append(NEW)
    n=srcs.index(NEW)+1
    t=t[:m.start()]+"sources: ["+", ".join(srcs)+"]"+t[m.end():]
    t=re.sub(r"^updated: .*$","updated: 2026-08-06",t,count=1,flags=re.M)
    if "## References" not in t: t=t.rstrip("\n")+"\n\n## References\n"
    i=t.index("## References")
    t=t[:i]+body.format(n=n).strip()+"\n\n"+t[i:]
    t=t.rstrip("\n")+"\n%d. %s\n"%(n,REF)
    if crlf: t=t.replace("\n","\r\n")
    io.open(p,"w",encoding="utf-8",newline="").write(t)
    print("merged",p.split("/")[-1],n)
