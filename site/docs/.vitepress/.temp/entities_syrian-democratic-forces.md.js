import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Syrian Democratic Forces","description":"","frontmatter":{"title":"Syrian Democratic Forces","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","kurds","pentagon","isis"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/syrian-democratic-forces.md","filePath":"entities/syrian-democratic-forces.md","lastUpdated":null}');
const _sfc_main = { name: "entities/syrian-democratic-forces.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="syrian-democratic-forces" tabindex="-1">Syrian Democratic Forces <a class="header-anchor" href="#syrian-democratic-forces" aria-label="Permalink to &quot;Syrian Democratic Forces&quot;">​</a></h1><p>The Syrian Democratic Forces (SDF) is a predominantly Kurdish armed coalition in Syria supported by the <a href="/entities/pentagon">Pentagon</a>.[1]</p><p>Badlands Media distinguishes the Pentagon&#39;s SDF support, framed as focused on fighting <a href="/entities/isis">ISIS</a>, from the <a href="/entities/cia">CIA</a>&#39;s <a href="/concepts/timber-sycamore">Timber Sycamore</a> program, which armed and trained groups aimed at pressuring the government of <a href="/entities/bashar-al-assad">Bashar al-Assad</a>.[1] The termination of the CIA program in 2017 under <a href="/entities/donald-trump">Donald Trump</a> was read as a shift toward counter-terrorism over regime change.[1]</p><p>The article notes that the collapse of Assad&#39;s government in December 2024 raised questions about how the power transition would affect Kurds, Turkish-backed groups, and other opposition factions inside Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/syrian-democratic-forces.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const syrianDemocraticForces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  syrianDemocraticForces as default
};
