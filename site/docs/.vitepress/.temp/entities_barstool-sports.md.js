import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barstool Sports","description":"","frontmatter":{"title":"Barstool Sports","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["organization","media","comedy","sports"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/barstool-sports.md","filePath":"entities/barstool-sports.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barstool-sports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barstool-sports" tabindex="-1">Barstool Sports <a class="header-anchor" href="#barstool-sports" aria-label="Permalink to &quot;Barstool Sports&quot;">​</a></h1><p>Barstool Sports is an American sports and pop-culture media company founded by <a href="/entities/dave-portnoy">Dave Portnoy</a>, described in the Badlands Media article &quot;A Glaring Double Standard&quot; as &quot;popular and financially successful.&quot; Barstool built its brand on edgy, irreverent, sports-adjacent humor, and Portnoy has positioned himself as a leader in destigmatizing politically incorrect comedy.</p><p>In the article, Barstool&#39;s podcast format serves as the setting for a June 4 incident in which Portnoy reacted angrily to the idea of jokes about American Jews, a moment the author uses to illustrate what he argues is the right&#39;s selective application of free speech — defending edgy humor generally while insisting that jokes about Jews go too far.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barstool-sports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barstoolSports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barstoolSports as default
};
