import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lionsgate","description":"","frontmatter":{"title":"Lionsgate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hollywood","studio","covid-19","mask-mandates"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lionsgate.md","filePath":"entities/lionsgate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lionsgate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lionsgate" tabindex="-1">Lionsgate <a class="header-anchor" href="#lionsgate" aria-label="Permalink to &quot;Lionsgate&quot;">​</a></h1><p>Lionsgate is a Hollywood film and television studio.[1]</p><p>In August 2023 Lionsgate announced and then rescinded a renewed COVID-19 mask mandate for its offices after public pushback, one of two high-profile reversals reported alongside the healthcare system <a href="/entities/kaiser-permanente">Kaiser Permanente</a>&#39;s revision of its own masking policy in Santa Rosa, California.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cited both reversals as evidence that &quot;peaceful noncompliance&quot; and vocal opposition were effective against renewed pandemic restrictions, arguing that every attempt to reimpose emergency measures should be treated as &quot;a game of whack-a-mole.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lionsgate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lionsgate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lionsgate as default
};
