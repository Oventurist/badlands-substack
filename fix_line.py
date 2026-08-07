p = r"C:\Users\14053\hermes-projects\badlands-substack\site\scripts\generate-site.mjs"
with open(p, "rb") as f:
    data = f.read()

CR = bytes([0x0D])
LF = bytes([0x0A])
# Broken bytes: 'content = content.replace(/' + CR + LF + '/g, "\n");'
needle = b"content = content.replace(/" + CR + LF
assert needle in data, "needle not found; hex at replace(/: %r" % data[data.find(b"replace(/"):data.find(b"replace(/")+20].hex()
# Replace literal CR+LF with the 4-byte escape sequence backslash r backslash n
repl = b"content = content.replace(/\\r\\n"
data = data.replace(needle, repl, 1)
with open(p, "wb") as f:
    f.write(data)
print("FIXED: literal CRLF inside regex -> \\r\\n escape")
