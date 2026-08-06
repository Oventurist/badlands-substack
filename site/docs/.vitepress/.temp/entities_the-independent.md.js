import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Independent","description":"","frontmatter":{"title":"The Independent","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","uk","journalism"],"sources":["raw/badlands-news-brief-13b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-independent.md","filePath":"entities/the-independent.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-independent.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-independent" tabindex="-1">The Independent <a class="header-anchor" href="#the-independent" aria-label="Permalink to &quot;The Independent&quot;">​</a></h1><p>The Independent is a British online newspaper whose reporting is periodically aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="epstein-coverage" tabindex="-1">Epstein coverage <a class="header-anchor" href="#epstein-coverage" aria-label="Permalink to &quot;Epstein coverage&quot;">​</a></h2><p>In May 2023 The Independent reported on an extensive <a href="/entities/wall-street-journal">Wall Street Journal</a> investigation showing that the circle of global power players who continued to meet <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a> after his first sex conviction was far wider than previously revealed, naming figures including the sitting director of the <a href="/entities/cia">Central Intelligence Agency</a>, <a href="/entities/william-burns">William Burns</a>, a former White House lawyer, a college president and a member of an international banking dynasty.[1] The outlet noted that none of these names appeared in Epstein&#39;s public &quot;black book&quot; or in the flight logs of his private jet, and that the underlying documents — thousands of pages of emails and schedules from 2013 to 2017 — had not previously been reported.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunters Hunted, Gender Confusion &amp; the Spiritual War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-13b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-13b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-independent.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theIndependent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theIndependent as default
};
