import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rupert Murdoch","description":"","frontmatter":{"title":"Rupert Murdoch","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","media-mogul","news-corp","fox-news"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/rupert-murdoch.md","filePath":"entities/rupert-murdoch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rupert-murdoch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rupert-murdoch" tabindex="-1">Rupert Murdoch <a class="header-anchor" href="#rupert-murdoch" aria-label="Permalink to &quot;Rupert Murdoch&quot;">​</a></h1><p>Rupert Murdoch is the Australian-American media proprietor who built <a href="/entities/news-corp">News Corp</a> and the Fox media properties into one of the largest press empires in the English-speaking world.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> identifies Murdoch as the figure behind one of the six conglomerates that controlled mainstream media as of 2017. Although his outlets, chiefly <a href="/entities/fox-news">Fox News</a>, are coded as conservative in American politics, the article declines to treat them as an alternative to the liberal press: it argues that Fox News &quot;won&#39;t touch the difficult, but important topics&quot; covered by <a href="/entities/badlands-media">Badlands Media</a> and offers &quot;establishment republican talking points&quot; in mirror image of the establishment Democratic talking points supplied by <a href="/entities/cnn">CNN</a> and <a href="/entities/msnbc">MSNBC</a>. Murdoch&#39;s empire is thus placed inside, not opposite, the <a href="/concepts/mainstream-media">centralized media</a> system.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rupert-murdoch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rupertMurdoch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rupertMurdoch as default
};
