import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zeke Enriquez","description":"","frontmatter":{"title":"Zeke Enriquez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","texas","prediction-markets","republicans"],"sources":["raw/badlands-brief-0fb.md"],"confidence":"low"},"headers":[],"relativePath":"entities/zeke-enriquez.md","filePath":"entities/zeke-enriquez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zeke-enriquez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zeke-enriquez" tabindex="-1">Zeke Enriquez <a class="header-anchor" href="#zeke-enriquez" aria-label="Permalink to &quot;Zeke Enriquez&quot;">​</a></h1><p>Zeke Enriquez is a Republican candidate in a 2026 Texas primary race who was one of three candidates suspended by <a href="/entities/kalshi">Kalshi</a> in the prediction market&#39;s first insider trading enforcement action.[1]</p><h2 id="kalshi-ban" tabindex="-1">Kalshi ban <a class="header-anchor" href="#kalshi-ban" aria-label="Permalink to &quot;Kalshi ban&quot;">​</a></h2><p>Enriquez wagered on his own election outcome on Kalshi and was flagged under safeguards newly implemented to prevent political candidates from trading on their own races.[1] Kalshi&#39;s enforcement head described the three cases collectively as political insider trading, noting that trade size was irrelevant where a candidate could influence the market outcome, and confirmed that no referral was made to the <a href="/entities/commodity-futures-trading-commission">Commodity Futures Trading Commission</a> or the <a href="/entities/department-of-justice">Department of Justice</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Time is on Trump&#39;s Side ... But Which Regime is he Fighting?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0fb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0fb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zeke-enriquez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zekeEnriquez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zekeEnriquez as default
};
