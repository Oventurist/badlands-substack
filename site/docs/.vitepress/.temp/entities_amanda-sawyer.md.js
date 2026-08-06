import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amanda Sawyer","description":"","frontmatter":{"title":"Amanda Sawyer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["local-government","denver","zoning","urban-planning"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amanda-sawyer.md","filePath":"entities/amanda-sawyer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amanda-sawyer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amanda-sawyer" tabindex="-1">Amanda Sawyer <a class="header-anchor" href="#amanda-sawyer" aria-label="Permalink to &quot;Amanda Sawyer&quot;">​</a></h1><p>Amanda Sawyer is a member of the <a href="/entities/denver-city-council">Denver City Council</a> and a co-sponsor of a 2024 bill to restrict where developers may build new gas stations in the city.[1]</p><p>Sawyer described the measure as responsive to constituent demand: &quot;What our residents have said is, &#39;We want to see housing. We want to see small businesses. We want to see coffee shops where we can go hang out with our friends that we can walk to down the street from our house.&#39; Nowhere in any of that feedback did we hear from people, &#39;We want more gas stations.&#39;&quot;[1] Her co-sponsors were councilmembers Diana Romero Campbell and Paul Kashmann.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amanda-sawyer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amandaSawyer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amandaSawyer as default
};
