import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sixth Amendment","description":"","frontmatter":{"title":"Sixth Amendment","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["sixth-amendment","jury-trial","constitution","criminal-procedure"],"sources":["raw/badlands-brief-6a1.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/sixth-amendment.md","filePath":"concepts/sixth-amendment.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/sixth-amendment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sixth-amendment" tabindex="-1">Sixth Amendment <a class="header-anchor" href="#sixth-amendment" aria-label="Permalink to &quot;Sixth Amendment&quot;">​</a></h1><p>The Sixth Amendment to the United States Constitution guarantees the right to trial by jury in criminal prosecutions, among other procedural protections.[1] Because the text invokes trial by jury without defining its features, disputes over what the guarantee requires have turned on how far the common-law practice familiar at the Founding is carried into the constitutional text.[1]</p><h2 id="jury-size-litigation" tabindex="-1">Jury size litigation <a class="header-anchor" href="#jury-size-litigation" aria-label="Permalink to &quot;Jury size litigation&quot;">​</a></h2><p>The Supreme Court held in <a href="/concepts/williams-v-florida">Williams v. Florida</a> (1970) that the amendment does not require twelve jurors, allowing several states to seat smaller criminal juries.[1] In June 2026 the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> agreed to hear a Florida case challenging that conclusion, with several justices — including <a href="/entities/neil-gorsuch">Neil Gorsuch</a> — having signaled that the founding-era understanding of a jury may have required twelve members.[1]</p><h2 id="interpretive-stakes" tabindex="-1">Interpretive stakes <a class="header-anchor" href="#interpretive-stakes" aria-label="Permalink to &quot;Interpretive stakes&quot;">​</a></h2><p>Commentary published by Badlands framed the case as a test of whether historical precedent supplies the objective standard for undefined constitutional terms, arguing that the same logic would apply to other modern departures from common-law jury practice and not merely to the number of jurors.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The G7 Laments the G2&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6a1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6a1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/sixth-amendment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sixthAmendment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sixthAmendment as default
};
