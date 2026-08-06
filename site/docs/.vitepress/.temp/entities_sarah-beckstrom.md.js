import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sarah Beckstrom","description":"","frontmatter":{"title":"Sarah Beckstrom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["national-guard","west-virginia","washington-dc",2025],"sources":["raw/badlands-news-brief-747.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sarah-beckstrom.md","filePath":"entities/sarah-beckstrom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sarah-beckstrom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sarah-beckstrom" tabindex="-1">Sarah Beckstrom <a class="header-anchor" href="#sarah-beckstrom" aria-label="Permalink to &quot;Sarah Beckstrom&quot;">​</a></h1><p>Sarah Beckstrom was a U.S. Army Specialist and member of the West Virginia <a href="/entities/national-guard">National Guard</a> who was fatally shot while on patrol in Washington, D.C. on November 26, 2025.[1]</p><p>Beckstrom and U.S. Air Force Staff Sergeant Andrew Wolfe were patrolling a street a short distance from the White House when a gunman opened fire at close range at approximately 2:15 p.m.[1] Both were critically wounded; Beckstrom died from her injuries the following day, while Wolfe remained in critical condition.[1]</p><p>The suspect was identified as <a href="/entities/rahmanullah-lakanwal">Rahmanullah Lakanwal</a>, a 29-year-old Afghan national who had worked with the <a href="/entities/cia">Central Intelligence Agency</a> as part of a partner force in Kandahar and who entered the United States in September 2021 under an evacuation program for vulnerable Afghans.[1] Her death became the focal point of a broader argument in independent media over the resettlement program, the role of the CIA, and the deployment of the National Guard in the capital.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Afghanis Activate, Witch Hunts End, &amp; Hitler Launches Re-Election Campaign&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-747" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-747</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sarah-beckstrom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sarahBeckstrom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sarahBeckstrom as default
};
