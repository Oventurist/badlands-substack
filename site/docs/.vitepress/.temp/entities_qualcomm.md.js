import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qualcomm","description":"","frontmatter":{"title":"Qualcomm","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["semiconductors","technology","meta","ar-vr"],"sources":["raw/badlands-news-brief-132.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/qualcomm.md","filePath":"entities/qualcomm.md","lastUpdated":null}');
const _sfc_main = { name: "entities/qualcomm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qualcomm" tabindex="-1">Qualcomm <a class="header-anchor" href="#qualcomm" aria-label="Permalink to &quot;Qualcomm&quot;">​</a></h1><p>Qualcomm is an American semiconductor company that designs and supplies mobile and embedded processors, traded publicly under the ticker QCOM.[1]</p><h2 id="relationship-with-meta" tabindex="-1">Relationship with Meta <a class="header-anchor" href="#relationship-with-meta" aria-label="Permalink to &quot;Relationship with Meta&quot;">​</a></h2><p>As of October 2023, <a href="/entities/meta-platforms">Meta</a> had turned to Qualcomm to produce the chips used in the augmented- and virtual-reality devices it then had on the market, after struggling to make in-house silicon that could compete with externally produced parts.[1] That dependence formed part of the backdrop to Meta&#39;s decision to cut staff in the <a href="/entities/facebook-agile-silicon-team">Facebook Agile Silicon Team</a>, the roughly 600-person custom-silicon unit within <a href="/entities/reality-labs">Reality Labs</a> whose work Qualcomm&#39;s chips had effectively displaced.[1] Commentary published by <a href="/entities/badlands-media">Badlands Media</a> argued that because externally sourced silicon carried no overhead for Meta, the arrangement made the in-house unit redundant and the layoffs a strategic sourcing decision rather than a retreat from the metaverse.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Speaker Trump, Proxy War Funding &amp; Emergency Alerts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-132" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-132</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/qualcomm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qualcomm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qualcomm as default
};
