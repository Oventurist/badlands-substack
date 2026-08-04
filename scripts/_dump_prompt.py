import json
d = json.load(open('C:/Users/14053/AppData/Local/hermes/cron/jobs.json'))
p = [j['prompt'] for j in d['jobs'] if 'Ingest' in j.get('name', '')][0]
i = p.find('4) Create')
print("FOUND at:", i)
print(repr(p[i:i+420]))
print("=== has CRLF?", "\r" in p)
print("=== len:", len(p))
