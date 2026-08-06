import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lance Twiggs","description":"","frontmatter":{"title":"Lance Twiggs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["tyler-robinson-case","witness","testimony"],"sources":["raw/badlands-brief-805.md"],"confidence":"low"},"headers":[],"relativePath":"entities/lance-twiggs.md","filePath":"entities/lance-twiggs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lance-twiggs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lance-twiggs" tabindex="-1">Lance Twiggs <a class="header-anchor" href="#lance-twiggs" aria-label="Permalink to &quot;Lance Twiggs&quot;">​</a></h1><p>Lance Twiggs is a witness in the prosecution of <a href="/entities/tyler-robinson">Tyler Robinson</a> over the killing of <a href="/entities/charlie-kirk">Charlie Kirk</a>.[1]</p><p>Conservative influencers covering the July 2026 preliminary hearing pointed to Twiggs&#39;s &quot;damning&quot; testimony as evidence that the case was effectively concluded before trial.[1] Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> countered that the Twiggs testimony took the form of a video deposition and that the defense had no opportunity to cross-examine the witness, making it an unsound basis for pronouncing the outcome settled.[1] The episode was cited as an example of how commentary around the case advanced conclusions ahead of any adversarial testing of the evidence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lance-twiggs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lanceTwiggs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lanceTwiggs as default
};
