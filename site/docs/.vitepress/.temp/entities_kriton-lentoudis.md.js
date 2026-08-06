import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kriton Lentoudis","description":"","frontmatter":{"title":"Kriton Lentoudis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","greece","iran","oil","sanctions"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kriton-lentoudis.md","filePath":"entities/kriton-lentoudis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kriton-lentoudis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kriton-lentoudis" tabindex="-1">Kriton Lentoudis <a class="header-anchor" href="#kriton-lentoudis" aria-label="Permalink to &quot;Kriton Lentoudis&quot;">​</a></h1><p>Kriton Lentoudis is a Greek shipping magnate identified in Badlands Brief reporting as the controlling figure behind <a href="/entities/evalend-shipping">Evalend Shipping</a>, the owner of the tanker Kiku.[1]</p><p>The Kiku was reportedly struck by <a href="/entities/iran">Iran</a> in late June 2026 after attempting to bypass the traffic lanes agreed for the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a> under a memorandum of understanding between Washington and Tehran.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> noted that Lentoudis&#39;s Evalend had acted as a commercial counterparty to <a href="/entities/vs-tankers-fze">VS Tankers FZE</a>, formerly AISSOT, leasing that firm many of its ships — a company later named by the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> within the sanctioned oil-smuggling network of <a href="/entities/salim-ahmed-said">Salim Ahmed Said</a>.[1] On that basis the author argued that Lentoudis&#39;s vessels were entangled in the laundering of Iranian oil and money through <a href="/entities/iraq">Iraq</a> and the <a href="/entities/united-arab-emirates">United Arab Emirates</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kriton-lentoudis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kritonLentoudis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kritonLentoudis as default
};
