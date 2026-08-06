import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PNC Financial Services Group","description":"","frontmatter":{"title":"PNC Financial Services Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","finance","first-republic",2023],"sources":["raw/badlands-news-brief-070.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pnc-financial-services-group.md","filePath":"entities/pnc-financial-services-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pnc-financial-services-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pnc-financial-services-group" tabindex="-1">PNC Financial Services Group <a class="header-anchor" href="#pnc-financial-services-group" aria-label="Permalink to &quot;PNC Financial Services Group&quot;">​</a></h1><p>PNC is a large U.S. regional banking group that emerged in April 2023 as one of the bidders for the assets of the failing <a href="/entities/first-republic-bank">First Republic Bank</a>.[1]</p><h2 id="role-in-the-first-republic-resolution" tabindex="-1">Role in the First Republic resolution <a class="header-anchor" href="#role-in-the-first-republic-resolution" aria-label="Permalink to &quot;Role in the First Republic resolution&quot;">​</a></h2><p>Reporting by the Wall Street Journal, relayed by ZeroHedge, identified PNC alongside <a href="/entities/jpmorgan-chase">JPMorgan</a> among the big banks set to buy First Republic in a transaction structured to follow a government seizure rather than a private, market-arranged sale.[1] The structure meant acquiring banks would take the desirable assets while losses on the remainder fell to the <a href="/entities/federal-deposit-insurance-corporation">FDIC</a> and, indirectly, U.S. taxpayers.[1]</p><p>Commentary in the Badlands brief treated the episode as part of a pattern in which government-brokered rescues concentrate assets in a small number of very large institutions, comparable to the <a href="/entities/credit-suisse">Credit Suisse</a>–<a href="/entities/ubs">UBS</a> arrangement in Switzerland.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sudan Spirals, Epstein Entraps &amp; Banks Bail&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-070" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-070</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pnc-financial-services-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pncFinancialServicesGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pncFinancialServicesGroup as default
};
