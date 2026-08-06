import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uzbekistan","description":"","frontmatter":{"title":"Uzbekistan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["central-asia","geopolitics","critical-minerals"],"sources":["raw/badlands-news-brief-448.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/uzbekistan.md","filePath":"entities/uzbekistan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/uzbekistan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uzbekistan" tabindex="-1">Uzbekistan <a class="header-anchor" href="#uzbekistan" aria-label="Permalink to &quot;Uzbekistan&quot;">​</a></h1><p>Uzbekistan is a Central Asian republic and one of the five states whose leaders were hosted by President <a href="/entities/donald-trump">Donald Trump</a> at the White House at the <a href="/concepts/central-asia-summit-2025">2025 Central Asia Summit</a>, alongside <a href="/entities/kazakhstan">Kazakhstan</a>, Kyrgyzstan, Tajikistan, and Turkmenistan.[1]</p><h2 id="strategic-position" tabindex="-1">Strategic position <a class="header-anchor" href="#strategic-position" aria-label="Permalink to &quot;Strategic position&quot;">​</a></h2><p>Uzbekistan sits in a region long overshadowed by Russian and Chinese influence. In the framing of the November 2025 summit, Washington&#39;s interest in the country and its neighbors centered on supply chain security, critical minerals, and new transport corridors designed to bypass both Moscow and Beijing. For Uzbekistan and its neighbors, engagement with the United States offered political recognition, investment, and additional leverage in a delicate balancing act among competing great powers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Victim Cards, Foreign Inference, &amp; Chessboard Stans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-448" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-448</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/uzbekistan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uzbekistan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uzbekistan as default
};
