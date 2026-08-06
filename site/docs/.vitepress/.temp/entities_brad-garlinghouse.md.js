import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brad Garlinghouse","description":"","frontmatter":{"title":"Brad Garlinghouse","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["crypto","executives","regulation"],"sources":["raw/badlands-news-brief-7a5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brad-garlinghouse.md","filePath":"entities/brad-garlinghouse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brad-garlinghouse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brad-garlinghouse" tabindex="-1">Brad Garlinghouse <a class="header-anchor" href="#brad-garlinghouse" aria-label="Permalink to &quot;Brad Garlinghouse&quot;">​</a></h1><p><strong>Brad Garlinghouse</strong> is the chief executive officer of <a href="/entities/ripple">Ripple</a>, a cryptocurrency and payments company.[1]</p><h2 id="position-on-regulation" tabindex="-1">Position on regulation <a class="header-anchor" href="#position-on-regulation" aria-label="Permalink to &quot;Position on regulation&quot;">​</a></h2><p>Appearing on <a href="/entities/60-minutes">60 Minutes</a> in December 2024, Garlinghouse rejected the common framing of the digital asset industry as seeking freedom from oversight, saying: &quot;We haven&#39;t been asking to be deregulated. We&#39;ve been asking to be regulated.&quot;[1] Badlands carried the quotation as a bonus item in its news brief for that weekend.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Damascus Has Fallen ... Cui Bono?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brad-garlinghouse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bradGarlinghouse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bradGarlinghouse as default
};
