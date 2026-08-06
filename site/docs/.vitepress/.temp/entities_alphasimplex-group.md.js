import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AlphaSimplex Group","description":"","frontmatter":{"title":"AlphaSimplex Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","asset-management","markets"],"sources":["raw/badlands-news-brief-508.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alphasimplex-group.md","filePath":"entities/alphasimplex-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alphasimplex-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alphasimplex-group" tabindex="-1">AlphaSimplex Group <a class="header-anchor" href="#alphasimplex-group" aria-label="Permalink to &quot;AlphaSimplex Group&quot;">​</a></h1><p>AlphaSimplex Group is a quantitative investment management firm whose market commentary featured in Bloomberg&#39;s April 2025 coverage of the U.S. Treasury rally.[1]</p><p>The firm&#39;s chief strategist and portfolio manager, <a href="/entities/kathryn-kaminski">Kathryn Kaminski</a>, cautioned that investors rushing into government debt on recession fears were underweighting the inflationary consequences of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s tariffs, and that the <a href="/entities/federal-reserve">Federal Reserve</a> would face a difficult trade-off between cutting rates to support growth and containing tariff-driven inflation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Treasury Triumphs, TikTok U-Turns, &amp; Trade War Time-Outs&quot;, raw/badlands-news-brief-508.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alphasimplex-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alphasimplexGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alphasimplexGroup as default
};
