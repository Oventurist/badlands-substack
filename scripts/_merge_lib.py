import re, io, sys
BASE = r"C:/Users/14053/hermes-substack"
BASE = r"C:/Users/14053/hermes-projects/badlands-substack/wiki/"
SRC = "raw/the-people-the-party-and-political.md"
REF = 'Badlands Media — "The People, The Party & Political Distractions", URL: https://badlands.substack.com/p/the-people-the-party-and-political'

def go(path, body_fn):
    p = BASE + path
    t = io.open(p, encoding="utf-8").read()
    nl = "\r\n" if "\r\n" in t else "\n"
    # sources
    m = re.search(r"^sources: \[(.*?)\]\s*$", t, re.M)
    items = [x.strip() for x in m.group(1).split(",") if x.strip()]
    if SRC not in items:
        items.append(SRC)
    t = t[:m.start()] + "sources: [" + ", ".join(items) + "]" + t[m.end():]
    n = items.index(SRC) + 1
    # max existing ref number
    nums = [int(x) for x in re.findall(r"^(\d+)\.\s+Badlands", t, re.M)]
    num = max(nums) + 1 if nums else 1
    t = t.rstrip() + nl + f"{num}. {REF}" + nl
    # insert body before ## References
    idx = t.find("## References")
    body = body_fn(num).replace("\n", nl)
    t = t[:idx] + body + nl + nl + t[idx:]
    t = t.replace("[[REFN]]", str(num))
    io.open(p, "w", encoding="utf-8", newline="").write(t)
    print("updated", path, "ref", num)
