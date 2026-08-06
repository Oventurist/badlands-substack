import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pacific Gas and Electric","description":"","frontmatter":{"title":"Pacific Gas and Electric","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["california","utilities","wildfire","litigation"],"sources":["raw/badlands-news-brief-09e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pacific-gas-and-electric.md","filePath":"entities/pacific-gas-and-electric.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pacific-gas-and-electric.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pacific-gas-and-electric" tabindex="-1">Pacific Gas and Electric <a class="header-anchor" href="#pacific-gas-and-electric" aria-label="Permalink to &quot;Pacific Gas and Electric&quot;">​</a></h1><p><strong>Pacific Gas &amp; Electric</strong> (PG&amp;E) is a California investor-owned utility whose equipment has been implicated in several of the state&#39;s most destructive wildfires.[1]</p><h2 id="wildfire-liability" tabindex="-1">Wildfire liability <a class="header-anchor" href="#wildfire-liability" aria-label="Permalink to &quot;Wildfire liability&quot;">​</a></h2><p>PG&amp;E power lines sparked the Dixie Fire in 2021, the second-largest wildfire in California history, and the company&#39;s involvement in the 2018 Camp Fire cost it a $13.5 billion legal settlement.[1]</p><h2 id="connection-to-los-angeles-utility-leadership" tabindex="-1">Connection to Los Angeles utility leadership <a class="header-anchor" href="#connection-to-los-angeles-utility-leadership" aria-label="Permalink to &quot;Connection to Los Angeles utility leadership&quot;">​</a></h2><p><a href="/entities/janisse-quinones">Janisse Quiñones</a>, hired in 2024 to lead the <a href="/entities/los-angeles-department-of-water-and-power">Los Angeles Department of Water and Power</a>, served as a senior vice president at PG&amp;E from 2021 to 2023, a link highlighted in coverage of the January 2025 <a href="/concepts/palisades-fire">Palisades Fire</a> water-supply failures.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Preemptive Pardons, Syrian Sanctions, &amp; Preparations for Putin&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pacific-gas-and-electric.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pacificGasAndElectric = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pacificGasAndElectric as default
};
