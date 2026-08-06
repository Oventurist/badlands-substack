import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Troy Edgar","description":"","frontmatter":{"title":"Troy Edgar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["homeland-security","trump-administration","appointments"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/troy-edgar.md","filePath":"entities/troy-edgar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/troy-edgar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="troy-edgar" tabindex="-1">Troy Edgar <a class="header-anchor" href="#troy-edgar" aria-label="Permalink to &quot;Troy Edgar&quot;">​</a></h1><p>Troy Edgar is an IBM executive and former Department of Homeland Security official who was named by President-elect <a href="/entities/donald-trump">Donald Trump</a> as deputy secretary of the <a href="/entities/department-of-homeland-security">Department of Homeland Security</a>.[1] The appointment was announced in December 2024 in the same Truth Social post in which Trump named <a href="/entities/devin-nunes">Devin Nunes</a> chairman of the <a href="/entities/presidents-intelligence-advisory-board">President&#39;s Intelligence Advisory Board</a> and businessman <a href="/entities/bill-white">Bill White</a> as U.S. ambassador to Belgium.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/troy-edgar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const troyEdgar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  troyEdgar as default
};
