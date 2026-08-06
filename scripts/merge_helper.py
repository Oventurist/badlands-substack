import sys, re, json, subprocess, time, os
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
LOCK = BASE + "/scripts/wiki_page_lock.py"

def acquire(slug):
    for _ in range(20):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
        if r.returncode == 0:
            return True
        time.sleep(3)
    return False

def release(slug):
    subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

def merge(path, slug, rawname, refline, heading, body, today="2026-08-06"):
    if not acquire(slug):
        print("LOCKFAIL", slug); return
    try:
        with open(path, encoding="utf-8") as f:
            t = f.read()
        m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if rawname not in srcs:
            srcs.append(rawname)
        n = srcs.index(rawname) + 1
        t = t[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + t[m.end():]
        t = re.sub(r"^updated: .*$", "updated: " + today, t, count=1, flags=re.M)
        b = body.replace("[n]", "[%d]" % n)
        if "## References" in t:
            head, refs = t.split("## References", 1)
            head = head.rstrip() + "\n\n## " + heading + "\n\n" + b.strip() + "\n\n"
            reflines = [l for l in refs.strip().split("\n") if l.strip()]
            existing = "\n".join(reflines)
            newref = "%d. %s" % (n, refline)
            if rawname.replace("raw/", "").replace(".md", "") not in existing:
                if not re.search(r"^%d\. " % n, existing, re.M):
                    existing += "\n" + newref
            t = head + "## References\n\n" + existing + "\n"
        else:
            t = t.rstrip() + "\n\n## " + heading + "\n\n" + b.strip() + "\n\n## References\n\n%d. %s\n" % (n, refline)
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(t)
        print("OK", slug, n)
    finally:
        release(slug)

if __name__ == "__main__":
    spec = json.load(open(sys.argv[1], encoding="utf-8"))
    for it in spec["pages"]:
        p = BASE + "/wiki/" + it["dir"] + "/" + it["slug"] + ".md"
        if os.path.exists(p):
            merge(p, it["slug"], spec["raw"], spec["ref"], it["heading"], it["body"])
        else:
            print("MISSING", it["slug"])
