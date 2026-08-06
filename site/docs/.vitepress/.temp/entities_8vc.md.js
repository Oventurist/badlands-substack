import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8VC","description":"","frontmatter":{"title":"8VC","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venture-capital","technology","finance"],"sources":["raw/badlands-news-brief-1a0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/8vc.md","filePath":"entities/8vc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/8vc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8vc" tabindex="-1">8VC <a class="header-anchor" href="#_8vc" aria-label="Permalink to &quot;8VC&quot;">​</a></h1><p>8VC is a venture capital firm founded by <a href="/entities/joe-lonsdale">Joe Lonsdale</a>, a co-founder of <a href="/entities/palantir">Palantir</a>.[1] The firm&#39;s founder was identified in July 2025 reporting as one of the high-profile technology investors backing <a href="/entities/erebor">Erebor</a>, a proposed bank for start-ups and cryptocurrency businesses organized by <a href="/entities/palmer-luckey">Palmer Luckey</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: IC Ignitions &amp; Double Detonations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/8vc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _8vc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _8vc as default
};
