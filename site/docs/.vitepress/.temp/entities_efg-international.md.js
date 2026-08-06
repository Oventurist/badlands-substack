import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"EFG International","description":"","frontmatter":{"title":"EFG International","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","switzerland","private-banking","pdvsa","venezuela"],"sources":["raw/badlands-brief-d17.md"],"confidence":"low"},"headers":[],"relativePath":"entities/efg-international.md","filePath":"entities/efg-international.md","lastUpdated":null}');
const _sfc_main = { name: "entities/efg-international.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="efg-international" tabindex="-1">EFG International <a class="header-anchor" href="#efg-international" aria-label="Permalink to &quot;EFG International&quot;">​</a></h1><p>EFG International is a Swiss private banking and asset-management group named among the financial institutions entangled in the corruption case surrounding Venezuela&#39;s state oil company, <a href="/entities/pdvsa">PDVSA</a>.[1]</p><p>Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, modelling how renewed litigation might unfold after Venezuela sanctions are lifted, reported an assessment that the private banks involved — the <a href="/entities/julius-baer">Julius Baer</a> Group, EFG International, and <a href="/entities/credit-suisse">Credit Suisse</a> — were almost certain to be the first parties to cooperate with investigators, along with their compliance officers and internal auditors.[1] That expectation rests on the pattern established by <a href="/entities/matthias-krull">Matthias Krull</a>, whose cooperation in exchange for a drastically reduced sentence unlocked the broader <a href="/concepts/operation-money-flight">Operation Money Flight</a> case.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Devolucion, Sedition, Somalis, and Patagonia Pyros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-d17" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-d17</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/efg-international.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const efgInternational = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  efgInternational as default
};
