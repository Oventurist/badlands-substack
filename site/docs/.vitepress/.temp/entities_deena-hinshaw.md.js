import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Deena Hinshaw","description":"","frontmatter":{"title":"Deena Hinshaw","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","alberta","public-health","covid-mandates","litigation"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/deena-hinshaw.md","filePath":"entities/deena-hinshaw.md","lastUpdated":null}');
const _sfc_main = { name: "entities/deena-hinshaw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="deena-hinshaw" tabindex="-1">Deena Hinshaw <a class="header-anchor" href="#deena-hinshaw" aria-label="Permalink to &quot;Deena Hinshaw&quot;">​</a></h1><p>Deena Hinshaw served as Alberta&#39;s Health Minister during the COVID-19 period and is identified in Badlands reporting as the official whose pandemic measures were ruled illegal by an Alberta court in early 2024.[1]</p><p>Badlands writer <a href="/entities/simon-esler">Simon Esler</a> reported that the ruling paved the way for what appeared likely to become the largest class action in Alberta&#39;s history.[1] The decision was presented as part of a cluster of Canadian legal reversals — alongside the <a href="/concepts/emergencies-act">Emergencies Act</a> ruling and the <a href="/concepts/coutts-four">Coutts 4</a> charge withdrawals — indicating that Canadian <a href="/concepts/lawfare">lawfare</a> had become the primary front in disputes over pandemic-era government power.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/deena-hinshaw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deenaHinshaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  deenaHinshaw as default
};
