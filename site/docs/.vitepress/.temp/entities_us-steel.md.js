import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Steel","description":"","frontmatter":{"title":"US Steel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["steel","industry","us-japan-relations","industrial-policy"],"sources":["raw/badlands-news-brief-545.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-steel.md","filePath":"entities/us-steel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-steel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-steel" tabindex="-1">US Steel <a class="header-anchor" href="#us-steel" aria-label="Permalink to &quot;US Steel&quot;">​</a></h1><p>US Steel is the historic American steel producer at the center of a contested acquisition attempt by Japan&#39;s <a href="/entities/nippon-steel">Nippon Steel</a>.[1]</p><h2 id="blocked-and-restructured-acquisition" tabindex="-1">Blocked and restructured acquisition <a class="header-anchor" href="#blocked-and-restructured-acquisition" aria-label="Permalink to &quot;Blocked and restructured acquisition&quot;">​</a></h2><p>The Nippon Steel bid for US Steel was blocked in January by President Joe Biden. <a href="/entities/donald-trump">Donald Trump</a> subsequently inverted the outcome through renegotiation; Badlands commentary characterizes the final structure as one in which Nippon Steel effectively answers to US Steel and the United States government, rather than US Steel passing into foreign ownership.[1]</p><p>The episode is treated in Badlands commentary as part of a broader realignment of the US–Japan economic relationship, alongside the critical minerals agreement signed during Trump&#39;s Tokyo visit and the arrival of Prime Minister <a href="/entities/sanae-takaichi">Sanae Takaichi</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdown Consequences, Canadian Propaganda, &amp; Console War Conclusions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-545" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-545</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-steel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usSteel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usSteel as default
};
