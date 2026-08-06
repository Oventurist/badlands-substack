import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Novavax","description":"","frontmatter":{"title":"Novavax","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["vaccines","covid-19","pharmaceutical","fda"],"sources":["raw/badlands-news-brief-006.md"],"confidence":"low"},"headers":[],"relativePath":"entities/novavax.md","filePath":"entities/novavax.md","lastUpdated":null}');
const _sfc_main = { name: "entities/novavax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="novavax" tabindex="-1">Novavax <a class="header-anchor" href="#novavax" aria-label="Permalink to &quot;Novavax&quot;">​</a></h1><p>Novavax is a pharmaceutical company whose <a href="/concepts/covid-19-vaccines">COVID-19 vaccine</a> was available in the United States alongside those of <a href="/entities/moderna">Moderna</a> and <a href="/entities/pfizer">Pfizer</a>.[1]</p><p>When the U.S. <a href="/entities/food-and-drug-administration">Food and Drug Administration</a> authorized updated COVID-19 shots on September 11, 2023 to counter the waning effectiveness of the existing slate, the agency&#39;s announcement made no mention of Novavax, despite its product being on the U.S. market.[1] The omission was noted in reporting on the authorization.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NATO Warmongers &amp; Google Searches for a Way Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-006" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-006</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/novavax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const novavax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  novavax as default
};
