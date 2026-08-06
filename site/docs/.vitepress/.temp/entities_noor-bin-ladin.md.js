import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Noor bin Ladin","description":"","frontmatter":{"title":"Noor bin Ladin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["9-11","commentary","saudi-arabia"],"sources":["raw/arabian-nights.md"],"confidence":"low"},"headers":[],"relativePath":"entities/noor-bin-ladin.md","filePath":"entities/noor-bin-ladin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/noor-bin-ladin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="noor-bin-ladin" tabindex="-1">Noor bin Ladin <a class="header-anchor" href="#noor-bin-ladin" aria-label="Permalink to &quot;Noor bin Ladin&quot;">​</a></h1><p>Noor bin Ladin is cited in the article as a parallel case to <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a> in her reaction to the September 11, 2001 attacks.[1]</p><p>The author writes that MBS had much the same reaction to witnessing 9/11 in real time as almost every American did — shocked, then scared, then angry, filled with righteous indignation and a deep desire for retribution — and notes in an aside that the attack had a similar effect on Noor bin Ladin, referencing an Arab News profile.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
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
