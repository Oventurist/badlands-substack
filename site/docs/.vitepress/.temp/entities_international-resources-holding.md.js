import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Resources Holding","description":"","frontmatter":{"title":"International Resources Holding","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["uae","mining","copper","zambia","commodities"],"sources":["raw/badlands-news-brief-441.md"],"confidence":"low"},"headers":[],"relativePath":"entities/international-resources-holding.md","filePath":"entities/international-resources-holding.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-resources-holding.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-resources-holding" tabindex="-1">International Resources Holding <a class="header-anchor" href="#international-resources-holding" aria-label="Permalink to &quot;International Resources Holding&quot;">​</a></h1><p>International Resources Holding (IRH) is a United Arab Emirates company that in March 2024 lawfully acquired <a href="/entities/mopani-mining">Mopani Copper Mines Limited</a> from <a href="/entities/glencore">Glencore</a>.[1]</p><p>The firm is owned by <a href="/entities/mohamed-bin-zayed-al-nahyan">Mohammed bin Zayed</a>, described in Badlands commentary as a close ally of Saudi Crown Prince Mohammed bin Salman.[1] Its acquisition of Mopani — a Zambian copper operation whose board once included former Glencore executive <a href="/entities/telis-mistakidis">Telis Mistakidis</a> — is presented in that coverage as part of a broader realignment of African mining assets away from figures such as Israeli billionaire <a href="/entities/dan-gertler">Dan Gertler</a> and the Glencore executives associated with the Congo corruption cases.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Kamala Takes the Cheese as Things Get Weird Out East&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-441" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-441</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-resources-holding.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalResourcesHolding = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalResourcesHolding as default
};
