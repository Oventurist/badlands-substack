import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Matt Klein","description":"","frontmatter":{"title":"Matt Klein","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","minnesota","prediction-markets","democrats"],"sources":["raw/badlands-brief-0fb.md"],"confidence":"low"},"headers":[],"relativePath":"entities/matt-klein.md","filePath":"entities/matt-klein.md","lastUpdated":null}');
const _sfc_main = { name: "entities/matt-klein.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="matt-klein" tabindex="-1">Matt Klein <a class="header-anchor" href="#matt-klein" aria-label="Permalink to &quot;Matt Klein&quot;">​</a></h1><p>Matt Klein is a Democratic candidate in a 2026 Minnesota primary race who was one of three candidates suspended by <a href="/entities/kalshi">Kalshi</a> in the platform&#39;s first insider trading enforcement action.[1]</p><h2 id="kalshi-ban" tabindex="-1">Kalshi ban <a class="header-anchor" href="#kalshi-ban" aria-label="Permalink to &quot;Kalshi ban&quot;">​</a></h2><p>Klein had wagered on his own election outcome on the Kalshi prediction market platform, triggering newly implemented safeguards that block political candidates from trading on their own races.[1] Kalshi&#39;s head of enforcement stated that any trade by a candidate who can influence a market outcome violates the rules regardless of size and described the cases as political insider trading; the matters were not referred to the <a href="/entities/commodity-futures-trading-commission">Commodity Futures Trading Commission</a> or the <a href="/entities/department-of-justice">Department of Justice</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Time is on Trump&#39;s Side ... But Which Regime is he Fighting?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0fb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0fb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/matt-klein.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mattKlein = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mattKlein as default
};
