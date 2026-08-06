import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ryan Matta","description":"","frontmatter":{"title":"Ryan Matta","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","podcast","social-media"],"sources":["raw/badlands-news-brief-6e5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ryan-matta.md","filePath":"entities/ryan-matta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ryan-matta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ryan-matta" tabindex="-1">Ryan Matta <a class="header-anchor" href="#ryan-matta" aria-label="Permalink to &quot;Ryan Matta&quot;">​</a></h1><p>Ryan Matta is a podcast host with more than 200,000 followers on X.[1]</p><h2 id="commentary-on-the-kirk-assassination" tabindex="-1">Commentary on the Kirk assassination <a class="header-anchor" href="#commentary-on-the-kirk-assassination" aria-label="Permalink to &quot;Commentary on the Kirk assassination&quot;">​</a></h2><p>In the hours after the <a href="/concepts/assassination-of-charlie-kirk">assassination of Charlie Kirk</a> at <a href="/entities/utah-valley-university">Utah Valley University</a> in September 2025, Matta posted: &quot;At this point does anyone not thi[nk] Charlie Kirk was assassinated by Mossad?&quot;, a reference to the Israeli spy agency <a href="/entities/mossad">Mossad</a>.[1] The Times of Israel cited his post as an example of allegations spreading online that Jews or Israel were responsible for the killing, a dynamic the outlet said recurs frequently after major news events.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manhunts, Mental Health, &amp; the Mother of a Monster&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ryan-matta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ryanMatta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ryanMatta as default
};
