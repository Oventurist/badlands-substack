import sys, io, re
path, num, body = sys.argv[1], sys.argv[2], sys.argv[3]
ref = '%s. Badlands Brief — "Throne of the Ivy Grid", URL: https://badlands.substack.com/p/throne-of-the-ivy-grid\n' % num
s = io.open(path, encoding="utf-8").read().rstrip("\n")
body = io.open(body, encoding="utf-8").read().rstrip("\n")
i = s.rfind("\n## References")
if i == -1:
    s = s + "\n\n" + body + "\n\n## References\n" + ref
else:
    s = s[:i] + "\n\n" + body + "\n" + s[i:] + "\n" + ref
io.open(path, "w", encoding="utf-8", newline="").write(s)
print("ok")
