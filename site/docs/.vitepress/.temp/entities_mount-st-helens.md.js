import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mount St. Helens","description":"","frontmatter":{"title":"Mount St. Helens","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["volcano","washington","usgs","natural-disaster"],"sources":["raw/badlands-news-brief-732.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mount-st-helens.md","filePath":"entities/mount-st-helens.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mount-st-helens.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mount-st-helens" tabindex="-1">Mount St. Helens <a class="header-anchor" href="#mount-st-helens" aria-label="Permalink to &quot;Mount St. Helens&quot;">​</a></h1><p>Mount St. Helens is an active volcano in the southern Washington Cascades, best known for its historic 1980 eruption.[1]</p><h2 id="september-2025-ash-scare" tabindex="-1">September 2025 ash scare <a class="header-anchor" href="#september-2025-ash-scare" aria-label="Permalink to &quot;September 2025 ash scare&quot;">​</a></h2><p>On Tuesday, September 16, 2025, strong winds stirred up leftover ash from the 1980 blast, producing plumes that to many observers in Washington and northern Oregon appeared to signal that the volcano had suddenly reawakened.[1] Images from web cameras monitoring the volcano showed ash drifting around the crater and surrounding area.[1]</p><p>The <a href="/entities/united-states-geological-survey">U.S. Geological Survey</a> reassured nearby residents that the volcano was not erupting, stating there was &quot;no change in Volcano Alert Level or Aviation Color Code at this time&quot; and that &quot;Mount St. Helens remains at normal, background levels of activity.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Terror Designation &amp; A Breath of Fresh Air&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-732" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-732</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mount-st-helens.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mountStHelens = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mountStHelens as default
};
