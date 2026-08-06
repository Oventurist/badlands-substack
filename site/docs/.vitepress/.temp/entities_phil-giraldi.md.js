import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Phil Giraldi","description":"","frontmatter":{"title":"Phil Giraldi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cia","intelligence","middle-east","commentary"],"sources":["raw/badlands-news-brief-2ad.md"],"confidence":"low"},"headers":[],"relativePath":"entities/phil-giraldi.md","filePath":"entities/phil-giraldi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/phil-giraldi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="phil-giraldi" tabindex="-1">Phil Giraldi <a class="header-anchor" href="#phil-giraldi" aria-label="Permalink to &quot;Phil Giraldi&quot;">​</a></h1><p>Phil Giraldi is a former CIA and U.S. Army intelligence officer who appears frequently as a commentator on Middle East affairs.[1]</p><p>In September 2024, Giraldi spoke with Judge Andrew Napolitano and postulated that the previous week&#39;s pager attack against <a href="/entities/hezbollah">Hezbollah</a> had potentially been intended to occur at the onset of an Israeli ground invasion of southern <a href="/entities/lebanon">Lebanon</a>, but that concern Hezbollah had become wise to the scheme led the <a href="/entities/israel-defense-forces">IDF</a> to detonate the devices before the invasion was ready.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: New Gotham City, Iranian Mysteries &amp; Wars Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/phil-giraldi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philGiraldi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philGiraldi as default
};
