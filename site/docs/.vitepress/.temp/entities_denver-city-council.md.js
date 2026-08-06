import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Denver City Council","description":"","frontmatter":{"title":"Denver City Council","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["local-government","zoning","urban-planning","colorado"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/denver-city-council.md","filePath":"entities/denver-city-council.md","lastUpdated":null}');
const _sfc_main = { name: "entities/denver-city-council.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="denver-city-council" tabindex="-1">Denver City Council <a class="header-anchor" href="#denver-city-council" aria-label="Permalink to &quot;Denver City Council&quot;">​</a></h1><p>The Denver City Council is the legislative body of Denver, Colorado.[1] In mid-2024 a group of councilmembers began work on a bill that would restrict where developers can build new gas stations, citing as a cautionary example a one-mile stretch of Evans Avenue in South Denver that hosts nine gas stations.[1]</p><p>Sponsors framed the measure as a housing policy favoring new residential development, neighborhood walkability and local businesses over car-oriented construction.[1] Councilmember <a href="/entities/amanda-sawyer">Amanda Sawyer</a>, a co-sponsor alongside councilmembers Diana Romero Campbell and Paul Kashmann, said residents had asked for housing, small businesses and walkable coffee shops, and that &quot;nowhere in any of that feedback did we hear from people, &#39;We want more gas stations.&#39;&quot;[1]</p><p>Badlands commentator <a href="/entities/ashe-in-america">Ashe in America</a> read the proposal as one step in a broader project to make private automobile ownership first socially unacceptable and eventually illegal, grouping it with ride-share promotion and the normalization of electric-vehicle limitations, and tying the agenda to <a href="/entities/kamala-harris">Kamala Harris</a>&#39; platform.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/denver-city-council.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const denverCityCouncil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  denverCityCouncil as default
};
