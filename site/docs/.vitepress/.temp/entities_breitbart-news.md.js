import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Breitbart News","description":"","frontmatter":{"title":"Breitbart News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-media","congress"],"sources":["raw/badlands-news-brief-12a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/breitbart-news.md","filePath":"entities/breitbart-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/breitbart-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="breitbart-news" tabindex="-1">Breitbart News <a class="header-anchor" href="#breitbart-news" aria-label="Permalink to &quot;Breitbart News&quot;">​</a></h1><p>Breitbart News is an American conservative news outlet.[1]</p><h2 id="coverage-of-ukraine-aid-fight" tabindex="-1">Coverage of Ukraine aid fight <a class="header-anchor" href="#coverage-of-ukraine-aid-fight" aria-label="Permalink to &quot;Coverage of Ukraine aid fight&quot;">​</a></h2><p>In February 2023 Breitbart published an exclusive interview with Rep. <a href="/entities/ralph-norman">Ralph Norman</a> (R-SC), in which the congressman said Speaker <a href="/entities/kevin-mccarthy">Kevin McCarthy</a> had set the &quot;gears in place&quot; for conservatives on the House Rules Committee to strip Ukraine aid from must-pass spending bills.[1] The interview was carried out as House conservatives railed against the inclusion of Ukraine aid in vehicles such as the $1.7 trillion omnibus spending bill and stop-gap continuing resolutions, and was summarized in the Badlands News Brief of February 22, 2023.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Dueling Presidents, Establishment Secrets &amp; Info Wars&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-12a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-12a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/breitbart-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const breitbartNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  breitbartNews as default
};
