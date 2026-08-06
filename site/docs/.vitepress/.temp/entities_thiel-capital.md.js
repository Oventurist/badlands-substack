import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thiel Capital","description":"","frontmatter":{"title":"Thiel Capital","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","peter-thiel","silicon-valley"],"sources":["raw/badlands-news-brief-1e6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/thiel-capital.md","filePath":"entities/thiel-capital.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thiel-capital.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thiel-capital" tabindex="-1">Thiel Capital <a class="header-anchor" href="#thiel-capital" aria-label="Permalink to &quot;Thiel Capital&quot;">​</a></h1><p>Thiel Capital is the investment firm associated with <a href="/entities/peter-thiel">Peter Thiel</a>.[1] Its most publicly visible alumnus in the Badlands narrative is <a href="/entities/eric-weinstein">Eric Weinstein</a>, the mathematician and podcast host who served as the firm&#39;s Managing Director.[1]</p><h2 id="relevance-to-the-epstein-narrative" tabindex="-1">Relevance to the Epstein narrative <a class="header-anchor" href="#relevance-to-the-epstein-narrative" aria-label="Permalink to &quot;Relevance to the Epstein narrative&quot;">​</a></h2><p>In July 2025, Weinstein drew attention for comments describing <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a> as &quot;a front.&quot;[1] <a href="/entities/chris-paul">Chris Paul</a> noted the proximity of the commentary to Thiel&#39;s own legal exposure, observing that Thiel was a defendant in the $8 billion Facebook trial then set to begin — &quot;just sayin.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Grand Conspiracies &amp; Massive Reductions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1e6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1e6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thiel-capital.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thielCapital = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thielCapital as default
};
