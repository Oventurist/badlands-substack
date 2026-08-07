#!/usr/bin/env node
/**
 * Generate the VitePress site from the wiki/ folder.
 *
 * Steps:
 *  1. Copy wiki/entities/*.md -> docs/entities/  and wiki/concepts/*.md -> docs/concepts/
 *     and the root article pages (wiki/*.md except index/log/SCHEMA) -> docs/articles/
 *  2. Rewrite Obsidian [[wikilinks]] to relative VitePress links:
 *       [[slug]]        -> [slug](/entities/slug) or [/concepts/...] depending on where the page lives
 *       [[slug|text]]   -> [text](/entities/slug)
 *     Links to pages that don't exist are rendered as plain text (no dangling link).
 *  3. Regenerate docs/index.md (landing page) and docs/.vitepress/config.mjs (sidebar) from the page list.
 */
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(__dirname, "..");
const WIKI = path.resolve(SITE, "..", "wiki");
const DOCS = path.join(SITE, "docs");
const OUT = {
  entities: path.join(DOCS, "entities"),
  concepts: path.join(DOCS, "concepts"),
  articles: path.join(DOCS, "articles"),
};

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
  // Root article pages are intentionally NOT published on the site.
  // (raw/ source material is gitignored, so the Articles section can't point
  //  to source — decided 2026-08-01: drop Articles from the public site.)
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
    const link = `/${target.section}/${key}`;
    return `[${label}](${link})`;
  });
}

/* Linkify inline citation markers [N] -> <sup>[<a href="#ref-N">N</a>]</sup>
   and give every ## References list item an id="ref-N" anchor, so the inline
   markers jump to the matching source (Wikipedia-style footnotes).

   Safety rules:
   - Only touch [N] where N is a bare integer (1-3 digits).
   - Skip [N] inside existing markdown links [text](url), wikilinks (already
     rewritten by the time this runs, so none remain), code spans, and the
     ## References / ## Sources sections themselves.
   - The References section is converted from a markdown ordered list into an
     <ol> of <li id="ref-N"> so anchors exist to jump to. */
