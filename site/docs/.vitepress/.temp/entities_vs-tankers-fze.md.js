import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VS Tankers FZE","description":"","frontmatter":{"title":"VS Tankers FZE","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","sanctions","iran","uae","oil"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vs-tankers-fze.md","filePath":"entities/vs-tankers-fze.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vs-tankers-fze.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vs-tankers-fze" tabindex="-1">VS Tankers FZE <a class="header-anchor" href="#vs-tankers-fze" aria-label="Permalink to &quot;VS Tankers FZE&quot;">​</a></h1><p>VS Tankers FZE, formerly known as AISSOT, is a shipping company named by the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> as a component of the sanctioned oil network run by the Iraqi-British national <a href="/entities/salim-ahmed-said">Salim Ahmed Said</a>.[1]</p><p>According to Badlands Brief analysis, VS Tankers FZE was a commercial counterparty to the Greek firm <a href="/entities/evalend-shipping">Evalend Shipping</a>, controlled by <a href="/entities/kriton-lentoudis">Kriton Lentoudis</a>, which leased the company many of its vessels.[1] The Treasury designation described a scheme in which Iranian oil was blended with Iraqi oil and sold to Western buyers through <a href="/entities/iraq">Iraq</a> or the <a href="/entities/united-arab-emirates">United Arab Emirates</a> using forged documentation, with ship-to-ship transfers and other obfuscation techniques used to conceal the activity.[1]</p><p>The company&#39;s appearance in the ownership chain behind the tanker Kiku — struck by <a href="/entities/iran">Iran</a> in the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a> in June 2026 — was cited by Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> as evidence that the vessels targeted during the escalation were tied to sanctions-evasion networks rather than ordinary commercial traffic.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vs-tankers-fze.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vsTankersFze = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vsTankersFze as default
};
