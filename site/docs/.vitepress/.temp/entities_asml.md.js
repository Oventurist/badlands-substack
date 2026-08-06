import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ASML","description":"","frontmatter":{"title":"ASML","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["semiconductors","netherlands","euv","technology","export-controls"],"sources":["raw/badlands-news-brief-795.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/asml.md","filePath":"entities/asml.md","lastUpdated":null}');
const _sfc_main = { name: "entities/asml.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="asml" tabindex="-1">ASML <a class="header-anchor" href="#asml" aria-label="Permalink to &quot;ASML&quot;">​</a></h1><p>ASML is a Dutch semiconductor equipment giant whose extreme ultraviolet (EUV) lithography machines are central to the manufacture of the most advanced chips.[1]</p><h2 id="euv-monopoly" tabindex="-1">EUV monopoly <a class="header-anchor" href="#euv-monopoly" aria-label="Permalink to &quot;EUV monopoly&quot;">​</a></h2><p>EUV machines use beams of extreme ultraviolet light to etch circuits thousands of times thinner than a human hair onto silicon wafers; the smaller the circuits, the more powerful the resulting chips.[1] That capability has been monopolized by the West and sits at the heart of what has been described as a technological Cold War over the semiconductors powering artificial intelligence, smartphones and advanced weapons.[1]</p><h2 id="chinese-reverse-engineering-effort-2025" tabindex="-1">Chinese reverse-engineering effort (2025) <a class="header-anchor" href="#chinese-reverse-engineering-effort-2025" aria-label="Permalink to &quot;Chinese reverse-engineering effort (2025)&quot;">​</a></h2><p>Reuters reported in December 2025 that a team of former ASML engineers had built, in a high-security Shenzhen laboratory, a prototype machine capable of producing cutting-edge semiconductor chips by reverse-engineering ASML&#39;s EUV systems.[1] The prototype, completed in early 2025 and undergoing testing, fills nearly an entire factory floor and is operational and successfully generating extreme ultraviolet light, though it had not yet produced working chips.[1] The project was characterized as <a href="/entities/china">China</a>&#39;s &quot;Manhattan Project&quot; to rival the West in AI chips, achieving what Washington had spent years trying to prevent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Brennan Decries Judge Shopping &amp; JD Says It&#39;s Okay to Be White!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-795" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-795</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/asml.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const asml = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  asml as default
};
