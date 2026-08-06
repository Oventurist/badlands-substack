import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Éric Zemmour","description":"","frontmatter":{"title":"Éric Zemmour","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","hard-right","media","european-parliament"],"sources":["raw/badlands-news-brief-365.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eric-zemmour.md","filePath":"entities/eric-zemmour.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eric-zemmour.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eric-zemmour" tabindex="-1">Éric Zemmour <a class="header-anchor" href="#eric-zemmour" aria-label="Permalink to &quot;Éric Zemmour&quot;">​</a></h1><p>Éric Zemmour is a French writer, broadcaster and politician who founded and leads the hard-right party <a href="/entities/reconquete">Reconquête</a>.[1] A former presidential candidate, he built his political identity on immigration and national-identity themes that overlap substantially with those of the larger <a href="/entities/national-rally">National Rally</a>.[1]</p><h2 id="_2024-european-parliament-elections" tabindex="-1">2024 European Parliament elections <a class="header-anchor" href="#_2024-european-parliament-elections" aria-label="Permalink to &quot;2024 European Parliament elections&quot;">​</a></h2><p>For the June 2024 European Parliament contest Zemmour&#39;s party fielded <a href="/entities/marion-marechal">Marion Maréchal</a> as its lead candidate.[1] Ipsos polling published in March 2024 showed Reconquête attracting just 3 percent of French voters aged 18 to 24, down from 8 percent three months earlier, while <a href="/entities/jordan-bardella">Jordan Bardella</a>&#39;s National Rally rose to 31 percent in the same group.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: &#39;You Are Watching a Movie&#39; Intensifies ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-365" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-365</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eric-zemmour.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ericZemmour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ericZemmour as default
};
