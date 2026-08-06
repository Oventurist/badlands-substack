import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Lawless","description":"","frontmatter":{"title":"Richard Lawless","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cia","florida","contracts","jeb-bush"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/richard-lawless.md","filePath":"entities/richard-lawless.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-lawless.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-lawless" tabindex="-1">Richard Lawless <a class="header-anchor" href="#richard-lawless" aria-label="Permalink to &quot;Richard Lawless&quot;">​</a></h1><p>Richard Lawless was a former fifteen-year veteran of the <a href="/entities/cia">Central Intelligence Agency</a> who won state contracts to promote exports in Asia while <a href="/entities/jeb-bush">Jeb Bush</a> served as Florida&#39;s commerce secretary.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>He later joined with Bush and paid him to find real estate property for Japanese investors; one 1993 deal alone gave Bush a commission of $213,000.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The Badlands Media account presents the sequence as straightforward quid pro quo: state contracts out, private commissions back.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-lawless.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardLawless = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardLawless as default
};
