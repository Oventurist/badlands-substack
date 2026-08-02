import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ulta Beauty","description":"","frontmatter":{"title":"Ulta Beauty","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","cabal","deep-state"],"sources":["raw/a-communist-plot-to-take-over-america.md"],"confidence":"low","contested":true},"headers":[],"relativePath":"entities/ulta-beauty.md","filePath":"entities/ulta-beauty.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ulta-beauty.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ulta-beauty" tabindex="-1">Ulta Beauty <a class="header-anchor" href="#ulta-beauty" aria-label="Permalink to &quot;Ulta Beauty&quot;">​</a></h1><p>Ulta Beauty is a cosmetics retailer. In the Badlands Media corpus, it is cited as an example of corporate tolerance for organized theft under the guise of progressive policy.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="_2023-profit-decline-and-theft-tolerance" tabindex="-1">2023 Profit Decline and Theft Tolerance <a class="header-anchor" href="#_2023-profit-decline-and-theft-tolerance" aria-label="Permalink to &quot;2023 Profit Decline and Theft Tolerance&quot;">​</a></h2><p>The June 2023 article &quot;<a href="/concepts/a-communist-plot-to-take-over-america">A Communist Plot to Take Over America</a>&quot; notes that Ulta Beauty expected continued profit declines throughout 2023 due to massive merchandise theft, yet refused to reverse the store policies adopted after the 2020 BLM protests that discouraged employee intervention. Author <a href="/entities/erik-carlson">Erik Carlson</a> interprets the company&#39;s inaction as evidence that its leadership is either coerced or complicit in a broader campaign to destroy American commerce.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-communist-plot-to-take-over-america" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ulta-beauty.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ultaBeauty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ultaBeauty as default
};
