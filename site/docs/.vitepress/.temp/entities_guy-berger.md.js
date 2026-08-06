import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Guy Berger","description":"","frontmatter":{"title":"Guy Berger","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economy","labor","research"],"sources":["raw/badlands-news-brief-0ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/guy-berger.md","filePath":"entities/guy-berger.md","lastUpdated":null}');
const _sfc_main = { name: "entities/guy-berger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="guy-berger" tabindex="-1">Guy Berger <a class="header-anchor" href="#guy-berger" aria-label="Permalink to &quot;Guy Berger&quot;">​</a></h1><p>Guy Berger is the director of economic research at the <a href="/entities/burning-glass-institute">Burning Glass Institute</a>, a labor-analytics firm.[1]</p><p>In August 2024 Berger was quoted by <a href="/entities/business-insider">Business Insider</a> on the deterioration of the United States labor market following the July employment report, which showed 114,000 jobs added against expectations of 176,000 and unemployment rising to 4.3 percent.[1] Characterizing the shift in the data, he said: &quot;There was a lot of data that was sort of in the greenish area, and now there&#39;s a lot more data that&#39;s flashing yellow lights.&quot;[1] His comment was reproduced in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> as part of its coverage of <a href="/concepts/july-2024-us-jobs-report">the July 2024 US jobs report</a> and of concerns that the <a href="/entities/federal-reserve">Federal Reserve</a> had fallen behind the curve by holding rates steady.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Walz Cycle Consumes Itself as Tensions Pause&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/guy-berger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guyBerger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  guyBerger as default
};
