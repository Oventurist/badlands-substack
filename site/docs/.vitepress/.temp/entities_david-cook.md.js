import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Cook","description":"","frontmatter":{"title":"David Cook","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","republican-party","state-legislature"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-cook.md","filePath":"entities/david-cook.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-cook.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-cook" tabindex="-1">David Cook <a class="header-anchor" href="#david-cook" aria-label="Permalink to &quot;David Cook&quot;">​</a></h1><p>David Cook is a Texas state representative who was voted the Texas GOP&#39;s Speaker nominee in December 2024 and who contested the <a href="/concepts/2025-texas-house-speaker-battle">2025 Texas House Speaker battle</a> against <a href="/entities/dustin-burrows">Dustin Burrows</a>, an ally of outgoing Speaker <a href="/entities/dade-phelan">Dade Phelan</a>.[1]</p><p>Cook was identified with the right wing of the Texas Republican Party. Reporting held that a Cook victory would mark the first time in more than a decade that a candidate from that wing claimed the speakership — a political earthquake reflecting a slower, decades-long process of intrapartisan struggle.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-cook.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidCook = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidCook as default
};
