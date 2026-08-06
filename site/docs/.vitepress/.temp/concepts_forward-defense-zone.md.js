import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Forward Defense Zone","description":"","frontmatter":{"title":"Forward Defense Zone","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["israel","lebanon","military","annexation"],"sources":["raw/badlands-brief-625.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/forward-defense-zone.md","filePath":"concepts/forward-defense-zone.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/forward-defense-zone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="forward-defense-zone" tabindex="-1">Forward Defense Zone <a class="header-anchor" href="#forward-defense-zone" aria-label="Permalink to &quot;Forward Defense Zone&quot;">​</a></h1><p>&quot;Forward Defense Zone&quot; is the term used by <a href="/entities/israel">Israel</a> for the belt of southern <a href="/entities/lebanon">Lebanese</a> territory placed under Israeli military control during operations conducted alongside the 2026 ceasefire.[1]</p><p>In April 2026 the Israeli military published a map showing a new deployment line in southern Lebanon that placed dozens of villages inside an Israeli-controlled zone extending roughly 5 to 10 kilometers from the border, with five Israeli divisions backed by naval forces operating there to dismantle <a href="/entities/hezbollah">Hezbollah</a> infrastructure and address threats to northern Israel.[1]</p><p>Badlands commentary treated the zone as an annexation mechanism rather than a defensive measure: by moving the border north toward Tyre, Israel could justify shifting the maritime boundary and annexing the <a href="/concepts/qana-gas-field">Qana Gas Field</a>, while the parallel northeastward push toward <a href="/entities/mount-hermon">Mount Hermon</a> would set conditions for absorbing southern Lebanon and southern Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/forward-defense-zone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forwardDefenseZone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  forwardDefenseZone as default
};
