import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gabriel Attal","description":"","frontmatter":{"title":"Gabriel Attal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","prime-minister","macron","elections"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/gabriel-attal.md","filePath":"entities/gabriel-attal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gabriel-attal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gabriel-attal" tabindex="-1">Gabriel Attal <a class="header-anchor" href="#gabriel-attal" aria-label="Permalink to &quot;Gabriel Attal&quot;">​</a></h1><p>Gabriel Attal is a French politician serving as prime minister in the government of <a href="/entities/emmanuel-macron">Emmanuel Macron</a>.[1]</p><p>In February 2024, an exclusive IFOP poll projected that Attal would lose a hypothetical 2027 second-round presidential run-off to National Rally candidate <a href="/entities/marine-le-pen">Marine Le Pen</a> by 49 percent to 51 percent — the first poll ever to show Le Pen winning the presidency.[1] The result received front-page coverage in France.[1] Attal had previously served as education minister and was named prime minister following the resignation of Élisabeth Borne.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gabriel-attal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gabrielAttal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gabrielAttal as default
};
