import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bay Area Rapid Transit","description":"","frontmatter":{"title":"Bay Area Rapid Transit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["transit","covid-19","vaccine-mandate","litigation","california"],"sources":["raw/badlands-news-brief-215.md"],"confidence":"high"},"headers":[],"relativePath":"entities/bay-area-rapid-transit.md","filePath":"entities/bay-area-rapid-transit.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bay-area-rapid-transit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bay-area-rapid-transit" tabindex="-1">Bay Area Rapid Transit <a class="header-anchor" href="#bay-area-rapid-transit" aria-label="Permalink to &quot;Bay Area Rapid Transit&quot;">​</a></h1><p>Bay Area Rapid Transit (BART) is the public rail agency serving the San Francisco Bay Area. In 2024 and 2025 it was the defendant in a religious-discrimination case arising from its COVID-19 vaccine mandate.[1]</p><h2 id="_7-8-million-vaccine-mandate-verdict" tabindex="-1">$7.8 million vaccine mandate verdict <a class="header-anchor" href="#_7-8-million-vaccine-mandate-verdict" aria-label="Permalink to &quot;$7.8 million vaccine mandate verdict&quot;">​</a></h2><p>In October 2024 a jury awarded $7.8 million to six former BART employees who were fired for refusing to comply with the agency&#39;s COVID-19 vaccine mandate on religious grounds, with individual awards between $1.2 million and $1.5 million.[1] In a December 30, 2024 order, Judge William A. Alsup of the U.S. District Court for the Northern District of California rejected BART&#39;s effort to overturn the verdict, acknowledging minor &quot;imperfections&quot; in the jury trial — including flawed instructions to jurors — but determining they were not severe enough to invalidate the decision.[1] Alsup denied BART&#39;s post-trial motions to overturn the verdict and to seek a new trial, holding that the agency had failed to demonstrate that accommodating the employees&#39; religious objections would have posed an undue hardship.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Islamic Reruns, Fortune 500 Cartels, &amp; The 119th Speaker&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-215" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-215</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bay-area-rapid-transit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bayAreaRapidTransit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bayAreaRapidTransit as default
};
