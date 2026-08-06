import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Verge","description":"","frontmatter":{"title":"The Verge","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","technology","publication"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"low"},"headers":[],"relativePath":"entities/the-verge.md","filePath":"entities/the-verge.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-verge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-verge" tabindex="-1">The Verge <a class="header-anchor" href="#the-verge" aria-label="Permalink to &quot;The Verge&quot;">​</a></h1><p>The Verge is an American technology news publication.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In April 2025 The Verge reported, citing multiple sources familiar with the matter, that <a href="/entities/openai">OpenAI</a> was working on its own X-like social network, with an internal prototype focused on ChatGPT&#39;s image generation and a social feed.[1] The outlet reported that CEO <a href="/entities/sam-altman">Sam Altman</a> had been privately soliciting feedback about the project from outsiders, and that it was unclear whether OpenAI would release the network as a separate app or integrate it into ChatGPT, which had become the most downloaded app globally the previous month.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-verge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theVerge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theVerge as default
};
