import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Family (documentary)","description":"","frontmatter":{"title":"The Family (documentary)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["media","religion","politics","documentary","deep-state"],"sources":["raw/badlands-news-brief-023.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/the-family.md","filePath":"concepts/the-family.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/the-family.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-family" tabindex="-1">The Family <a class="header-anchor" href="#the-family" aria-label="Permalink to &quot;The Family&quot;">​</a></h1><p>The Family is a 2019 Netflix documentary series which, according to <a href="/entities/justin-deschamps">Justin Deschamps</a> writing in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, exposes the existence of a neoconservative Christian movement that has been active within American politics at the highest levels for over 80 years.[1]</p><p>Deschamps cites the series while advancing his own view — formed, he says, from studying occult groups and the dark ideological outlook of the so-called <a href="/concepts/cabal">Cabal</a> — that a faction of crypto-Sabbateans or Frankists was embedded within the United States over 200 years ago and has become increasingly active since the end of the Second World War.[1] The reference appears within his broader historical argument connecting <a href="/concepts/neoplatonism">Neoplatonism</a>, <a href="/concepts/sabbateanism">Sabbateanism</a>, <a href="/entities/jacob-frank">Jacob Frank</a> and modern <a href="/concepts/zionism">Zionism</a> to the politics of the <a href="/concepts/october-7-attacks">October 7 attacks</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Chaos in the Middle East Overshadows That at Home&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-023" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-023</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/the-family.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theFamily = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theFamily as default
};
