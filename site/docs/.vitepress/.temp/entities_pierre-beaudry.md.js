import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pierre Beaudry","description":"","frontmatter":{"title":"Pierre Beaudry","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["historian","canada","art-history","research"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/pierre-beaudry.md","filePath":"entities/pierre-beaudry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pierre-beaudry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pierre-beaudry" tabindex="-1">Pierre Beaudry <a class="header-anchor" href="#pierre-beaudry" aria-label="Permalink to &quot;Pierre Beaudry&quot;">​</a></h1><p>Pierre Beaudry is a Canadian-born historian whose research on <a href="/entities/benjamin-west">Benjamin West</a> is credited as the foundation of the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a>. <a href="/entities/matthew-ehret">Matthew Ehret</a> writes that West&#39;s story &quot;has really been obscured from the history books&quot; and that were it not for Beaudry&#39;s pioneering studies, it &quot;would still be hidden to this very day.&quot;</p><p>Beaudry&#39;s work is specifically credited with enabling the identification of the human figure faintly painted on the rag in West&#39;s 1776 self-portrait — the priest and red-coated soldier quoted from <em>The Death of General Wolfe</em> — an anomaly Ehret says took him a long time to decipher. Beaudry is also cited, as &quot;Professor Pierre Beaudry,&quot; for a hypothesis about West&#39;s 1816 <em>Benjamin Franklin Drawing Electricity from the Sky</em>: that the irony of five cherubs, some innocently infantile and one bearing adult attributes, communicates that Promethean scientific discovery occurs only when adults recover child-like innocence and wonder.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
