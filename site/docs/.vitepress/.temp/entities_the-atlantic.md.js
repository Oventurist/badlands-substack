import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Atlantic","description":"","frontmatter":{"title":"The Atlantic","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","magazine","mainstream-media","layoffs"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/the-atlantic.md","filePath":"entities/the-atlantic.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-atlantic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-atlantic" tabindex="-1">The Atlantic <a class="header-anchor" href="#the-atlantic" aria-label="Permalink to &quot;The Atlantic&quot;">​</a></h1><p><em>The Atlantic</em> is an American magazine of politics, culture and ideas.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> groups The Atlantic with <a href="/entities/new-york-times">The New York Times</a> and the <a href="/entities/washington-post">Washington Post</a> as &quot;mainstream, historically spook-friendly outlets&quot; whose hiring practices favor writers already inclined to reproduce establishment narratives. <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, the article&#39;s principal case study, previously worked for the magazine, and in the TikTok remarks quoted in the piece she cites The Atlantic alongside the Post as a billionaire-owned outlet that has nonetheless carried out layoffs.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-atlantic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theAtlantic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theAtlantic as default
};
