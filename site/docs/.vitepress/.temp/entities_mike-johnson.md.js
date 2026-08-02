import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mike Johnson","description":"","frontmatter":{"title":"Mike Johnson","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","congress","speaker","republicans"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mike-johnson.md","filePath":"entities/mike-johnson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mike-johnson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mike-johnson" tabindex="-1">Mike Johnson <a class="header-anchor" href="#mike-johnson" aria-label="Permalink to &quot;Mike Johnson&quot;">​</a></h1><p>Mike Johnson is an American politician who served as Speaker of the United States House of Representatives. In the Badlands Media article &quot;A Glaring Double Standard,&quot; he appears in connection with the congressional response to campus antisemitism after the October 7, 2023 Hamas attack on Israel.</p><p>The article states that a House press conference before the testimony of the presidents of the University of Pennsylvania, Harvard, and MIT was facilitated by Speaker Johnson. It notes that <a href="/entities/eyal-yakoby">Eyal Yakoby</a>, a University of Pennsylvania graduate and antisemitism advocate, praised Johnson for showing &quot;moral clarity&quot; on the issue of antisemitism.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mike-johnson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikeJohnson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikeJohnson as default
};
