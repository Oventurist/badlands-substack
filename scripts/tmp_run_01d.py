import io, os, re, subprocess
BASE = "C:/Users/14053/hermes-projects/badlands-substack"
RAW = "badlands-news-brief-01d"
REF = 'Badlands News Brief — "Durham\'s Dance, Putin\'s Warning and Xi\'s Rebuke", URL: https://badlands.substack.com/p/badlands-news-brief-01d'
LOCK = BASE + "/scripts/wiki_page_lock.py"
TODAY = "2026-08-06"

import importlib.util, sys
sys.path.insert(0, BASE + "/scripts")
mod = importlib.import_module("tmp_merge_01d")
P = mod.P

def merge(path, body):
    s = io.open(path, encoding="utf-8").read()
    m = re.search(r"^sources:\s*\[(.*?)\]\s*$", s, re.M)
    if not m:
        return "NOSOURCES"
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    tag = "raw/%s.md" % RAW
    if tag in items:
        n = items.index(tag) + 1
    else:
        items.append(tag); n = len(items)
        s = s[:m.start()] + "sources: [" + ", ".join(items) + "]" + s[m.end():]
    s = re.sub(r"^updated:.*$", "updated: " + TODAY, s, count=1, flags=re.M)
    b = body.replace("{n}", str(n)).strip()
    idx = s.find("\n## References")
    refline = "%d. %s" % (n, REF)
    if idx == -1:
        s = s.rstrip() + "\n\n" + b + "\n\n## References\n\n" + refline + "\n"
    else:
        head = s[:idx].rstrip()
        tail = s[idx:].rstrip()
        if REF not in tail:
            tail += "\n" + refline
        s = head + "\n\n" + b + "\n\n" + tail + "\n"
    io.open(path, "w", encoding="utf-8").write(s)
    return "OK n=%d" % n

def run(c):
    return subprocess.run(c, shell=True, capture_output=True, text=True)

import time
for rel, body in P.items():
    slug = rel.split("/")[1]
    path = "%s/wiki/%s.md" % (BASE, rel)
    if not os.path.exists(path):
        print("MISSING", rel); continue
    if ("raw/%s.md" % RAW) in io.open(path, encoding="utf-8").read():
        print("SKIP", rel); continue
    ok = False
    for attempt in range(40):
        r = run('python "%s" acquire %s' % (LOCK, slug))
        if r.returncode == 0:
            ok = True; break
        time.sleep(5)
    if not ok:
        print("LOCKFAIL", slug); continue
    try:
        print(rel, merge(path, body))
    finally:
        run('python "%s" release %s' % (LOCK, slug))
