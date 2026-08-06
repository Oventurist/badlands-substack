import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Advancing American Freedom","description":"","frontmatter":{"title":"Advancing American Freedom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mike-pence","advocacy-group","classified-documents","conservative-politics"],"sources":["raw/badlands-news-brief-1cd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/advancing-american-freedom.md","filePath":"entities/advancing-american-freedom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/advancing-american-freedom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="advancing-american-freedom" tabindex="-1">Advancing American Freedom <a class="header-anchor" href="#advancing-american-freedom" aria-label="Permalink to &quot;Advancing American Freedom&quot;">​</a></h1><p>Advancing American Freedom is the political advocacy group founded by former Vice President <a href="/entities/mike-pence">Mike Pence</a>.[1] The organization entered national news coverage in January 2023 when Pence&#39;s team, responding to the discovery of classified material at his residence, conducted searches of both his Carmel, Indiana home and the offices of Advancing American Freedom.[1] Those searches followed revelations that classified documents from President <a href="/entities/joe-biden">Joe Biden</a>&#39;s tenure as vice president had been found at the Penn Biden Center think tank and at Biden&#39;s Wilmington, Delaware property.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pence Docs, Ukraine Corruption &amp; Body Doubles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1cd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1cd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/advancing-american-freedom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advancingAmericanFreedom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  advancingAmericanFreedom as default
};
