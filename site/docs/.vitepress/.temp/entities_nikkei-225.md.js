import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nikkei 225","description":"","frontmatter":{"title":"Nikkei 225","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["markets","japan","economy",2024],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nikkei-225.md","filePath":"entities/nikkei-225.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nikkei-225.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nikkei-225" tabindex="-1">Nikkei 225 <a class="header-anchor" href="#nikkei-225" aria-label="Permalink to &quot;Nikkei 225&quot;">​</a></h1><p>The Nikkei 225 is Japan&#39;s benchmark stock index.[1] On Monday, August 5, 2024, it plunged as much as 7.1% in early trading before recovering some ground, extending sell-offs that had shaken world markets the previous week.[1]</p><p>At one point the index shed more than 2,500 points; by midday Tokyo time it was down 6.4%, or roughly 2,300 points, at 33,620.99.[1] The broader TOPIX index fell as much as 7.8% before recovering to a 6.2% loss.[1] The rout followed a report showing that hiring by US employers had slowed far more than expected the prior month, which convulsed financial markets and erased the euphoria that had carried the Nikkei to all-time highs above 42,000 in preceding weeks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nikkei-225.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nikkei225 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nikkei225 as default
};
