import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charles Flynn","description":"","frontmatter":{"title":"Charles Flynn","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-army","indo-pacific","taiwan","military"],"sources":["raw/badlands-news-brief-1ab.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/charles-flynn.md","filePath":"entities/charles-flynn.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charles-flynn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charles-flynn" tabindex="-1">Charles Flynn <a class="header-anchor" href="#charles-flynn" aria-label="Permalink to &quot;Charles Flynn&quot;">​</a></h1><p><strong>General Charles Flynn</strong> was the top United States Army commander in the Pacific during the period of expanded American prepositioning of military equipment across the Indo-Pacific.[1]</p><h2 id="regional-stockpiling" tabindex="-1">Regional stockpiling <a class="header-anchor" href="#regional-stockpiling" aria-label="Permalink to &quot;Regional stockpiling&quot;">​</a></h2><p>Commenting on the equipment stockpile the US left in Bandiana, Australia, after the 2023 <a href="/concepts/talisman-sabre">Talisman Sabre</a> exercises, Flynn said, &quot;We&#39;re looking to do this more and more,&quot; adding that the United States already had agreements with a number of other countries in the region to do the same.[1] The Australian cache comprised 330 vehicles and trailers and 130 containers, enough to supply three logistics companies delivering equipment to US troops fighting elsewhere in the theater, and was described as preparation for a possible future war with <a href="/entities/china">China</a> over <a href="/entities/taiwan">Taiwan</a>.[1] Parallel efforts were under way to establish stockpiles in the Philippines, Japan and other regional states.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Border Bill Dead on Arrival ... Just Like Bidenomics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ab" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ab</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charles-flynn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlesFlynn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlesFlynn as default
};
