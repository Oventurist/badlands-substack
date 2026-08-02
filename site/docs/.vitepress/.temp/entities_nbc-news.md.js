import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NBC News","description":"","frontmatter":{"title":"NBC News","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","broadcast","layoffs","comcast"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/nbc-news.md","filePath":"entities/nbc-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nbc-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nbc-news" tabindex="-1">NBC News <a class="header-anchor" href="#nbc-news" aria-label="Permalink to &quot;NBC News&quot;">​</a></h1><p>NBC News is the news division of the National Broadcasting Company, part of the NBCUniversal group owned by <a href="/entities/comcast">Comcast</a>, one of the conglomerates the Badlands corpus identifies as constituting the &quot;Big Six&quot; of <a href="/concepts/mainstream-media">centralized media</a>.</p><h2 id="_2024-layoffs" tabindex="-1">2024 layoffs <a class="header-anchor" href="#_2024-layoffs" aria-label="Permalink to &quot;2024 layoffs&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> lists NBC News, citing <em>Deadline</em>&#39;s January 2024 report, among the widely recognized media organizations that had &quot;either experienced significant workforce reductions or have been forced to the verge of extinction&quot; in the weeks preceding publication. Its inclusion is used to demonstrate that the contraction was not confined to digital-native outlets but had reached legacy broadcast newsrooms owned by the largest media conglomerates.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nbc-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nbcNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nbcNews as default
};
