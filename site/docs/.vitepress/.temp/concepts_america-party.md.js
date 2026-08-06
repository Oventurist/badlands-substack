import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"America Party","description":"","frontmatter":{"title":"America Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["elon-musk","third-party","politics","tesla","elections"],"sources":["raw/badlands-news-brief-6af.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/america-party.md","filePath":"concepts/america-party.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/america-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="america-party" tabindex="-1">America Party <a class="header-anchor" href="#america-party" aria-label="Permalink to &quot;America Party&quot;">​</a></h1><p>The America Party is a political party announced by <a href="/entities/elon-musk">Elon Musk</a> in July 2025, with which he said he would take on both Republicans and Democrats by focusing on House and Senate seats over the following 12 months. Musk wrote on X that after that period, backing a candidate for president was not out of the question.[1]</p><h2 id="market-reaction" tabindex="-1">Market reaction <a class="header-anchor" href="#market-reaction" aria-label="Permalink to &quot;Market reaction&quot;">​</a></h2><p>The announcement, made over a weekend, deepened Musk&#39;s pursuit of a political project that had already been a drag on his most valuable business. Shares of <a href="/entities/tesla">Tesla</a> Inc. fell 6.8% on the Monday following the announcement in New York, wiping out $15.3 billion from Musk&#39;s net worth according to the Bloomberg Billionaires Index.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: ICE Swarms, TikTok Pivots, &amp; Shoes Stay On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6af" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6af</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/america-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americaParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americaParty as default
};
