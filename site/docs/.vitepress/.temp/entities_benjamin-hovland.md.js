import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benjamin Hovland","description":"","frontmatter":{"title":"Benjamin Hovland","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["election-assistance-commission","elections","democratic-party","removal"],"sources":["raw/badlands-brief-805.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/benjamin-hovland.md","filePath":"entities/benjamin-hovland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/benjamin-hovland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="benjamin-hovland" tabindex="-1">Benjamin Hovland <a class="header-anchor" href="#benjamin-hovland" aria-label="Permalink to &quot;Benjamin Hovland&quot;">​</a></h1><p>Benjamin Hovland was a Democratic commissioner of the U.S. <a href="/entities/election-assistance-commission">Election Assistance Commission</a>.[1]</p><p>Hovland was removed from his post on July 9, 2026, when President <a href="/entities/donald-trump">Donald Trump</a> terminated the last three sitting members of the commission, leaving the four-seat bipartisan agency with no commissioners at all.[1] He and fellow Democratic commissioner <a href="/entities/thomas-hicks">Thomas Hicks</a> learned by email that their positions had been terminated effective immediately.[1]</p><p>The removals were defended by a <a href="/entities/white-house">White House</a> official on the grounds that the president may remove officials not aligned with the administration&#39;s election-security priorities, invoking <a href="/concepts/trump-v-slaughter"><em>Trump v. Slaughter</em></a> as precedent.[1] The vacancies prompted debate over whether the commission should be repopulated with election-integrity advocates or dissolved outright, with Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> arguing for dissolution, investigation and prosecution rather than replacement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/benjamin-hovland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benjaminHovland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benjaminHovland as default
};
