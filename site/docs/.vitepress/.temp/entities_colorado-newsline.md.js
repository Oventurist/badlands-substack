import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Colorado Newsline","description":"","frontmatter":{"title":"Colorado Newsline","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","colorado","election-integrity"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/colorado-newsline.md","filePath":"entities/colorado-newsline.md","lastUpdated":null}');
const _sfc_main = { name: "entities/colorado-newsline.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="colorado-newsline" tabindex="-1">Colorado Newsline <a class="header-anchor" href="#colorado-newsline" aria-label="Permalink to &quot;Colorado Newsline&quot;">​</a></h1><p>Colorado Newsline is a <a href="/entities/colorado">Colorado</a> news outlet best known in Badlands commentary for its September 2021 article listing &quot;Colorado&#39;s Top 10 Most Dangerous Election Deniers.&quot;[1]</p><h2 id="the-most-dangerous-election-deniers-list" tabindex="-1">The &quot;most dangerous election deniers&quot; list <a class="header-anchor" href="#the-most-dangerous-election-deniers-list" aria-label="Permalink to &quot;The &quot;most dangerous election deniers&quot; list&quot;">​</a></h2><p>The list named <a href="/entities/ron-hanks">Ron Hanks</a>, a U.S. Air Force veteran and former state representative, as the sixth most dangerous election denier in the state, and named Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> fifth — a fact she disclosed for the sake of transparency when writing about Hanks&#39; 2024 congressional candidacy.[1] Colorado Newsline won an award for the article.[1]</p><p>The list is cited in Badlands coverage as an example of how media designations of &quot;election deniers&quot; function alongside litigation and prosecution in what its writers describe as an ongoing lawfare campaign against Colorado grassroots activists.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/colorado-newsline.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coloradoNewsline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  coloradoNewsline as default
};
