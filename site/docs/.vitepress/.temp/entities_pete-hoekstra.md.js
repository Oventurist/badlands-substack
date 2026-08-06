import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pete Hoekstra","description":"","frontmatter":{"title":"Pete Hoekstra","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["diplomacy","trump-administration","canada","netherlands"],"sources":["raw/badlands-news-brief-1f2.md"],"confidence":"high"},"headers":[],"relativePath":"entities/pete-hoekstra.md","filePath":"entities/pete-hoekstra.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pete-hoekstra.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pete-hoekstra" tabindex="-1">Pete Hoekstra <a class="header-anchor" href="#pete-hoekstra" aria-label="Permalink to &quot;Pete Hoekstra&quot;">​</a></h1><p>Pete Hoekstra is a former Republican member of the United States House of Representatives from Michigan who served as U.S. ambassador to the Netherlands during <a href="/entities/donald-trump">Donald Trump</a>&#39;s first term.[1]</p><p>In November 2024, Trump announced that he had chosen Hoekstra to serve as his incoming administration&#39;s ambassador to Canada. The announcement came the same day Trump named <a href="/entities/matthew-whitaker">Matt Whitaker</a> as U.S. ambassador to <a href="/entities/nato">NATO</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Storm Shadows and the Contours of Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pete-hoekstra.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const peteHoekstra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  peteHoekstra as default
};
