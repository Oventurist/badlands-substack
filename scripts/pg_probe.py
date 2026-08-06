import sys, re, io, os
base = r"C:/Users/14053/hermes-projects/badlands-substack/wiki"
for slug in sys.argv[1:]:
    for d in ("entities", "concepts"):
        p = os.path.join(base, d, slug + ".md")
        if os.path.exists(p):
            t = io.open(p, encoding="utf-8").read()
            m = re.search(r"^sources:.*$", t, re.M)
            src = m.group(0) if m else "NO SOURCES"
            n = len(re.findall(r"raw/", src))
            has = "badlands-news-brief-745" in t
            refs = t.split("## References")[-1].strip().splitlines()[-3:] if "## References" in t else ["NO REFS"]
            up = re.search(r"^updated:.*$", t, re.M)
            print("==", d, slug, "| nsrc=", n, "| already=", has)
            print("  ", src)
            print("   updated:", up.group(0) if up else "NONE")
            print("   lastrefs:", refs)
