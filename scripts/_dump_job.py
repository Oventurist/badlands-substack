import json
d = json.load(open('C:/Users/14053/AppData/Local/hermes/cron/jobs.json'))
for j in d['jobs']:
    if 'Ingest' in j.get('name', ''):
        print("KEYS:", list(j.keys()))
        for k, v in j.items():
            sv = str(v)
            print(f"  {k}: {sv[:80]!r}")
