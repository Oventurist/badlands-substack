import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Business Insider","description":"","frontmatter":{"title":"Business Insider","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","digital-media","layoffs"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/business-insider.md","filePath":"entities/business-insider.md","lastUpdated":null}');
const _sfc_main = { name: "entities/business-insider.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="business-insider" tabindex="-1">Business Insider <a class="header-anchor" href="#business-insider" aria-label="Permalink to &quot;Business Insider&quot;">​</a></h1><p>Business Insider is an American digital business and technology news outlet.</p><h2 id="_2024-layoffs" tabindex="-1">2024 layoffs <a class="header-anchor" href="#_2024-layoffs" aria-label="Permalink to &quot;2024 layoffs&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> cites <em>Variety</em>&#39;s January 2024 report on layoffs at Business Insider, listing the outlet alongside the <a href="/entities/los-angeles-times">Los Angeles Times</a>, <a href="/entities/time-magazine">Time Magazine</a>, <a href="/entities/nbc-news">NBC News</a>, <a href="/entities/sports-illustrated">Sports Illustrated</a> and <a href="/entities/national-geographic">National Geographic</a> as evidence of an industry-wide contraction. In the Badlands reading, the vulnerability of a digital-native, venture-backed outlet such as Business Insider illustrates that the crisis of <a href="/concepts/mainstream-media">centralized media</a> is structural rather than a matter of print versus digital distribution.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/business-insider.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const businessInsider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  businessInsider as default
};
