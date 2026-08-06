import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Arthur Harris","description":"","frontmatter":{"title":"Arthur Harris","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wwii","raf","strategic-bombing","britain"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/arthur-harris.md","filePath":"entities/arthur-harris.md","lastUpdated":null}');
const _sfc_main = { name: "entities/arthur-harris.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arthur-harris" tabindex="-1">Arthur Harris <a class="header-anchor" href="#arthur-harris" aria-label="Permalink to &quot;Arthur Harris&quot;">​</a></h1><p>Arthur Harris served as Marshal of the <a href="/entities/royal-air-force">Royal Air Force</a> under <a href="/entities/winston-churchill">Winston Churchill</a> and, according to the Badlands News Brief, was tasked by Churchill with drawing up the new doctrine that became the guidance for the &quot;strategic bombing&quot; campaigns that lasted all six years of the Second World War.[1]</p><p>The Brief reproduces statements attributed to Harris from 1941 and 1943 and characterizes the resulting rhetoric as describing a campaign of terrorism combining psychological and physical violence, with mass trauma psychosis as the apparent preferred outcome.[1] This doctrine is presented as a deliberate replacement for <a href="/concepts/just-war-theory">Just War Theory</a>, the Augustinian framework prioritizing the protection of civilian life that had governed European warfare for 1,600 years.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/arthur-harris.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arthurHarris = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  arthurHarris as default
};
