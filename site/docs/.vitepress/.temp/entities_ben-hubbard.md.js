import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Hubbard","description":"","frontmatter":{"title":"Ben Hubbard","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","new-york-times","mbs","biography"],"sources":["raw/arabian-nights.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ben-hubbard.md","filePath":"entities/ben-hubbard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-hubbard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-hubbard" tabindex="-1">Ben Hubbard <a class="header-anchor" href="#ben-hubbard" aria-label="Permalink to &quot;Ben Hubbard&quot;">​</a></h1><p>Ben Hubbard is a New York Times journalist and biographer of <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a>, cited repeatedly in the article as a source of factual material about the Crown Prince.[1]</p><p>The author draws on Hubbard&#39;s March 2020 NYT article and states that he has read his book, crediting him with doing &quot;a fine job of gathering data&quot; while dismissing his overall analysis of MBS as a malevolent figure as &quot;hot garbage.&quot;[1] Hubbard&#39;s reporting supplies the details the article relies on: the deaths of two of MBS&#39;s half-brothers almost exactly a year apart between 2001 and 2002, MBS&#39;s rejection of the globetrotting lifestyle of his young relatives in favor of shadowing his father, his consumption of 1980s and 1990s American culture, and his reaction to the September 11 attacks.[1]</p><p>The author attributes hostile framing of MBS to the perspective of mainstream media outlets he characterizes as working for the <a href="/entities/cia">Clowns In America</a>, to whom MBS would appear as a real and existential threat.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-hubbard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benHubbard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benHubbard as default
};
