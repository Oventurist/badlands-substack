import io, sys, re

def merge(path, section, refline):
    with io.open(path, 'r', encoding='utf-8') as f:
        txt = f.read()
    nl = '\r\n' if '\r\n' in txt else '\n'
    idx = txt.rindex('## References')
    body = txt[:idx].rstrip() + nl + nl + section.strip().replace('\n', nl) + nl + nl
    rest = txt[idx:].rstrip()
    out = body + rest + nl + refline.strip() + nl
    with io.open(path, 'w', encoding='utf-8', newline='') as f:
        f.write(out)
    print('merged', path)

if __name__ == '__main__':
    pass
