import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Union Pacific","description":"","frontmatter":{"title":"Union Pacific","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["rail","transportation","corporations"],"sources":["raw/badlands-news-brief-409.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/union-pacific.md","filePath":"entities/union-pacific.md","lastUpdated":null}');
const _sfc_main = { name: "entities/union-pacific.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="union-pacific" tabindex="-1">Union Pacific <a class="header-anchor" href="#union-pacific" aria-label="Permalink to &quot;Union Pacific&quot;">​</a></h1><p>Union Pacific is a major American freight railroad.[1]</p><h2 id="_2023-missing-ammonium-nitrate-shipment" tabindex="-1">2023 missing ammonium nitrate shipment <a class="header-anchor" href="#_2023-missing-ammonium-nitrate-shipment" aria-label="Permalink to &quot;2023 missing ammonium nitrate shipment&quot;">​</a></h2><p>Union Pacific was one of the parties investigating the disappearance of approximately 61,000 pounds of ammonium nitrate shipped by rail from Cheyenne, Wyoming, to Saltdale, California, in April 2023.[1] The railcar, loaded and sealed by <a href="/entities/dyno-nobel">Dyno Nobel</a>, arrived at its Mojave Desert destination still sealed but completely empty.[1] Alongside Union Pacific, the <a href="/entities/federal-railroad-administration">Federal Railroad Administration</a>, the <a href="/entities/california-public-utilities-commission">California Public Utilities Commission</a> and Dyno Nobel itself examined the loss, and the railcar was routed back to Wyoming for a thorough inspection.[1] The car reportedly made multiple stops during its two-week journey, which Badlands commentary argued provided opportunity for foul play.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quid Pro Joe, Biden&#39;s Border &amp; Train Track Conspiracies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-409" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-409</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/union-pacific.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unionPacific = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unionPacific as default
};
