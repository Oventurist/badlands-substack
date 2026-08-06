import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PMA Group","description":"","frontmatter":{"title":"PMA Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["lobbying","campaign-finance","defense-contractor","corruption"],"sources":["raw/badlands-news-brief-5ec.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pma-group.md","filePath":"entities/pma-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pma-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pma-group" tabindex="-1">PMA Group <a class="header-anchor" href="#pma-group" aria-label="Permalink to &quot;PMA Group&quot;">​</a></h1><p>PMA Group was a Washington lobbying firm founded and owned by Paul Magliocchetti, specializing in securing federal appropriations and earmarks for defense clients. Its political action committee, the PMA Group PAC, figured in reporting on congressional earmark practices.[1]</p><h2 id="connection-to-the-schiff-earmarks" tabindex="-1">Connection to the Schiff earmarks <a class="header-anchor" href="#connection-to-the-schiff-earmarks" aria-label="Permalink to &quot;Connection to the Schiff earmarks&quot;">​</a></h2><p>Reporting by Politico in September 2023, relayed by ZeroHedge and covered by <a href="/entities/badlands-media">Badlands Media</a>, found that <a href="/entities/adam-schiff">Rep. Adam Schiff</a> received $8,500 in contributions from the PMA Group PAC and from two family members of Magliocchetti while steering millions of dollars in earmarks to <a href="/entities/smiths-detection">Smiths Detection</a> and Phasebridge, Inc. — both of which had retained Magliocchetti&#39;s firm.[1]</p><p>Paul Magliocchetti was sentenced in 2011 to 27 months in prison for making illegal campaign contributions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;It&#39;s Raining Red Pills ... And We Like It&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5ec" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5ec</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pma-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pmaGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pmaGroup as default
};
