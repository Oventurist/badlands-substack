import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lauryn Hill","description":"","frontmatter":{"title":"Lauryn Hill","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","culture"],"sources":["raw/badlands-brief-282.md"],"confidence":"low"},"headers":[],"relativePath":"entities/lauryn-hill.md","filePath":"entities/lauryn-hill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lauryn-hill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lauryn-hill" tabindex="-1">Lauryn Hill <a class="header-anchor" href="#lauryn-hill" aria-label="Permalink to &quot;Lauryn Hill&quot;">​</a></h1><p>Lauryn Hill is an American singer and rapper who appeared on stage with <a href="/entities/kanye-west">Kanye West</a> during his April 2026 SoFi Stadium concert in Los Angeles, described as the first live collaboration between the two artists.[1] The appearance came during West&#39;s Good Friday and Easter Sunday shows, his first major U.S. performances in roughly five years.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lauryn-hill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laurynHill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  laurynHill as default
};
