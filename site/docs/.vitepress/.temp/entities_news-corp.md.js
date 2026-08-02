import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"News Corp","description":"","frontmatter":{"title":"News Corp","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["conglomerate","media","big-six","murdoch"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/news-corp.md","filePath":"entities/news-corp.md","lastUpdated":null}');
const _sfc_main = { name: "entities/news-corp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="news-corp" tabindex="-1">News Corp <a class="header-anchor" href="#news-corp" aria-label="Permalink to &quot;News Corp&quot;">​</a></h1><p>News Corp is the media holding company associated with <a href="/entities/rupert-murdoch">Rupert Murdoch</a>, whose properties have included <em>The Wall Street Journal</em>, the <em>New York Post</em>, HarperCollins and, through the affiliated Fox Corporation, <a href="/entities/fox-news">Fox News</a>.</p><h2 id="role-in-the-big-six" tabindex="-1">Role in the Big Six <a class="header-anchor" href="#role-in-the-big-six" aria-label="Permalink to &quot;Role in the Big Six&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> names &quot;Rupert Murdoch&#39;s NewsCorp&quot; as one of the six conglomerates that dominated all mainstream media as of 2017, together with <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/comcast">Comcast</a>, <a href="/entities/walt-disney-company">Disney</a>, <a href="/entities/sony">Sony</a> and National Amusements (now <a href="/entities/paramount-global">Paramount Global</a>). The article cites shareholder data for News Corp (NWS) to support its claim of common institutional ownership across the group, arguing that the conservative-coded Murdoch properties and the liberal-coded outlets they appear to oppose are &quot;two heads on the same wretched snake.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/news-corp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newsCorp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newsCorp as default
};
