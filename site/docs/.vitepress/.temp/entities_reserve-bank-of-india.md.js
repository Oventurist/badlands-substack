import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reserve Bank of India","description":"","frontmatter":{"title":"Reserve Bank of India","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["india","central-bank","rupee","de-dollarization"],"sources":["raw/badlands-news-brief-62d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/reserve-bank-of-india.md","filePath":"entities/reserve-bank-of-india.md","lastUpdated":null}');
const _sfc_main = { name: "entities/reserve-bank-of-india.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reserve-bank-of-india" tabindex="-1">Reserve Bank of India <a class="header-anchor" href="#reserve-bank-of-india" aria-label="Permalink to &quot;Reserve Bank of India&quot;">​</a></h1><p>The Reserve Bank of India (RBI) is India&#39;s central bank. In 2023 it became a key institutional actor in India&#39;s efforts to settle international trade in national currencies rather than US dollars.[1]</p><h2 id="local-currency-settlement-system" tabindex="-1">Local Currency Settlement system <a class="header-anchor" href="#local-currency-settlement-system" aria-label="Permalink to &quot;Local Currency Settlement system&quot;">​</a></h2><p>In July 2023 India and the United Arab Emirates signed a Memorandum of Understanding establishing a Local Currency Settlement (LCS) system, facilitated jointly by the Reserve Bank of India and the Central Bank of the United Arab Emirates.[1] The arrangement allows the two countries to conduct bilateral trade using the rupee and the dirham.[1] In a statement, the Reserve Bank of India said the agreement would facilitate &quot;seamless cross-border transactions and payments, and foster greater economic cooperation.&quot;[1]</p><p>The system&#39;s first test involved the sale of 25 kilograms of gold from a UAE exporter to an Indian buyer for approximately 128.4 million rupees ($1.54 million).[1] In August 2023, <a href="/entities/indian-oil-corporation">Indian Oil Corporation</a> used the mechanism to buy one million barrels of crude from <a href="/entities/adnoc">ADNOC</a> in rupees — the first dollar-free oil settlement between the two countries and a development widely characterized as another blow to the <a href="/concepts/petrodollar">petrodollar</a>.[1] Indian reporting noted that the LCS system is expected to reduce costs and speed up transactions between the two countries.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Federal RICO, Disaster Opportunism &amp; Putin&#39;s Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-62d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-62d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/reserve-bank-of-india.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reserveBankOfIndia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reserveBankOfIndia as default
};
