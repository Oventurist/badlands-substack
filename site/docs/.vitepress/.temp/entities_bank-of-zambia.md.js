import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank of Zambia","description":"","frontmatter":{"title":"Bank of Zambia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["zambia","central-bank","de-dollarization","monetary-policy"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bank-of-zambia.md","filePath":"entities/bank-of-zambia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bank-of-zambia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-of-zambia" tabindex="-1">Bank of Zambia <a class="header-anchor" href="#bank-of-zambia" aria-label="Permalink to &quot;Bank of Zambia&quot;">​</a></h1><p>The Bank of Zambia is the central bank of <a href="/entities/zambia">Zambia</a>. In July 2024 it drafted new currency rules aimed at curbing the use of foreign currencies — particularly the US dollar — in domestic transactions, as reported by the country&#39;s national news agency.[1]</p><h2 id="_2024-currency-regulations" tabindex="-1">2024 currency regulations <a class="header-anchor" href="#_2024-currency-regulations" aria-label="Permalink to &quot;2024 currency regulations&quot;">​</a></h2><p>Under the draft, regulations were to be issued as a statutory instrument by the minister of finance and national planning, requiring the <a href="/concepts/zambian-kwacha">Zambian kwacha</a> and its subunit, the ngwee, to be used for all domestic public and private transactions.[1] The central bank raised concern that the increasing use of the dollar within the local economy undermined its monetary policy tools and exerted pressure on the exchange rate.[1]</p><p>A draft document released by the bank revealed that individuals caught using foreign currency for local transactions could face up to ten years in prison or substantial fines.[1] The penalties were announced by the central bank&#39;s deputy governor for operations, <a href="/entities/francis-chipimo">Francis Chipimo</a>, in a speech at a trade fair in Ndola.[1]</p><p>The Badlands News Brief treated the measure as a marker of accelerating de-dollarization, arguing that the perceived flooding of Zambia&#39;s economy with a rapidly inflating currency could be read as a tactic to destabilize a country whose currency had recently been the best-performing in Africa against the dollar.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bank-of-zambia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankOfZambia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankOfZambia as default
};
