import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sibanye-Stillwater","description":"","frontmatter":{"title":"Sibanye-Stillwater","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mining","south-africa","gold","industrial-accident"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sibanye-stillwater.md","filePath":"entities/sibanye-stillwater.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sibanye-stillwater.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sibanye-stillwater" tabindex="-1">Sibanye-Stillwater <a class="header-anchor" href="#sibanye-stillwater" aria-label="Permalink to &quot;Sibanye-Stillwater&quot;">​</a></h1><p>Sibanye-Stillwater is a South African precious metals mining company that operates the Kloof gold mine, located roughly 37 miles west of Johannesburg and among the company&#39;s deepest operations.[1]</p><p>In May 2025, 260 miners became trapped underground at Kloof after an accident on Thursday damaged the hoist system used to access a shaft; all were brought safely to the surface on Friday afternoon with no injuries reported.[1] The company said it was &quot;engaging with the Chief Inspector of Mines, the Department of Mineral Resources and Energy, and trade unions,&quot; and that operations would resume only once safety and risk assessments were concluded and the shaft deemed safe.[1] Chief executive <a href="/entities/neal-froneman">Neal Froneman</a> said safety remained the company&#39;s core priority and thanked management, mine rescue, and medical teams for returning the workers to their families.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sibanye-stillwater.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sibanyeStillwater = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sibanyeStillwater as default
};
