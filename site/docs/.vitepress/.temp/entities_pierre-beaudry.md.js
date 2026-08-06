import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pierre Beaudry","description":"","frontmatter":{"title":"Pierre Beaudry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["history","historian","art-history","canada"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pierre-beaudry.md","filePath":"entities/pierre-beaudry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pierre-beaudry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pierre-beaudry" tabindex="-1">Pierre Beaudry <a class="header-anchor" href="#pierre-beaudry" aria-label="Permalink to &quot;Pierre Beaudry&quot;">​</a></h1><p>Pierre Beaudry was a Canadian-born historian whose pioneering studies of <a href="/entities/benjamin-west">Benjamin West</a> are credited by <a href="/entities/matthew-ehret">Matthew Ehret</a> with making the recovery of West&#39;s story possible.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><p>Ehret writes that West&#39;s role as a coordinator of an American renaissance movement in England has been obscured from the history books, and that were it not for Beaudry&#39;s work the story would still be hidden.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a> It was through Beaudry&#39;s studies that Ehret says he was able to identify the human figure embedded on the rag in West&#39;s 1776 self-portrait as the priest and red-coated soldier from <em>The Death of General Wolfe</em>.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><p>Beaudry also advanced a hypothesis about the five cherubs in West&#39;s 1816 painting <em>Benjamin Franklin Drawing Electricity from the Sky</em>, noting the irony that while some carry a natural baby-like innocence, one displays strange adult attributes — read as a statement that true Promethean scientific discovery occurs only when adults tap into child-like innocence and wonder.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New American Renaissance&quot;, URL: <a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-american-renaissance</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pierre-beaudry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pierreBeaudry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pierreBeaudry as default
};
