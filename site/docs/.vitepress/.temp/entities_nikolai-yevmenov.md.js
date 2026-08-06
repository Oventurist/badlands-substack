import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nikolai Yevmenov","description":"","frontmatter":{"title":"Nikolai Yevmenov","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","navy","ukraine-war"],"sources":["raw/badlands-news-brief-120.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nikolai-yevmenov.md","filePath":"entities/nikolai-yevmenov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nikolai-yevmenov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nikolai-yevmenov" tabindex="-1">Nikolai Yevmenov <a class="header-anchor" href="#nikolai-yevmenov" aria-label="Permalink to &quot;Nikolai Yevmenov&quot;">​</a></h1><p>Admiral Nikolai Yevmenov, 61, served as commander-in-chief of the Russian navy from May 2019 until his removal in March 2024.[1]</p><h2 id="dismissal" tabindex="-1">Dismissal <a class="header-anchor" href="#dismissal" aria-label="Permalink to &quot;Dismissal&quot;">​</a></h2><p>Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> ousted Yevmenov after a series of humiliating Ukrainian attacks decimated Moscow&#39;s Black Sea Fleet, according to multiple Russian outlets including the St. Petersburg news service Fontanka and the pro-Putin newspaper Izvestia.[1] He was replaced by Northern Fleet Commander <a href="/entities/alexander-moiseyev">Alexander Moiseyev</a>.[1] Fontanka reported that Yevmenov was not expected to return to his office at the Admiralty, the navy&#39;s headquarters in St. Petersburg.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Returns to Headlines as Fear Mars AI and Airplanes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-120" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-120</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nikolai-yevmenov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nikolaiYevmenov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nikolaiYevmenov as default
};
