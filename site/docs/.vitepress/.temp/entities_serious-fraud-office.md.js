import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Serious Fraud Office","description":"","frontmatter":{"title":"Serious Fraud Office","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["uk","law-enforcement","corruption","commodities"],"sources":["raw/badlands-news-brief-06e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/serious-fraud-office.md","filePath":"entities/serious-fraud-office.md","lastUpdated":null}');
const _sfc_main = { name: "entities/serious-fraud-office.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="serious-fraud-office" tabindex="-1">Serious Fraud Office <a class="header-anchor" href="#serious-fraud-office" aria-label="Permalink to &quot;Serious Fraud Office&quot;">​</a></h1><p>The Serious Fraud Office (SFO) is the United Kingdom&#39;s specialist prosecuting authority for complex fraud, bribery and corruption cases.[1] In August 2024 the SFO charged <a href="/entities/glencore">Glencore</a>&#39;s billionaire former head of oil, <a href="/entities/alex-beard">Alex Beard</a>, and four other former executives with conspiring to make corrupt payments, concluding a long-running investigation into alleged bribery by the UK-listed commodity trader in Africa.[1]</p><h2 id="glencore-investigation" tabindex="-1">Glencore investigation <a class="header-anchor" href="#glencore-investigation" aria-label="Permalink to &quot;Glencore investigation&quot;">​</a></h2><p>The SFO first opened its investigation into Glencore in 2019, focused on allegations of bribery connected to the company&#39;s London-based West Africa desk, which sourced and traded crude oil across the African continent.[1] Charges were brought against Beard together with Andrew Gibson, Paul Hopkirk, Ramon Labiaga and Martin Wakefield in relation to oil contracts awarded in Glencore&#39;s interests.[1] The defendants were ordered to appear before Westminster Magistrates&#39; Court on September 10, 2024.[1] The agency had initially planned to announce the charges in 2023 but was forced to delay after receiving further evidence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Electionception, Sovereign Alliance Digs &amp; Chick Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-06e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-06e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/serious-fraud-office.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seriousFraudOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seriousFraudOffice as default
};
