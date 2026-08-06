import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Federalist","description":"","frontmatter":{"title":"The Federalist","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-press","elections-coverage"],"sources":["raw/badlands-news-brief-31b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-federalist.md","filePath":"entities/the-federalist.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-federalist.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-federalist" tabindex="-1">The Federalist <a class="header-anchor" href="#the-federalist" aria-label="Permalink to &quot;The Federalist&quot;">​</a></h1><p>The Federalist is an American conservative online magazine frequently cited by Badlands Media for its coverage of election administration and legislative developments in the states.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In March 2024 The Federalist reported on the passage of <a href="/concepts/louisiana-senate-bill-101">Louisiana Senate Bill 101</a> through the state Senate, legislation prohibiting <a href="/concepts/ranked-choice-voting">ranked-choice voting</a> in Louisiana elections, and provided the account of sponsor Blake Miguez&#39;s arguments that &quot;complex tabulated ballots&quot; are &quot;un-American.&quot;[1] The outlet had previously covered Louisiana&#39;s constitutional amendment banning &quot;Zuckbucks,&quot; which Miguez also sponsored, as well as the State Freedom Caucus Network&#39;s influence on Republican state legislatures.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Government Spending &amp; Unprecedented Unhappiness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-31b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-31b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-federalist.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theFederalist = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theFederalist as default
};
