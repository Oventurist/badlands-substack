import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Patel Patriot","description":"","frontmatter":{"title":"Patel Patriot","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","host","rumble"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"entities/patel-patriot.md","filePath":"entities/patel-patriot.md","lastUpdated":null}');
const _sfc_main = { name: "entities/patel-patriot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Patel Patriot is the host of the Rumble channel on which all <a href="/entities/badlands-media">badlands-media</a> shows air live.[1] The network&#39;s live broadcasts are streamed on Patel Patriot&#39;s Live Channel (rumble.com/c/PatelPatriot), while replays are hosted separately on the Badlands Media Library Channel (rumble.com/c/BadlandsMedia).[1] Patel Patriot is thus the live-distribution anchor for the entire Badlands Media show slate.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/patel-patriot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const patelPatriot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  patelPatriot as default
};
