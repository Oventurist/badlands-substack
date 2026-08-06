import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stephen Wilson","description":"","frontmatter":{"title":"Stephen Wilson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","defamation","litigation"],"sources":["raw/badlands-brief-5ba.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stephen-wilson.md","filePath":"entities/stephen-wilson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stephen-wilson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stephen-wilson" tabindex="-1">Stephen Wilson <a class="header-anchor" href="#stephen-wilson" aria-label="Permalink to &quot;Stephen Wilson&quot;">​</a></h1><p>Stephen Wilson is a United States District Judge who presided over <a href="/entities/hunter-biden">Hunter Biden</a>&#39;s defamation suit against former Overstock.com CEO <a href="/entities/patrick-byrne">Patrick Byrne</a>.[1]</p><p>In July 2026 Wilson found that Byrne acted with &quot;intentional misrepresentation&quot; and &quot;conscious disregard&quot; for Hunter Biden&#39;s rights, ruling that Byrne had continued amplifying claims of an $800 million Iranian bribery scheme even after the lawsuit was filed and had encouraged others to spread them on social media.[1] He awarded Hunter Biden $1 in nominal damages, as requested, plus $1.7 million in punitive damages, and ordered Byrne to pay nearly $35,000 in previously imposed court sanctions within two weeks or face an additional $1,000 daily penalty.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Guardians, Shields, &amp; Iranian House Arrest&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stephen-wilson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stephenWilson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stephenWilson as default
};
