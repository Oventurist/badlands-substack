#!/usr/bin/env node
/**
 * Generate a LIGHTWEIGHT static HTML site from the wiki/ folder.
 *
 * Why not VitePress: VitePress emits a full SPA shell (inlined Vue runtime +
 * page data) into EVERY page — 440 KB per page. 12k pages = 4+ GB, which
 * exceeds GitHub Pages' 1 GB limit and the deploy times out / fails. This
 * generator instead renders markdown -> HTML once and wraps each page in a
 * tiny shared template (~47 KB/page), so the whole site is ~560 MB and fits.
 *
 * All the Wikipedia-style transforms are preserved:
 *  - [[wikilinks]] -> client links (rewriteWikilinks)
 *  - scattered ## References lines -> one consolidated block (consolidateReferences)
 *  - References forced to the end (normalizeReferencesPosition)
 *  - inline N(url) -> [N] (convertInlineCitations)
 *  - [N] -> <sup><a href="#ref-N">[N]</a></sup> with anchored <li id="ref-N">
 *    (linkifyCitations)  -- Wikipedia-style footnotes
 *  - frontmatter tags -> clickable tag chips (renderTags)
 *
 * The body is then rendered with `marked` (markdown -> HTML). Raw HTML blocks
 * (the <sup>, <ol>, <div class="wiki-tags"> the transforms emit) pass through.
 *
 * Output (under site/dist/):
 *   index.html, entities/<slug>/index.html, concepts/<slug>/index.html,
 *   entities/index.html, concepts/index.html, tags/index.html,
 *   assets/site.css, assets/site.js, index-data.json
 *
 * All internal links are rooted at BASE so they work on the GitHub Pages
 * project path /badlands-substack/.
 */

import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, "..");
const ROOT = path.resolve(SITE, "..");
const WIKI = path.join(ROOT, "wiki");
const DIST = path.join(SITE, "web");
// GitHub Pages project site lives under /badlands-substack/. Every internal
// link + asset reference is prefixed with this.
const BASE = "/badlands-substack/";

