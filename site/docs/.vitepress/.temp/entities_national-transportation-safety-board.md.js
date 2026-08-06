import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Transportation Safety Board","description":"","frontmatter":{"title":"National Transportation Safety Board","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["federal-agency","transportation","safety","investigations"],"sources":["raw/badlands-brief-740.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-transportation-safety-board.md","filePath":"entities/national-transportation-safety-board.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-transportation-safety-board.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-transportation-safety-board" tabindex="-1">National Transportation Safety Board <a class="header-anchor" href="#national-transportation-safety-board" aria-label="Permalink to &quot;National Transportation Safety Board&quot;">​</a></h1><p>The National Transportation Safety Board (NTSB) is the independent US federal agency responsible for investigating civil transportation accidents and issuing safety recommendations.[1]</p><h2 id="east-palestine-investigation" tabindex="-1">East Palestine investigation <a class="header-anchor" href="#east-palestine-investigation" aria-label="Permalink to &quot;East Palestine investigation&quot;">​</a></h2><p>The NTSB, working alongside the <a href="/entities/federal-railroad-administration">Federal Railroad Administration</a>, investigated the February 3, 2023 <a href="/concepts/east-palestine-train-derailment">East Palestine train derailment</a> involving a <a href="/entities/norfolk-southern">Norfolk Southern</a> freight train in eastern Ohio.[1] The agencies determined that the derailment was caused by a failed and overheated wheel bearing on a railcar, a mechanical-failure finding announced in NTSB materials.[1] Twenty of the thirty-eight derailed cars carried hazardous materials, and the controlled venting and burning of vinyl chloride during the emergency response became the most contested element of the incident&#39;s public legacy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Aliens. A Fake Kid Dies From Fake Measles. And the Princely Prosecution That Was Promised.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-740" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-740</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-transportation-safety-board.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalTransportationSafetyBoard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalTransportationSafetyBoard as default
};
