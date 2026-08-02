import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Hause","description":"","frontmatter":{"title":"David Hause","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","military","pathology","whistleblower"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/david-hause.md","filePath":"entities/david-hause.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-hause.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-hause" tabindex="-1">David Hause <a class="header-anchor" href="#david-hause" aria-label="Permalink to &quot;David Hause&quot;">​</a></h1><p>Lt. Col. David Hause was a pathologist at the <a href="/entities/armed-forces-institute-of-pathology">Armed Forces Institute of Pathology</a> and, according to the account cited in the Badlands corpus, one of the institute&#39;s leading experts on gunshot wounds.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> reports that on December 9, 1997, Hause came forward to corroborate the claims of Lt. Col. <a href="/entities/steve-cogswell">Steve Cogswell</a> regarding the head wound of Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a>. Unlike Cogswell, Hause was physically present in the room during the examination of Brown&#39;s body. When Chief Petty Officer Kathleen Janoski exclaimed, &quot;Wow, look at the hole in Ron Brown&#39;s head,&quot; Hause walked over and verified that the wound penetrated the skull and exposed brain matter, describing it as looking like &quot;a punched-out .45-caliber entrance hole.&quot;</p><p>After Hause spoke to <em>Pittsburgh Tribune-Review</em> reporter Christopher Ruddy, AFIP broadened its gag order to cover all institute personnel. The article treats Hause&#39;s corroboration as the decisive element that made the dispute impossible to attribute to a single eccentric witness, noting that three separate military pathologists concluded there was a bullet hole in Brown&#39;s head before the department was silenced.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-hause.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidHause = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidHause as default
};
