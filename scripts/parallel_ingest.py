#!/usr/bin/env python
"""Parallel wiki ingest driver.

Spawns N worker processes. Each worker loops: atomically claim an article
from the queue, run the LLM (hermes -z with worker_prompt_v2.txt) to ingest
it, mark done, repeat until the queue is empty.

Gates:
- article claims: wiki_queue.py claim (O_EXCL, atomic)
- page writes:    wiki_page_lock.py (per-page O_EXCL locks with TTL)

Usage:
  python parallel_ingest.py --workers 8 --model deepseek-v4-flash-0731 --provider nous
  python parallel_ingest.py --workers 8 --articles 50   # dry run with limit
"""
import argparse
import json
import os
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

PROJ = Path(__file__).resolve().parent.parent
WORKER_PROMPT = Path(__file__).resolve().parent / "worker_prompt_v2.txt"
QUEUE = ["python", str(PROJ / "scripts" / "wiki_queue.py")]
LOG = PROJ / "logs" / "parallel-ingest.log"


def log(msg):
    line = f"[{datetime.now().strftime('%H:%M:%S')}] {msg}"
    print(line, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(line + "\n")


def claim_article():
    r = subprocess.run(QUEUE + ["claim"], capture_output=True, text=True, cwd=PROJ)
    out = r.stdout.strip()
    return out if out and out != "DONE" else None


def mark_done(slug):
    subprocess.run(QUEUE + ["done", slug], capture_output=True, text=True, cwd=PROJ)


def pages_citing(slug):
    """Count wiki pages whose content references the raw article slug."""
    import glob
    n = 0
    for p in glob.glob(str(PROJ / "wiki" / "entities" / "*.md")) + \
             glob.glob(str(PROJ / "wiki" / "concepts" / "*.md")):
        try:
            if slug in open(p, encoding="utf-8", errors="replace").read():
                n += 1
        except OSError:
            pass
    return n


def run_worker(model, provider, max_articles, worker_id, stats):
    done_count = 0
    failed_recent = {}  # slug -> last-fail timestamp (avoid hot loops)
    while max_articles is None or done_count < max_articles:
        article = claim_article()
        if not article:
            log(f"worker{worker_id}: queue empty, done ({done_count} articles)")
            break
        slug = os.path.basename(article)
        # skip articles this worker failed very recently (re-claimed by others)
        if slug in failed_recent and time.time() - failed_recent[slug] < 600:
            subprocess.run(QUEUE + ["unlock", slug], capture_output=True, text=True, cwd=PROJ)
            time.sleep(5)
            continue
        log(f"worker{worker_id}: claimed {slug}")
        # build the per-article prompt: base + article path
        prompt = open(WORKER_PROMPT, encoding="utf-8").read()
        prompt += f"\n\nCURRENT ARTICLE TO INGEST: {article}"
        # write prompt to a temp file (avoid argv limits) and run
        pf = PROJ / "scripts" / f"_w{worker_id}_prompt.txt"
        pf.write_text(prompt, encoding="utf-8")
        t0 = time.time()
        try:
            r = subprocess.run(
                ["hermes", "-z", prompt, "-m", model, "--provider", provider,
                 "-t", "terminal,file", "--no-restore-cwd", "--yolo"],
                capture_output=True, text=True, timeout=2400, cwd=str(PROJ))
            dt = time.time() - t0
            out = r.stdout or ""
            # success = exit 0 AND the report names the CLAIMED slug AND pages
            # actually cite that slug (guards against the model ingesting a
            # different article than the one we claimed). Use the LAST done:
            # line (the prompt itself contains a "done: <raw-slug>" example,
            # so the model's real report is the last occurrence).
            report_slug = None
            for line in out.lower().splitlines():
                if line.startswith("done:"):
                    report_slug = line.split(":")[1].strip().split()[0]
            ok = (r.returncode == 0 and report_slug == slug.replace(".md", "")
                  and pages_citing(slug) > 0)
            if ok:
                mark_done(slug)
                stats["done"] += 1
                done_count += 1
                log(f"worker{worker_id}: OK {slug} in {dt:.0f}s ({pages_citing(slug)} pages cite it)")
            else:
                stats["failed"] += 1
                failed_recent[slug] = time.time()
                log(f"worker{worker_id}: FAIL {slug} in {dt:.0f}s rc={r.returncode} report={report_slug} cited={pages_citing(slug)}")
                log(f"  stderr: {(r.stderr or '')[-200:].strip()}")
                log(f"  stdout tail: {out[-200:].strip()}")
                # failed article: release its claim so another worker can retry
                subprocess.run(QUEUE + ["unlock", slug], capture_output=True, text=True, cwd=PROJ)
                # avoid hot-looping on a permanently-failing article
                time.sleep(30)
        except subprocess.TimeoutExpired:
            stats["failed"] += 1
            failed_recent[slug] = time.time()
            log(f"worker{worker_id}: TIMEOUT {slug} after 2400s")
            subprocess.run(QUEUE + ["unlock", slug], capture_output=True, text=True, cwd=PROJ)
        finally:
            try:
                pf.unlink()
            except OSError:
                pass
        # small stagger so parallel claims don't all hit the same instant
        time.sleep(2)
    stats["workers_finished"] += 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--workers", type=int, default=12)
    ap.add_argument("--model", default="deepseek-v4-flash-0731")
    ap.add_argument("--provider", default="nous")
    ap.add_argument("--articles", type=int, default=None, help="cap total articles (testing)")
    args = ap.parse_args()

    # single-instance guard: refuse to start if another driver is running
    lockfile = PROJ / "scripts" / ".parallel-ingest.lock"
    if lockfile.exists():
        print("ERROR: another parallel_ingest run appears active "
              f"({lockfile}). Remove it if stale.", file=sys.stderr)
        sys.exit(1)
    lockfile.write_text(f"pid={os.getpid()} started={time.time():.0f}\n", encoding="utf-8")
    try:
        _run(args)
    finally:
        try:
            lockfile.unlink()
        except OSError:
            pass


def _run(args):
    # fresh log for this run
    LOG.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG, "w", encoding="utf-8") as f:
        f.write(f"# parallel ingest run {datetime.now().isoformat()}\n")

    import multiprocessing as mp
    stats = mp.Manager().dict(done=0, failed=0, workers_finished=0)
    ctx = mp.get_context("spawn")
    procs = []
    for w in range(args.workers):
        p = ctx.Process(target=run_worker, args=(args.model, args.provider, args.articles, w, stats))
        p.start()
        procs.append(p)

    # monitor until all workers finish
    try:
        while any(p.is_alive() for p in procs):
            time.sleep(30)
            log(f"STATUS: done={stats['done']} failed={stats['failed']} finished={stats['workers_finished']}/{args.workers}")
    except KeyboardInterrupt:
        log("interrupted — killing workers")
        for p in procs:
            p.terminate()
        for p in procs:
            p.join(timeout=10)
        raise

    for p in procs:
        p.join(timeout=10)
    log(f"RUN COMPLETE: done={stats['done']} failed={stats['failed']}")
    print(f"\n=== FINAL: done={stats['done']} failed={stats['failed']} ===")


if __name__ == "__main__":
    main()
