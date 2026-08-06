import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Xóchitl Gálvez","description":"","frontmatter":{"title":"Xóchitl Gálvez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","elections","opposition"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/xochitl-galvez.md","filePath":"entities/xochitl-galvez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/xochitl-galvez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xochitl-galvez" tabindex="-1">Xóchitl Gálvez <a class="header-anchor" href="#xochitl-galvez" aria-label="Permalink to &quot;Xóchitl Gálvez&quot;">​</a></h1><p>Xóchitl Gálvez was the principal opposition candidate in Mexico&#39;s June 2, 2024 presidential election.[1]</p><p>According to the president of Mexico&#39;s National Electoral Institute, Gálvez received between 26.6 percent and 28.6 percent of the vote, far behind winner <a href="/entities/claudia-sheinbaum">Claudia Sheinbaum</a>, who took between 58.3 percent and 60.7 percent, while Jorge Álvarez Máynez received between 9.9 percent and 10.8 percent.[1] Sheinbaum&#39;s Morena party was also projected to retain its majorities in both chambers of Mexico&#39;s Congress, leaving the opposition Gálvez represented in a substantially weakened position.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/xochitl-galvez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xochitlGalvez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  xochitlGalvez as default
};
