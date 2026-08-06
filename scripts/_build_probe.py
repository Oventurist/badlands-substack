import subprocess, os, glob, time

# what node processes are running and how long
r = subprocess.run(['wmic', 'process', 'where', "name='node.exe'", 'get', 'ProcessId,CommandLine,WorkingSetSize'],
                   capture_output=True, text=True)
for line in r.stdout.splitlines():
    if 'vitepress' in line.lower() or 'node' in line.lower():
        if 'node.exe' in line:
            print(line.strip()[:130])

# check generate-site output timestamps - did generation finish?
SITE = 'C:/Users/14053/hermes-projects/badlands-substack/site'
docs = os.path.join(SITE, 'docs')
if os.path.exists(docs):
    files = glob.glob(os.path.join(docs, '**', '*.md'), recursive=True)
    print(f"\ndocs .md files: {len(files)}")
    # newest file mtime
    newest = max((os.path.getmtime(os.path.join(root, f))
                  for root, _, fs in os.walk(docs) for f in fs if f.endswith('.md')), default=0)
    print(f"newest generated md: {time.ctime(newest)}")
    now = time.time()
    print(f"age of newest: {(now-newest)/60:.0f} min (if small, generation finished long ago)")
