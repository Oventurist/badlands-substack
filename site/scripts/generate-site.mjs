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

const WIKILINK = /\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g;

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
  // root article pages (wiki/*.md excluding index/log/SCHEMA, locks, and queue state)
  let rootFiles = [];
  try {
    rootFiles = await fs.readdir(WIKI);
  } catch {}
  for (const f of rootFiles) {
    if (!f.endsWith(".md")) continue;
    if (["index.md", "log.md", "SCHEMA.md"].includes(f)) continue;
    if (f.startsWith(".inprogress-") || f.startsWith(".")) continue;
    const slug = f.slice(0, -3);
    const content = await fs.readFile(path.join(WIKI, f), "utf-8");
    const title = extractTitle(content, slug);
    pages[slug] = { section: "articles", title, file: f };
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
    const link = `/${target.section}/${key}`;
    return `[${label}](${link})`;
  });
}

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function writePage(outDir, file, content, pages, currentSlug) {
  const rewritten = rewriteWikilinks(content, pages, currentSlug);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, file), rewritten, "utf-8");
}

function sidebarItem(pages, section, sectionLabel) {
  const items = Object.values(pages)
    .filter((p) => p.section === section)
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((p) => ({ text: p.title, link: `/${section}/${p.slugToUse ?? ""}`.replace(/\/$/, "") + `/${p.file.replace(/\.md$/, "")}` }));
  return { text: sectionLabel, collapsible: true, collapsed: false, items };
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
    articles: Object.values(pages).filter((p) => p.section === "articles").length,
  };
  const index = `---
title: Badlands Wiki
---

# Badlands Wiki

A community-compiled knowledge base covering the people, institutions, concepts, and narratives of the Badlands Media corpus.

- **Entities** (${counts.entities}): [browse all](/entities/) — people, organizations, and institutions
- **Concepts** (${counts.concepts}): [browse all](/concepts/) — ideas and narratives
- **Articles** (${counts.articles}): [browse all](/articles/) — full article pages

Built automatically from the wiki. Search above to find any topic.
`;
  await fs.writeFile(path.join(DOCS, "index.md"), index, "utf-8");

  // section index pages so /entities, /concepts, /articles resolve
  for (const [section, label] of [["entities", "Entities"], ["concepts", "Concepts"], ["articles", "Articles"]]) {
    const list = Object.values(pages)
      .filter((p) => p.section === section)
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((p) => `- [${p.title}](/${section}/${p.file.replace(/\.md$/, "")})`)
      .join("\n");
    const sectionIndex = `---
title: ${label}
---

# ${label}

${list}
`;
    await fs.mkdir(OUT[section], { recursive: true });
    await fs.writeFile(path.join(OUT[section], "index.md"), sectionIndex, "utf-8");
  }

  // sidebar config
  const sidebar = [
    sidebarItem(pages, "entities", "Entities"),
    sidebarItem(pages, "concepts", "Concepts"),
    sidebarItem(pages, "articles", "Articles"),
  ];
  const config = `import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Badlands Wiki",
  description: "Community-compiled knowledge base of the Badlands Media corpus",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Entities", link: "/entities/" },
      { text: "Concepts", link: "/concepts/" },
      { text: "Articles", link: "/articles/" },
    ],
    sidebar: ${JSON.stringify(sidebar, null, 2)},
    search: {
      provider: "local",
      options: { translations: { button: { buttonText: "Search", buttonAriaLabel: "Search" } } },
    },
    footer: { message: "Sourced from the Badlands Media corpus. Content reflects the views of the original authors." },
  },
});
`;
  await fs.mkdir(path.join(DOCS, ".vitepress"), { recursive: true });
  await fs.writeFile(path.join(DOCS, ".vitepress", "config.mjs"), config, "utf-8");

  console.log(`done: ${counts.entities} entities, ${counts.concepts} concepts, ${counts.articles} articles`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
