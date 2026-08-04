import os
raw = set(f[:-3] for f in os.listdir('raw') if f.endswith('.md'))
wiki = set()
for d in ('entities', 'concepts'):
    for f in os.listdir('wiki/' + d):
        if f.endswith('.md'):
            wiki.add(f[:-3])
article_pages = sorted(wiki & raw)
print("article_pages_count:", len(article_pages))
print("sample:", article_pages[:5])
print("raw_total:", len(raw))
print("raw_uningested:", len(raw - wiki))
