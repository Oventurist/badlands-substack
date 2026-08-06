import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CatholicVote","description":"","frontmatter":{"title":"CatholicVote","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advocacy","catholic-church","elections","conservatism"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/catholicvote.md","filePath":"entities/catholicvote.md","lastUpdated":null}');
const _sfc_main = { name: "entities/catholicvote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="catholicvote" tabindex="-1">CatholicVote <a class="header-anchor" href="#catholicvote" aria-label="Permalink to &quot;CatholicVote&quot;">​</a></h1><p>CatholicVote is a right-wing Catholic advocacy group led by <a href="/entities/brian-burch">Brian Burch</a>.[1]</p><p>The organization rallied Catholic support for <a href="/entities/donald-trump">Donald Trump</a> in the 2024 presidential election, and its leader was subsequently chosen by Trump as his nominee for ambassador to the Vatican — a pick reported as contrasting with <a href="/entities/pope-francis">Pope Francis</a>&#39;s appointment of Trump critic <a href="/entities/robert-mcelroy">Robert McElroy</a> as archbishop of Washington, D.C.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/catholicvote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const catholicvote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  catholicvote as default
};
