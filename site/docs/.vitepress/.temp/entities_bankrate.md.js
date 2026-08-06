import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bankrate","description":"","frontmatter":{"title":"Bankrate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","consumer-debt","polling","personal-finance"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bankrate.md","filePath":"entities/bankrate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bankrate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bankrate" tabindex="-1">Bankrate <a class="header-anchor" href="#bankrate" aria-label="Permalink to &quot;Bankrate&quot;">​</a></h1><p>Bankrate is a financial services company that conducts recurring consumer finance surveys, including a long-running poll comparing Americans&#39; credit card debt with their emergency savings.[1]</p><p>Its October 2025 survey found that one in three Americans now carry more credit card debt than emergency savings, up ten percentage points from 2011, when the company first began asking the question.[1] Roughly 53 percent of respondents said their savings exceeded their credit card debt — down two percentage points from the same time the previous year, though slightly above the 2011 level.[1] Around one in ten Americans reported living paycheck to paycheck in 2025, neither paying down debt nor accumulating savings.[1]</p><p>Badlands commentary from <a href="/entities/ashe-in-america">Ashe in America</a> linked the trend to cost-of-living increases during &quot;The Pause,&quot; when wage growth was nominal or flat once adjusted for inflation, arguing that households took on debt to survive and that the resulting shift toward <a href="/concepts/debt-slavery">debt slavery</a> was intentional.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bankrate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankrate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankrate as default
};
