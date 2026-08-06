import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dave Abrams","description":"","frontmatter":{"title":"Dave Abrams","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["desantis","2024-election","political-staff","communications"],"sources":["raw/badlands-news-brief-47a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dave-abrams.md","filePath":"entities/dave-abrams.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dave-abrams.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dave-abrams" tabindex="-1">Dave Abrams <a class="header-anchor" href="#dave-abrams" aria-label="Permalink to &quot;Dave Abrams&quot;">​</a></h1><p>Dave Abrams served as communications adviser and media director for Florida Governor <a href="/entities/ron-desantis">Ron DeSantis</a>&#39; 2024 presidential campaign.[1]</p><h2 id="departure-from-the-desantis-campaign" tabindex="-1">Departure from the DeSantis campaign <a class="header-anchor" href="#departure-from-the-desantis-campaign" aria-label="Permalink to &quot;Departure from the DeSantis campaign&quot;">​</a></h2><p><a href="/entities/politico">Politico</a> reported in July 2023 that Abrams, along with external affairs lead <a href="/entities/tucker-obenshain">Tucker Obenshain</a>, was leaving the campaign to help a pro-DeSantis outside political nonprofit group, a move that came as DeSantis struggled to gain traction against <a href="/entities/donald-trump">Donald Trump</a>.[1] The campaign confirmed the departures in a statement and framed them as part of a &quot;DeSantis is everywhere strategy&quot; aimed at early nominating states including Iowa, New Hampshire and South Carolina.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The System of Systems Fades ... and Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-47a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-47a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dave-abrams.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daveAbrams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daveAbrams as default
};
