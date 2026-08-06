import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harry Leinenweber","description":"","frontmatter":{"title":"Harry Leinenweber","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-courts","chicago"],"sources":["raw/badlands-news-brief-5b3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/harry-leinenweber.md","filePath":"entities/harry-leinenweber.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harry-leinenweber.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harry-leinenweber" tabindex="-1">Harry Leinenweber <a class="header-anchor" href="#harry-leinenweber" aria-label="Permalink to &quot;Harry Leinenweber&quot;">​</a></h1><p>Harry Leinenweber is a United States District Judge in Chicago who presided over the federal child pornography and enticement case against the singer <a href="/entities/r-kelly">R. Kelly</a>.[1]</p><p>On February 23, 2023, Leinenweber sentenced Kelly to 20 years in prison but ordered that nearly the entire term run concurrently with a 30-year racketeering sentence previously imposed in New York, adding only one additional year of imprisonment to be served after the New York term concludes.[1] The choice between concurrent and consecutive sentencing was the central issue at the hearing, because a consecutive sentence would have amounted to life imprisonment for the 56-year-old defendant.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Election Laws &amp; Justice for the Exploited&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harry-leinenweber.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harryLeinenweber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harryLeinenweber as default
};
