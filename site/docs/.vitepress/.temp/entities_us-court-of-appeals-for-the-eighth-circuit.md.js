import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Court of Appeals for the Eighth Circuit","description":"","frontmatter":{"title":"US Court of Appeals for the Eighth Circuit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["courts","immigration","detention","judiciary"],"sources":["raw/badlands-brief-143.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-court-of-appeals-for-the-eighth-circuit.md","filePath":"entities/us-court-of-appeals-for-the-eighth-circuit.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-court-of-appeals-for-the-eighth-circuit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-court-of-appeals-for-the-eighth-circuit" tabindex="-1">US Court of Appeals for the Eighth Circuit <a class="header-anchor" href="#us-court-of-appeals-for-the-eighth-circuit" aria-label="Permalink to &quot;US Court of Appeals for the Eighth Circuit&quot;">​</a></h1><p>The US Court of Appeals for the Eighth Circuit, based in St. Louis, is the federal appellate court that in March 2026 upheld the <a href="/entities/donald-trump">Trump</a> administration&#39;s interpretation of federal immigration detention law.[1]</p><h2 id="mandatory-detention-ruling-march-2026" tabindex="-1">Mandatory detention ruling (March 2026) <a class="header-anchor" href="#mandatory-detention-ruling-march-2026" aria-label="Permalink to &quot;Mandatory detention ruling (March 2026)&quot;">​</a></h2><p>The court ruled 2-1 that federal law not only allows but mandates detention in the majority of deportation cases, reversing lower court decisions that had granted release petitions in Minnesota.[1] The decision marked the second appellate victory for the administration on the issue, following a similar 2-1 ruling from the <a href="/entities/us-court-of-appeals-for-the-fifth-circuit">US Court of Appeals for the Fifth Circuit</a> the previous month.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;All the Classic Earmarks of Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-143" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-143</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-court-of-appeals-for-the-eighth-circuit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usCourtOfAppealsForTheEighthCircuit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usCourtOfAppealsForTheEighthCircuit as default
};
