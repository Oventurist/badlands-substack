import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GW 231123","description":"","frontmatter":{"title":"GW 231123","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["astronomy","black-holes","gravitational-waves","science"],"sources":["raw/badlands-news-brief-4fd.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/gw-231123.md","filePath":"concepts/gw-231123.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/gw-231123.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gw-231123" tabindex="-1">GW 231123 <a class="header-anchor" href="#gw-231123" aria-label="Permalink to &quot;GW 231123&quot;">​</a></h1><p>GW 231123 is a gravitational-wave event recorded on 23 November 2023 and identified as the most massive black hole collision detected to date.[1] The merger produced a remnant object heavier than 225 times the mass of the Sun, far exceeding the previous record of roughly 142 solar masses.[1]</p><p>Astronomers noted that each of the two black holes involved was itself heavier than the theoretical upper mass limit for black holes formed from the collapse of a single stellar core, suggesting that both may have been products of earlier mergers — a hierarchical growth pathway that could revise existing models of black hole formation.[1] The detection was reported publicly in July 2025 and carried in the Badlands News Brief as a bonus item.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Autopens, AI Chips, &amp; Astrological Assertions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/gw-231123.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gw231123 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gw231123 as default
};
