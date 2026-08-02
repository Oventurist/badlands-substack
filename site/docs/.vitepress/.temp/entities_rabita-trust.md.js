import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rabita Trust","description":"","frontmatter":{"title":"Rabita Trust","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","terror-financing","pakistan","al-qaeda"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/rabita-trust.md","filePath":"entities/rabita-trust.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rabita-trust.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rabita-trust" tabindex="-1">Rabita Trust <a class="header-anchor" href="#rabita-trust" aria-label="Permalink to &quot;Rabita Trust&quot;">​</a></h1><p>The Rabita Trust is a Pakistan-based charitable organization formally designated as a terrorist organization under U.S. law because of its funding of <a href="/entities/al-qaeda">al-Qaeda</a>.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a>, quoting PJMedia, reports that the Rabita Trust was established by <a href="/entities/wael-jalaidan">Wael Jalaidan</a> — a former leader of the <a href="/entities/muslim-students-association">Muslim Students Association</a> chapter at the University of Arizona who went on to help <a href="/entities/osama-bin-laden">Osama bin Laden</a> found al-Qaeda — in partnership with &quot;the Abedins&#39; patron,&quot; <a href="/entities/abdullah-omar-naseef">Abdullah Omar Naseef</a>.</p><p>The article underscores that the Rabita Trust was a Pakistani organization, linking it rhetorically to <a href="/entities/huma-abedin">Huma Abedin</a>&#39;s Pakistani family background: &quot;That&#39;s not a coincidence.&quot; Within the essay&#39;s argument the trust illustrates the dual character it attributes to the <a href="/entities/muslim-brotherhood">Muslim Brotherhood</a> network — publicly disavowing violence while using global charities to fund groups such as Hamas, Hezbollah, and al-Qaeda.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rabita-trust.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rabitaTrust = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rabitaTrust as default
};
