import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mutanda Mining","description":"","frontmatter":{"title":"Mutanda Mining","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mining","cobalt","drc","glencore"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mutanda-mining.md","filePath":"entities/mutanda-mining.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mutanda-mining.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mutanda-mining" tabindex="-1">Mutanda Mining <a class="header-anchor" href="#mutanda-mining" aria-label="Permalink to &quot;Mutanda Mining&quot;">​</a></h1><p>Mutanda Mining (&quot;Mumi&quot;) is a copper and cobalt mining operation in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of the Congo</a> held within the <a href="/entities/glencore">Glencore</a> group.[1]</p><h2 id="ownership-history-and-2026-transaction" tabindex="-1">Ownership history and 2026 transaction <a class="header-anchor" href="#ownership-history-and-2026-transaction" aria-label="Permalink to &quot;Ownership history and 2026 transaction&quot;">​</a></h2><p><a href="/entities/dan-gertler">Dan Gertler</a> brokered the deals that brought Mutanda under Glencore&#39;s control, retaining an ownership stake himself.[1] After <a href="/concepts/executive-order-13818">Executive Order 13818</a> named Gertler on its sanctions list in December 2017, Mutanda was drawn into asset freezes and foreign litigation, and mineral rights were stripped from the associated companies.[1]</p><p>In February 2026, Glencore and the <a href="/entities/orion-critical-mineral-consortium">Orion Critical Mineral Consortium</a> signed a non-binding Memorandum of Understanding for Orion to acquire a 40% stake in Glencore&#39;s interests in Mutanda and <a href="/entities/kamoto-copper-company">Kamoto Copper Company</a>, implying a combined enterprise value of roughly $9 billion; Mutanda would continue to be managed as part of the Glencore Group.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mutanda-mining.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mutandaMining = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mutandaMining as default
};
