import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Statista","description":"","frontmatter":{"title":"Statista","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","market-research","data"],"sources":["raw/badlands-news-brief-4a6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/statista.md","filePath":"entities/statista.md","lastUpdated":null}');
const _sfc_main = { name: "entities/statista.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="statista" tabindex="-1">Statista <a class="header-anchor" href="#statista" aria-label="Permalink to &quot;Statista&quot;">​</a></h1><p>Statista is a market and consumer data company whose statistics, charts and market outlooks are widely republished by financial and general-interest media.[1] Its Advertising &amp; Media Markets Insights division produces forward-looking revenue estimates for emerging technology sectors.[1]</p><h2 id="metaverse-forecasting" tabindex="-1">Metaverse forecasting <a class="header-anchor" href="#metaverse-forecasting" aria-label="Permalink to &quot;Metaverse forecasting&quot;">​</a></h2><p>Statista&#39;s Advertising &amp; Media Markets Insights estimated that worldwide <a href="/concepts/metaverse">metaverse</a> revenue would stand at $490 billion in 2030.[1] Statista writer Katharina Buchholz noted that this represented a comparatively conservative forecast relative to rival analyst houses, which assumed a market volume of between approximately $750 billion and $1.7 trillion.[1] For the purposes of the outlook, Statista defined the metaverse as a virtual world or collection of virtual worlds existing in a common digital space accessible over the internet, encompassing virtual reality, augmented reality and other immersive technologies.[1]</p><p>The chart and its accompanying analysis were picked up by <a href="/entities/zerohedge">ZeroHedge</a> and subsequently summarised in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, where the figures were used as evidence of the scale of investment behind immersive digital environments.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Does Ukraine, Vax Data &amp; Veritas Shakeup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4a6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4a6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/statista.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const statista = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  statista as default
};
