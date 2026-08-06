import sys, re, subprocess, io, time
BASE = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/structures-of-control-part-3.md"
LOCK = BASE + "/scripts/wiki_page_lock.py"

def merge(path, slug, section):
    for _ in range(10):
        r = subprocess.run([sys.executable, LOCK, "acquire", slug])
        if r.returncode == 0:
            break
        time.sleep(3)
    else:
        print("LOCKFAIL", slug); return
    try:
        t = io.open(path, encoding="utf-8").read()
        fm_end = t.index("\n---", 4)
        fm = t[:fm_end]
        body = t[fm_end:]
        m = re.search(r"sources: \[(.*?)\]", fm, re.S)
        srcs = [s.strip() for s in m.group(1).split(",") if s.strip()]
        if RAW not in srcs:
            srcs.append(RAW)
        n = srcs.index(RAW) + 1
        fm = fm[:m.start()] + "sources: [" + ", ".join(srcs) + "]" + fm[m.end():]
        fm = re.sub(r"updated: [0-9-]+", "updated: 2026-08-06", fm)
        sec = section.replace("[n]", "[%d]" % n)
        refline = '%d. Badlands Brief \u2014 "Structures of Control - Part 3", URL: https://badlands.substack.com/p/structures-of-control-part-3' % n
        if "## References" in body:
            if "structures-of-control-part-3" not in body:
                body = body.rstrip("\n") + "\n" + refline + "\n"
            idx = body.index("## References")
            body = body[:idx] + sec.strip() + "\n\n" + body[idx:]
        else:
            body = body.rstrip("\n") + "\n\n" + sec.strip() + "\n\n## References\n" + refline + "\n"
        io.open(path, "w", encoding="utf-8", newline="\n").write(fm + body)
        print("MERGED", slug, "->", n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug])

if __name__ == "__main__":
    d, slug = sys.argv[1], sys.argv[2]
    merge("%s/wiki/%s/%s.md" % (BASE, d, slug), slug, sys.stdin.read())
