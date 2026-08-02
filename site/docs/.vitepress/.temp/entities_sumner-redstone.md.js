import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sumner Redstone","description":"","frontmatter":{"title":"Sumner Redstone","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","media","corporate","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/sumner-redstone.md","filePath":"entities/sumner-redstone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sumner-redstone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sumner-redstone" tabindex="-1">Sumner Redstone <a class="header-anchor" href="#sumner-redstone" aria-label="Permalink to &quot;Sumner Redstone&quot;">​</a></h1><p>Sumner Redstone was the American media magnate who controlled the corporate predecessors of <a href="/entities/paramount-global">Paramount Global</a>. According to the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, he handed control of the company to his daughter <a href="/entities/shari-redstone">Sheri Redstone</a> in 2016 and died in 2020. The article characterizes him, like his daughter, as a <a href="/entities/donald-trump">Trump</a> ally, using the family&#39;s political alignment to support its argument that Paramount&#39;s recent programming reflects a deliberate turn away from what the author calls woke conditioning.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sumner-redstone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sumnerRedstone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sumnerRedstone as default
};
