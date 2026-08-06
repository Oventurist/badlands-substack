import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marion Koopmans","description":"","frontmatter":{"title":"Marion Koopmans","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["virology","who","pandemic","netherlands"],"sources":["raw/badlands-news-brief-4a3.md"],"confidence":"low"},"headers":[],"relativePath":"entities/marion-koopmans.md","filePath":"entities/marion-koopmans.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marion-koopmans.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marion-koopmans" tabindex="-1">Marion Koopmans <a class="header-anchor" href="#marion-koopmans" aria-label="Permalink to &quot;Marion Koopmans&quot;">​</a></h1><p><strong>Marion Koopmans</strong> is a Dutch virologist associated with the <a href="/entities/world-health-organization">World Health Organization</a>, including its work on outbreak origins and preparedness.[1]</p><p>Koopmans is cited in alternative media for having claimed that the WHO was preparing for &quot;10 years of viruses,&quot; with 2020 counted as year one.[1] Writing in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> of April 7, 2023, <a href="/entities/ryan-delarme">Ryan DeLarme</a> invoked this claim as context for <a href="/entities/anthony-fauci">Anthony Fauci</a>&#39;s statement that there would &quot;absolutely be an outbreak of another pandemic,&quot; arguing that such predictions arrive &quot;right on cue&quot; from figures who regularly war-game pandemic scenarios and have invested in what he termed the pandemic industrial complex.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fauci Returns, the Dollar Falls &amp; Stormy Struts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4a3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4a3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marion-koopmans.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marionKoopmans = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marionKoopmans as default
};
