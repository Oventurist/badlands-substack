import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Simon","description":"","frontmatter":{"title":"Michael Simon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","oregon","ice","protests"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michael-simon.md","filePath":"entities/michael-simon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-simon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-simon" tabindex="-1">Michael Simon <a class="header-anchor" href="#michael-simon" aria-label="Permalink to &quot;Michael Simon&quot;">​</a></h1><p>Michael Simon is a United States district judge in Portland, Oregon.[1]</p><h2 id="portland-ice-facility-restraining-order" tabindex="-1">Portland ICE facility restraining order <a class="header-anchor" href="#portland-ice-facility-restraining-order" aria-label="Permalink to &quot;Portland ICE facility restraining order&quot;">​</a></h2><p>Simon issued a temporary restraining order limiting <a href="/entities/immigration-and-customs-enforcement">Immigration and Customs Enforcement</a>&#39;s use of tear gas and projectile munitions against protesters at a Portland ICE facility.[1] The order permits those tactics only in situations involving an imminent physical threat, and followed a period of recurring protests at the facility.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-simon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelSimon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelSimon as default
};
