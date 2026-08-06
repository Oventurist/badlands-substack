import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Bunker","description":"","frontmatter":{"title":"The Bunker","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show","geopolitics"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-bunker.md","filePath":"entities/the-bunker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-bunker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-bunker" tabindex="-1">The Bunker <a class="header-anchor" href="#the-bunker" aria-label="Permalink to &quot;The Bunker&quot;">​</a></h1><p>The Bunker is a <a href="/entities/badlands-media">Badlands Media</a> program listed among the new shows added to the network&#39;s lineup in the January 16–22, 2023 schedule, airing Saturdays at 7:30pm ET.[1]</p><h2 id="format-and-hosts" tabindex="-1">Format and hosts <a class="header-anchor" href="#format-and-hosts" aria-label="Permalink to &quot;Format and hosts&quot;">​</a></h2><p>The show is hosted by <a href="/entities/trureporting">TruReporting</a> and <a href="/entities/wearerise">WeAreRise</a>, who take on the geopolitical issues of the day.[1] TruReporting also co-hosts the network&#39;s Sunday-night <a href="/entities/ncswic-podcast">NCSWIC Podcast</a>, giving him two weekend slots on the schedule.[1]</p><h2 id="distribution" tabindex="-1">Distribution <a class="header-anchor" href="#distribution" aria-label="Permalink to &quot;Distribution&quot;">​</a></h2><p>Live streams and replays are carried on the main Badlands Media <a href="/entities/rumble">Rumble</a> channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-bunker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theBunker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theBunker as default
};
