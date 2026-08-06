import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Craig Maceri","description":"","frontmatter":{"title":"Craig Maceri","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","national-guard","washington-dc"],"sources":["raw/badlands-brief-559.md"],"confidence":"low"},"headers":[],"relativePath":"entities/craig-maceri.md","filePath":"entities/craig-maceri.md","lastUpdated":null}');
const _sfc_main = { name: "entities/craig-maceri.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="craig-maceri" tabindex="-1">Craig Maceri <a class="header-anchor" href="#craig-maceri" aria-label="Permalink to &quot;Craig Maceri&quot;">​</a></h1><p>Brig. Gen. Craig Maceri is a US Army general officer associated with the <a href="/entities/district-of-columbia-national-guard">District of Columbia National Guard</a>.[1]</p><p>On the activation of the <a href="/entities/260th-special-purpose-brigade">260th Special Purpose Brigade</a> in March 2026, Maceri said the brigade provides a command structure to manage a wide range of missions while ensuring rapid coordination with federal and local agencies during major events, emergencies, and security operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/craig-maceri.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const craigMaceri = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  craigMaceri as default
};
