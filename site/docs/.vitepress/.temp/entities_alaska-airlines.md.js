import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alaska Airlines","description":"","frontmatter":{"title":"Alaska Airlines","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aviation","boeing","safety","ntsb"],"sources":["raw/badlands-news-brief-6d2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alaska-airlines.md","filePath":"entities/alaska-airlines.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alaska-airlines.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alaska-airlines" tabindex="-1">Alaska Airlines <a class="header-anchor" href="#alaska-airlines" aria-label="Permalink to &quot;Alaska Airlines&quot;">​</a></h1><p>Alaska Airlines is a United States commercial carrier that became the focus of an aviation safety investigation in January 2024 after one of its aircraft suffered an in-flight structural failure.[1]</p><h2 id="_2024-boeing-737-max-9-panel-loss" tabindex="-1">2024 Boeing 737 MAX 9 panel loss <a class="header-anchor" href="#_2024-boeing-737-max-9-panel-loss" aria-label="Permalink to &quot;2024 Boeing 737 MAX 9 panel loss&quot;">​</a></h2><p>On Friday, January 5, 2024, an Alaska Airlines <a href="/entities/boeing">Boeing</a> 737 MAX 9 lost a fuselage panel in flight.[1] The <a href="/entities/national-transportation-safety-board">National Transportation Safety Board</a> subsequently reported that the cockpit voice recorder from the aircraft contained no usable data: chair <a href="/entities/jennifer-homendy">Jennifer Homendy</a> said on Sunday, January 7 that the recorder had not been retrieved within the two-hour limit after which recording restarts and overwrites earlier audio.[1]</p><p>The erasure renewed attention to long-standing safety calls for longer in-flight recordings, given that U.S. rules mandate two hours of cockpit voice recording while European rules require 25 hours for aircraft built after 2021.[1] The debate over recording duration has been active since the 2014 loss of a Malaysian Boeing 777, MH370, which has never been located.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epstein Boomerangs &amp; Bipartisan Bullsh*t&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6d2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6d2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alaska-airlines.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alaskaAirlines = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alaskaAirlines as default
};
