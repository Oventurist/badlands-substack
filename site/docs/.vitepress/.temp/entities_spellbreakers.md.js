import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Spellbreakers","description":"","frontmatter":{"title":"Spellbreakers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show"],"sources":["raw/badlands-media-show-schedule-78b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/spellbreakers.md","filePath":"entities/spellbreakers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/spellbreakers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spellbreakers" tabindex="-1">Spellbreakers <a class="header-anchor" href="#spellbreakers" aria-label="Permalink to &quot;Spellbreakers&quot;">​</a></h1><p>Spellbreakers is a <a href="/entities/badlands-media">Badlands Media</a> program airing Wednesdays at 7:30pm ET as of January 2023, hosted by <a href="/entities/patrick-gunnels">Patrick Gunnels</a> and <a href="/entities/matt-trump">Matt Trump</a>.[1] Its stated purpose is to expose what the hosts call flimflam and pseudoscience across the media and academia.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-78b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-78b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/spellbreakers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spellbreakers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spellbreakers as default
};
