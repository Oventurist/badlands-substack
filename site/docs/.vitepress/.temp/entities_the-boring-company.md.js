import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Boring Company","description":"","frontmatter":{"title":"The Boring Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["infrastructure","tunneling","elon-musk","bering-strait"],"sources":["raw/badlands-brief-58d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-boring-company.md","filePath":"entities/the-boring-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-boring-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-boring-company" tabindex="-1">The Boring Company <a class="header-anchor" href="#the-boring-company" aria-label="Permalink to &quot;The Boring Company&quot;">​</a></h1><p>The Boring Company is a tunneling and infrastructure firm associated with <a href="/entities/elon-musk">Elon Musk</a>. It appears in Badlands Media coverage as the cost-reduction premise behind proposals for a fixed link across the Bering Strait.[1]</p><h2 id="relevance-to-the-bering-strait-tunnel" tabindex="-1">Relevance to the Bering Strait tunnel <a class="header-anchor" href="#relevance-to-the-bering-strait-tunnel" aria-label="Permalink to &quot;Relevance to the Bering Strait tunnel&quot;">​</a></h2><p>Kremlin special envoy <a href="/entities/kirill-dmitriev">Kirill Dmitriev</a> first floated the tunnel concept in October 2025, estimating that a conventional build could exceed $65 billion.[1] He suggested that costs could fall below $8 billion if construction methods associated with The Boring Company were employed — an order-of-magnitude reduction that has been central to arguments for the project&#39;s feasibility.[1] On June 5, 2026 Russia and the United States were reported to be signing an agreement to advance the design phase of the <a href="/concepts/bering-strait-tunnel">Bering Strait tunnel</a> connecting Russia&#39;s Chukotka region with Alaska.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;White Knuckling Weaponized Government&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-58d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-58d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-boring-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theBoringCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theBoringCompany as default
};
