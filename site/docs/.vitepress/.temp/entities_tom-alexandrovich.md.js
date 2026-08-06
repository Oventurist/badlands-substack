import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Alexandrovich","description":"","frontmatter":{"title":"Tom Alexandrovich","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","cyber","scandal","extradition"],"sources":["raw/badlands-brief-959.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tom-alexandrovich.md","filePath":"entities/tom-alexandrovich.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-alexandrovich.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-alexandrovich" tabindex="-1">Tom Alexandrovich <a class="header-anchor" href="#tom-alexandrovich" aria-label="Permalink to &quot;Tom Alexandrovich&quot;">​</a></h1><p>Tom Alexandrovich is the executive director of the Cyber Defense Division at the Israel National Cyber Directorate.[1]</p><p>He was arrested in Las Vegas in August 2025 after allegedly attempting to meet a 15-year-old girl, according to a statement from the acting U.S. Attorney&#39;s office in Nevada cited by Badlands.[1] Alexandrovich was released on bail and left the country, and is described as residing in Israel, where Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> argued he is unlikely to be extradited.[1]</p><p>The case resurfaced in February 2026 when U.S. Ambassador to Israel <a href="/entities/mike-huckabee">Mike Huckabee</a>, in a televised interview with <a href="/entities/tucker-carlson">Tucker Carlson</a>, defended Alexandrovich as &quot;innocent until proven guilty&quot; without offering or promising to seek his extradition — a response Badlands cited as evidence against Huckabee.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We Are the Champions of the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-959" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-959</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tom-alexandrovich.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomAlexandrovich = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomAlexandrovich as default
};
