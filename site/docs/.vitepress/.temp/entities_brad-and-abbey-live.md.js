import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brad & Abbey LIVE","description":"","frontmatter":{"title":"Brad & Abbey LIVE","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brad-and-abbey-live.md","filePath":"entities/brad-and-abbey-live.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brad-and-abbey-live.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brad-abbey-live" tabindex="-1">Brad &amp; Abbey LIVE <a class="header-anchor" href="#brad-abbey-live" aria-label="Permalink to &quot;Brad &amp; Abbey LIVE&quot;">​</a></h1><p>Brad &amp; Abbey LIVE is a <a href="/entities/badlands-media">Badlands Media</a> program airing Tuesdays at 7:30pm ET in the January 2023 schedule.[1]</p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;Format&quot;">​</a></h2><p>Hosted by Brad and Abbey, the show is promoted as an honest look at the world combined with humor and original content the network says viewers will not find elsewhere.[1] It occupies the Tuesday prime-time slot ahead of <a href="/entities/badlands-story-hour">Badlands Story Hour</a> and <a href="/entities/eye-of-the-storm">Eye of the Storm</a>.[1]</p><h2 id="distribution" tabindex="-1">Distribution <a class="header-anchor" href="#distribution" aria-label="Permalink to &quot;Distribution&quot;">​</a></h2><p>Live streams and replays are available on the main Badlands Media <a href="/entities/rumble">Rumble</a> channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brad-and-abbey-live.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bradAndAbbeyLive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bradAndAbbeyLive as default
};
