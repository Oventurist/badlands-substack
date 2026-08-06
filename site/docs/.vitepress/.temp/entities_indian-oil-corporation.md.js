import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Indian Oil Corporation","description":"","frontmatter":{"title":"Indian Oil Corporation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["india","oil","refining","de-dollarization","rupee"],"sources":["raw/badlands-news-brief-62d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/indian-oil-corporation.md","filePath":"entities/indian-oil-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/indian-oil-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="indian-oil-corporation" tabindex="-1">Indian Oil Corporation <a class="header-anchor" href="#indian-oil-corporation" aria-label="Permalink to &quot;Indian Oil Corporation&quot;">​</a></h1><p>Indian Oil Corporation (IOC) is India&#39;s largest oil refiner. In August 2023 it executed what was reported as the first crude oil purchase settled entirely outside the US dollar between India and the United Arab Emirates.[1]</p><h2 id="first-rupee-settled-oil-purchase" tabindex="-1">First rupee-settled oil purchase <a class="header-anchor" href="#first-rupee-settled-oil-purchase" aria-label="Permalink to &quot;First rupee-settled oil purchase&quot;">​</a></h2><p>On Monday, August 14, 2023, Indian Oil Corp bought one million barrels of oil from the <a href="/entities/adnoc">Abu Dhabi National Oil Company</a> in a dollar-free transaction, paying in Indian rupees.[1] The trade was the first executed after the two countries signed a Memorandum of Understanding in July 2023 establishing a Local Currency Settlement system, facilitated by the <a href="/entities/reserve-bank-of-india">Reserve Bank of India</a> and the Central Bank of the United Arab Emirates, permitting bilateral trade in rupees and dirhams.[1]</p><p>Coverage framed the transaction as another blow to the <a href="/concepts/petrodollar">petrodollar</a> system and to dollar dominance in global energy trade.[1] The first test of the Local Currency Settlement mechanism had involved the sale of 25 kilograms of gold from a UAE exporter to an Indian buyer for about 128.4 million rupees, roughly $1.54 million.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Federal RICO, Disaster Opportunism &amp; Putin&#39;s Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-62d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-62d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/indian-oil-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indianOilCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  indianOilCorporation as default
};
