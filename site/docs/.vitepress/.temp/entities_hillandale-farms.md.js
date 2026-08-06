import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hillandale Farms","description":"","frontmatter":{"title":"Hillandale Farms","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["food-supply","egg-production","connecticut","fires"],"sources":["raw/badlands-news-brief-580.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hillandale-farms.md","filePath":"entities/hillandale-farms.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hillandale-farms.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hillandale-farms" tabindex="-1">Hillandale Farms <a class="header-anchor" href="#hillandale-farms" aria-label="Permalink to &quot;Hillandale Farms&quot;">​</a></h1><p>Hillandale Farms is one of the largest egg producers in the United States. In late January 2023 one of its Connecticut facilities was destroyed by a major fire that drew attention within alternative media to a broader pattern of incidents at American food-processing plants.[1]</p><h2 id="bozrah-fire" tabindex="-1">Bozrah fire <a class="header-anchor" href="#bozrah-fire" aria-label="Permalink to &quot;Bozrah fire&quot;">​</a></h2><p>More than 100 firefighters responded on Saturday, January 28, 2023 to a large fire at the company&#39;s egg farm in Bozrah, Connecticut, on Schwartz Road.[1] Firefighters reported that the blaze occurred in a 50-foot by 600-foot operating chicken coop, and crews continued assessing the damage in the following days.[1] An estimated 100,000 or more chickens were reported killed in the fire.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands Media contributor <a href="/entities/jordan-sather">Jordan Sather</a> linked the fire to what he described as the large number of food-processing plants that had &quot;mysteriously caught fire&quot; over the preceding year and a half, raising the question of whether such incidents reflected covert efforts to create supply-chain disruption and social strife.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;COVID Coverups, Globalist Schemes and Epstein&#39;s Shadow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-580" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-580</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hillandale-farms.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hillandaleFarms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hillandaleFarms as default
};
