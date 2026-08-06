import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ExxonMobil","description":"","frontmatter":{"title":"ExxonMobil","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oil","energy","venezuela","corporations"],"sources":["raw/badlands-brief-d17.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/exxonmobil.md","filePath":"entities/exxonmobil.md","lastUpdated":null}');
const _sfc_main = { name: "entities/exxonmobil.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="exxonmobil" tabindex="-1">ExxonMobil <a class="header-anchor" href="#exxonmobil" aria-label="Permalink to &quot;ExxonMobil&quot;">​</a></h1><p>ExxonMobil is a major American integrated oil and gas corporation whose posture toward post-Maduro <a href="/entities/venezuela">Venezuela</a> became a point of friction with the <a href="/entities/donald-trump">Trump</a> administration in January 2026.[1]</p><p>After the company&#39;s chief executive described Venezuela as &quot;uninvestable,&quot; Trump indicated he might block ExxonMobil from investing in the country, according to a Reuters report carried by The Guardian.[1] The remark came as Trump publicly stated the United States would be &quot;using oil&quot; and &quot;taking oil&quot; from Venezuela and that U.S. oversight of the country&#39;s oil sector would last &quot;much longer&quot; than a year.[1]</p><p>ExxonMobil&#39;s caution stands in contrast to the position taken by the <a href="/entities/us-oil-and-gas-association">U.S. Oil &amp; Gas Association</a>, which argued that the overwhelming show of American military force resolved producers&#39; security concerns and cleared the way for a return to Venezuelan operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Devolucion, Sedition, Somalis, and Patagonia Pyros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-d17" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-d17</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/exxonmobil.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exxonmobil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exxonmobil as default
};
