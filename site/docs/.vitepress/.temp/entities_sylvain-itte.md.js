import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sylvain Itte","description":"","frontmatter":{"title":"Sylvain Itte","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","niger","diplomacy","ambassador","coup"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sylvain-itte.md","filePath":"entities/sylvain-itte.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sylvain-itte.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sylvain-itte" tabindex="-1">Sylvain Itte <a class="header-anchor" href="#sylvain-itte" aria-label="Permalink to &quot;Sylvain Itte&quot;">​</a></h1><p>Sylvain Itte was France&#39;s ambassador to <a href="/entities/niger">Niger</a> during the 2023 crisis that followed the military coup against President <a href="/entities/mohamed-bazoum">Mohamed Bazoum</a>.[1]</p><p>In a letter delivered in late August 2023, the Nigerien Foreign Ministry gave Itte 48 hours to leave the country, accusing him of ignoring an invitation to meet with the ministry and citing &quot;actions of the French government contrary to the interests of Niger.&quot;[1] French President <a href="/entities/emmanuel-macron">Emmanuel Macron</a> announced that the ambassador would stay at his post despite the junta&#39;s demand, praising &quot;the commitment of our diplomats, of our ambassador on the ground who is remaining despite pressure.&quot;[1] Because <a href="/entities/france">France</a> recognized only Bazoum&#39;s government, it did not treat the junta&#39;s expulsion order as valid.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sylvain-itte.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sylvainItte = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sylvainItte as default
};
