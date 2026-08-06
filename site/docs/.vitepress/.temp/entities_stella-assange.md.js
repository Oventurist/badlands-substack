import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stella Assange","description":"","frontmatter":{"title":"Stella Assange","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["press-freedom","wikileaks","extradition","activism"],"sources":["raw/badlands-news-brief-2a0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stella-assange.md","filePath":"entities/stella-assange.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stella-assange.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stella-assange" tabindex="-1">Stella Assange <a class="header-anchor" href="#stella-assange" aria-label="Permalink to &quot;Stella Assange&quot;">​</a></h1><p><strong>Stella Assange</strong> is a lawyer and the wife of imprisoned WikiLeaks publisher <a href="/entities/julian-assange">Julian Assange</a>, and a leading public advocate against his extradition to the United States.[1]</p><p>In December 2023 she publicly confirmed that her husband&#39;s appeal hearing would take place on February 20–21, 2024, before two High Court judges at the Royal Courts of Justice in London — likely his final opportunity to resist extradition on <a href="/concepts/espionage-act">Espionage Act</a> charges as part of the <a href="/concepts/assange-extradition-case">Assange extradition case</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Witch Hunt Hits a Few Snags as the Landscape Shifts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stella-assange.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stellaAssange = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stellaAssange as default
};
