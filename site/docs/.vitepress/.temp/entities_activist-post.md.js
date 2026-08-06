import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Activist Post","description":"","frontmatter":{"title":"The Activist Post","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["alternative-media","independent-journalism","globalism"],"sources":["raw/badlands-news-brief-34a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/activist-post.md","filePath":"entities/activist-post.md","lastUpdated":null}');
const _sfc_main = { name: "entities/activist-post.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-activist-post" tabindex="-1">The Activist Post <a class="header-anchor" href="#the-activist-post" aria-label="Permalink to &quot;The Activist Post&quot;">​</a></h1><p>The Activist Post is an alternative media outlet publishing independent commentary and reporting, frequently on globalist institutions and civil liberties.[1]</p><p>Badlands Media excerpted an Activist Post piece titled &quot;Samuel García Sepúlveda: The WEF&#39;s Man In Mexico,&quot; which documented the invitation of Nuevo León governor <a href="/entities/samuel-garcia-sepulveda">Samuel García Sepúlveda</a> to the <a href="/entities/world-economic-forum">World Economic Forum</a>&#39;s 2023 Davos meeting and noted that he was the only Mexican politician in attendance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Musk Investigated, Fauci Exposed &amp; Committees Engaged&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-34a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-34a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/activist-post.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activistPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  activistPost as default
};
