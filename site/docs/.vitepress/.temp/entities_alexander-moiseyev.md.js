import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alexander Moiseyev","description":"","frontmatter":{"title":"Alexander Moiseyev","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","navy","ukraine-war"],"sources":["raw/badlands-news-brief-120.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alexander-moiseyev.md","filePath":"entities/alexander-moiseyev.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alexander-moiseyev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alexander-moiseyev" tabindex="-1">Alexander Moiseyev <a class="header-anchor" href="#alexander-moiseyev" aria-label="Permalink to &quot;Alexander Moiseyev&quot;">​</a></h1><p>Alexander Moiseyev, 61, is a Russian admiral who commanded the Northern Fleet before being tapped as acting commander-in-chief of the Russian navy in March 2024.[1]</p><h2 id="promotion" tabindex="-1">Promotion <a class="header-anchor" href="#promotion" aria-label="Permalink to &quot;Promotion&quot;">​</a></h2><p>Moiseyev, who holds Russia&#39;s highest honorary title, &quot;Hero of Russia,&quot; replaced Admiral <a href="/entities/nikolai-yevmenov">Nikolai Yevmenov</a> after President <a href="/entities/vladimir-putin">Vladimir Putin</a> removed the navy chief following a string of Ukrainian attacks on the Black Sea Fleet.[1] Russian reporting indicated he would soon be appointed on a permanent basis, and the navy&#39;s rank-and-file had already been notified of his promotion.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Returns to Headlines as Fear Mars AI and Airplanes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-120" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-120</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alexander-moiseyev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexanderMoiseyev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexanderMoiseyev as default
};
