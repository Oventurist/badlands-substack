import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Matthew Murray","description":"","frontmatter":{"title":"Matthew Murray","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington-post","journalism"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/matthew-murray.md","filePath":"entities/matthew-murray.md","lastUpdated":null}');
const _sfc_main = { name: "entities/matthew-murray.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="matthew-murray" tabindex="-1">Matthew Murray <a class="header-anchor" href="#matthew-murray" aria-label="Permalink to &quot;Matthew Murray&quot;">​</a></h1><p>Matthew Murray, also referred to as Matt Murray, is an American editor and the former editor-in-chief of <a href="/entities/wall-street-journal">The Wall Street Journal</a>.[1]</p><p>In the leadership announcement made by <a href="/entities/washington-post">The Washington Post</a> on June 2, 2024, Murray was named interim successor to departing executive editor <a href="/entities/sally-buzbee">Sally Buzbee</a>.[1] He was to serve as executive editor until after the 2024 presidential election, at which point <a href="/entities/robert-winnett">Robert Winnett</a> would replace him.[1] The appointment accompanied a restructuring of the <a href="/entities/jeff-bezos">Bezos</a>-owned paper&#39;s newsroom into three parts: the main newsroom, the editorial page, and a separate &quot;third newsroom&quot; for service and social media journalism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/matthew-murray.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const matthewMurray = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  matthewMurray as default
};
