import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Matuš Šutaj Eštok","description":"","frontmatter":{"title":"Matuš Šutaj Eštok","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["slovakia","interior-ministry","robert-fico","assassination"],"sources":["raw/badlands-news-brief-7c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/matus-sutaj-estok.md","filePath":"entities/matus-sutaj-estok.md","lastUpdated":null}');
const _sfc_main = { name: "entities/matus-sutaj-estok.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="matus-sutaj-estok" tabindex="-1">Matuš Šutaj Eštok <a class="header-anchor" href="#matus-sutaj-estok" aria-label="Permalink to &quot;Matuš Šutaj Eštok&quot;">​</a></h1><p>Matuš Šutaj Eštok is the Interior Minister of <a href="/entities/slovakia">Slovakia</a>.[1]</p><p>In May 2024, following the shooting of Prime Minister <a href="/entities/robert-fico">Robert Fico</a> in Handlová, Šutaj Eštok told reporters that the theory of a broader assassination plot was supported by the fact that the assailant&#39;s social media communications had been erased by another person about two hours after the shooting.[1] His remarks accompanied the Slovak police&#39;s announcement that cooperation with domestic and foreign intelligence services had led them to broaden the probe beyond the initial &quot;lone-wolf&quot; framing to include the possibility that an unidentified group was linked to the crime.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump’s Defense Rests, but the Info War Accelerates&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/matus-sutaj-estok.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const matusSutajEstok = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  matusSutajEstok as default
};
