import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Frank Luntz","description":"","frontmatter":{"title":"Frank Luntz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["polling","republican-party","messaging","wharton"],"sources":["raw/badlands-news-brief-4c5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/frank-luntz.md","filePath":"entities/frank-luntz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/frank-luntz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frank-luntz" tabindex="-1">Frank Luntz <a class="header-anchor" href="#frank-luntz" aria-label="Permalink to &quot;Frank Luntz&quot;">​</a></h1><p>Frank Luntz is an American pollster and political consultant best known for his work on Republican message testing and for teaching political communication at the university level.[1]</p><h2 id="connection-to-ron-dermer" tabindex="-1">Connection to Ron Dermer <a class="header-anchor" href="#connection-to-ron-dermer" aria-label="Permalink to &quot;Connection to Ron Dermer&quot;">​</a></h2><p>A July 2024 Badlands News Brief profile of Israeli strategic affairs minister <a href="/entities/ron-dermer">Ron Dermer</a> noted that Dermer studied under Luntz at the Wharton School of Business at the University of Pennsylvania, and that Luntz described Dermer as &quot;the most talented student I&#39;ve ever had.&quot;[1] The Badlands commentary used the Luntz connection as one of several data points establishing Dermer&#39;s deep integration into American Republican political circles — alongside the claim, sourced to Politico, that had Dermer remained in the United States he might plausibly have risen to chair the Republican National Committee or to manage presidential campaigns.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Poles, HomOlympics &amp; Deal-Making&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/frank-luntz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const frankLuntz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  frankLuntz as default
};
