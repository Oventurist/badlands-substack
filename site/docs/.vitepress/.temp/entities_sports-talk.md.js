import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sports Talk","description":"","frontmatter":{"title":"Sports Talk","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show","sports"],"sources":["raw/badlands-media-show-schedule-e18.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sports-talk.md","filePath":"entities/sports-talk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sports-talk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sports-talk" tabindex="-1">Sports Talk <a class="header-anchor" href="#sports-talk" aria-label="Permalink to &quot;Sports Talk&quot;">​</a></h1><p>Sports Talk is a <a href="/entities/badlands-media">Badlands Media</a> program that aired Mondays and Fridays at 12pm ET under the network&#39;s January 2023 schedule, hosted by <a href="/entities/jb-white">JB White</a> and <a href="/entities/absolute-1776">Absolute 1776</a>.[1] The show was described as taking an unorthodox approach to sports coverage, cutting out politics from athletics and focusing on what the hosts called regaining America&#39;s pastime.[1]</p><p>Like the rest of the network&#39;s slate, Sports Talk aired live on the <a href="/entities/patel-patriot">Patel Patriot</a> <a href="/entities/rumble">Rumble</a> channel, with replays archived in library format on the Badlands Media channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-e18" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-e18</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sports-talk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sportsTalk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sportsTalk as default
};
