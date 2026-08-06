import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pasadena Fire Department","description":"","frontmatter":{"title":"Pasadena Fire Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wildfires","pasadena","emergency-response","california"],"sources":["raw/badlands-news-brief-59b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pasadena-fire-department.md","filePath":"entities/pasadena-fire-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pasadena-fire-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pasadena-fire-department" tabindex="-1">Pasadena Fire Department <a class="header-anchor" href="#pasadena-fire-department" aria-label="Permalink to &quot;Pasadena Fire Department&quot;">​</a></h1><p>The Pasadena Fire Department is the municipal fire agency serving Pasadena, California. It played a central role in the response to the <a href="/entities/eaton-fire">Eaton Fire</a> during the <a href="/concepts/january-2025-los-angeles-wildfires">January 2025 Los Angeles wildfires</a>.[1]</p><h2 id="eaton-fire-operations" tabindex="-1">Eaton Fire operations <a class="header-anchor" href="#eaton-fire-operations" aria-label="Permalink to &quot;Eaton Fire operations&quot;">​</a></h2><p>Under Chief <a href="/entities/chad-augustin">Chad Augustin</a>, the department mobilized 60 strike teams with 750 firefighters against the Eaton Fire on January 8, 2025, drawing mutual aid from across California and from as far away as Arizona.[1] Augustin described his firefighters as exhausted and awaiting reinforcements, and said the simultaneous outbreak of multiple area fires had strained the resources Pasadena normally relies on through its partnership with Los Angeles County, producing what he called an unprecedented situation.[1] The department estimated that 200 to 500 structures had been damaged or lost in the Eaton Fire, whose cause remained undetermined, and attributed the fire&#39;s rapid expansion to erratic winds rather than to the strained water supply.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;A Song of Ice and Fire, Fraud, and Foreign Flashpoints&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-59b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-59b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pasadena-fire-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pasadenaFireDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pasadenaFireDepartment as default
};
