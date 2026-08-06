import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"E*Trade","description":"","frontmatter":{"title":"E*Trade","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["brokerage","finance","meme-stocks"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/e-trade.md","filePath":"entities/e-trade.md","lastUpdated":null}');
const _sfc_main = { name: "entities/e-trade.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="e-trade" tabindex="-1">E*Trade <a class="header-anchor" href="#e-trade" aria-label="Permalink to &quot;E*Trade&quot;">​</a></h1><p>E*Trade is a United States online brokerage platform owned by <a href="/entities/morgan-stanley">Morgan Stanley</a>.[1]</p><h2 id="role-in-the-2024-gamestop-episode" tabindex="-1">Role in the 2024 GameStop episode <a class="header-anchor" href="#role-in-the-2024-gamestop-episode" aria-label="Permalink to &quot;Role in the 2024 GameStop episode&quot;">​</a></h2><p>E<em>Trade was the brokerage through which <a href="/entities/keith-gill">Keith Gill</a> bought a large volume of <a href="/entities/gamestop">GameStop</a> options shortly before the May 2024 meme-stock craze, and the account shown in the screenshots he posted in early June 2024 — displaying roughly $140 million in GameStop shares and $85.5 million in gains — was an E</em>Trade account.[1]</p><p>The firm was reported in June 2024 to be considering barring Gill from the platform after growing concerned about potential stock manipulation around his options purchases.[1] Internal debate at E*Trade and Morgan Stanley reportedly covered both whether Gill&#39;s actions amounted to manipulation and whether the firm was willing to risk provoking his large retail following by removing him; no decision had been made and the firm could ultimately determine that no action was needed.[1] The Massachusetts securities division separately opened a look into Gill&#39;s activities.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/e-trade.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eTrade = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eTrade as default
};
