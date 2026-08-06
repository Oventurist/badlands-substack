import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Regina Barrow","description":"","frontmatter":{"title":"Regina Barrow","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["louisiana","legislation","criminal-justice"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/regina-barrow.md","filePath":"entities/regina-barrow.md","lastUpdated":null}');
const _sfc_main = { name: "entities/regina-barrow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="regina-barrow" tabindex="-1">Regina Barrow <a class="header-anchor" href="#regina-barrow" aria-label="Permalink to &quot;Regina Barrow&quot;">​</a></h1><p>Regina Barrow is a Democratic member of the Louisiana State Senate.[1]</p><p>Barrow sponsored Senate Bill 371, which would sentence offenders aged 17 and older who are convicted of the rape of a victim under the age of 13 to surgical rather than chemical castration.[1] The bill passed the Louisiana House 74–24 and the Senate 29–9, and in early June 2024 headed to the desk of Republican Governor <a href="/entities/jeff-landry">Jeff Landry</a> to be signed or vetoed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/regina-barrow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reginaBarrow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reginaBarrow as default
};
