import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pfizer","description":"","frontmatter":{"title":"Pfizer","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["big-pharma","corporate","advertising","market-concentration"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/pfizer.md","filePath":"entities/pfizer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pfizer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pfizer" tabindex="-1">Pfizer <a class="header-anchor" href="#pfizer" aria-label="Permalink to &quot;Pfizer&quot;">​</a></h1><p>Pfizer is an American pharmaceutical corporation. In the Badlands corpus it appears as a case study in how regulatory and product changes can vault a company into the ranks of the largest American firms.</p><h2 id="position-in-2000" tabindex="-1">Position in 2000 <a class="header-anchor" href="#position-in-2000" aria-label="Permalink to &quot;Position in 2000&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> lists Pfizer among the five largest American companies by market capitalization in 2000, in a top five the essay describes as unusually diversified — an energy company, an electronics and aerospace engine maker, a technology company, a big pharmaceutical company, and a retailer.</p><h2 id="explanation-offered" tabindex="-1">Explanation offered <a class="header-anchor" href="#explanation-offered" aria-label="Permalink to &quot;Explanation offered&quot;">​</a></h2><p>The article asks directly why Pfizer was so large in 2000 and answers with two developments: pharmaceutical advertising was permitted on broadcast television beginning in 1997, and Viagra was released to the public in 1998. Carlson generalizes the episode into a standing criticism of the industry: &quot;As always seems to be the case with Big Pharma, they pump us full of toxins, then sell us drugs [to] fix what it caused.&quot;</p><p>Pfizer does not appear in the essay&#39;s 2010, 2020, or 2025 rankings, which the article uses to mark the transition from a sectorally diverse market to one dominated entirely by big technology and <a href="/concepts/artificial-intelligence">AI</a> firms.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pfizer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pfizer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pfizer as default
};
