import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Noor bin Ladin","description":"","frontmatter":{"title":"Noor bin Ladin","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["september-11","saudi-arabia","commentary"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/noor-bin-ladin.md","filePath":"entities/noor-bin-ladin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/noor-bin-ladin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="noor-bin-ladin" tabindex="-1">Noor bin Ladin <a class="header-anchor" href="#noor-bin-ladin" aria-label="Permalink to &quot;Noor bin Ladin&quot;">​</a></h1><p>Noor bin Ladin is a member of the extended Bin Laden family, cited briefly in the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> as a comparison case for the effect of the September 11, 2001 attacks on young people of Saudi background.</p><p>The article argues that <a href="/entities/mohammed-bin-salman">mohammed-bin-salman</a>, then sixteen, had &quot;a very similar reaction witnessing 9/11 in real time that almost every American did&quot; — shocked, then scared, then angry, filled with righteous indignation and a deep desire for retribution — and notes in an aside, citing Arab News, that the attacks had a similar effect on Noor bin Ladin. The reference functions in the essay to support its broader contention that reaction to the attacks cut across the lines Western coverage has drawn between Americans and Saudis.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/noor-bin-ladin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const noorBinLadin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  noorBinLadin as default
};
