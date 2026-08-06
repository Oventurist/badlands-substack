import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Moscow Times","description":"","frontmatter":{"title":"The Moscow Times","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","russia","journalism"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"low"},"headers":[],"relativePath":"entities/the-moscow-times.md","filePath":"entities/the-moscow-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-moscow-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-moscow-times" tabindex="-1">The Moscow Times <a class="header-anchor" href="#the-moscow-times" aria-label="Permalink to &quot;The Moscow Times&quot;">​</a></h1><p>The Moscow Times is an English-language news outlet covering <a href="/entities/russia">Russia</a>, and one of the sources aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In January 2024 Badlands excerpted a Moscow Times report on President <a href="/entities/vladimir-putin">Vladimir Putin</a>&#39;s vow to &quot;intensify&quot; strikes against <a href="/entities/ukraine">Ukraine</a> following the <a href="/concepts/belgorod-attack">Belgorod attack</a>, including his remarks delivered during a visit to a military hospital and his claim that Russia targets military rather than civilian sites.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-moscow-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theMoscowTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theMoscowTimes as default
};
