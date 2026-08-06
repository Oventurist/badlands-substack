import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WeAreRise","description":"","frontmatter":{"title":"WeAreRise","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","commentator","host"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/wearerise.md","filePath":"entities/wearerise.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wearerise.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wearerise" tabindex="-1">WeAreRise <a class="header-anchor" href="#wearerise" aria-label="Permalink to &quot;WeAreRise&quot;">​</a></h1><p>WeAreRise is a host in the <a href="/entities/badlands-media">Badlands Media</a> collective.[1]</p><h2 id="badlands-media-role" tabindex="-1">Badlands Media role <a class="header-anchor" href="#badlands-media-role" aria-label="Permalink to &quot;Badlands Media role&quot;">​</a></h2><p>WeAreRise co-hosts <a href="/entities/the-bunker">The Bunker</a> with <a href="/entities/trureporting">TruReporting</a>, a Saturday 7:30pm ET program added to the Badlands lineup in the January 16–22, 2023 schedule.[1] The show focuses on the geopolitical issues of the day.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wearerise.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wearerise = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wearerise as default
};
