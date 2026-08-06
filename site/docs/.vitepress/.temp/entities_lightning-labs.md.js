import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lightning Labs","description":"","frontmatter":{"title":"Lightning Labs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bitcoin","lightning-network","taproot","crypto-infrastructure"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lightning-labs.md","filePath":"entities/lightning-labs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lightning-labs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lightning-labs" tabindex="-1">Lightning Labs <a class="header-anchor" href="#lightning-labs" aria-label="Permalink to &quot;Lightning Labs&quot;">​</a></h1><p>Lightning Labs is a Bitcoin infrastructure developer responsible for Taproot Assets, a Taproot-powered protocol that allows assets such as stablecoins to be issued and transferred on Bitcoin&#39;s base layer and its layer-2 Lightning Network.[1]</p><h2 id="role-in-the-tether-integration" tabindex="-1">Role in the Tether integration <a class="header-anchor" href="#role-in-the-tether-integration" aria-label="Permalink to &quot;Role in the Tether integration&quot;">​</a></h2><p>In early 2025 <a href="/entities/tether">Tether</a> announced that its USDt stablecoin would be integrated into the Bitcoin ecosystem using Taproot Assets, the protocol developed by Lightning Labs.[1] The integration was presented as combining Bitcoin&#39;s decentralization and security with the speed and scalability of the Lightning Network, enabling high-speed, low-cost USDt transactions.[1] Commentary in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> noted that this architecture would allow platforms such as <a href="/entities/rumble">Rumble</a> to offer instant micro USD payments over lightning rails.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lightning-labs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lightningLabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lightningLabs as default
};
