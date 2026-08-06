import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uniform Code of Military Justice","description":"","frontmatter":{"title":"Uniform Code of Military Justice","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["military-law","pentagon","ucmj"],"sources":["raw/badlands-brief-e8d.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/uniform-code-of-military-justice.md","filePath":"concepts/uniform-code-of-military-justice.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/uniform-code-of-military-justice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uniform-code-of-military-justice" tabindex="-1">Uniform Code of Military Justice <a class="header-anchor" href="#uniform-code-of-military-justice" aria-label="Permalink to &quot;Uniform Code of Military Justice&quot;">​</a></h1><p>The Uniform Code of Military Justice (UCMJ) is the body of federal law governing the conduct and discipline of United States military personnel.[1]</p><p>In January 2026, the <a href="/entities/pentagon">Pentagon</a> invoked the UCMJ in administrative actions against Senator <a href="/entities/mark-kelly">Mark Kelly</a>, a retired Navy captain, stating that retired officers remain subject to the code and that Kelly&#39;s status as a sitting US senator does not exempt him.[1] Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> announced a formal letter of censure — a permanent reprimand placed in Kelly&#39;s military record — for alleged &quot;seditious statements&quot; and &quot;reckless misconduct,&quot; along with a 45-day retirement grade determination that could reduce Kelly&#39;s retired rank and corresponding retirement pay.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Miraflores New Tenant, Walz Awakens, &amp; Kelly&#39;s Court Martial&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e8d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e8d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/uniform-code-of-military-justice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uniformCodeOfMilitaryJustice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uniformCodeOfMilitaryJustice as default
};
