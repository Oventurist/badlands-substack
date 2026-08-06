import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Visa","description":"","frontmatter":{"title":"Visa","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["payments","finance","corporation"],"sources":["raw/badlands-news-brief-85a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/visa.md","filePath":"entities/visa.md","lastUpdated":null}');
const _sfc_main = { name: "entities/visa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="visa" tabindex="-1">Visa <a class="header-anchor" href="#visa" aria-label="Permalink to &quot;Visa&quot;">​</a></h1><p>Visa is one of the two dominant American card-payment networks that together underpin much of global retail transaction processing.[1]</p><h2 id="indonesian-withdrawal" tabindex="-1">Indonesian withdrawal <a class="header-anchor" href="#indonesian-withdrawal" aria-label="Permalink to &quot;Indonesian withdrawal&quot;">​</a></h2><p>In March 2023 Visa&#39;s position in the global payments architecture was challenged when <a href="/entities/bank-of-indonesia">Bank Indonesia</a> moved to transition away from Visa and <a href="/entities/mastercard">Mastercard</a> in favour of an indigenous national payment platform.[1] President <a href="/entities/joko-widodo">Joko Widodo</a> publicly described the foreign card networks as a &quot;problem&quot; and urged agencies to shift to cards authorised by local banks.[1]</p><p>The decision was justified by reference to the sanctions imposed on <a href="/entities/russia">Russia</a> by the United States, the European Union and their allies, which demonstrated that access to Western payment rails could be revoked for political reasons.[1] Commentators framed the episode as part of a wider erosion of the American financial network effect and of <a href="/concepts/de-dollarization">de-dollarization</a> pressure on dollar-denominated assets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bank of Epstein, Saudi Arabia &amp; Trump&#39;s Reprieve?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-85a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-85a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/visa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visa as default
};
