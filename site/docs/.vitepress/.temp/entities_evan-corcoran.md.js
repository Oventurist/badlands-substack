import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Evan Corcoran","description":"","frontmatter":{"title":"Evan Corcoran","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["attorney","mar-a-lago","declassification"],"sources":["raw/badlands-brief-2c5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/evan-corcoran.md","filePath":"entities/evan-corcoran.md","lastUpdated":null}');
const _sfc_main = { name: "entities/evan-corcoran.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="evan-corcoran" tabindex="-1">Evan Corcoran <a class="header-anchor" href="#evan-corcoran" aria-label="Permalink to &quot;Evan Corcoran&quot;">​</a></h1><p>Evan Corcoran is an attorney who represented <a href="/entities/donald-trump">Donald Trump</a> in the dispute over presidential records held at <a href="/entities/mar-a-lago">Mar-a-Lago</a>.[1]</p><p>In a May 2022 letter — sent months before the August 8, 2022 <a href="/entities/fbi">FBI</a> search — Corcoran asserted on Trump&#39;s behalf that the former president possessed broad declassification authority and had issued a standing order treating documents removed to his residence as declassified.[1] That claim later formed part of the backdrop against which <a href="/entities/department-of-justice">Justice Department</a> officials, including <a href="/entities/patty-stemler">Patty Stemler</a>, privately questioned the raid&#39;s legal footing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bioweapons Sneak Into the News Cycle as Israeli Shenanigans Ensue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/evan-corcoran.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evanCorcoran = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  evanCorcoran as default
};
