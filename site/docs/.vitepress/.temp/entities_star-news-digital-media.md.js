import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Star News Digital Media","description":"","frontmatter":{"title":"Star News Digital Media","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","conservative-media","arizona"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/star-news-digital-media.md","filePath":"entities/star-news-digital-media.md","lastUpdated":null}');
const _sfc_main = { name: "entities/star-news-digital-media.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="star-news-digital-media" tabindex="-1">Star News Digital Media <a class="header-anchor" href="#star-news-digital-media" aria-label="Permalink to &quot;Star News Digital Media&quot;">​</a></h1><p>Star News Digital Media is a conservative digital news company operating a group of state-level outlets, among them <em>The Arizona Sun Times</em>. Its CEO and Editor-in-Chief is <a href="/entities/michael-patrick-leahy">Michael Patrick Leahy</a>.[1]</p><p>The organization figures in <a href="/entities/badlands-media">Badlands Media</a>&#39;s coverage of the <a href="/concepts/2022-arizona-general-election">2022 Arizona general election</a> litigation through Leahy&#39;s December 2022 <em>War Room</em> appearance, in which he summarized <a href="/entities/kari-lake">Kari Lake</a>&#39;s 70-page election contest and commented on the judge assigned to the case in <a href="/entities/maricopa-county-superior-court">Maricopa County Superior Court</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/star-news-digital-media.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const starNewsDigitalMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  starNewsDigitalMedia as default
};
