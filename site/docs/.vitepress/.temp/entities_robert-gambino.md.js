import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Gambino","description":"","frontmatter":{"title":"Robert Gambino","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["cia","bush-family"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/robert-gambino.md","filePath":"entities/robert-gambino.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-gambino.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-gambino" tabindex="-1">Robert Gambino <a class="header-anchor" href="#robert-gambino" aria-label="Permalink to &quot;Robert Gambino&quot;">​</a></h1><p>Robert Gambino is identified in the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a> as a CIA operative who trained <a href="/entities/jeb-bush">jeb-bush</a> while Bush was employed at <a href="/entities/texas-commerce-bank">texas-commerce-bank</a>.</p><h2 id="training-of-jeb-bush" tabindex="-1">Training of Jeb Bush <a class="header-anchor" href="#training-of-jeb-bush" aria-label="Permalink to &quot;Training of Jeb Bush&quot;">​</a></h2><p>According to the <a href="/concepts/wayne-madsen-report">wayne-madsen-report</a>, a letter from Jeb Bush to Robert Gambino was uncovered, showing that Gambino helped train Bush to become an expert in &quot;overseas banking&quot; while Jeb worked at Texas Commerce Bank. The article describes this as evidence that Jeb was being prepared for his CIA posting in Caracas, Venezuela, where he served as branch manager and vice president of the bank&#39;s Venezuelan operation.</p><h2 id="significance" tabindex="-1">Significance <a class="header-anchor" href="#significance" aria-label="Permalink to &quot;Significance&quot;">​</a></h2><p>The source emphasizes that there are no mainstream media reports describing Jeb Bush as a CIA operative, but the letter to Gambino suggests his first job was a CIA cover. The article argues that if Jeb was going to be the &quot;bagman&quot; for his father—who was head of the CIA&#39;s &quot;shadow government&quot;—he would need to be a member of the CIA himself.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-gambino.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertGambino = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertGambino as default
};
