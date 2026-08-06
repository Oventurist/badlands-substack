import re, subprocess, sys, os, json
ROOT = r"C:/Users/14053/hermes-projects/badlands-substack"
RAW = "raw/kekistani-code-talkers.md"
REFLINE = '. Badlands Brief — "Kekistani Code Talkers", URL: https://badlands.substack.com/p/kekistani-code-talkers'
LOCK = ROOT + "/scripts/wiki_page_lock.py"

def merge(slug, folder, heading, body):
    path = f"{ROOT}/wiki/{folder}/{slug}.md"
    if not os.path.exists(path):
        print("MISSING", slug); return
    r = subprocess.run([sys.executable, LOCK, "acquire", slug], capture_output=True, text=True)
    if r.returncode != 0:
        print("BUSY", slug); return
    try:
        t = open(path, encoding="utf-8").read()
        m = re.search(r"^sources:\s*\[(.*?)\]\s*$", t, re.M)
        if not m:
            print("NOSRC", slug); return
        items = [x.strip() for x in m.group(1).split(",") if x.strip()]
        if RAW in items:
            n = items.index(RAW) + 1
        else:
            items.append(RAW); n = len(items)
            t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
        t = re.sub(r"^updated:.*$", "updated: 2026-08-06", t, count=1, flags=re.M)
        sec = "\n\n## " + heading + "\n\n" + body.replace("[n]", f"[{n}]").strip() + "\n"
        if "## References" in t:
            head, refs = t.rsplit("## References", 1)
            reflines = refs.rstrip().split("\n")
            if not any("kekistani-code-talkers" in l for l in reflines):
                reflines.append(f"{n}{REFLINE}")
            t = head.rstrip() + sec + "\n\n## References\n" + "\n".join(l for l in reflines if l.strip()).replace("\n\n", "\n") + "\n"
        else:
            t = t.rstrip() + sec + "\n\n## References\n" + f"{n}{REFLINE}\n"
        open(path, "w", encoding="utf-8").write(t)
        print("UPDATED", slug, "cite", n)
    finally:
        subprocess.run([sys.executable, LOCK, "release", slug], capture_output=True, text=True)

if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))
    for d in data:
        merge(d["slug"], d["folder"], d["heading"], d["body"])
