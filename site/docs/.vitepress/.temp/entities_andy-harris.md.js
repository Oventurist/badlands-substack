import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andy Harris","description":"","frontmatter":{"title":"Andy Harris","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","maryland","house-freedom-caucus"],"sources":["raw/badlands-brief-fd9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andy-harris.md","filePath":"entities/andy-harris.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andy-harris.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andy-harris" tabindex="-1">Andy Harris <a class="header-anchor" href="#andy-harris" aria-label="Permalink to &quot;Andy Harris&quot;">​</a></h1><p>Andy Harris is a Republican member of the United States <a href="/entities/house-of-representatives">House of Representatives</a> from Maryland and chairman of the House Freedom Caucus.[1]</p><h2 id="june-2026-rule-revolt" tabindex="-1">June 2026 rule revolt <a class="header-anchor" href="#june-2026-rule-revolt" aria-label="Permalink to &quot;June 2026 rule revolt&quot;">​</a></h2><p>Harris was among the conservative members who drove the late-June 2026 rebellion that derailed the House&#39;s procedural rule and froze most floor business ahead of the July 4 recess.[1] The rule failed 224-198, with 14 Republicans joining Democrats in opposition, in an impasse that grew out of frustration over the stalled <a href="/concepts/save-america-act">SAVE America Act</a>.[1] Other members of the revolt included Reps. <a href="/entities/chip-roy">Chip Roy</a>, <a href="/entities/anna-paulina-luna">Anna Paulina Luna</a>, Mike Turner, and Victoria Spartz.[1]</p><p>The rebels&#39; demands ranged from a promised vote on the House-passed immigration bill HR 2 to amendments touching defense policy, pensions for Delphi auto parts retirees, and the SAVE America Act itself.[1] President <a href="/entities/donald-trump">Donald Trump</a> had directed members not to blockade the floor, but some of the holdouts proceeded anyway.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bicameral Courts, Congressional Creeps &amp; Curious Cartels&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fd9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fd9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andy-harris.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andyHarris = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andyHarris as default
};
