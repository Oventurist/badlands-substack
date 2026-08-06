import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eric Garcetti","description":"","frontmatter":{"title":"Eric Garcetti","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["los-angeles","mayor","covid-19","cash-assistance"],"sources":["raw/badlands-news-brief-1a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eric-garcetti.md","filePath":"entities/eric-garcetti.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eric-garcetti.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eric-garcetti" tabindex="-1">Eric Garcetti <a class="header-anchor" href="#eric-garcetti" aria-label="Permalink to &quot;Eric Garcetti&quot;">​</a></h1><p>Eric Garcetti is a former mayor of Los Angeles whose administration created the &quot;Angeleno card&quot; cash-assistance program, cited in July 2025 as the model for a successor program aimed at families affected by federal immigration raids.[1]</p><h2 id="angeleno-cards" tabindex="-1">Angeleno cards <a class="header-anchor" href="#angeleno-cards" aria-label="Permalink to &quot;Angeleno cards&quot;">​</a></h2><p>During the coronavirus pandemic, Garcetti&#39;s city government distributed prepaid cards loaded with cash to residents at a time when Los Angeles had imposed sweeping shutdowns on workplaces.[1] His successor, Mayor <a href="/entities/karen-bass">Karen Bass</a>, invoked that precedent when announcing in July 2025 that the city would provide cash assistance to families whose members she said could not go to work for fear of arrest and deportation, or who had otherwise lost income during <a href="/entities/immigration-and-customs-enforcement">Immigration and Customs Enforcement</a> operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Epstein Angst, Autopen Privilege, &amp; Migrant Cash Cards&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eric-garcetti.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ericGarcetti = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ericGarcetti as default
};