function linkifyCitations(content) {
  // 1. Convert the References list into anchored <li> items first.
  let out = content.replace(
    /(^##\s+References\s*\n+)((?:^\d+\.\s+.*\n?)+)/m,
    (m, heading, listBlock) => {
      const items = listBlock
        .trim()
        .split("\n")
        .map((line) => {
          const mm = line.match(/^(\d+)\.\s+(.*)$/);
          if (!mm) return line;
          // linkify the bare URL inside the item (raw HTML in <li> is not
          // auto-linkified by the markdown parser)
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

  // 2. Linkify inline [N] markers, skipping anything inside:
  //    - markdown links: [N](...) or [text](url)
  //    - code spans: `[N]`
  //    - headings (# ...) — [N] there is literal text, not a citation
  //    - the References/Sources headings themselves (handled above)
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

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function writePage(outDir, file, content, pages, currentSlug) {
  const rewritten = linkifyCitations(rewriteWikilinks(content, pages, currentSlug));
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, file), rewritten, "utf-8");
}

async function main() {
  const pages = await collectPages();
  console.log(`collected ${Object.keys(pages).length} pages`);

  // clean output dirs
  for (const d of Object.values(OUT)) {
    await fs.rm(d, { recursive: true, force: true });
  }

  // copy + rewrite all pages
  for (const slug of Object.keys(pages)) {
    const p = pages[slug];
    const src = p.section === "articles" ? path.join(WIKI, p.file) : path.join(WIKI, p.section, p.file);
    const content = await fs.readFile(src, "utf-8");
    await writePage(OUT[p.section], p.file, content, pages, slug);
  }

  // landing page
  const counts = {
    entities: Object.values(pages).filter((p) => p.section === "entities").length,
    concepts: Object.values(pages).filter((p) => p.section === "concepts").length,
  };
  const index = `---
title: Badlands Wiki
---

# Badlands Wiki

A community-compiled knowledge base covering the people, institutions, concepts, and narratives of the Badlands Media corpus.

- **Entities** (${counts.entities}): [browse all](/entities/) — people, organizations, and institutions
- **Concepts** (${counts.concepts}): [browse all](/concepts/) — ideas and narratives

Built automatically from the wiki.
`;
  await fs.writeFile(path.join(DOCS, "index.md"), index, "utf-8");

  // section index pages so /entities and /concepts resolve (filterable browsers)
  for (const [section, label] of [["entities", "Entities"], ["concepts", "Concepts"]]) {
    const sectionIndex = `---
title: ${label}
---

# ${label}

Search, filter, and browse the ${label.toLowerCase()} index.

<IndexBrowser section="${section}" />
`;
    await fs.mkdir(OUT[section], { recursive: true });
    await fs.writeFile(path.join(OUT[section], "index.md"), sectionIndex, "utf-8");
  }

  // ---- index data for the filterable Entities/Concepts browsers ----
  const indexData = [];
  for (const slug of Object.keys(pages)) {
    const p = pages[slug];
    const content = await fs.readFile(
      p.section === "articles" ? path.join(WIKI, p.file) : path.join(WIKI, p.section, p.file),
      "utf-8"
    );
    const fm = content.match(/^---\n([\s\S]*?)\n---/);
    let tags = [];
    let type = p.section === "articles" ? "article" : "entity";
    if (fm) {
      const t = fm[1].match(/^tags:\s*\[(.*?)\]/m);
      if (t) tags = t[1].split(",").map((s) => s.trim()).filter(Boolean);
      const ty = fm[1].match(/^type:\s*(.+)$/m);
      if (ty) type = ty[1].trim();
    }
    indexData.push({ id: slug, title: p.title, section: p.section, type, tags });
  }
  indexData.sort((a, b) => a.title.localeCompare(b.title));
  await fs.mkdir(path.join(DOCS, "public"), { recursive: true });
  await fs.writeFile(path.join(DOCS, "public", "index-data.json"), JSON.stringify(indexData), "utf-8");

  // graph page removed: its 5.5MB graph-data.json (10K nodes + all wikilink
  // edges) was the remaining build memory hog. Navigation is via the nav
  // bar, the filterable Entities/Concepts browsers, and wikilinks.

  // sidebar intentionally removed (see config below): 10K+ pages in the
  // sidebar OOM'd the build and was unusable as navigation.
  const config = `import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Badlands Wiki",
  description: "Community-compiled knowledge base of the Badlands Media corpus",
  // GitHub Pages project site: assets and links must be rooted at the
  // repo subpath, not "/", or every CSS/JS/link 404s (unstyled page).
  base: "/badlands-substack/",
  cleanUrls: true,
  // lastUpdated disabled: with 6,600+ pages VitePress runs git log per
  // page at build time, blowing past Vercel's 45-min limit. Pages already
  // carry their own updated date in frontmatter.
  lastUpdated: false,
  // The CI build renders the entities and concepts halves separately (to
  // stay under the runner's memory limit), so each half references pages
  // in the other half. Don't fail the build on those cross-half links.
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Entities", link: "/entities/" },
      { text: "Concepts", link: "/concepts/" },
    ],
    // sidebar removed: with 10K+ pages the full sidebar made every rendered
    // page carry a huge inlined JSON payload (JS heap OOM at build) and was
    // unusable anyway. Navigation is via the nav bar and the filterable
    // Entities/Concepts browsers.
    // local search disabled: full-text index over 10K pages is a major
    // build-time cost. Re-add via a hosted search provider if needed later.
    footer: { message: "Sourced from the Badlands Media corpus. Content reflects the views of the original authors." },
  },
});
`;
  await fs.mkdir(path.join(DOCS, ".vitepress"), { recursive: true });
  await fs.writeFile(path.join(DOCS, ".vitepress", "config.mjs"), config, "utf-8");

  // copy committed theme (GraphView.vue etc.) into generated docs
  const themeSrc = path.join(SITE, "theme-src", "theme");
  const themeDst = path.join(DOCS, ".vitepress", "theme");
  await fs.rm(themeDst, { recursive: true, force: true });
  await fs.cp(themeSrc, themeDst, { recursive: true });
  console.log("theme copied:", themeSrc, "->", themeDst);

  console.log(`done: ${counts.entities} entities, ${counts.concepts} concepts, ${counts.articles} articles`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
