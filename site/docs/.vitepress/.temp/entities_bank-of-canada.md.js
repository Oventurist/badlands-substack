import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank of Canada","description":"","frontmatter":{"title":"Bank of Canada","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["central-bank","canada","finance"],"sources":["raw/badlands-news-brief-719.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bank-of-canada.md","filePath":"entities/bank-of-canada.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bank-of-canada.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-of-canada" tabindex="-1">Bank of Canada <a class="header-anchor" href="#bank-of-canada" aria-label="Permalink to &quot;Bank of Canada&quot;">​</a></h1><p>The <strong>Bank of Canada</strong> is Canada&#39;s central bank, and is notable in recent politics as the institution once headed by <a href="/entities/mark-carney">Mark Carney</a> before his entry into elected office.[1]</p><h2 id="carney-s-tenure-and-political-significance" tabindex="-1">Carney&#39;s tenure and political significance <a class="header-anchor" href="#carney-s-tenure-and-political-significance" aria-label="Permalink to &quot;Carney&#39;s tenure and political significance&quot;">​</a></h2><p>Carney led the Bank of Canada during the 2008 economic downturn, and later served as governor of the <a href="/entities/bank-of-england">Bank of England</a> through the Brexit turmoil, after an earlier career in investment banking.[1] That central-banking résumé became the core of his political appeal in the <a href="/concepts/2025-canadian-federal-election">2025 Canadian federal election</a>: his background in finance and his seemingly unflappable demeanour helped convince voters that he was the candidate best able to handle U.S. President <a href="/entities/donald-trump">Donald Trump</a> and his sometimes erratic policies.[1] Carney had never held political office before being named leader of the <a href="/entities/liberal-party-of-canada">Liberal Party</a> in March 2025.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Atmospheric Phenomenon &amp; Record Deportations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-719" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-719</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bank-of-canada.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankOfCanada = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankOfCanada as default
};
