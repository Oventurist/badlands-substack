import re, sys, subprocess, time, json, io, os
ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-brief-6f4.md"
REFLINE = 'Badlands Brief — "Illegal Psychological Warfare Campaigns & Misprision of Treason", URL: https://badlands.substack.com/p/badlands-brief-6f4'
LOCK = ROOT + "/scripts/wiki_page_lock.py"

def find(slug):
    for d in ("entities", "concepts"):
        p = f"{ROOT}/wiki/{d}/{slug}.md"
        if os.path.exists(p):
            return p
    return None

def merge(slug, body_tmpl):
    p = find(slug)
    if not p:
        print("MISSING", slug); return
    for _ in range(20):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        print("LOCKFAIL", slug); return
    try:
        t = open(p, encoding="utf-8").read()
        nl = "\r\n" if "\r\n" in t else "\n"
        t = t.replace("\r\n", "\n")
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW in srcs:
            n = srcs.index(RAW) + 1
        else:
            srcs.append(RAW); n = len(srcs)
            t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        body = body_tmpl.replace("[n]", f"[{n}]")
        rm = re.search(r"^## References\s*$", t, re.M)
        if rm:
            head, refs = t[:rm.start()], t[rm.start():]
            if REFLINE not in refs:
                refs = refs.rstrip("\n") + f"\n{n}. {REFLINE}\n"
            t = head.rstrip("\n") + "\n\n" + body.strip() + "\n\n" + refs
        else:
            t = t.rstrip("\n") + "\n\n" + body.strip() + f"\n\n## References\n{n}. {REFLINE}\n"
        open(p, "w", encoding="utf-8", newline=nl).write(t)
        print("OK", slug, n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

DATA = json.load(open(ROOT + "/scripts/merge_6f4_data.json", encoding="utf-8"))
for slug, body in DATA.items():
    merge(slug, body)
