import os, re, subprocess, sys, json, time

ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
WIKI = os.path.join(ROOT, "wiki")
LOCK = os.path.join(ROOT, "scripts", "wiki_page_lock.py")
RAW = "raw/badlands-news-brief-c93.md"
REFLINE = 'Badlands Brief — "Badlands News Brief: Sino-Russian Nukes, African Potential, & A New Moon Chairman in Town", URL: https://badlands.substack.com/p/badlands-news-brief-c93'
TODAY = "2026-08-06"

def acquire(slug):
    for _ in range(12):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            return True
        time.sleep(4)
    return False

def release(slug):
    subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

def merge(path, slug, section):
    full = os.path.join(WIKI, path)
    if not acquire(slug):
        print("LOCKFAIL", slug); return
    try:
        with open(full, encoding="utf-8") as f:
            txt = f.read()
        nl = "\r\n" if "\r\n" in txt else "\n"
        t = txt.replace("\r\n", "\n")
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs:
            srcs.append(RAW)
        n = srcs.index(RAW) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: " + TODAY, t, count=1, flags=re.M)
        body = section.replace("{n}", str(n)).strip()
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            reflines = [l for l in refs.strip().split("\n") if re.match(r"^\d+\.", l)]
            tail = ""
            if not any(f"badlands-news-brief-c93" in l for l in reflines):
                reflines.append(f"{n}. {REFLINE}")
            t = head.rstrip() + "\n\n" + body + "\n\n## References\n" + "\n".join(reflines) + "\n"
        else:
            t = t.rstrip() + "\n\n" + body + "\n\n## References\n" + f"{n}. {REFLINE}\n"
        with open(full, "w", encoding="utf-8", newline=nl) as f:
            f.write(t)
        print("MERGED", slug, "n=", n)
    finally:
        release(slug)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for path, slug, section in data:
        merge(path, slug, section)
