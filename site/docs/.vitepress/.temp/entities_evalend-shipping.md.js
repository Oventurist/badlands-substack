import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Evalend Shipping","description":"","frontmatter":{"title":"Evalend Shipping","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","iran","oil","sanctions","greece"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/evalend-shipping.md","filePath":"entities/evalend-shipping.md","lastUpdated":null}');
const _sfc_main = { name: "entities/evalend-shipping.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="evalend-shipping" tabindex="-1">Evalend Shipping <a class="header-anchor" href="#evalend-shipping" aria-label="Permalink to &quot;Evalend Shipping&quot;">​</a></h1><p>Evalend Shipping is a Greek maritime transport company identified in Badlands Brief reporting as the owner of the tanker Kiku, a vessel reportedly struck by Iranian forces in the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a> in late June 2026 after it attempted to bypass agreed-upon traffic lanes.[1] The company is controlled by the Greek shipping magnate <a href="/entities/kriton-lentoudis">Kriton Lentoudis</a>.[1]</p><h2 id="alleged-sanctions-exposure" tabindex="-1">Alleged sanctions exposure <a class="header-anchor" href="#alleged-sanctions-exposure" aria-label="Permalink to &quot;Alleged sanctions exposure&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> wrote that Evalend was a commercial counterparty to <a href="/entities/vs-tankers-fze">VS Tankers FZE</a>, formerly known as AISSOT, leasing that company many of its ships.[1] VS Tankers FZE was in turn named by the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> as part of a network run by the Iraqi-British national <a href="/entities/salim-ahmed-said">Salim Ahmed Said</a>, which allegedly blended Iranian and Iraqi oil for sale to Western buyers through <a href="/entities/iraq">Iraq</a> or the <a href="/entities/united-arab-emirates">United Arab Emirates</a>.[1]</p><p>On the basis of that commercial relationship, the Brief&#39;s analysis argued that the Kiku and her owners form part of a network laundering money and oil out of <a href="/entities/iran">Iran</a> through Iraq and the UAE, a pattern the author linked to executive orders and sanctions issued by the Trump administration dating back to 2018.[1] The article presented the vessel strikes and the simultaneous Iraqi anti-corruption sweep as connected events rather than coincidences.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/evalend-shipping.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evalendShipping = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  evalendShipping as default
};
