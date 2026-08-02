import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fox News","description":"","frontmatter":{"title":"Fox News","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","cable-news","conservative-media","media-criticism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/fox-news.md","filePath":"entities/fox-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fox-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fox-news" tabindex="-1">Fox News <a class="header-anchor" href="#fox-news" aria-label="Permalink to &quot;Fox News&quot;">​</a></h1><p>Fox News is the American conservative cable news network associated with <a href="/entities/rupert-murdoch">Rupert Murdoch</a> and the Fox/<a href="/entities/news-corp">News Corp</a> media empire.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> refuses to treat Fox News as an alternative to the liberal press. The article states that what passes for journalism at <a href="/entities/msnbc">MSNBC</a> is matched by &quot;Fox News&#39; catering to garden variety conservatives,&quot; and that the same emptiness was &quot;true of most Fox News hosts.&quot; It argues that the audience is offered only a choice between &quot;establishment democrat talking points or establishment republican talking points.&quot;</p><p>The essay also notes that &quot;the Fox News crowd won&#39;t touch the difficult, but important topics you see thoroughly discussed here on <a href="/entities/badlands-media">Badlands Media</a>,&quot; just as <a href="/entities/cnn">CNN</a> will not cover the material published by <a href="/entities/the-grayzone">The Grayzone</a> or <a href="/entities/consortium-news">Consortium News</a>. The conclusion drawn is that the two ostensibly opposing networks are &quot;two heads on the same wretched snake&quot; within a single system of <a href="/concepts/mainstream-media">centralized media</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fox-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const foxNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  foxNews as default
};
