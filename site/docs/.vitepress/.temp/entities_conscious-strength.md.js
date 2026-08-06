import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Conscious Strength","description":"","frontmatter":{"title":"Conscious Strength","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show"],"sources":["raw/badlands-media-show-schedule-78b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/conscious-strength.md","filePath":"entities/conscious-strength.md","lastUpdated":null}');
const _sfc_main = { name: "entities/conscious-strength.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="conscious-strength" tabindex="-1">Conscious Strength <a class="header-anchor" href="#conscious-strength" aria-label="Permalink to &quot;Conscious Strength&quot;">​</a></h1><p>Conscious Strength is a <a href="/entities/badlands-media">Badlands Media</a> program hosted by <a href="/entities/jordan-sather">Jordan Sather</a>, scheduled for the second and fourth Tuesdays of each month at 12pm ET in the January 2023 schedule.[1] The program focuses on holistic self-development, discussing how individuals can craft themselves into physically and mentally stronger people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-78b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-78b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/conscious-strength.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const consciousStrength = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  consciousStrength as default
};
