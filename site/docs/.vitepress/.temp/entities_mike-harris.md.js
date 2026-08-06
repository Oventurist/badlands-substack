import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mike Harris","description":"","frontmatter":{"title":"Mike Harris","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["afghanistan","media","arizona","veterans-today"],"sources":["raw/badlands-news-brief-6b1.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mike-harris.md","filePath":"entities/mike-harris.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mike-harris.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mike-harris" tabindex="-1">Mike Harris <a class="header-anchor" href="#mike-harris" aria-label="Permalink to &quot;Mike Harris&quot;">​</a></h1><p><strong>Mike Harris</strong> is the financial editor for <em>Veterans Today</em> and a former 2006 Republican primary candidate for governor of Arizona.[1]</p><h2 id="work-in-afghanistan" tabindex="-1">Work in Afghanistan <a class="header-anchor" href="#work-in-afghanistan" aria-label="Permalink to &quot;Work in Afghanistan&quot;">​</a></h2><p>Harris has traveled to <a href="/entities/afghanistan">Afghanistan</a> for years in an effort to help the <a href="/entities/taliban">Taliban</a> cultivate a genuine domestic economy, on the theory that economically secure Afghans would be less vulnerable to the financial influence of Western intelligence agencies seeking to recruit them into mercenary groups such as <a href="/entities/isis">ISIS</a> and <a href="/entities/al-qaeda">Al Qaeda</a>.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, who interviewed Harris, cited that conversation in June 2024 as corroborating the account given by Lord Miles Routledge of life under Taliban rule, and as supporting the wider Badlands reading of the <a href="/concepts/doha-agreement">Doha Agreement</a> and the <a href="/entities/cia">CIA</a>&#39;s role in sponsoring regional militant networks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Russia, the MSM and El Salvador Call Out Joe Biden&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mike-harris.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikeHarris = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikeHarris as default
};
