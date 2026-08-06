import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ripple","description":"","frontmatter":{"title":"Ripple","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["crypto","regulation","fintech"],"sources":["raw/badlands-news-brief-7a5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ripple.md","filePath":"entities/ripple.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ripple.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ripple" tabindex="-1">Ripple <a class="header-anchor" href="#ripple" aria-label="Permalink to &quot;Ripple&quot;">​</a></h1><p><strong>Ripple</strong> is a cryptocurrency and payments company whose chief executive, <a href="/entities/brad-garlinghouse">Brad Garlinghouse</a>, has publicly pressed for regulatory clarity in the United States rather than deregulation.[1]</p><h2 id="regulatory-posture" tabindex="-1">Regulatory posture <a class="header-anchor" href="#regulatory-posture" aria-label="Permalink to &quot;Regulatory posture&quot;">​</a></h2><p>In a December 2024 segment on <a href="/entities/60-minutes">60 Minutes</a>, Garlinghouse said of the company&#39;s stance toward American authorities: &quot;We haven&#39;t been asking to be deregulated. We&#39;ve been asking to be regulated.&quot;[1] The remark was circulated by Badlands as a bonus item in its news brief, reflecting continuing attention within the alternative-media ecosystem to the relationship between the digital asset industry and US regulators.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Damascus Has Fallen ... Cui Bono?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ripple.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ripple = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ripple as default
};
