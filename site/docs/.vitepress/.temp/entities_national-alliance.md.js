import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Alliance","description":"","frontmatter":{"title":"National Alliance","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["extremism","neo-nazi","splc","informants","indictment"],"sources":["raw/badlands-brief-8c2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-alliance.md","filePath":"entities/national-alliance.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-alliance.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-alliance" tabindex="-1">National Alliance <a class="header-anchor" href="#national-alliance" aria-label="Permalink to &quot;National Alliance&quot;">​</a></h1><p>The National Alliance is a neo-Nazi organization based in West Virginia that features centrally in the <a href="/entities/department-of-justice">Justice Department</a>&#39;s superseding indictment of the <a href="/entities/southern-poverty-law-center">Southern Poverty Law Center</a>.[1]</p><h2 id="role-in-the-splc-case" tabindex="-1">Role in the SPLC case <a class="header-anchor" href="#role-in-the-splc-case" aria-label="Permalink to &quot;Role in the SPLC case&quot;">​</a></h2><p>Prosecutors allege that a confidential informant identified only as &quot;F-9,&quot; embedded in the National Alliance, received more than $1.2 million in SPLC donor funds over roughly two decades at the direction of former SPLC Intelligence Project director <a href="/entities/heidi-beirich">Heidi Beirich</a>.[1] While receiving those payments, F-9 allegedly continued fundraising for and supporting the National Alliance&#39;s activities, a pattern prosecutors characterize as the SPLC financially sustaining the very extremist organizations it publicly denounced.[1]</p><p>The indictment additionally claims the SPLC paid another informant, Randolph Dilloway, $6,000 to falsely take responsibility for a 2014 burglary at the National Alliance&#39;s West Virginia headquarters.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Springs His Trap as the Deep State Gets Desperate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-8c2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-8c2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-alliance.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalAlliance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalAlliance as default
};
