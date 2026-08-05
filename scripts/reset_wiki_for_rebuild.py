#!/usr/bin/env python
"""One-shot: reset the wiki for a full rebuild (run only after backup + dry-run).

- Removes all entity/concept pages
- Resets .processed.txt (queue starts fresh)
- Clears any claim locks and page locks
- Backs up index.md/log.md (keep history) — they get rebuilt by the run
"""
import os, glob, shutil, sys

PROJ = 'C:/Users/14053/hermes-projects/badlands-substack'
WIKI = os.path.join(PROJ, 'wiki')

def confirm():
    if '--yes' not in sys.argv:
        r = input("This WIPES all wiki pages and resets the queue. Type 'WIPE' to confirm: ")
        if r.strip() != 'WIPE':
            print("aborted")
            sys.exit(1)

def main():
    confirm()
    for d in ('entities', 'concepts'):
        files = glob.glob(os.path.join(WIKI, d, '*.md'))
        for f in files:
            os.unlink(f)
        print(f"removed {len(files)} pages from {d}/")
    # reset queue
    pf = os.path.join(WIKI, '.processed.txt')
    if os.path.exists(pf):
        os.unlink(pf)
    print("reset .processed.txt (queue fresh)")
    # clear locks
    for lf in glob.glob(os.path.join(WIKI, '.inprogress-*')) + glob.glob(os.path.join(WIKI, '.page-locks', '*.lock')):
        os.unlink(lf)
    print("cleared claim + page locks")
    # preserve index/log history (backup copies)
    for f in ('index.md', 'log.md'):
        src = os.path.join(WIKI, f)
        if os.path.exists(src):
            shutil.copy(src, os.path.join(WIKI, f + '.pre-rebuild'))
    print("index/log history preserved as .pre-rebuild")
    print("WIPE COMPLETE")

if __name__ == '__main__':
    main()
