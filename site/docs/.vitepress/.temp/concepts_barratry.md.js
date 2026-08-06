import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barratry","description":"","frontmatter":{"title":"Barratry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","lawfare","common-law","badlands-brief"],"sources":["raw/badlands-brief-2c0.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/barratry.md","filePath":"concepts/barratry.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/barratry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barratry" tabindex="-1">Barratry <a class="header-anchor" href="#barratry" aria-label="Permalink to &quot;Barratry&quot;">​</a></h1><p>Barratry is an old common-law offense dating back to medieval England. At its core it means habitually inciting, promoting or fomenting lawsuits and legal disputes in which the instigator has no legitimate interest.[1]</p><h2 id="badlands-framing" tabindex="-1">Badlands framing <a class="header-anchor" href="#badlands-framing" aria-label="Permalink to &quot;Badlands framing&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> invoked the term while arguing that &quot;abusing the legal process for narrative gain should be a crime,&quot; in the context of the <a href="/entities/department-of-justice">Justice Department</a>&#39;s superseding indictment of the <a href="/entities/southern-poverty-law-center">Southern Poverty Law Center</a>.[1] She observed that the offense is not much in vogue in 2026, and proposed that the country should &quot;make barratry great again, beginning with the SPLC and their collaborators.&quot;[1] The remark followed her account of parties who, she says, fabricated claims under the <a href="/concepts/ku-klux-klan-act">Ku Klux Klan Act</a> against Badlands-affiliated figures in 2022.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Southern Hospitality Superseded Plus Cross Burning&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/barratry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barratry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barratry as default
};
