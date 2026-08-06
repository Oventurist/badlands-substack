import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quds Force","description":"","frontmatter":{"title":"Quds Force","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iran","irgc","middle-east","paramilitary","intelligence"],"sources":["raw/badlands-news-brief-2db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/quds-force.md","filePath":"entities/quds-force.md","lastUpdated":null}');
const _sfc_main = { name: "entities/quds-force.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="quds-force" tabindex="-1">Quds Force <a class="header-anchor" href="#quds-force" aria-label="Permalink to &quot;Quds Force&quot;">​</a></h1><p>The Quds Force is the elite foreign espionage and paramilitary arm of <a href="/entities/iran">Iran</a>&#39;s <a href="/entities/islamic-revolutionary-guard-corps">Islamic Revolutionary Guard Corps</a>.[1]</p><h2 id="_2024-damascus-embassy-strike-losses" tabindex="-1">2024 Damascus embassy strike losses <a class="header-anchor" href="#_2024-damascus-embassy-strike-losses" aria-label="Permalink to &quot;2024 Damascus embassy strike losses&quot;">​</a></h2><p>On April 1, 2024, suspected Israeli warplanes bombed Iran&#39;s embassy compound in Damascus, <a href="/entities/syria">Syria</a>.[1] The IRGC said seven Iranian military advisers died in the strike, among them <a href="/entities/mohammad-reza-zahedi">Mohammad Reza Zahedi</a>, a senior Quds Force commander.[1] Three of the dead were senior commanders, and the attack was the first time <a href="/entities/israel">Israel</a> had hit the embassy compound itself, after years of targeting Iranian military installations and proxy assets in Syria.[1] See <a href="/concepts/2024-israeli-strike-on-iranian-embassy-in-damascus">2024-israeli-strike-on-iranian-embassy-in-damascus</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Trump Counters, Musk Sues &amp; Biden Lies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/quds-force.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qudsForce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qudsForce as default
};
