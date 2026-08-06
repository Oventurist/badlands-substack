import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CNBC","description":"","frontmatter":{"title":"CNBC","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","cable-television","nbcuniversal","business-news"],"sources":["raw/badlands-news-brief-1f2.md"],"confidence":"high"},"headers":[],"relativePath":"entities/cnbc.md","filePath":"entities/cnbc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cnbc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cnbc" tabindex="-1">CNBC <a class="header-anchor" href="#cnbc" aria-label="Permalink to &quot;CNBC&quot;">​</a></h1><p>CNBC is the business news cable channel owned by <a href="/entities/nbcuniversal">NBCUniversal</a>.[1]</p><p>In November 2024, <a href="/entities/comcast">Comcast</a> announced it would proceed with a spinoff of its NBCUniversal cable networks, placing CNBC alongside <a href="/entities/msnbc">MSNBC</a>, USA, Oxygen, E!, Syfy and the Golf Channel in the divested portfolio. The assets collectively generated about $7 billion in revenue in the twelve months ended September 30, while Comcast retained Bravo, Peacock and the NBC broadcast network.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Storm Shadows and the Contours of Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cnbc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cnbc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cnbc as default
};
