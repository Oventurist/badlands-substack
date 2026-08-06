import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tommy Pigott","description":"","frontmatter":{"title":"Tommy Pigott","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state-department","spokesman","venezuela"],"sources":["raw/badlands-brief-bdc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tommy-pigott.md","filePath":"entities/tommy-pigott.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tommy-pigott.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tommy-pigott" tabindex="-1">Tommy Pigott <a class="header-anchor" href="#tommy-pigott" aria-label="Permalink to &quot;Tommy Pigott&quot;">​</a></h1><p>Tommy Pigott is a spokesman for the United States <a href="/entities/state-department">State Department</a> during the second <a href="/entities/donald-trump">Trump</a> administration.[1]</p><h2 id="statements-on-venezuela" tabindex="-1">Statements on Venezuela <a class="header-anchor" href="#statements-on-venezuela" aria-label="Permalink to &quot;Statements on Venezuela&quot;">​</a></h2><p>Pigott said that the resumption of operations at the <a href="/entities/us-embassy-in-caracas">US Embassy in Caracas</a> in late March 2026 represented a key milestone in implementing the administration&#39;s three-phase plan for <a href="/entities/venezuela">Venezuela</a>, a framework outlining stabilization, economic recovery, and political reconciliation leading toward democratic elections.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Reversed Rulings &amp; Reasonable Regimes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bdc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bdc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tommy-pigott.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tommyPigott = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tommyPigott as default
};
