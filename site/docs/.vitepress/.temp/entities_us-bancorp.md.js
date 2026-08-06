import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"U.S. Bancorp","description":"","frontmatter":{"title":"U.S. Bancorp","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","finance","2023-banking-crisis"],"sources":["raw/badlands-news-brief-579.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-bancorp.md","filePath":"entities/us-bancorp.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-bancorp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="u-s-bancorp" tabindex="-1">U.S. Bancorp <a class="header-anchor" href="#u-s-bancorp" aria-label="Permalink to &quot;U.S. Bancorp&quot;">​</a></h1><p>U.S. Bancorp is a large American bank holding company. In early May 2023 it was cited as evidence that the crisis afflicting US regional lenders was spreading beyond small institutions into the larger banks, with U.S. Bancorp shares tumbling alongside those of <a href="/entities/pacwest-bancorp">PacWest Bancorp</a> amid widespread liquidations across equity markets.[1]</p><p>The sell-off came days after the failure and take-under of <a href="/entities/first-republic-bank">First Republic Bank</a> by <a href="/entities/jpmorgan-chase">JPMorgan Chase</a>, a deal that <a href="/entities/jamie-dimon">Jamie Dimon</a> had praised as proof the &quot;system works as it should&quot; and which the <a href="/entities/federal-reserve">Federal Reserve</a> chair had cited in suggesting the banking crisis was nearly over.[1] Critics argued the opposite — that the rescue of First Republic would drain up to $75 billion in Fed reserves from the system, pushing small banks back to their reserve constraints and forcing another market rout or a further bailout.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Resignations Tracked, Banks Shuttered &amp; Woke Fails&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-579" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-579</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-bancorp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usBancorp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usBancorp as default
};
