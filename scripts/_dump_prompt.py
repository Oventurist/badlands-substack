"""Extract the current ingest prompt from jobs.json for reference."""
import json

d = json.load(open('C:/Users/14053/AppData/Local/hermes/cron/jobs.json'))
p = [j['prompt'] for j in d['jobs'] if 'Ingest' in j.get('name', '')][0]
open('C:/Users/14053/hermes-projects/badlands-substack/scripts/_current_prompt.txt', 'w', encoding='utf-8').write(p)
print(f"Current prompt: {len(p)} chars saved")
