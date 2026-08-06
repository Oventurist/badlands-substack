import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zambian kwacha","description":"","frontmatter":{"title":"Zambian kwacha","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["zambia","currency","de-dollarization","kwacha"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/zambian-kwacha.md","filePath":"concepts/zambian-kwacha.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/zambian-kwacha.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zambian-kwacha" tabindex="-1">Zambian kwacha <a class="header-anchor" href="#zambian-kwacha" aria-label="Permalink to &quot;Zambian kwacha&quot;">​</a></h1><p>The kwacha is the national currency of <a href="/entities/zambia">Zambia</a>, divided into subunits called ngwee.[1] It became a focus of the July 2024 Badlands News Brief after the <a href="/entities/bank-of-zambia">Bank of Zambia</a> drafted rules requiring the kwacha and the ngwee to be used for all domestic public and private transactions, with prison terms of up to ten years or substantial fines for those using foreign currency locally.[1]</p><p>The Brief highlighted a February report that the kwacha had emerged as Africa&#39;s best-performing currency against the US dollar in 2024, and used that fact to argue that American dollar inflows into Zambia were intended to damage rather than support a growing economy.[1] In the Badlands reading, criminalizing dollar use is a defensive sovereignty measure and part of a broader continental de-dollarization trend.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/zambian-kwacha.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zambianKwacha = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zambianKwacha as default
};
