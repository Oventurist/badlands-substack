import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Azerbaijan","description":"","frontmatter":{"title":"Azerbaijan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["azerbaijan","turkey","eurasia","military-basing","f-16"],"sources":["raw/badlands-brief-990.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/azerbaijan.md","filePath":"entities/azerbaijan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/azerbaijan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="azerbaijan" tabindex="-1">Azerbaijan <a class="header-anchor" href="#azerbaijan" aria-label="Permalink to &quot;Azerbaijan&quot;">​</a></h1><p>Azerbaijan is a South Caucasus state closely aligned with <a href="/entities/turkey">Turkey</a> and, as of early 2026, a destination for Turkish overseas air power.[1]</p><h2 id="turkish-f-16-deployment" tabindex="-1">Turkish F-16 deployment <a class="header-anchor" href="#turkish-f-16-deployment" aria-label="Permalink to &quot;Turkish F-16 deployment&quot;">​</a></h2><p>Turkey&#39;s expansion of its defense footprint in early 2026 spanned Azerbaijan and <a href="/entities/somalia">Somalia</a>, with additional F-16 fighter jets deployed to both.[1] Badlands commentary described the pair as the northern and southern access points to the Middle East and as two critical trade corridors linking Asia to Europe, part of a wider Turkish repositioning away from <a href="/entities/nato">NATO</a> and the EU and toward <a href="/entities/brics">BRICS</a> and the <a href="/entities/shanghai-cooperation-organisation">Shanghai Cooperation Organisation</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Secret Seizures, Sovereign Signals, &amp; Unnamed Somalis Close to the Matter&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-990" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-990</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/azerbaijan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const azerbaijan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  azerbaijan as default
};
