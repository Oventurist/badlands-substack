import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Ferri","description":"","frontmatter":{"title":"Bill Ferri","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cantor-fitzgerald","asset-management","bitcoin","gold","finance"],"sources":["raw/badlands-news-brief-030.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-ferri.md","filePath":"entities/bill-ferri.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-ferri.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-ferri" tabindex="-1">Bill Ferri <a class="header-anchor" href="#bill-ferri" aria-label="Permalink to &quot;Bill Ferri&quot;">​</a></h1><p>Bill Ferri is Global Head of Cantor Fitzgerald Asset Management at <a href="/entities/cantor-fitzgerald">Cantor Fitzgerald</a>.[1]</p><h2 id="gold-protected-bitcoin-fund" tabindex="-1">Gold Protected Bitcoin Fund <a class="header-anchor" href="#gold-protected-bitcoin-fund" aria-label="Permalink to &quot;Gold Protected Bitcoin Fund&quot;">​</a></h2><p>Ferri was the public voice for the Cantor Fitzgerald Gold Protected Bitcoin Fund, launched in September 2025 after being announced in May at the Bitcoin 2025 conference in Las Vegas.[1] He described it as a five-year strategy that &quot;tackles both risks head-on: it captures Bitcoin&#39;s upward trajectory while gold provides a safety net that historically performs well when markets decline.&quot;[1] He added that &quot;with risk assets at or near all-time highs, timing and protection matter.&quot;[1] The fund materials said the structure &quot;minimizes the risk of short-term volatility and reduces the impact of correlation spikes while continuing to benefit from the long-term upside trend of <a href="/concepts/bitcoin">Bitcoin</a>.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Rare Earths, Rogue Judges, &amp; Record Downward Revisions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-030" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-030</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-ferri.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billFerri = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billFerri as default
};
