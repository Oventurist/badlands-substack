import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Standard & Poor's","description":"","frontmatter":{"title":"Standard & Poor's","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["credit-ratings","finance","us-debt"],"sources":["raw/badlands-news-brief-1cc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/standard-and-poors.md","filePath":"entities/standard-and-poors.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/standard-and-poors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="standard-poor-s" tabindex="-1">Standard &amp; Poor&#39;s <a class="header-anchor" href="#standard-poor-s" aria-label="Permalink to &quot;Standard &amp; Poor&#39;s&quot;">​</a></h1><p>Standard &amp; Poor&#39;s (S&amp;P) is a major credit ratings agency. In 2011 it downgraded the United States sovereign credit rating to AA-plus, and the rating stayed at that level thereafter rather than being restored to the top grade.[1]</p><p>When <a href="/entities/fitch-ratings">Fitch</a> cut the United States from AAA to AA+ on August 1, 2023, it joined S&amp;P at the lower rating, a development that Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> described as a further indication that those managing the US economy were failing the American people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Indicted ... Again, and Other Stories!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1cc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1cc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/standard-and-poors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const standardAndPoors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  standardAndPoors as default
};
