import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oak Fire","description":"","frontmatter":{"title":"Oak Fire","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["california","wildfire","arson","climate-change-narrative"],"sources":["raw/badlands-news-brief-1d7.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/oak-fire.md","filePath":"concepts/oak-fire.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/oak-fire.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oak-fire" tabindex="-1">Oak Fire <a class="header-anchor" href="#oak-fire" aria-label="Permalink to &quot;Oak Fire&quot;">​</a></h1><p>The Oak Fire was a 2022 California wildfire that burned more than 19,000 acres, destroyed 127 homes and damaged over 60 additional buildings.[1] In June 2023, 71-year-old retired firefighter <a href="/entities/edward-hackerman">Edward Hackerman</a> of Mariposa, California — a man with twelve years of firefighting experience — was arrested and accused of deliberately starting the blaze, facing charges that included aggravated arson.[1]</p><h2 id="political-dimension" tabindex="-1">Political dimension <a class="header-anchor" href="#political-dimension" aria-label="Permalink to &quot;Political dimension&quot;">​</a></h2><p>Coverage of the arrest highlighted that Hackerman had donated to Democratic campaigns and to the <a href="/entities/lincoln-project">Lincoln Project</a>, though the donations were few in number.[1] Badlands Media contributor <a href="/entities/johnny-q">Johnny Q</a> argued that a Republican donor accused of identical conduct would have been framed as a domestic terrorism case, and questioned whether Hackerman would face a severe sentence at all.[1]</p><h2 id="climate-narrative" tabindex="-1">Climate narrative <a class="header-anchor" href="#climate-narrative" aria-label="Permalink to &quot;Climate narrative&quot;">​</a></h2><p>Johnny Q noted that the inferno had initially been attributed to climate change, an attribution he described as an ironic twist once an arson suspect was identified, and stressed that the destruction of the land itself constituted the real tragedy of the event.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump&#39;s Support, Durham&#39;s Return &amp; Xi&#39;s Threats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1d7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1d7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/oak-fire.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oakFire = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oakFire as default
};
