import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sundar Pichai","description":"","frontmatter":{"title":"Sundar Pichai","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["google","big-tech","silicon-valley"],"sources":["raw/badlands-news-brief-5aa.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sundar-pichai.md","filePath":"entities/sundar-pichai.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sundar-pichai.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sundar-pichai" tabindex="-1">Sundar Pichai <a class="header-anchor" href="#sundar-pichai" aria-label="Permalink to &quot;Sundar Pichai&quot;">​</a></h1><p>Sundar Pichai is the chief executive officer of <a href="/entities/google">Google</a>.[1]</p><p>Following the death of former <a href="/entities/youtube">YouTube</a> chief executive <a href="/entities/susan-wojcicki">Susan Wojcicki</a> on August 10, 2024, Pichai expressed condolences in a post on X, saying that Wojcicki was &quot;core&quot; to Google&#39;s history.[1] Wojcicki had been Google&#39;s 16th employee and worked at the company for nearly 25 years.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Deep State has a Rough Weekend&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5aa" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5aa</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sundar-pichai.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sundarPichai = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sundarPichai as default
};
