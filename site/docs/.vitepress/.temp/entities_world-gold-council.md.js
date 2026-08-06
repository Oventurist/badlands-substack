import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Gold Council","description":"","frontmatter":{"title":"World Gold Council","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["gold","industry-association","data","markets"],"sources":["raw/badlands-news-brief-4a3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/world-gold-council.md","filePath":"entities/world-gold-council.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-gold-council.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-gold-council" tabindex="-1">World Gold Council <a class="header-anchor" href="#world-gold-council" aria-label="Permalink to &quot;World Gold Council&quot;">​</a></h1><p>The <strong>World Gold Council</strong> is the market development organization for the gold industry, best known for compiling and publishing authoritative data on global gold demand, supply, and official-sector reserves.[1]</p><p>Its reserve statistics are the standard reference for tracking <a href="/concepts/central-bank-gold-buying">central bank gold buying</a>. Data compiled by the Council showed that central bank gold reserves rose by 52 tons in February 2023, the eleventh consecutive month of net official-sector purchases, and that net purchases over the first two months of 2023 reached 125 tons — the strongest start to a year since 2010.[1] The Council&#39;s country-level reserve series also recorded the People&#39;s Bank of China as February&#39;s largest buyer at a reported 24.9 tons.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fauci Returns, the Dollar Falls &amp; Stormy Struts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4a3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4a3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-gold-council.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldGoldCouncil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldGoldCouncil as default
};
