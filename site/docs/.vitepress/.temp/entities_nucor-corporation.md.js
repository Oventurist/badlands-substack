import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nucor Corporation","description":"","frontmatter":{"title":"Nucor Corporation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["steel","manufacturing","tariffs","trade"],"sources":["raw/badlands-news-brief-4c4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nucor-corporation.md","filePath":"entities/nucor-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nucor-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nucor-corporation" tabindex="-1">Nucor Corporation <a class="header-anchor" href="#nucor-corporation" aria-label="Permalink to &quot;Nucor Corporation&quot;">​</a></h1><p>Nucor Corp. is the largest steel producer in the United States.[1] In February 2025 the company publicly backed the tariffs imposed by President <a href="/entities/donald-trump">Donald Trump</a> on China, <a href="/entities/canada">Canada</a> and <a href="/entities/mexico">Mexico</a>.[1]</p><p>Nucor chairman, president and chief executive Leon J. Topalian said, &quot;Nucor applauds the first steps taken by President Trump in his America First Trade Agenda,&quot; adding that the company looked forward to working with the president to enforce U.S. trade laws and strengthen American manufacturing.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>Trump&#39;s order, signed on February 1, 2025, imposed the tariffs under the <a href="/concepts/international-emergency-economic-powers-act">International Emergency Economic Powers Act</a>, effective the following Tuesday, applying a 25 percent tariff on imports from Canada and Mexico and a 10 percent tariff on imports from China, with Canadian energy imports facing a reduced 10 percent rate.[1] A one-month delay was agreed at the eleventh hour for the Mexican tariffs while Mexico negotiated with the administration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sovereign Statehood, Tariff Triumphs, &amp; Intersectional Insubordination&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4c4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4c4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nucor-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nucorCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nucorCorporation as default
};
