import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark Moran","description":"","frontmatter":{"title":"Mark Moran","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","virginia","prediction-markets","senate"],"sources":["raw/badlands-brief-0fb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mark-moran.md","filePath":"entities/mark-moran.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mark-moran.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mark-moran" tabindex="-1">Mark Moran <a class="header-anchor" href="#mark-moran" aria-label="Permalink to &quot;Mark Moran&quot;">​</a></h1><p>Mark Moran is an Independent candidate who ran in the Virginia U.S. Senate Democratic primary in 2026 and was among the first three political candidates banned by <a href="/entities/kalshi">Kalshi</a> for insider trading.[1]</p><h2 id="kalshi-ban" tabindex="-1">Kalshi ban <a class="header-anchor" href="#kalshi-ban" aria-label="Permalink to &quot;Kalshi ban&quot;">​</a></h2><p>Moran was suspended after wagering on his own election outcome on the Kalshi prediction market, an action flagged under newly implemented safeguards blocking candidates from trading on their own races.[1] He stated on X that he had bet on himself deliberately in order to get caught and draw attention to Kalshi, which he called destructive to young men.[1] Moran further vowed that, if elected senator, he would impose a 25% vice tax on the platform to help reduce the national debt.[1]</p><p>Kalshi&#39;s head of enforcement characterized the case as political insider trading and confirmed that it had not been referred to the <a href="/entities/commodity-futures-trading-commission">Commodity Futures Trading Commission</a> or the <a href="/entities/department-of-justice">Department of Justice</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Time is on Trump&#39;s Side ... But Which Regime is he Fighting?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0fb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0fb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mark-moran.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markMoran = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markMoran as default
};
