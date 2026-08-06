import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reconquête","description":"","frontmatter":{"title":"Reconquête","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","political-party","hard-right","european-parliament"],"sources":["raw/badlands-news-brief-365.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/reconquete.md","filePath":"entities/reconquete.md","lastUpdated":null}');
const _sfc_main = { name: "entities/reconquete.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reconquete" tabindex="-1">Reconquête <a class="header-anchor" href="#reconquete" aria-label="Permalink to &quot;Reconquête&quot;">​</a></h1><p>Reconquête is a French hard-right political party founded by the polemicist and former presidential candidate <a href="/entities/eric-zemmour">Éric Zemmour</a>.[1] For the June 2024 European Parliament elections the party&#39;s lead candidate was <a href="/entities/marion-marechal">Marion Maréchal</a>, the niece of <a href="/entities/marine-le-pen">Marine Le Pen</a>.[1]</p><h2 id="decline-in-2024-polling" tabindex="-1">Decline in 2024 polling <a class="header-anchor" href="#decline-in-2024-polling" aria-label="Permalink to &quot;Decline in 2024 polling&quot;">​</a></h2><p>An Ipsos survey published in March 2024 found only 3 percent of French voters aged 18 to 24 backing Reconquête, down from 8 percent in December 2023.[1] The fall coincided with a nine-point rise for <a href="/entities/jordan-bardella">Jordan Bardella</a>&#39;s <a href="/entities/national-rally">National Rally</a> among the same cohort, indicating that Reconquête was losing its share of the youth right-wing vote to the larger party rather than expanding the bloc.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: &#39;You Are Watching a Movie&#39; Intensifies ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-365" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-365</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/reconquete.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reconquete = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reconquete as default
};
