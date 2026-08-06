import sys, re, io, subprocess, time, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/badlands-news-brief-9c6.md"
REFLINE = 'Badlands Brief — "Badlands News Brief: Russia Responds as Trump\'s Revenge Tour Takes Shape", URL: https://badlands.substack.com/p/badlands-news-brief-9c6'
LOCK = BASE + "/scripts/wiki_page_lock.py"

def run(a, slug):
    return subprocess.run([sys.executable, LOCK, a, slug], capture_output=True, text=True).returncode

def merge(slug, folder, body):
    path = f"{BASE}/wiki/{folder}/{slug}.md"
    for _ in range(20):
        if run("acquire", slug) == 0:
            break
        time.sleep(3)
    else:
        print("LOCKFAIL", slug); return
    try:
        t = io.open(path, encoding="utf-8").read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs:
            srcs.append(RAW)
        n = srcs.index(RAW) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated:.*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        newbody = body.replace("{n}", str(n)).strip() + "\n"
        if "## References" in t:
            head, refs = t.split("## References", 1)
            reflines = [l for l in refs.strip().splitlines() if re.match(r"^\d+\.", l.strip())]
            if not any(f"badlands-news-brief-9c6" in l for l in reflines):
                reflines.append(f"{n}. {REFLINE}")
            t = head.rstrip() + "\n\n" + newbody + "\n## References\n\n" + "\n".join(reflines) + "\n"
        else:
            t = t.rstrip() + "\n\n" + newbody + "\n## References\n\n" + f"{n}. {REFLINE}\n"
        io.open(path, "w", encoding="utf-8", newline="\n").write(t)
        print("MERGED", slug, "n=", n)
    finally:
        run("release", slug)

if __name__ == "__main__":
    import json
    spec = json.load(open(sys.argv[1], encoding="utf-8"))
    for slug, (folder, body) in spec.items():
        merge(slug, folder, body)
