import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Simon Esler","description":"","frontmatter":{"title":"Simon Esler","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["badlands-media","author","substack"],"sources":["raw/ai-can-help-us-expose-the-nwo.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/simon-esler.md","filePath":"entities/simon-esler.md","lastUpdated":null}');
const _sfc_main = { name: "entities/simon-esler.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="simon-esler" tabindex="-1">Simon Esler <a class="header-anchor" href="#simon-esler" aria-label="Permalink to &quot;Simon Esler&quot;">​</a></h1><p>Simon Esler is a Substack writer associated with the <a href="/entities/badlands-media">Badlands Media</a> orbit. He is credited at the close of the January 22, 2024 essay <a href="/concepts/ai-can-help-us-expose-the-nwo">AI Can Help Us Expose the NWO</a> as having assisted <a href="/entities/justin-deschamps">Justin Deschamps</a> with the piece, which documents the use of <a href="/entities/chatgpt">ChatGPT</a> to map the alleged warfare described in <a href="/concepts/toronto-protocols">the Toronto Protocols</a>. The article links to his Substack profile but gives no further biographical detail.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/ai-can-help-us-expose-the-nwo" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/simon-esler.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const simonEsler = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  simonEsler as default
};
