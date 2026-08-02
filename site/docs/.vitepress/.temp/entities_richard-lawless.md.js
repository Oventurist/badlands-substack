import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Lawless","description":"","frontmatter":{"title":"Richard Lawless","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["cia","florida","bush-family"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/richard-lawless.md","filePath":"entities/richard-lawless.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-lawless.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-lawless" tabindex="-1">Richard Lawless <a class="header-anchor" href="#richard-lawless" aria-label="Permalink to &quot;Richard Lawless&quot;">​</a></h1><p>Richard Lawless is a former 15-year veteran of the <a href="/entities/cia">cia</a> who is identified in the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a> as a beneficiary of <a href="/entities/jeb-bush">jeb-bush</a>&#39;s political power while Bush served as Florida&#39;s commerce secretary.</p><h2 id="florida-state-contracts" tabindex="-1">Florida state contracts <a class="header-anchor" href="#florida-state-contracts" aria-label="Permalink to &quot;Florida state contracts&quot;">​</a></h2><p>According to <a href="/entities/tampa-bay-times">tampa-bay-times</a>, Lawless won state contracts to promote exports in Asia when Jeb Bush served as Florida commerce secretary. After leaving the CIA, Lawless joined with Bush and paid him to find real estate property for Japanese investors. A 1993 deal gave Bush a commission of $213,000. The article describes this as a quid pro quo arrangement: Jeb gave Lawless state contracts, and Lawless paid Bush back with real estate commissions.</p><h2 id="cia-background" tabindex="-1">CIA background <a class="header-anchor" href="#cia-background" aria-label="Permalink to &quot;CIA background&quot;">​</a></h2><p>The article emphasizes Lawless&#39;s CIA background as evidence of the intelligence community&#39;s penetration of state government and economic development. The source suggests that Lawless&#39;s export-promotion contracts may have served CIA interests while appearing to be legitimate state economic development work.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-lawless.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardLawless = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardLawless as default
};
