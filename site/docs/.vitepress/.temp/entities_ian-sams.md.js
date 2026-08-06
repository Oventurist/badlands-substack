import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ian Sams","description":"","frontmatter":{"title":"Ian Sams","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["white-house","spokesman","biden","hur-report"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ian-sams.md","filePath":"entities/ian-sams.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ian-sams.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ian-sams" tabindex="-1">Ian Sams <a class="header-anchor" href="#ian-sams" aria-label="Permalink to &quot;Ian Sams&quot;">​</a></h1><p>Ian Sams served as spokesman for the <a href="/entities/white-house">White House</a> Counsel&#39;s Office during the Biden administration and was the official who fronted the administration&#39;s response to the <a href="/concepts/hur-report">Hur report</a> in February 2024.[1]</p><p>At the first White House briefing to address the report, Sams argued that the inquiry&#39;s purpose had been narrow and that its outcome vindicated the president: &quot;The special counsel&#39;s assignment when he was appointed was to determine whether any criminal conduct occurred. He found it didn&#39;t. That was the finding. The case is closed.&quot;[1] He simultaneously dismissed <a href="/entities/robert-hur">Robert Hur</a>&#39;s observations about President <a href="/entities/joe-biden">Joe Biden</a>&#39;s memory as &quot;gratuitous comments&quot; that were &quot;inappropriate&quot; and should not distract from the conclusion that the case was closed.[1]</p><p>Badlands commentary characterized the briefing as a &quot;spin cycle,&quot; noting the difficulty of praising a report&#39;s legal findings while denouncing its factual observations about the president&#39;s mental state.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ian-sams.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ianSams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ianSams as default
};
