import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Unilever","description":"","frontmatter":{"title":"Unilever","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["corporations","netherlands","consumer-goods"],"sources":["raw/badlands-news-brief-099.md"],"confidence":"low"},"headers":[],"relativePath":"entities/unilever.md","filePath":"entities/unilever.md","lastUpdated":null}');
const _sfc_main = { name: "entities/unilever.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="unilever" tabindex="-1">Unilever <a class="header-anchor" href="#unilever" aria-label="Permalink to &quot;Unilever&quot;">​</a></h1><p>Unilever is a British multinational consumer goods company, characterized in Badlands commentary as originally a soap manufacturer that expanded into other household products.[1]</p><h2 id="connection-to-mark-rutte" tabindex="-1">Connection to Mark Rutte <a class="header-anchor" href="#connection-to-mark-rutte" aria-label="Permalink to &quot;Connection to Mark Rutte&quot;">​</a></h2><p>Unilever appears in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> chiefly through the biography of <a href="/entities/mark-rutte">Mark Rutte</a>, the NATO secretary-general.[1] Commentary traced Rutte&#39;s path from studying to become a concert pianist, to running a youth NGO, to working in Unilever&#39;s human resources department, before he entered politics and became the longest-serving prime minister in the history of the Netherlands.[1] Writing under the name GhostofBasedPatrickHenry, the author presented this corporate-to-political trajectory as evidence of an unremarkable-seeming figure whose rise warranted scrutiny, alongside the observation that Rutte&#39;s father had been an importer in the Dutch East Indies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Democrats in Disarray as Globalists Bend the Knee&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-099" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-099</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/unilever.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unilever = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unilever as default
};
