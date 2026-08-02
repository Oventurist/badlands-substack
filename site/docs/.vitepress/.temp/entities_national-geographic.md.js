import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Geographic","description":"","frontmatter":{"title":"National Geographic","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","magazine","layoffs","disney"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/national-geographic.md","filePath":"entities/national-geographic.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-geographic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-geographic" tabindex="-1">National Geographic <a class="header-anchor" href="#national-geographic" aria-label="Permalink to &quot;National Geographic&quot;">​</a></h1><p><em>National Geographic</em> is a long-running American magazine, historically published by the National Geographic Society and later brought under the control of <a href="/entities/walt-disney-company">Disney</a> through its acquisition of 21st Century Fox assets.</p><h2 id="decline" tabindex="-1">Decline <a class="header-anchor" href="#decline" aria-label="Permalink to &quot;Decline&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> names National Geographic among the &quot;widely recognized media organizations&quot; that had &quot;either experienced significant workforce reductions or have been forced to the verge of extinction&quot; over the weeks preceding February 2024. Its appearance in the list is used to argue that even titles with enormous brand equity and conglomerate backing are unable to sustain the traditional <a href="/concepts/mainstream-media">centralized media</a> model.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-geographic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalGeographic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalGeographic as default
};
