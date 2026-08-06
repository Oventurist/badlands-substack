import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Court of Appeals for the Fifth Circuit","description":"","frontmatter":{"title":"US Court of Appeals for the Fifth Circuit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["courts","immigration","detention","judiciary"],"sources":["raw/badlands-brief-143.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-court-of-appeals-for-the-fifth-circuit.md","filePath":"entities/us-court-of-appeals-for-the-fifth-circuit.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-court-of-appeals-for-the-fifth-circuit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-court-of-appeals-for-the-fifth-circuit" tabindex="-1">US Court of Appeals for the Fifth Circuit <a class="header-anchor" href="#us-court-of-appeals-for-the-fifth-circuit" aria-label="Permalink to &quot;US Court of Appeals for the Fifth Circuit&quot;">​</a></h1><p>The US Court of Appeals for the Fifth Circuit is a federal appellate court that in February 2026 issued a 2-1 decision backing the <a href="/entities/donald-trump">Trump</a> administration&#39;s reading of federal immigration detention law.[1]</p><h2 id="immigration-detention" tabindex="-1">Immigration detention <a class="header-anchor" href="#immigration-detention" aria-label="Permalink to &quot;Immigration detention&quot;">​</a></h2><p>The Fifth Circuit&#39;s ruling was the administration&#39;s first appellate win on the mandatory-detention question and was followed the next month by a parallel 2-1 decision from the <a href="/entities/us-court-of-appeals-for-the-eighth-circuit">US Court of Appeals for the Eighth Circuit</a>, which held that federal law mandates rather than merely permits detention in most deportation cases.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;All the Classic Earmarks of Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-143" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-143</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-court-of-appeals-for-the-fifth-circuit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usCourtOfAppealsForTheFifthCircuit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usCourtOfAppealsForTheFifthCircuit as default
};
