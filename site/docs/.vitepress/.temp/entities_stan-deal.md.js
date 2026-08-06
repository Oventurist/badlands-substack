import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stan Deal","description":"","frontmatter":{"title":"Stan Deal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["boeing","aerospace","corporate-leadership"],"sources":["raw/badlands-news-brief-18e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stan-deal.md","filePath":"entities/stan-deal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stan-deal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stan-deal" tabindex="-1">Stan Deal <a class="header-anchor" href="#stan-deal" aria-label="Permalink to &quot;Stan Deal&quot;">​</a></h1><p>Stan Deal was the head of the <a href="/entities/boeing">Boeing</a> division that makes planes for airlines and other commercial customers.[1] In the leadership overhaul announced by Boeing on Monday, March 25, 2024, Deal retired immediately and was replaced by the company&#39;s chief operating officer, <a href="/entities/stephanie-pope">Stephanie Pope</a>.[1]</p><p>His departure came alongside the announced end-of-year exit of chief executive <a href="/entities/dave-calhoun">Dave Calhoun</a>, as Boeing responded to its most significant safety crisis in years — mounting pressure from regulators, airlines and passengers following the January 2024 midair panel blowout on a 737 Max 9 operated by Alaska Airlines, and renewed scrutiny five years after two 737 Max 8 crashes killed nearly 350 people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Irregular Warfare, Washington &amp; So Much Winning&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-18e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-18e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stan-deal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stanDeal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stanDeal as default
};
