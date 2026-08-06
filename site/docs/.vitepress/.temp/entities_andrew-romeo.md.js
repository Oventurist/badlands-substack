import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrew Romeo","description":"","frontmatter":{"title":"Andrew Romeo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["desantis","2024-election","political-staff","spokesman"],"sources":["raw/badlands-news-brief-47a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andrew-romeo.md","filePath":"entities/andrew-romeo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrew-romeo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrew-romeo" tabindex="-1">Andrew Romeo <a class="header-anchor" href="#andrew-romeo" aria-label="Permalink to &quot;Andrew Romeo&quot;">​</a></h1><p>Andrew Romeo served as a spokesman for Florida Governor <a href="/entities/ron-desantis">Ron DeSantis</a>&#39; 2024 presidential campaign.[1]</p><h2 id="statements" tabindex="-1">Statements <a class="header-anchor" href="#statements" aria-label="Permalink to &quot;Statements&quot;">​</a></h2><p>Responding to the July 2023 departure of two senior advisers to a pro-DeSantis outside group, Romeo said in a statement: &quot;The more people hear and see Gov. DeSantis and his forward-thinking vision to fix Joe Biden&#39;s failures, the better our path to victory.&quot;[1] He added that DeSantis would appear at events with dozens of organizations celebrating his policy and leadership, and that &quot;the &#39;DeSantis is everywhere&#39; tour has begun.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The System of Systems Fades ... and Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-47a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-47a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrew-romeo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrewRomeo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrewRomeo as default
};
