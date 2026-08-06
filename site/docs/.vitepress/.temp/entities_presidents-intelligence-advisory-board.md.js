import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"President's Intelligence Advisory Board","description":"","frontmatter":{"title":"President's Intelligence Advisory Board","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["intelligence","oversight","declassification","trump-administration"],"sources":["raw/badlands-brief-7c0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/presidents-intelligence-advisory-board.md","filePath":"entities/presidents-intelligence-advisory-board.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/presidents-intelligence-advisory-board.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="president-s-intelligence-advisory-board" tabindex="-1">President&#39;s Intelligence Advisory Board <a class="header-anchor" href="#president-s-intelligence-advisory-board" aria-label="Permalink to &quot;President&#39;s Intelligence Advisory Board&quot;">​</a></h1><p>The President&#39;s Intelligence Advisory Board is the White House advisory body on intelligence matters to which <a href="/entities/devin-nunes">Devin Nunes</a> was appointed in 2025, and to which he devoted himself full-time after resigning as chief executive and chairman of <a href="/entities/trump-media-and-technology-group">Trump Media &amp; Technology Group</a> in April 2026.[1]</p><h2 id="activities" tabindex="-1">Activities <a class="header-anchor" href="#activities" aria-label="Permalink to &quot;Activities&quot;">​</a></h2><p>Since 2025 the board&#39;s work under Nunes has centered on declassification efforts and structural reform of the intelligence community, conducted alongside <a href="/entities/tulsi-gabbard">Tulsi Gabbard</a> and <a href="/entities/john-ratcliffe">John Ratcliffe</a>.[1] Among the outcomes attributed to this effort was a move by the <a href="/entities/cia">CIA</a> to withdraw more than a dozen intelligence assessments judged not to have met internal tradecraft standards — characterized in reporting as a rebuke of the agency&#39;s prior leadership.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Games of Chicken, Spirit Fails, &amp; Rampant Satanism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/presidents-intelligence-advisory-board.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const presidentsIntelligenceAdvisoryBoard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  presidentsIntelligenceAdvisoryBoard as default
};
