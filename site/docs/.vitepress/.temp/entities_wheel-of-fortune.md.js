import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wheel of Fortune","description":"","frontmatter":{"title":"Wheel of Fortune","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["television","game-show","syndication","litigation"],"sources":["raw/badlands-news-brief-520.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/wheel-of-fortune.md","filePath":"entities/wheel-of-fortune.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wheel-of-fortune.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wheel-of-fortune" tabindex="-1">Wheel of Fortune <a class="header-anchor" href="#wheel-of-fortune" aria-label="Permalink to &quot;Wheel of Fortune&quot;">​</a></h1><p><strong>&quot;Wheel of Fortune&quot;</strong> is a long-running American syndicated game show produced by <a href="/entities/sony">Sony</a> and historically distributed by <a href="/entities/cbs">CBS</a>.[1]</p><h2 id="_2024–2025-distribution-rights-dispute" tabindex="-1">2024–2025 distribution rights dispute <a class="header-anchor" href="#_2024–2025-distribution-rights-dispute" aria-label="Permalink to &quot;2024–2025 distribution rights dispute&quot;">​</a></h2><p>The program was, with <a href="/entities/jeopardy">&quot;Jeopardy!&quot;</a>, one of the two shows at issue in Sony&#39;s distribution-rights lawsuit against CBS.[1] Sony sued in October 2024 alleging unpaid money from past distribution deals and breach of contract through CBS licensing deals in Australia and other overseas markets; CBS countersued in November asserting perpetual distribution rights and won a temporary restraining order in February 2025 after Sony moved to take distribution over.[1] Judge Kevin Brazile of the Los Angeles Superior Court ruled on April 10, 2025 that Sony had the discretion to terminate the distribution agreements in August 2024, and CBS Media Ventures announced an immediate appeal.[1]</p><p><a href="/entities/ashe-in-america">Ashe in America</a> cited the loss of both game shows as the capstone of a run of CBS legal setbacks, writing that &quot;it&#39;s the end of an era.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Indian iPhones, A Sovereign Bromance, &amp; Allegedly Real IDs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-520" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-520</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wheel-of-fortune.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wheelOfFortune = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wheelOfFortune as default
};
