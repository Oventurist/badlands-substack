import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dustin Burrows","description":"","frontmatter":{"title":"Dustin Burrows","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","republican-party","state-legislature"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dustin-burrows.md","filePath":"entities/dustin-burrows.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dustin-burrows.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dustin-burrows" tabindex="-1">Dustin Burrows <a class="header-anchor" href="#dustin-burrows" aria-label="Permalink to &quot;Dustin Burrows&quot;">​</a></h1><p>Dustin Burrows is a Texas state representative and a top ally of outgoing Texas House Speaker <a href="/entities/dade-phelan">Dade Phelan</a>.[1]</p><p>In January 2025 Burrows was one of the two principal contenders in the <a href="/concepts/2025-texas-house-speaker-battle">Texas House Speaker battle</a>, running against state Representative <a href="/entities/david-cook">David Cook</a>, who had been chosen the previous month as the state GOP&#39;s Speaker nominee. Burrows represented the remnant of what was once the Texas party&#39;s establishment against a rising far-right faction that controlled most of the state&#39;s government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dustin-burrows.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dustinBurrows = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dustinBurrows as default
};
