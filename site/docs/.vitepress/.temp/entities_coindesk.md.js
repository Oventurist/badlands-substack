import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Coindesk","description":"","frontmatter":{"title":"Coindesk","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","crypto","digital-assets","financial-press"],"sources":["raw/badlands-news-brief-541.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/coindesk.md","filePath":"entities/coindesk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/coindesk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="coindesk" tabindex="-1">Coindesk <a class="header-anchor" href="#coindesk" aria-label="Permalink to &quot;Coindesk&quot;">​</a></h1><p>Coindesk is a digital-assets news outlet whose reporting on United States crypto policy is cited in Badlands Media coverage.[1]</p><h2 id="coverage-of-the-march-2025-stablecoin-hearing" tabindex="-1">Coverage of the March 2025 stablecoin hearing <a class="header-anchor" href="#coverage-of-the-march-2025-stablecoin-hearing" aria-label="Permalink to &quot;Coverage of the March 2025 stablecoin hearing&quot;">​</a></h2><p>Coindesk reported on the <a href="/entities/house-financial-services-committee">House Financial Services Committee</a> hearing of March 11, 2025, noting that the pro-digital-assets witnesses included a senior executive from BNY and Davis Polk &amp; Wardwell lawyer <a href="/entities/randy-guynn">Randy Guynn</a>.[1] The outlet framed the panel&#39;s composition as a marker of shifting alignments in Washington: after years in which crypto insiders desperately sought the attention of <a href="/entities/us-congress">Congress</a>, representatives of the traditional financial system were putting a foot on the scales in favor of <a href="/concepts/stablecoin">stablecoin</a> regulation as congressional momentum toward crypto legislation rose.[1] Coindesk reported Guynn&#39;s argument that the <a href="/concepts/stable-act">STABLE Act</a>&#39;s safeguards should place issuers under banking-like protections.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Unearthed Autopens, Inevitable Ceasefires, &amp; 56 Human Kidneys&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-541" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-541</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/coindesk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coindesk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  coindesk as default
};
