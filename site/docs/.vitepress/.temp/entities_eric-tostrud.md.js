import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eric Tostrud","description":"","frontmatter":{"title":"Eric Tostrud","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","minnesota","ice","evidence"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eric-tostrud.md","filePath":"entities/eric-tostrud.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eric-tostrud.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eric-tostrud" tabindex="-1">Eric Tostrud <a class="header-anchor" href="#eric-tostrud" aria-label="Permalink to &quot;Eric Tostrud&quot;">​</a></h1><p>Eric Tostrud is a United States district judge in Minnesota.[1]</p><h2 id="alex-pretti-evidence-order" tabindex="-1">Alex Pretti evidence order <a class="header-anchor" href="#alex-pretti-evidence-order" aria-label="Permalink to &quot;Alex Pretti evidence order&quot;">​</a></h2><p>Tostrud lifted a prior court order that had required federal authorities to preserve evidence connected to the January 24, 2026 fatal shooting of <a href="/entities/alex-jeffrey-pretti">Alex Pretti</a>, who was shot as he was interfering with federal agents in <a href="/entities/minneapolis">Minneapolis</a>.[1] The ruling found no ongoing need for court supervision over evidence handling, while the shooting itself remains under federal investigation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eric-tostrud.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ericTostrud = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ericTostrud as default
};
