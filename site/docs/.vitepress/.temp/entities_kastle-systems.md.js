import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kastle Systems","description":"","frontmatter":{"title":"Kastle Systems","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["real-estate","data","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kastle-systems.md","filePath":"entities/kastle-systems.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kastle-systems.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kastle-systems" tabindex="-1">Kastle Systems <a class="header-anchor" href="#kastle-systems" aria-label="Permalink to &quot;Kastle Systems&quot;">​</a></h1><p>Kastle Systems is a building-security firm whose office card-swipe data is treated as the gold-standard measure of office occupancy trends in the United States.[1]</p><p>Its figures became a widely cited barometer of the post-Covid office slump during the 2023 <a href="/concepts/commercial-real-estate-crisis">commercial real estate crisis</a>. As of April 2023, Kastle data showed average office occupancy across Washington, D.C. at only 43%, still well short of pre-pandemic levels — a backdrop to <a href="/entities/brookfield">Brookfield</a>&#39;s default on a $161.4 million mortgage covering twelve D.C. office buildings.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kastle-systems.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kastleSystems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kastleSystems as default
};
