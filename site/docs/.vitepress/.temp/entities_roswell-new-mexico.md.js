import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roswell, New Mexico","description":"","frontmatter":{"title":"Roswell, New Mexico","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bitcoin","municipal-finance","new-mexico","cryptocurrency"],"sources":["raw/badlands-news-brief-8dc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/roswell-new-mexico.md","filePath":"entities/roswell-new-mexico.md","lastUpdated":null}');
const _sfc_main = { name: "entities/roswell-new-mexico.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="roswell-new-mexico" tabindex="-1">Roswell, New Mexico <a class="header-anchor" href="#roswell-new-mexico" aria-label="Permalink to &quot;Roswell, New Mexico&quot;">​</a></h1><p>Roswell is a city in New Mexico that in 2025 became, by reporting cited in Badlands coverage, the first city in the United States to establish a municipal <a href="/concepts/bitcoin">Bitcoin</a> reserve.[1]</p><h2 id="bitcoin-reserve" tabindex="-1">Bitcoin reserve <a class="header-anchor" href="#bitcoin-reserve" aria-label="Permalink to &quot;Bitcoin reserve&quot;">​</a></h2><p>Roswell launched its Bitcoin reserve on April 29, 2025, beginning with a holding of 0.0305 BTC, with stated purposes including support for elderly residents and disaster response.[1] Mayor Pro Tem Juliana Halvorson signed the official receipt formalizing the city&#39;s commitment to holding Bitcoin as part of its financial strategy.[1] The city indicated it intends to hold the reserve for at least ten years, a signal of confidence in the asset&#39;s long-term value.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The move was described as part of a broader trend of municipalities and national governments treating digital assets as strategic reserves rather than purely speculative investments, with cities such as Miami and the state of Texas having previously shown interest in Bitcoin as a store of value.[1] Badlands commentary characterized the development as unusual but welcome.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gazan Seizures &amp; Gay Porn Scandals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8dc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8dc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roswell-new-mexico.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roswellNewMexico = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  roswellNewMexico as default
};
