import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrew Nixon","description":"","frontmatter":{"title":"Andrew Nixon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hhs","spokesman","vaccines","government"],"sources":["raw/badlands-brief-b62.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andrew-nixon.md","filePath":"entities/andrew-nixon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrew-nixon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrew-nixon" tabindex="-1">Andrew Nixon <a class="header-anchor" href="#andrew-nixon" aria-label="Permalink to &quot;Andrew Nixon&quot;">​</a></h1><p>Andrew Nixon is a spokesman for the U.S. <a href="/entities/department-of-health-and-human-services">Department of Health and Human Services</a>.[1]</p><h2 id="statement-on-withdrawn-vaccine-studies" tabindex="-1">Statement on withdrawn vaccine studies <a class="header-anchor" href="#statement-on-withdrawn-vaccine-studies" aria-label="Permalink to &quot;Statement on withdrawn vaccine studies&quot;">​</a></h2><p>Nixon provided the department&#39;s public explanation for the <a href="/entities/food-and-drug-administration">FDA</a>&#39;s decision to block publication of COVID-19 and shingles vaccine safety studies, saying the studies were withdrawn because the authors drew broad conclusions not supported by the underlying data.[1] He said the agency acted &quot;to protect the integrity of its scientific process and ensure that any work associated with the agency meets its high standards.&quot;[1] The episode is covered in <a href="/concepts/fda-blocked-vaccine-safety-studies">FDA Blocked Vaccine Safety Studies</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrew-nixon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrewNixon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrewNixon as default
};
