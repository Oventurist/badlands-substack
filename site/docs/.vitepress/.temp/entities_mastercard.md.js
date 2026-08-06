import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mastercard","description":"","frontmatter":{"title":"Mastercard","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["payments","finance","corporation"],"sources":["raw/badlands-news-brief-85a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mastercard.md","filePath":"entities/mastercard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mastercard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mastercard" tabindex="-1">Mastercard <a class="header-anchor" href="#mastercard" aria-label="Permalink to &quot;Mastercard&quot;">​</a></h1><p>Mastercard is one of the two dominant American card-payment networks, alongside <a href="/entities/visa">Visa</a>, through which a large share of global consumer transactions is cleared.[1]</p><h2 id="indonesian-withdrawal" tabindex="-1">Indonesian withdrawal <a class="header-anchor" href="#indonesian-withdrawal" aria-label="Permalink to &quot;Indonesian withdrawal&quot;">​</a></h2><p>In March 2023 <a href="/entities/bank-of-indonesia">Bank Indonesia</a> prepared to transition away from Mastercard and Visa while building an indigenous domestic payment platform, according to reporting by the Antara news agency.[1] President <a href="/entities/joko-widodo">Joko Widodo</a> had urged local agencies and authorities the previous week to abandon international payment systems for cards authorised by Indonesian banks, calling the networks a &quot;problem.&quot;[1]</p><p>The Indonesian government tied the move to the financial-sector sanctions imposed on <a href="/entities/russia">Russia</a> by the United States, the European Union and their allies over the war in Ukraine, presenting domestic payment rails as protection against geopolitical upheaval.[1] Financial analyst <a href="/entities/kirk-elliott">Dr. Kirk Elliott</a> treated the exit of a 278-million-person market as another domino in the unwinding of the American financial network effect.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bank of Epstein, Saudi Arabia &amp; Trump&#39;s Reprieve?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-85a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-85a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mastercard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mastercard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mastercard as default
};
