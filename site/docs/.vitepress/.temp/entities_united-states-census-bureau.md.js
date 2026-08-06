import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Census Bureau","description":"","frontmatter":{"title":"United States Census Bureau","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["federal-agency","statistics","surveys","economy"],"sources":["raw/badlands-news-brief-0d4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-states-census-bureau.md","filePath":"entities/united-states-census-bureau.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-census-bureau.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-census-bureau" tabindex="-1">United States Census Bureau <a class="header-anchor" href="#united-states-census-bureau" aria-label="Permalink to &quot;United States Census Bureau&quot;">​</a></h1><p>The United States Census Bureau is the federal statistical agency whose household survey work supplied the data behind reporting on financial hardship in major American metropolitan areas.[1] A Census Bureau survey highlighted the 15 largest US metro areas where residents face the most financial difficulties, almost all of which are under Democratic leadership.[1]</p><p>The survey asked 70,000 respondents in major metro areas, between March 5 and April 1, three questions: whether they had difficulty paying for usual household expenses, whether they experienced food scarcity, and whether they were unable to pay an energy bill.[1] Its findings identified Riverside, California; Houston, Texas; and Chicago, Illinois as the top three metro areas for financial hardship, with the exceptions of Dallas at number four and Miami at number six being the only listed areas not under liberal control.[1]</p><p><a href="/entities/zerohedge">zerohedge</a> framed the results against a backdrop of elevated inflation, high taxes, soaring violent crime, and a migrant crisis in blue cities, and <a href="/entities/ashe-in-america">ashe-in-america</a> argued in the <a href="/concepts/badlands-news-brief">badlands-news-brief</a> that the data showed the results of Democrat policies, adding that Denver — absent from the list — had become a massive homeless encampment and had reallocated $89.9 million from police and fire to migrant services.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kangaroo Courts and Administrative Pedophiles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-census-bureau.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesCensusBureau = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesCensusBureau as default
};
