import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Georgia Guidestones","description":"","frontmatter":{"title":"Georgia Guidestones","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["depopulation","monuments","symbolism","narrative-warfare"],"sources":["raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/georgia-guidestones.md","filePath":"concepts/georgia-guidestones.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/georgia-guidestones.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="georgia-guidestones" tabindex="-1">Georgia Guidestones <a class="header-anchor" href="#georgia-guidestones" aria-label="Permalink to &quot;Georgia Guidestones&quot;">​</a></h1><p>The Georgia Guidestones were a granite monument inscribed with a set of guidelines for humanity, best remembered in dissident media for the depopulation language of its opening precept: &quot;Maintain humanity under 500,000,000 in perpetual balance with nature.&quot;[1] That first guideline is routinely invoked as shorthand for an elite intention to reduce global population, and the monument functions in alternative-media commentary as an interpretive key for stories touching fertility, medicine, and public health.[1]</p><h2 id="invocation-in-badlands-commentary" tabindex="-1">Invocation in Badlands commentary <a class="header-anchor" href="#invocation-in-badlands-commentary" aria-label="Permalink to &quot;Invocation in Badlands commentary&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> cited the Guidestones directly when reacting to research linking <a href="/concepts/tylenol">Tylenol</a> exposure in pregnancy to impaired sexual development in male fetuses, writing that stories of that kind &quot;almost immediately&quot; bring the monument to mind.[1] The reference framed the fertility findings not as an isolated pharmacological result but as one data point in a longer-running argument about deliberate population management, sitting alongside earlier claims connecting the same drug to autism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/georgia-guidestones.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgiaGuidestones = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgiaGuidestones as default
};
