import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Maria Cantwell","description":"","frontmatter":{"title":"Maria Cantwell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","democrats","tiktok","technology-policy"],"sources":["raw/badlands-news-brief-08a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maria-cantwell.md","filePath":"entities/maria-cantwell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maria-cantwell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maria-cantwell" tabindex="-1">Maria Cantwell <a class="header-anchor" href="#maria-cantwell" aria-label="Permalink to &quot;Maria Cantwell&quot;">​</a></h1><p>Maria Cantwell is a Democratic United States Senator from Washington who chairs the Senate panel with jurisdiction over <a href="/entities/tiktok">TikTok</a>.[1]</p><p>Cantwell&#39;s support proved decisive in advancing the April 2024 legislation forcing the sale of TikTok. The House had updated the bill to extend the divestment window from six to nine months, with the president authorized to extend that runway another 90 days — creating in effect a one-year grace period — a tweak credited with winning her backing.[1] The measure passed the <a href="/entities/united-states-senate">Senate</a> 79–18 as part of a $95 billion foreign aid package.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Communist Ouroboros Accelerates&quot;, raw/badlands-news-brief-08a.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maria-cantwell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mariaCantwell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mariaCantwell as default
};
