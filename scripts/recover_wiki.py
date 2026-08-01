#!/usr/bin/env python
"""Recover wiki page content from the session DB (cron write_file tool calls)."""
import sqlite3, os, json, re, glob, sys

DB = os.path.expanduser("~/AppData/Local/hermes/state.db")
WIKI = "C:/Users/14053/hermes-projects/badlands-substack/wiki"
OUT = "C:/Users/14053/hermes-projects/badlands-substack/wiki_recovery"
os.makedirs(OUT, exist_ok=True)

conn = sqlite3.connect(DB)
cur = conn.cursor()
cur.execute("select session_id from messages where session_id like 'cron_85b1758451ba_%' group by session_id")
sessions = [r[0] for r in cur.fetchall()]

recovered = {}
for sid in sessions:
    cur.execute("select tool_calls from messages where session_id=? and tool_calls like '%write_file%'", (sid,))
    for (tc,) in cur.fetchall():
        if not tc:
            continue
        try:
            calls = json.loads(tc) if isinstance(tc, str) else tc
        except Exception:
            # try to extract function calls from the raw string
            for m in re.finditer(r'\{[^{}]*"name"\s*:\s*"write_file"[^{}]*\}', tc):
                try:
                    calls = [json.loads(m.group(0))]
                except Exception:
                    continue
                break
            else:
                continue
        for c in calls:
            try:
                fn = c.get("function", {})
                if fn.get("name") != "write_file":
                    continue
                args = json.loads(fn.get("arguments", "{}"))
                path = args.get("path", "")
                content = args.get("content", "")
                if not path or not content:
                    continue
                # normalize path: accept windows, msys, or relative
                p = path.replace("\\", "/")
                if "/wiki/" not in p and "wiki/" in p:
                    # relative: map to wiki dir
                    p = p[p.index("wiki/"):]
                else:
                    m2 = re.search(r'(wiki/(?:entities|concepts|5gw[^/]*)[^"]*)\.md', p)
                    if m2:
                        p = m2.group(0)
                    else:
                        continue
                if not p.startswith("wiki/"):
                    continue
                key = os.path.basename(p)
                # keep the LONGEST version (most complete write)
                if key not in recovered or len(content) > len(recovered[key]):
                    recovered[key] = content
            except Exception:
                continue

print(f"recovered {len(recovered)} pages from {len(sessions)} cron sessions")
# write them out
for name, content in sorted(recovered.items()):
    # determine subdir from path if we can, else entities
    sub = "entities"
    for cand in (WIKI + "/entities", WIKI + "/concepts"):
        pass
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(content)
    print(" ", name, len(content))
