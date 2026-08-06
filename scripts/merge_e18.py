import re, subprocess, sys, pathlib, time
ROOT = pathlib.Path("C:/Users/14053/hermes-projects/badlands-substack")
WIKI = ROOT / "wiki"
BASE = "raw/badlands-media-show-schedule-e18.md"
REF = '1. Badlands Brief — "Badlands Media Show Schedule", URL: https://badlands.substack.com/p/badlands-media-show-schedule-e18'
LOCK = str(ROOT / "scripts" / "wiki_page_lock.py")

targets = sys.argv[1:]
sent_map = {}

def lock(a, slug):
    return subprocess.run([sys.executable, LOCK, a, slug], capture_output=True).returncode

updated = []
for t in targets:
    d, slug = t.split("/")
    p = WIKI / d / (slug + ".md")
    if not p.exists():
        print("MISSING", t); continue
    for _ in range(5):
        if lock("acquire", slug) == 0:
            break
        time.sleep(4)
    else:
        print("BUSY", t); continue
    try:
        txt = p.read_text(encoding="utf-8")
        nl = "\r\n" if "\r\n" in txt else "\n"
        body = txt.replace("\r\n", "\n")
        m = re.search(r"^sources: \[(.*?)\]$", body, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if BASE in srcs:
            print("ALREADY", t); continue
        srcs.append(BASE)
        n = len(srcs)
        body = body[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + body[m.end():]
        body = re.sub(r"^updated: .*$", "updated: 2026-08-06", body, count=1, flags=re.M)
        sentence = sent_map.get(slug, "A second Badlands Media schedule post, published January 3, 2023 to open the 2023 broadcast year, carried the same listing and description, and reiterated that all network shows air live on the Patel Patriot Rumble channel with replays archived on the Badlands Media library channel.[%d]" % n)
        if "## References" in body:
            head, tail = body.split("## References", 1)
            head = head.rstrip("\n") + "\n\n" + sentence + "\n\n"
            tail = tail.rstrip("\n") + "\n%d. %s\n" % (n, REF.split(". ", 1)[1])
            body = head + "## References" + tail
        else:
            body = body.rstrip("\n") + "\n\n" + sentence + "\n\n## References\n%d. %s\n" % (n, REF.split(". ", 1)[1])
        p.write_text(body.replace("\n", nl) if nl == "\r\n" else body, encoding="utf-8")
        updated.append(t)
    finally:
        lock("release", slug)
print("UPDATED", len(updated))
