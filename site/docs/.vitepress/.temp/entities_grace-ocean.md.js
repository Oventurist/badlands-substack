import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Grace Ocean","description":"","frontmatter":{"title":"Grace Ocean","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["maritime","shipping","baltimore","disaster"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/grace-ocean.md","filePath":"entities/grace-ocean.md","lastUpdated":null}');
const _sfc_main = { name: "entities/grace-ocean.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grace-ocean" tabindex="-1">Grace Ocean <a class="header-anchor" href="#grace-ocean" aria-label="Permalink to &quot;Grace Ocean&quot;">​</a></h1><p><strong>Grace Ocean</strong> is the Singapore-based owner of the container ship <a href="/entities/dali">Dali</a>, the 984-foot vessel that struck and destroyed the Francis Scott Key Bridge at the Port of Baltimore in March 2024.[1]</p><p>In the immediate aftermath of the <a href="/concepts/francis-scott-key-bridge-collapse">bridge collapse</a>, Grace Ocean contended that no pollution had resulted from the marine disaster, a claim <a href="/entities/ashe-in-america">Ashe in America</a> contrasted with reports of sheening observed on the water near the crash site.[1] Subsequent reporting that the Dali had suffered hull damage severe enough to complicate moving the ship — and that the vessel might be resting atop a high-pressure underwater gas line — raised further questions about the 1.8 million gallons of fuel aboard and the possibility that salvage operations could create spill conditions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/grace-ocean.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const graceOcean = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  graceOcean as default
};
