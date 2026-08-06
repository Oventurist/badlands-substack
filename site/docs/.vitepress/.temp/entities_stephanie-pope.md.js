import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stephanie Pope","description":"","frontmatter":{"title":"Stephanie Pope","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["boeing","aerospace","corporate-leadership"],"sources":["raw/badlands-news-brief-18e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stephanie-pope.md","filePath":"entities/stephanie-pope.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stephanie-pope.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stephanie-pope" tabindex="-1">Stephanie Pope <a class="header-anchor" href="#stephanie-pope" aria-label="Permalink to &quot;Stephanie Pope&quot;">​</a></h1><p>Stephanie Pope is the <a href="/entities/boeing">Boeing</a> executive who, as the company&#39;s chief operating officer, was named in March 2024 to lead the division that builds aircraft for airlines and other commercial customers.[1] She replaced <a href="/entities/stan-deal">Stan Deal</a>, who retired immediately as part of the leadership reshuffle Boeing announced on Monday, March 25, 2024.[1]</p><p>Pope&#39;s elevation was one element of a broader overhaul that also included the announced end-of-year departure of chief executive <a href="/entities/dave-calhoun">Dave Calhoun</a>, undertaken while Boeing was under mounting pressure from regulators, airlines and passengers over its most significant safety crisis in years.[1] The immediate trigger was the January 2024 incident in which a panel blew off a 737 Max 9 midair during an Alaska Airlines flight, which renewed concerns about the manufacturer&#39;s commitment to safety and quality five years after two 737 Max 8 crashes killed nearly 350 people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Irregular Warfare, Washington &amp; So Much Winning&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-18e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-18e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stephanie-pope.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stephaniePope = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stephaniePope as default
};
