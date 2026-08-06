import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrea Mitchell","description":"","frontmatter":{"title":"Andrea Mitchell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","msnbc","journalism"],"sources":["raw/badlands-news-brief-7db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andrea-mitchell.md","filePath":"entities/andrea-mitchell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrea-mitchell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrea-mitchell" tabindex="-1">Andrea Mitchell <a class="header-anchor" href="#andrea-mitchell" aria-label="Permalink to &quot;Andrea Mitchell&quot;">​</a></h1><p>Andrea Mitchell is an American broadcast journalist and anchor at <a href="/entities/msnbc">MSNBC</a>.[1]</p><h2 id="march-2024-state-of-the-union-preview" tabindex="-1">March 2024 State of the Union preview <a class="header-anchor" href="#march-2024-state-of-the-union-preview" aria-label="Permalink to &quot;March 2024 State of the Union preview&quot;">​</a></h2><p>Previewing <a href="/entities/joe-biden">Joe Biden</a>&#39;s State of the Union address on March 7, 2024, Mitchell hosted presidential historian <a href="/entities/michael-beschloss">Michael Beschloss</a> and asked him to &quot;take a big picture, zoom out for us on what&#39;s at stake for [Biden] tonight,&quot; noting his comparison to <a href="/entities/franklin-d-roosevelt">FDR</a>&#39;s 1941 Four Freedoms speech: &quot;obviously war time, a bigger challenge, but let&#39;s, you know, talk about the challenges tonight.&quot;[1] Beschloss responded by declaring that the United States &quot;could be a dictatorship next year&quot; if <a href="/entities/donald-trump">Donald Trump</a> were elected.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cited the exchange as evidence of escalating media hysteria and projection ahead of the November election.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Nuland Neutered, Biden Blasted and Trump Triumphant&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrea-mitchell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andreaMitchell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andreaMitchell as default
};
