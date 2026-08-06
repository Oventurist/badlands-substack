import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Devin Haney","description":"","frontmatter":{"title":"Devin Haney","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["boxing","sports"],"sources":["raw/badlands-news-brief-08a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/devin-haney.md","filePath":"entities/devin-haney.md","lastUpdated":null}');
const _sfc_main = { name: "entities/devin-haney.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="devin-haney" tabindex="-1">Devin Haney <a class="header-anchor" href="#devin-haney" aria-label="Permalink to &quot;Devin Haney&quot;">​</a></h1><p>Devin Haney is an American professional boxer who entered his April 2024 bout with <a href="/entities/ryan-garcia">Ryan Garcia</a> undefeated and lost in what was widely regarded as a major upset.[1]</p><p>Garcia missed weight for the fight by three pounds and paid Haney $500,000 per pound — $1.5 million total — before the opening bell.[1] Despite entering as a heavy favorite, with Garcia closing as a 5- or 6-to-1 underdog, Haney was floored three times over twelve rounds and lost the contest.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Communist Ouroboros Accelerates&quot;, raw/badlands-news-brief-08a.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/devin-haney.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const devinHaney = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  devinHaney as default
};
