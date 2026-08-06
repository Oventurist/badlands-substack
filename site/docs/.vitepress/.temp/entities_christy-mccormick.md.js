import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Christy McCormick","description":"","frontmatter":{"title":"Christy McCormick","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["election-assistance-commission","elections","republican-party","resignation"],"sources":["raw/badlands-brief-805.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/christy-mccormick.md","filePath":"entities/christy-mccormick.md","lastUpdated":null}');
const _sfc_main = { name: "entities/christy-mccormick.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="christy-mccormick" tabindex="-1">Christy McCormick <a class="header-anchor" href="#christy-mccormick" aria-label="Permalink to &quot;Christy McCormick&quot;">​</a></h1><p>Christy McCormick was a Republican commissioner of the U.S. <a href="/entities/election-assistance-commission">Election Assistance Commission</a>.[1]</p><p>McCormick resigned from the commission in July 2026, as President <a href="/entities/donald-trump">Donald Trump</a> moved on July 9 to clear out the agency&#39;s remaining membership.[1] Her departure, combined with the email terminations of Democratic commissioners <a href="/entities/thomas-hicks">Thomas Hicks</a> and <a href="/entities/benjamin-hovland">Benjamin Hovland</a> and the earlier voluntary exit of Republican <a href="/entities/donald-palmer">Donald Palmer</a>, left the four-seat body without a single sitting commissioner.[1]</p><p>Under the <a href="/concepts/help-america-vote-act">Help America Vote Act of 2002</a>, the commission&#39;s four presidentially appointed and Senate-confirmed members must be divided evenly between the two major political parties, so McCormick&#39;s seat was one of the two reserved for Republicans.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/christy-mccormick.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const christyMccormick = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  christyMccormick as default
};