// WIKILINK matches Obsidian [[slug]] / [[slug|text]]. A [[...]] that is
// immediately followed by "(" is already a markdown link (e.g. the clickable
// citation form [[1]](https://...)) and must NOT be rewritten.
const WIKILINK = /\[\[([^\]|#]+)(?:\|([^\]]+))?\]\](?!\()/g;

async function collectPages() {
  const pages = {}; // slug -> { section, title, file }
  const sections = ["entities", "concepts"];
  for (const section of sections) {
    const dir = path.join(WIKI, section);
    let files = [];
    try {
      files = await fs.readdir(dir);
    } catch {
      continue;
    }
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      const slug = f.slice(0, -3);
      const content = await fs.readFile(path.join(dir, f), "utf-8");
      const title = extractTitle(content, slug);
      pages[slug] = { section, title, file: f };
    }
  }
  return pages;
}

function extractTitle(content, fallback) {
  const fm = content.match(/^---\n([\s\S]*?)\n---/);
  if (fm) {
    const t = fm[1].match(/^title:\s*(.+)$/m);
    if (t) return t[1].trim().replace(/^["']|["']$/g, "");
  }
  const h1 = content.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return fallback.replace(/-/g, " ");
}

function rewriteWikilinks(content, pages, currentSlug) {
  return content.replace(WIKILINK, (match, slug, text) => {
    const key = slug.trim().toLowerCase().replace(/\s+/g, "-");
    const target = pages[key];
    const label = (text || slug).trim();
    if (!target) return label; // dangling link -> plain text
    const link = `${BASE}${target.section}/${key}/`;
    return `[${label}](${link})`;
  });
}

/* Ensure the ## References section is the LAST section of the page. */
function normalizeReferencesPosition(content) {
  const re = /^#{2,3}\s+References\s*\n[\s\S]*?(?=^#{1,3}\s+\S|(?![\s\S]))/m;
  const m = content.match(re);
  if (!m) return content;
  const refSection = m[0];
  const rest = content.slice(0, m.index) + content.slice(m.index + m[0].length);
  if (content.endsWith(refSection.trimEnd())) return content;
  return `${rest.trimEnd()}\n\n${refSection.trimEnd()}\n`;
}

/* Pull reference lines (N. ... URL) scattered through the body back into one
   consolidated ## References block at the end. Idempotent. */
function consolidateReferences(content) {
  const refLineRe = /^\s*\d+[.)]\s+\S.*(?:https?:\/\/|URL:)/;
  const lines = content.split("\n");
  const refs = [];
  const kept = [];
  for (const line of lines) {
    if (refLineRe.test(line)) refs.push(line.trim());
    else kept.push(line);
  }
  if (!refs.length) return content;

  const seen = new Set();
  const deduped = [];
  for (const r of refs) {
    const m = r.match(/^\s*(\d+)[.)]/);
    const n = m ? m[1] : null;
    if (n) {
      if (seen.has(n)) continue;
      seen.add(n);
    }
    deduped.push(r);
  }
  deduped.sort((a, b) => {
    const na = parseInt((a.match(/^\s*(\d+)/) || [])[1] || "0", 10);
    const nb = parseInt((b.match(/^\s*(\d+)/) || [])[1] || "0", 10);
    return na - nb;
  });

  const body = kept.join("\n").replace(/^#{1,3}\s+References\b.*$\n*/gm, "");
  const block = `\n\n## References\n\n${deduped.join("\n")}\n`;
  return `${body.replace(/\s*$/, "")}${block}`;
}

/* Linkify inline citation markers [N] -> <sup><a href="#ref-N">[N]</a></sup>
   and give every ## References list item id="ref-N". Wikipedia-style footnotes. */
function linkifyCitations(content) {
  let out = content.replace(
    /(^##\s+References\s*\n+)((?:^\d+\.\s+.*\n?)+)/m,
    (m, heading, listBlock) => {
      const items = listBlock
        .trim()
        .split("\n")
        .map((line) => {
          const mm = line.match(/^(\d+)\.\s+(.*)$/);
          if (!mm) return line;
          const text = mm[2].replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank" rel="noreferrer">$1</a>'
          );
          return `<li id="ref-${mm[1]}">${text}</li>`;
        })
        .join("\n");
      return `${heading}<ol>\n${items}\n</ol>`;
    }
  );

  out = out
    .split("\n")
    .map((line) => {
      if (/^\s{0,3}#/.test(line)) return line; // heading — leave untouched
      return line.replace(
        /(^|[^`\[])\[(\d{1,3})\](?!\()/g,
        (m, pre, n) => `${pre}<sup class="cite-ref"><a href="#ref-${n}">[${n}]</a></sup>`
      );
    })
    .join("\n");

  return out;
}

/* Convert inline citation form N(url) -> [N] so linkifyCitations picks it up. */
function convertInlineCitations(content) {
  content = content.replace(/\r\n/g, "\n");
  const refUrls = {};
  const refBlocks =
    content.match(/^#{2,3}\s+References\s*\n[\s\S]*?(?=\n+^#{1,3}\s+\S|(?![\s\S]))/gm) || [];
  for (const block of refBlocks) {
    block.split("\n").forEach((line) => {
      const mm = line.match(/^\s*(\d+)\.\s+(.*)$/);
      if (mm) {
        const u = mm[2].match(/(https?:\/\/\S+)/);
        if (u) refUrls[mm[1]] = u[1];
      }
    });
  }
  if (!Object.keys(refUrls).length) return content;

  return content.replace(
    /(^|[^0-9`\[])(\d{1,3})\((https?:\/\/[^)\s]+)\)/g,
    (m, pre, n, url) => {
      if (refUrls[n] && (refUrls[n] === url || url.startsWith(refUrls[n]))) {
        return `${pre}[${n}]`;
      }
      return m;
    }
  );
}

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* Render the page's frontmatter tags as clickable chips linking to the
   client-side tag browser (?tag=<slug>). Injected after the H1. */
function renderTags(content) {
  const fm = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return content;
  const t = fm[1].match(/^tags:\s*\[(.*?)\]/m);
  if (!t) return content;
  const tags = t[1].split(",").map((s) => s.trim()).filter(Boolean);
  if (!tags.length) return content;

  const tagLinks = tags
    .map((tag) => {
      const slug = slugifyTitle(tag);
      const safe = tag.replace(/"/g, "&quot;");
      return `<a class="wiki-tag" href="${BASE}tags/?tag=${slug}" title="Browse pages tagged ${safe}">${tag}</a>`;
    })
    .join(" ");

  const block = `\n<div class="wiki-tags" role="list">${tagLinks}</div>\n`;

  const m = content.match(/^(#\s+.+)$/m);
  if (!m) return content;
  const idx = content.indexOf(m[0]) + m[0].length;
  return content.slice(0, idx) + block + content.slice(idx);
}

// ---- markdown -> HTML rendering -------------------------------------------
marked.setOptions({ gfm: true, breaks: false });

function renderBody(markdown) {
  // The transform chain leaves the body as markdown with a few inline-HTML
  // islands (citations, tags, references <ol>). marked passes raw HTML through.
  return marked.parse(markdown);
}

// ---- page template ---------------------------------------------------------
function pageTemplate({ title, bodyClass, body, browserMount }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — Badlands Wiki</title>
<link rel="stylesheet" href="${BASE}assets/site.css">
</head>
<body class="${bodyClass || ""}">
<header class="site-header">
  <a class="brand" href="${BASE}">Badlands Wiki</a>
  <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle dark mode">
    <span class="theme-icon-light">☀</span><span class="theme-icon-dark">☾</span>
  </button>
</header>
<main class="page ${bodyClass || ""}">
${body}
</main>
<footer class="site-footer">
  <p>Sourced from the Badlands Media corpus. Content reflects the views of the original authors.</p>
</footer>
<script src="${BASE}assets/site.js"></script>
</body>
</html>`;
}

async function writePage(outDir, file, content, pages, currentSlug) {
  // Normalize CRLF -> LF (split on CR+LF to avoid any literal control chars).
  content = content.split(String.fromCharCode(13) + String.fromCharCode(10)).join("\n");
  // Parse frontmatter for the <title>.
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?/);
  let title = currentSlug;
  if (fmMatch) {
    const t = fmMatch[1].match(/^title:\s*(.+)$/m);
    if (t) title = t[1].trim().replace(/^["']|["']$/g, "");
  }
  // Apply the full transform chain (unchanged from the VitePress version).
  const transformed = renderTags(
    linkifyCitations(
      rewriteWikilinks(
        convertInlineCitations(
          normalizeReferencesPosition(consolidateReferences(content))
        ),
        pages,
        currentSlug
      )
    )
  );
  // Strip the leading YAML frontmatter so it isn't rendered as content.
  const stripped = transformed.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const html = renderBody(stripped);
  // Wrap in the shared template (CSS link, nav, <main>, footer, site.js).
  const full = pageTemplate({ title, bodyClass: "wiki-page", body: html });
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, file), full, "utf-8");
}

async function main() {
  const pages = await collectPages();
  console.log(`collected ${Object.keys(pages).length} pages`);

  // clean output dir
  await fs.rm(DIST, { recursive: true, force: true });
  await fs.mkdir(DIST, { recursive: true });

  // copy shared assets (css/js) into dist/assets
  const assetsSrc = path.join(SITE, "assets");
  const assetsDst = path.join(DIST, "assets");
  await fs.mkdir(assetsDst, { recursive: true });
  for (const f of await fs.readdir(assetsSrc)) {
    await fs.copyFile(path.join(assetsSrc, f), path.join(assetsDst, f));
  }

  // render each page
  for (const slug of Object.keys(pages)) {
    const p = pages[slug];
    const src = path.join(WIKI, p.section, p.file);
    const content = await fs.readFile(src, "utf-8");
    const outDir = path.join(DIST, p.section, slug);
    await writePage(outDir, "index.html", content, pages, slug);
  }
  console.log(`rendered ${Object.keys(pages).length} pages`);

  // index-data.json for client-side browsers + search
  const indexData = [];
  for (const slug of Object.keys(pages)) {
    const p = pages[slug];
    const content = await fs.readFile(path.join(WIKI, p.section, p.file), "utf-8");
    const fm = content.match(/^---\n([\s\S]*?)\n---/);
    let tags = [];
    if (fm) {
      const t = fm[1].match(/^tags:\s*\[(.*?)\]/m);
      if (t) tags = t[1].split(",").map((s) => s.trim()).filter(Boolean);
    }
    indexData.push({
      id: slug,
      title: p.title,
      section: p.section,
      type: p.section === "concepts" ? "concept" : "entity",
      tags,
      url: `${BASE}${p.section}/${slug}/`,
    });
  }
  indexData.sort((a, b) => a.title.localeCompare(b.title));
  await fs.writeFile(
    path.join(DIST, "index-data.json"),
    JSON.stringify(indexData),
    "utf-8"
  );
  console.log(`index-data.json: ${indexData.length} entries`);

  // home — search-centric hero (single search bar for everything)
  const home = pageTemplate({
    title: "Badlands Wiki",
    bodyClass: "home-page",
    body: `<section class="home-hero">
  <h1>Badlands Wiki</h1>
  <p class="home-sub">A community-compiled knowledge base on the people, institutions, and narratives of the Badlands Media corpus.</p>
  <form class="home-search" role="search" action="${BASE}search/" method="get">
    <label class="visually-hidden" for="home-search">Search the wiki</label>
    <input id="home-search" class="home-search-input" type="search" name="q" placeholder="Search ${indexData.length.toLocaleString()} pages…" aria-label="Search the wiki" autocomplete="off">
    <div class="home-search-results search-results" id="home-search-results"></div>
  </form>
  <p class="home-hint">Press <strong>Enter</strong> to see all matching pages.</p>
</section>`,
  });
  await fs.writeFile(path.join(DIST, "index.html"), home, "utf-8");

  // section + tag browsers (client-side; site.js populates them)
  for (const [section, label] of [["entities", "Entities"], ["concepts", "Concepts"]]) {
    const html = pageTemplate({
      title: label,
      bodyClass: "browser-page",
      body: `<h1>${label}</h1>
<p>Search, filter, and browse the ${label.toLowerCase()} index.</p>
<div class="browser" data-section="${section}"></div>`,
    });
    await fs.mkdir(path.join(DIST, section), { recursive: true });
    await fs.writeFile(path.join(DIST, section, "index.html"), html, "utf-8");
  }

  const tagHtml = pageTemplate({
    title: "Browse by tag",
    bodyClass: "browser-page tag-page",
    body: `<h1>Browse by tag</h1>
<p>Select a tag on any wiki page to filter the index, or search below.</p>
<div class="browser" data-section="all" data-tag-from-url="1"></div>`,
  });
  await fs.mkdir(path.join(DIST, "tags"), { recursive: true });
  await fs.writeFile(path.join(DIST, "tags", "index.html"), tagHtml, "utf-8");

  // full search results page (reads ?q=, lists all matches on load)
  const searchHtml = pageTemplate({
    title: "Search",
    bodyClass: "browser-page search-page",
    body: `<h1>Search</h1>
<form class="search-page-form" role="search" action="${BASE}search/" method="get">
  <input id="search-page-input" class="home-search-input" type="search" name="q" placeholder="Search ${indexData.length.toLocaleString()} pages…" aria-label="Search the wiki" autocomplete="off">
</form>
<div class="browser-meta" id="search-meta"></div>
<div class="browser-groups" id="search-results"></div>`,
  });
  await fs.mkdir(path.join(DIST, "search"), { recursive: true });
  await fs.writeFile(path.join(DIST, "search", "index.html"), searchHtml, "utf-8");

  console.log(`done: ${indexData.filter((d) => d.section === "entities").length} entities, ${indexData.filter((d) => d.section === "concepts").length} concepts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
