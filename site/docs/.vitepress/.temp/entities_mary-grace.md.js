import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mary Grace","description":"","frontmatter":{"title":"Mary Grace","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","commentator","host"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mary-grace.md","filePath":"entities/mary-grace.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mary-grace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mary-grace" tabindex="-1">Mary Grace <a class="header-anchor" href="#mary-grace" aria-label="Permalink to &quot;Mary Grace&quot;">​</a></h1><p>Mary Grace is a host in the <a href="/entities/badlands-media">Badlands Media</a> collective.[1]</p><h2 id="badlands-media-role" tabindex="-1">Badlands Media role <a class="header-anchor" href="#badlands-media-role" aria-label="Permalink to &quot;Badlands Media role&quot;">​</a></h2><p>She co-hosts <a href="/entities/conspiracy-of-truth">Conspiracy of Truth</a> with <a href="/entities/praying-medic">Praying Medic</a>, airing Thursdays at 5pm ET, one of the new shows announced in the network&#39;s January 16–22, 2023 schedule.[1] The program discusses news, current events, and spiritual growth through the lens of faith and freedom.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mary-grace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maryGrace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maryGrace as default
};
