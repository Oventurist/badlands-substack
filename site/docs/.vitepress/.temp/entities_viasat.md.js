import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Viasat","description":"","frontmatter":{"title":"Viasat","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["satellite","communications","aviation-internet","space"],"sources":["raw/badlands-news-brief-8a4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/viasat.md","filePath":"entities/viasat.md","lastUpdated":null}');
const _sfc_main = { name: "entities/viasat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="viasat" tabindex="-1">Viasat <a class="header-anchor" href="#viasat" aria-label="Permalink to &quot;Viasat&quot;">​</a></h1><p>Viasat is a California-based communications company that operates satellite broadband services, including in-flight connectivity for commercial aviation.[1]</p><h2 id="viasat-3-f2" tabindex="-1">ViaSat-3 F2 <a class="header-anchor" href="#viasat-3-f2" aria-label="Permalink to &quot;ViaSat-3 F2&quot;">​</a></h2><p>The ViaSat-3 F2 satellite was scheduled to launch aboard an Atlas 5 rocket operated by <a href="/entities/united-launch-alliance">United Launch Alliance</a> from Space Launch Complex 41 at Cape Canaveral in November 2025.[1] The initial attempt on the night of Wednesday, November 5, 2025 was scrubbed after an issue arose while cycling the booster liquid oxygen tank valve during final checkouts, and the launch was retargeted for 10:16 p.m. EST on November 6.[1]</p><p>According to individuals who identified themselves as Viasat employees and spoke with Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> on the beach at Cocoa Beach, the satellite is intended to deliver high-speed internet for U.S. domestic flights at speeds well beyond current service levels.[1] The same sources said Viasat satellites already provide this service to the Delta fleet.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Embrace Disruption, Point Fingers, &amp; Explore Any and All Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8a4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8a4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/viasat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const viasat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  viasat as default
};
