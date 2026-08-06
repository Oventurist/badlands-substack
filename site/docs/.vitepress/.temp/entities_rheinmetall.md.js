import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rheinmetall","description":"","frontmatter":{"title":"Rheinmetall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["defense-industry","germany","rearmament","armored-vehicles"],"sources":["raw/badlands-news-brief-523.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rheinmetall.md","filePath":"entities/rheinmetall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rheinmetall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rheinmetall" tabindex="-1">Rheinmetall <a class="header-anchor" href="#rheinmetall" aria-label="Permalink to &quot;Rheinmetall&quot;">​</a></h1><p>Rheinmetall is a German defense manufacturer whose subsidiary Rheinmetall Landsysteme GmbH produces the Fuchs armored transporter.[1]</p><h2 id="_2024-german-rearmament-orders" tabindex="-1">2024 German rearmament orders <a class="header-anchor" href="#_2024-german-rearmament-orders" aria-label="Permalink to &quot;2024 German rearmament orders&quot;">​</a></h2><p>In April 2024, <a href="/entities/germany">Germany</a>&#39;s ruling coalition prepared to press ahead within the quarter with a sweeping overhaul of the nation&#39;s armed forces, placing orders worth as much as €7 billion ($7.6 billion) for two navy frigates and hundreds of armored transport vehicles.[1] Of that total, as much as €4 billion was to be firmed up for as many as 900 Fuchs armored transporters manufactured by Rheinmetall Landsysteme, with deliveries starting in 2025.[1]</p><p>The remaining roughly €3 billion covered an option for two additional F126 frigates, raising the class total to six.[1] The main contractor for the frigate project is a unit of Damen Schelde Naval Shipbuilding BV of the Netherlands, partnered with Thales SA of France and Germany&#39;s Blohm+Voss.[1] Spokespeople for the defense ministry in Berlin did not immediately respond to a request for comment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Russia Makes a Move, Garland Threatens &amp; Zelenskyy Stalls&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-523" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-523</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rheinmetall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rheinmetall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rheinmetall as default
};
