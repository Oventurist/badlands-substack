import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Modernity News","description":"","frontmatter":{"title":"Modernity News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","alternative-media","covid"],"sources":["raw/badlands-news-brief-109.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/modernity-news.md","filePath":"entities/modernity-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/modernity-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modernity-news" tabindex="-1">Modernity News <a class="header-anchor" href="#modernity-news" aria-label="Permalink to &quot;Modernity News&quot;">​</a></h1><p><strong>Modernity News</strong> is an alternative online news outlet cited by <a href="/entities/badlands-media">Badlands Media</a> in its news briefs as a source on establishment narratives and COVID-19 coverage.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In August 2024, Modernity News reported that Dr. <a href="/entities/anthony-fauci">Anthony Fauci</a> had revealed he was infected with COVID-19 for a third time despite having been &quot;vaccinated and boosted a total of six times.&quot;[1] The outlet contrasted that admission with Fauci&#39;s 2021 statements that &quot;if you get vaccinated, you are protected&quot; and that vaccinated people &quot;can feel safe that they are not gonna get infected.&quot;[1] Badlands republished the item as evidence that the official COVID-19 narrative was collapsing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump and Elon Break the Internet&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-109" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-109</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/modernity-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const modernityNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  modernityNews as default
};
