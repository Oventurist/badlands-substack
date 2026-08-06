import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill White","description":"","frontmatter":{"title":"Bill White","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["diplomacy","trump-administration","appointments","belgium"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bill-white.md","filePath":"entities/bill-white.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-white.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-white" tabindex="-1">Bill White <a class="header-anchor" href="#bill-white" aria-label="Permalink to &quot;Bill White&quot;">​</a></h1><p>Bill White is an American businessman appointed by President-elect <a href="/entities/donald-trump">Donald Trump</a> to serve as United States ambassador to Belgium.[1] The appointment was announced in December 2024 as part of a batch of personnel decisions that also included <a href="/entities/devin-nunes">Devin Nunes</a> as chairman of the <a href="/entities/presidents-intelligence-advisory-board">President&#39;s Intelligence Advisory Board</a> and <a href="/entities/troy-edgar">Troy Edgar</a> as deputy secretary of homeland security.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-white.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billWhite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billWhite as default
};
