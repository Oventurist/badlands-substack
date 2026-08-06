import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Middle East Monitor","description":"","frontmatter":{"title":"Middle East Monitor","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","middle-east","publication"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"low"},"headers":[],"relativePath":"entities/middle-east-monitor.md","filePath":"entities/middle-east-monitor.md","lastUpdated":null}');
const _sfc_main = { name: "entities/middle-east-monitor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="middle-east-monitor" tabindex="-1">Middle East Monitor <a class="header-anchor" href="#middle-east-monitor" aria-label="Permalink to &quot;Middle East Monitor&quot;">​</a></h1><p>Middle East Monitor is a news outlet covering political affairs in the Middle East.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>On April 14, 2025 the outlet reported that Israeli opposition leader <a href="/entities/yair-lapid">Yair Lapid</a> rejected any possible nuclear deal between the United States and <a href="/entities/saudi-arabia">Saudi Arabia</a> that might allow Riyadh to enrich uranium.[1] The report was excerpted in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/middle-east-monitor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const middleEastMonitor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  middleEastMonitor as default
};
