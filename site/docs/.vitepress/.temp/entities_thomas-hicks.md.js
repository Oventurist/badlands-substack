import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thomas Hicks","description":"","frontmatter":{"title":"Thomas Hicks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["election-assistance-commission","elections","democratic-party","removal"],"sources":["raw/badlands-brief-805.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/thomas-hicks.md","filePath":"entities/thomas-hicks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thomas-hicks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thomas-hicks" tabindex="-1">Thomas Hicks <a class="header-anchor" href="#thomas-hicks" aria-label="Permalink to &quot;Thomas Hicks&quot;">​</a></h1><p>Thomas Hicks was a Democratic commissioner of the U.S. <a href="/entities/election-assistance-commission">Election Assistance Commission</a>.[1]</p><p>On July 9, 2026, President <a href="/entities/donald-trump">Donald Trump</a> removed the final three members of the commission, leaving the four-seat bipartisan agency without any sitting commissioners.[1] Hicks and fellow Democratic commissioner <a href="/entities/benjamin-hovland">Benjamin Hovland</a> were notified by email that their positions had been terminated effective immediately.[1] Republican commissioner <a href="/entities/christy-mccormick">Christy McCormick</a> resigned in the same period, while Republican <a href="/entities/donald-palmer">Donald Palmer</a> had voluntarily left the commission earlier in the year.[1]</p><p>A <a href="/entities/white-house">White House</a> official said Trump had authority to remove officials who were not aligned with the administration&#39;s election-security priorities, citing the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a>&#39;s recent decision in <a href="/concepts/trump-v-slaughter"><em>Trump v. Slaughter</em></a> as precedent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thomas-hicks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thomasHicks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thomasHicks as default
};
