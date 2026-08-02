import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lululemon","description":"","frontmatter":{"title":"Lululemon","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","cabal","deep-state"],"sources":["raw/a-communist-plot-to-take-over-america.md"],"confidence":"low","contested":true},"headers":[],"relativePath":"entities/lululemon.md","filePath":"entities/lululemon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lululemon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lululemon" tabindex="-1">Lululemon <a class="header-anchor" href="#lululemon" aria-label="Permalink to &quot;Lululemon&quot;">​</a></h1><p>Lululemon is an athletic apparel retailer. In the Badlands Media corpus, it is cited as an example of corporate compliance with a supposed Communist plot to destroy American commerce.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="_2023-store-theft-incident" tabindex="-1">2023 Store Theft Incident <a class="header-anchor" href="#_2023-store-theft-incident" aria-label="Permalink to &quot;2023 Store Theft Incident&quot;">​</a></h2><p>The June 2023 article &quot;<a href="/concepts/a-communist-plot-to-take-over-america">A Communist Plot to Take Over America</a>&quot; reports that two Lululemon employees were fired on the spot for calling 911 when a group of people entered a store and began stealing merchandise. Author <a href="/entities/erik-carlson">Erik Carlson</a> interprets the firings—allegedly in compliance with company policy against stopping thieves—as evidence that corporations are enforcing a deliberate policy of non-interference with organized crime, consistent with a broader Communist subversion strategy.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-communist-plot-to-take-over-america" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lululemon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lululemon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lululemon as default
};
