import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fair Housing Act","description":"","frontmatter":{"title":"Fair Housing Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","civil-rights","housing","hud"],"sources":["raw/badlands-brief-f02.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/fair-housing-act.md","filePath":"concepts/fair-housing-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/fair-housing-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fair-housing-act" tabindex="-1">Fair Housing Act <a class="header-anchor" href="#fair-housing-act" aria-label="Permalink to &quot;Fair Housing Act&quot;">​</a></h1><p>The Fair Housing Act is the federal statute prohibiting discrimination in housing on the basis of protected characteristics including race. It is enforced principally by the <a href="/entities/department-of-housing-and-urban-development">Department of Housing and Urban Development</a>.[1]</p><h2 id="_2026-minneapolis-probe" tabindex="-1">2026 Minneapolis probe <a class="header-anchor" href="#_2026-minneapolis-probe" aria-label="Permalink to &quot;2026 Minneapolis probe&quot;">​</a></h2><p>In early 2026, HUD invoked the Act — together with the Civil Rights Act — in opening an investigation into <a href="/entities/minneapolis">Minneapolis</a> housing programs, alleging that the city&#39;s race-based prioritization of certain ethnic groups in the allocation of housing benefits constitutes unlawful discrimination.[1] The probe ran alongside federal immigration-enforcement and obstruction investigations in Minnesota and was framed by the administration as part of a broader effort against fraud and corruption tied to state policies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Davos Elites Prepare ... for TRUMP-A-MANIA!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-f02" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-f02</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/fair-housing-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fairHousingAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fairHousingAct as default
};
