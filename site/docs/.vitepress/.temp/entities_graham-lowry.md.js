import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Graham Lowry","description":"","frontmatter":{"title":"Graham Lowry","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["historian","american-revolution","colonial-america","author"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/graham-lowry.md","filePath":"entities/graham-lowry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/graham-lowry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="graham-lowry" tabindex="-1">Graham Lowry <a class="header-anchor" href="#graham-lowry" aria-label="Permalink to &quot;Graham Lowry&quot;">​</a></h1><p>Graham Lowry was an American historian, described in the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> as &quot;the late historian&quot; and &quot;the great historian,&quot; and cited for his magnum opus <em>How the Nation Was Won: Volume 1 (1630–1757)</em>.</p><p><a href="/entities/matthew-ehret">Matthew Ehret</a> draws on Lowry for two central claims. First, that the networks led by <a href="/entities/benjamin-franklin">Benjamin Franklin</a> had been planning the conditions for a declaration of independence for decades before 1776, so that the fall of Quebec at the Battle of Quebec in 1759 formed part of a long-prepared strategic sequence. Second, that <a href="/entities/william-penn">William Penn</a>&#39;s colonial work in Pennsylvania — his commitment to developing culture, economy and population rather than extracting wealth — is examined at length in <em>How the Nation Was Won</em>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/graham-lowry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grahamLowry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  grahamLowry as default
};
