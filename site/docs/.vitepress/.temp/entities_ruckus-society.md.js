import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ruckus Society","description":"","frontmatter":{"title":"Ruckus Society","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["activism","direct-action","soros-funding","2020-riots"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ruckus-society.md","filePath":"entities/ruckus-society.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ruckus-society.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ruckus-society" tabindex="-1">Ruckus Society <a class="header-anchor" href="#ruckus-society" aria-label="Permalink to &quot;Ruckus Society&quot;">​</a></h1><p>The Ruckus Society is an American direct-action training organization described in a September 2025 <a href="/entities/capital-research-center">Capital Research Center</a> report as the militant partner of the <a href="/entities/center-for-third-world-organizing">Center for Third World Organizing</a>.[1]</p><h2 id="allegations" tabindex="-1">Allegations <a class="header-anchor" href="#allegations" aria-label="Permalink to &quot;Allegations&quot;">​</a></h2><p>According to the report, the Ruckus Society trained activists in property destruction and sabotage during the 2020 riots.[1] It was named as part of a set of U.S.-based organizations that the report said engage in &quot;direct actions&quot; meeting the FBI&#39;s definition of domestic terrorism, and which had collectively received more than $80 million from the <a href="/entities/open-society-foundations">Open Society Foundations</a> since 2016.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ruckus-society.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ruckusSociety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ruckusSociety as default
};
