import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charles de Gaulle","description":"","frontmatter":{"title":"Charles de Gaulle","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","cold-war","nuclear","assassination-attempts"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/charles-de-gaulle.md","filePath":"entities/charles-de-gaulle.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charles-de-gaulle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charles-de-gaulle" tabindex="-1">Charles de Gaulle <a class="header-anchor" href="#charles-de-gaulle" aria-label="Permalink to &quot;Charles de Gaulle&quot;">​</a></h1><p><strong>Charles de Gaulle</strong> was the French president who, according to commentary published in the Badlands News Brief, discovered in 1958 the illegal partnership under which France assisted <a href="/entities/israel">Israel</a> in developing the <a href="/entities/negev-nuclear-research-center">Negev Nuclear Research Center</a>, and sought to stop it.[1]</p><p>As discussed by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> and Matt Ehret on the Badlands program <a href="/concepts/breaking-history">Breaking History</a>, de Gaulle is particularly famous for evading more than 30 assassination attempts on his life, most of them during the 1960s and most allegedly carried out by the <a href="/entities/cia">CIA</a> and the <a href="/entities/mossad">Mossad</a>.[1] His effort to halt the Franco-Israeli nuclear collaboration is presented as a parallel to President <a href="/entities/john-f-kennedy">John F. Kennedy</a>&#39;s 1963 attempt to force transparency on <a href="/entities/david-ben-gurion">David Ben-Gurion</a> regarding Israel&#39;s nuclear ambitions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charles-de-gaulle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlesDeGaulle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlesDeGaulle as default
};
