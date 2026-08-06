import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeopardy!","description":"","frontmatter":{"title":"Jeopardy!","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["television","game-show","syndication","litigation"],"sources":["raw/badlands-news-brief-520.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jeopardy.md","filePath":"entities/jeopardy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeopardy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeopardy" tabindex="-1">Jeopardy! <a class="header-anchor" href="#jeopardy" aria-label="Permalink to &quot;Jeopardy!&quot;">​</a></h1><p><strong>&quot;Jeopardy!&quot;</strong> is a long-running American syndicated quiz show produced by <a href="/entities/sony">Sony</a> and, for decades, distributed by <a href="/entities/cbs">CBS</a>.[1]</p><h2 id="_2024–2025-distribution-rights-dispute" tabindex="-1">2024–2025 distribution rights dispute <a class="header-anchor" href="#_2024–2025-distribution-rights-dispute" aria-label="Permalink to &quot;2024–2025 distribution rights dispute&quot;">​</a></h2><p>The show became one of two properties — alongside <a href="/entities/wheel-of-fortune">&quot;Wheel of Fortune&quot;</a> — at the center of a legal feud between Sony and CBS over syndication distribution rights.[1] Sony sued in October 2024 over money allegedly owed from past distribution deals and over CBS licensing deals in Australia and other overseas markets; CBS countersued in November claiming perpetual distribution rights, and obtained a temporary restraining order in February 2025.[1] On April 10, 2025 a Los Angeles Superior Court judge ruled for Sony, finding it had the right in its discretion to terminate the distribution agreements in August 2024, and CBS Media Ventures said it would appeal.[1]</p><h2 id="badlands-commentary" tabindex="-1">Badlands commentary <a class="header-anchor" href="#badlands-commentary" aria-label="Permalink to &quot;Badlands commentary&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> wrote that the story caught her eye out of affection for the show and nostalgia for &quot;a simpler time, when TV was on a schedule,&quot; recalling her late father-in-law as a &quot;Jeopardy!&quot; superfan, before treating the ruling as evidence of CBS&#39;s mounting legal defeats.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Indian iPhones, A Sovereign Bromance, &amp; Allegedly Real IDs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-520" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-520</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeopardy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeopardy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeopardy as default
};
