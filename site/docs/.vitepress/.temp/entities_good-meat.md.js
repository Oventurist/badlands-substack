import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GOOD Meat","description":"","frontmatter":{"title":"GOOD Meat","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["lab-grown-meat","food","fda","biotech","singapore"],"sources":["raw/badlands-news-brief-070.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/good-meat.md","filePath":"entities/good-meat.md","lastUpdated":null}');
const _sfc_main = { name: "entities/good-meat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="good-meat" tabindex="-1">GOOD Meat <a class="header-anchor" href="#good-meat" aria-label="Permalink to &quot;GOOD Meat&quot;">​</a></h1><p>GOOD Meat is a California-based cultivated meat company, with an additional office in Singapore, whose lab-grown chicken product was one of two cleared by the U.S. <a href="/entities/food-and-drug-administration">Food and Drug Administration</a> for human consumption.[1]</p><h2 id="regulatory-clearance" tabindex="-1">Regulatory clearance <a class="header-anchor" href="#regulatory-clearance" aria-label="Permalink to &quot;Regulatory clearance&quot;">​</a></h2><p>The FDA green-lit not one but two different lab-grown &quot;chicken meat&quot; products for human consumption: one produced by <a href="/entities/upside-foods">Upside Foods</a> and the other by GOOD Meat.[1] Both firms are based out of California, with GOOD Meat maintaining a Singapore office as well.[1]</p><h2 id="criticism" tabindex="-1">Criticism <a class="header-anchor" href="#criticism" aria-label="Permalink to &quot;Criticism&quot;">​</a></h2><p>The approvals were reported by <a href="/entities/natural-news">Natural News</a> under the framing that artificial chicken grown in stainless-steel bioreactors — and, in its account, derived from cancer cells — was about to hit the American market with federal blessing.[1] Badlands commentary treated the clearances as further evidence of a compromised food supply, urging readers to source real food directly from farmers where possible.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sudan Spirals, Epstein Entraps &amp; Banks Bail&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-070" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-070</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/good-meat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const goodMeat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  goodMeat as default
};
