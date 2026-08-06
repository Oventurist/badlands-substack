import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Constellation Energy","description":"","frontmatter":{"title":"Constellation Energy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","nuclear-energy","companies"],"sources":["raw/badlands-news-brief-683.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/constellation-energy.md","filePath":"entities/constellation-energy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/constellation-energy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="constellation-energy" tabindex="-1">Constellation Energy <a class="header-anchor" href="#constellation-energy" aria-label="Permalink to &quot;Constellation Energy&quot;">​</a></h1><p>Constellation Energy is a large American electricity generator and the operator of the country&#39;s biggest fleet of nuclear reactors.[1]</p><h2 id="three-mile-island-restart-deal" tabindex="-1">Three Mile Island restart deal <a class="header-anchor" href="#three-mile-island-restart-deal" aria-label="Permalink to &quot;Three Mile Island restart deal&quot;">​</a></h2><p>In late September 2024, Constellation and <a href="/entities/microsoft">microsoft</a> unveiled a $1.6 billion power purchase agreement to restart a dormant reactor at Pennsylvania&#39;s <a href="/entities/three-mile-island-nuclear-power-plant">Three Mile Island</a> plant in 2028, supplying power for Microsoft&#39;s data center operations.[1] The deal was reported alongside the <a href="/entities/department-of-energy">department-of-energy</a> loan for the <a href="/entities/palisades-nuclear-plant">palisades-nuclear-plant</a> as evidence of a dawning new U.S. nuclear age after years of false starts, driven by the energy demands of the AI buildout.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Israel Invades, MAGA Sues &amp; Ports Close&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-683" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-683</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/constellation-energy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const constellationEnergy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  constellationEnergy as default
};
