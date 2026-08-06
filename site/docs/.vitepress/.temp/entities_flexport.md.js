import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Flexport","description":"","frontmatter":{"title":"Flexport","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["logistics","supply-chain","ports","2024-election"],"sources":["raw/badlands-news-brief-69b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/flexport.md","filePath":"entities/flexport.md","lastUpdated":null}');
const _sfc_main = { name: "entities/flexport.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flexport" tabindex="-1">Flexport <a class="header-anchor" href="#flexport" aria-label="Permalink to &quot;Flexport&quot;">​</a></h1><p>Flexport is one of the largest U.S. supply-chain logistics operators.[1]</p><h2 id="warning-on-the-2024-port-strike" tabindex="-1">Warning on the 2024 port strike <a class="header-anchor" href="#warning-on-the-2024-port-strike" aria-label="Permalink to &quot;Warning on the 2024 port strike&quot;">​</a></h2><p>In late September 2024, Flexport&#39;s chief executive warned that &quot;the biggest wild card in the presidential election that nobody&#39;s talking about? The looming port strike that could shut down all East and Gulf Coast ports just 36 days before the election.&quot;[1] The remark framed the threatened walkout by dockworkers represented by the <a href="/entities/international-longshoremens-association">International Longshoremen&#39;s Association</a> against the <a href="/entities/united-states-maritime-alliance">United States Maritime Alliance</a> as an electoral as well as economic event.[1]</p><p>The <a href="/entities/port-authority-of-new-york-and-new-jersey">Port Authority of New York and New Jersey</a> said it was &quot;coordinating with partners across the supply chain to prepare for any impacts,&quot; urging both sides &quot;to find common ground and keep the cargo flowing for the good of the national economy,&quot; and noting that $240 billion in goods move through its two ports each year, supporting more than 600,000 local jobs.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Calls for Peace as the World Heads Toward War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-69b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-69b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/flexport.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const flexport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  flexport as default
};
