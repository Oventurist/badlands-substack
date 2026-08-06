import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ralph Blumenthal","description":"","frontmatter":{"title":"Ralph Blumenthal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","uap","new-york-times"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ralph-blumenthal.md","filePath":"entities/ralph-blumenthal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ralph-blumenthal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ralph-blumenthal" tabindex="-1">Ralph Blumenthal <a class="header-anchor" href="#ralph-blumenthal" aria-label="Permalink to &quot;Ralph Blumenthal&quot;">​</a></h1><p>Ralph Blumenthal is a veteran reporter for <a href="/entities/new-york-times">The New York Times</a> who has written extensively on unidentified aerial phenomena.[1]</p><p>In June 2023 Blumenthal co-reported, with <a href="/entities/leslie-kean">Leslie Kean</a>, the whistleblower account of former intelligence official <a href="/entities/david-grusch">David Grusch</a> for <a href="/entities/the-debrief">The Debrief</a>.[1] The report described covert U.S. programs said to hold intact and partially intact craft of non-human origin, with corroboration from other intelligence officials speaking both on and off the record.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ralph-blumenthal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ralphBlumenthal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ralphBlumenthal as default
};
