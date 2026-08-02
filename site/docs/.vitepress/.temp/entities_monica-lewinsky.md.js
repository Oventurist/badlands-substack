import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monica Lewinsky","description":"","frontmatter":{"title":"Monica Lewinsky","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","clinton-administration","scandal","media-narrative"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/monica-lewinsky.md","filePath":"entities/monica-lewinsky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/monica-lewinsky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monica-lewinsky" tabindex="-1">Monica Lewinsky <a class="header-anchor" href="#monica-lewinsky" aria-label="Permalink to &quot;Monica Lewinsky&quot;">​</a></h1><p>Monica Lewinsky was a White House intern whose sexual relationship with President <a href="/entities/bill-clinton">Bill Clinton</a>, revealed in 1998, became the defining scandal of his administration.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> presents Lewinsky less as a subject in her own right than as the instrument of a narrative operation. The article notes that Clinton was caught having an affair with her in the White House &quot;in spite of the fact that she was around the same age as his own daughter,&quot; and that the administration went into cover-up mode while right-leaning commentators speculated the scandal might end his presidency.</p><p>The author rejects that reading: &quot;That was never going to happen. The Clintons were insiders and part of the protected class. It was all a big show.&quot; Because Clinton&#39;s infidelity had been well documented before he took office, the article argues, it posed no genuine threat, and the resulting 24/7 media coverage instead buried the administration&#39;s more serious exposures — the congressional investigations into satellite and missile technology transfers to China, illegal campaign fundraising, and the death of Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a>. The relationship began in 1996, the same year Clinton signed the technology-transfer waivers and the same year a second intern, <a href="/entities/huma-abedin">Huma Abedin</a>, entered the orbit of <a href="/entities/hillary-clinton">Hillary Clinton</a> — a coincidence the article treats as the essay&#39;s organizing irony: &quot;The biggest thing that made all of this treason go away was the story of an INTERN.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/monica-lewinsky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const monicaLewinsky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  monicaLewinsky as default
};
