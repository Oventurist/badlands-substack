import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kamoto Copper Company","description":"","frontmatter":{"title":"Kamoto Copper Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mining","copper","cobalt","drc","glencore"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kamoto-copper-company.md","filePath":"entities/kamoto-copper-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kamoto-copper-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kamoto-copper-company" tabindex="-1">Kamoto Copper Company <a class="header-anchor" href="#kamoto-copper-company" aria-label="Permalink to &quot;Kamoto Copper Company&quot;">​</a></h1><p>Kamoto Copper Company (&quot;KCC&quot;) is a copper and cobalt producer in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of the Congo</a> held within the <a href="/entities/glencore">Glencore</a> group.[1]</p><h2 id="ownership-history-and-2026-transaction" tabindex="-1">Ownership history and 2026 transaction <a class="header-anchor" href="#ownership-history-and-2026-transaction" aria-label="Permalink to &quot;Ownership history and 2026 transaction&quot;">​</a></h2><p>Deals brokered by <a href="/entities/dan-gertler">Dan Gertler</a> brought Kamoto under Glencore&#39;s control, with Gertler maintaining a stake.[1] Following Gertler&#39;s designation under <a href="/concepts/executive-order-13818">Executive Order 13818</a> in December 2017, Kamoto became entangled in frozen assets and foreign court proceedings that stripped mineral rights from the companies concerned.[1]</p><p>In February 2026, Glencore disclosed a non-binding Memorandum of Understanding with the <a href="/entities/orion-critical-mineral-consortium">Orion Critical Mineral Consortium</a> for a 40% stake in Glencore&#39;s DRC interests, covering KCC and <a href="/entities/mutanda-mining">Mutanda Mining</a>, with a combined implied enterprise value of about $9 billion and continued Glencore management of the assets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kamoto-copper-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kamotoCopperCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kamotoCopperCompany as default
};
