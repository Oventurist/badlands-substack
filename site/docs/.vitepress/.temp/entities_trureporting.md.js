import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TruReporting","description":"","frontmatter":{"title":"TruReporting","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","host","commentator"],"sources":["raw/badlands-media-show-schedule-78b.md","raw/badlands-media-show-schedule-e18.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/trureporting.md","filePath":"entities/trureporting.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trureporting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trureporting" tabindex="-1">TruReporting <a class="header-anchor" href="#trureporting" aria-label="Permalink to &quot;TruReporting&quot;">​</a></h1><p>TruReporting is a <a href="/entities/badlands-media">Badlands Media</a> host who co-presented the <a href="/entities/ncswic-podcast">NCSWIC Podcast</a> with <a href="/entities/absolute-1776">Absolute 1776</a> on Sundays at 7:30pm ET as of the January 2023 schedule, taking weekly deep dives into information-war topics through the frame of <a href="/concepts/fifth-generation-warfare">fifth-generation warfare</a>.[1]</p><p>A second Badlands Media schedule post, published January 3, 2023 to open the 2023 broadcast year, carried the same listing and description, and reiterated that all network shows air live on the Patel Patriot Rumble channel with replays archived on the Badlands Media library channel.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-78b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-78b</a></li><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-e18" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-e18</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trureporting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trureporting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trureporting as default
};
