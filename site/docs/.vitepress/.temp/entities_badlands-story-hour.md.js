import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Badlands Story Hour","description":"","frontmatter":{"title":"Badlands Story Hour","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/badlands-story-hour.md","filePath":"entities/badlands-story-hour.md","lastUpdated":null}');
const _sfc_main = { name: "entities/badlands-story-hour.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="badlands-story-hour" tabindex="-1">Badlands Story Hour <a class="header-anchor" href="#badlands-story-hour" aria-label="Permalink to &quot;Badlands Story Hour&quot;">​</a></h1><p>Badlands Story Hour is a <a href="/entities/badlands-media">Badlands Media</a> program listed among the new additions to the network&#39;s lineup in the January 16–22, 2023 schedule.[1] It airs Tuesdays at 9pm ET.[1]</p><h2 id="format-and-hosts" tabindex="-1">Format and hosts <a class="header-anchor" href="#format-and-hosts" aria-label="Permalink to &quot;Format and hosts&quot;">​</a></h2><p>The show is a discussion of entertainment, movies, and storytelling, framed through the contrasting professional backgrounds of its two hosts: <a href="/entities/chris-paul">Chris Paul</a>, who comes from Hollywood, and <a href="/entities/burning-bright">Burning Bright</a>, who comes from the publishing industry.[1] That pairing gives the program a craft-oriented perspective on narrative distinct from the network&#39;s news and geopolitics programming.[1]</p><h2 id="distribution" tabindex="-1">Distribution <a class="header-anchor" href="#distribution" aria-label="Permalink to &quot;Distribution&quot;">​</a></h2><p>Live streams and replays were carried on the main Badlands Media <a href="/entities/rumble">Rumble</a> channel following the network&#39;s January 2023 consolidation of its streaming.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/badlands-story-hour.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const badlandsStoryHour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  badlandsStoryHour as default
};
