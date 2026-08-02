import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Cogswell","description":"","frontmatter":{"title":"Steve Cogswell","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","military","pathology","whistleblower"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/steve-cogswell.md","filePath":"entities/steve-cogswell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-cogswell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-cogswell" tabindex="-1">Steve Cogswell <a class="header-anchor" href="#steve-cogswell" aria-label="Permalink to &quot;Steve Cogswell&quot;">​</a></h1><p>Lt. Col. Steve Cogswell was a deputy medical examiner at the <a href="/entities/armed-forces-institute-of-pathology">Armed Forces Institute of Pathology</a> who publicly disputed the official cause of death of Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a>.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>According to <a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a>, Cogswell&#39;s doubts surfaced in a November 24 report by Christopher Ruddy in the <em>Pittsburgh Tribune-Review</em>. Cogswell, who had not personally examined the body, based his conclusions on x-rays and photographs of the top of Brown&#39;s head, questioning the finding that Brown died of multiple blunt-force trauma sustained in the crash. He also noted that the original x-rays showed possible metal fragments in the brain, consistent with a high-velocity gunshot wound, and that the two head x-rays were missing from Brown&#39;s file — which he suspected were never filed at all.</p><p>On December 5, 1997, AFIP imposed a gag order on Cogswell, forcing him to refer all press inquiries to its public affairs office. The article observes that Cogswell might have been dismissed as &quot;a rather eccentric fellow willing to jeopardize his military career&quot; had Lt. Col. <a href="/entities/david-hause">David Hause</a> not corroborated his account days later. The author counts Cogswell among the &quot;truth-tellers&quot; of the period who &quot;were forced into silence.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-cogswell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveCogswell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveCogswell as default
};
