import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fouad Shokr","description":"","frontmatter":{"title":"Fouad Shokr","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hezbollah","lebanon","middle-east","assassination"],"sources":["raw/badlands-news-brief-06e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fouad-shokr.md","filePath":"entities/fouad-shokr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fouad-shokr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fouad-shokr" tabindex="-1">Fouad Shokr <a class="header-anchor" href="#fouad-shokr" aria-label="Permalink to &quot;Fouad Shokr&quot;">​</a></h1><p>Fouad Shokr was the military chief of <a href="/entities/hezbollah">Hezbollah</a>, the Lebanese armed movement.[1] He was killed on July 30, 2024, when Israeli airstrikes targeted the Hezbollah stronghold in southern Beirut.[1]</p><p>His death, followed a day later by the killing of <a href="/entities/hamas">Hamas</a> political bureau head <a href="/entities/ismail-haniyeh">Ismail Haniyeh</a> in Tehran, marked a sharp escalation in the regional conflict.[1] In response to the two killings, the U.S. Defense Department deployed 12 warships to the Middle East, spanning the Persian Gulf and the Mediterranean Sea.[1] The escalation also prompted South Carolina Senator <a href="/entities/lindsey-graham">Lindsey Graham</a> to introduce a Senate resolution asserting that any major Hezbollah escalation against Israel should be treated as an attack executed by <a href="/entities/iran">Iran</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Electionception, Sovereign Alliance Digs &amp; Chick Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-06e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-06e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fouad-shokr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fouadShokr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fouadShokr as default
};
