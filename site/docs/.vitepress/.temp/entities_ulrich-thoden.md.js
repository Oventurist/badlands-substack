import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ulrich Thoden","description":"","frontmatter":{"title":"Ulrich Thoden","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","die-linke","bundestag","ukraine"],"sources":["raw/badlands-news-brief-5f2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ulrich-thoden.md","filePath":"entities/ulrich-thoden.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ulrich-thoden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ulrich-thoden" tabindex="-1">Ulrich Thoden <a class="header-anchor" href="#ulrich-thoden" aria-label="Permalink to &quot;Ulrich Thoden&quot;">​</a></h1><p>Ulrich Thoden is the parliamentary leader of the German party <a href="/entities/die-linke">Die Linke</a> (The Left).[1]</p><p>In July 2025 Thoden publicly criticized the US plan to funnel <a href="/concepts/patriot-missile-system">Patriot</a> anti-aircraft systems to <a href="/entities/ukraine">Ukraine</a> through European <a href="/entities/nato">NATO</a> members, saying it may create &quot;strong profit prospects&quot; for the American <a href="/concepts/military-industrial-complex">military-industrial complex</a> but does nothing to pave the way to ending the conflict between Moscow and Kiev.[1] He argued that the United States should supply Kiev with the systems directly rather than force European NATO members to pay for them or to further deplete their own dwindling arsenals.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Double Comey Drama &amp; Magic Moon Soil&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ulrich-thoden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ulrichThoden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ulrichThoden as default
};
