import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eurasian Times","description":"","frontmatter":{"title":"Eurasian Times","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","geopolitics","publication"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eurasian-times.md","filePath":"entities/eurasian-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eurasian-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eurasian-times" tabindex="-1">Eurasian Times <a class="header-anchor" href="#eurasian-times" aria-label="Permalink to &quot;Eurasian Times&quot;">​</a></h1><p>The Eurasian Times is an online publication covering defense, geopolitics, and strategic affairs across Eurasia.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In April 2025 the outlet published an analysis asking whether <a href="/entities/donald-trump">Donald Trump</a>&#39;s tariff war against <a href="/entities/china">China</a> contained a &quot;<a href="/concepts/reverse-kissinger">Reverse Kissinger</a>&quot; element intended to break the China–<a href="/entities/russia">Russia</a> alignment and pull Moscow into the American camp.[1] The piece noted that Trump&#39;s sweeping global tariffs excluded Russia, examined how Russian agricultural and energy exporters might benefit from a U.S.–China rift, and observed Trump&#39;s long-standing view that Russian–Chinese convergence is contrary to American interests.[1] The article was excerpted in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eurasian-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eurasianTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eurasianTimes as default
};
