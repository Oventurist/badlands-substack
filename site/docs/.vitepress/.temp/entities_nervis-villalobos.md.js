import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nervis Villalobos","description":"","frontmatter":{"title":"Nervis Villalobos","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","pdvsa","corruption","credit-suisse"],"sources":["raw/badlands-brief-314.md"],"confidence":"low"},"headers":[],"relativePath":"entities/nervis-villalobos.md","filePath":"entities/nervis-villalobos.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nervis-villalobos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nervis-villalobos" tabindex="-1">Nervis Villalobos <a class="header-anchor" href="#nervis-villalobos" aria-label="Permalink to &quot;Nervis Villalobos&quot;">​</a></h1><p>Nervis Villalobos is a former <a href="/entities/pdvsa">PDVSA</a> official and Venezuelan deputy energy minister named in reporting on the looting of Venezuela&#39;s state oil wealth.[1] He was arrested in Spain in 2018 as part of the international pursuit of embezzled PDVSA funds.[1]</p><p>Villalobos is identified in Argentine press coverage cited by Badlands as among the Venezuelans accused of looting PDVSA who held accounts at <a href="/entities/credit-suisse">Credit Suisse</a>.[1] A separate 2022 investigation by the Organized Crime and Corruption Reporting Project into Venezuelan elites hiding stolen oil money in Credit Suisse featured commentary on Villalobos from <a href="/entities/mathias-krull">Mathias Krull</a>, the banker who became a DOJ cooperating witness under <a href="/concepts/operation-money-flight">Operation Money Flight</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Nationalized Elections, Nazi Bankers &amp; Sovereign Shielding&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-314" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-314</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nervis-villalobos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nervisVillalobos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nervisVillalobos as default
};
