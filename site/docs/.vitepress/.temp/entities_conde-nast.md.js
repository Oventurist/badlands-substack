import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Condé Nast","description":"","frontmatter":{"title":"Condé Nast","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["publisher","magazines","labor-strike","layoffs"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/conde-nast.md","filePath":"entities/conde-nast.md","lastUpdated":null}');
const _sfc_main = { name: "entities/conde-nast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="conde-nast" tabindex="-1">Condé Nast <a class="header-anchor" href="#conde-nast" aria-label="Permalink to &quot;Condé Nast&quot;">​</a></h1><p>Condé Nast is an American mass media company and magazine publisher whose titles include GQ, Vogue, The New Yorker and Vanity Fair.</p><h2 id="_2024-strike" tabindex="-1">2024 strike <a class="header-anchor" href="#_2024-strike" aria-label="Permalink to &quot;2024 strike&quot;">​</a></h2><p>In the TikTok address quoted in <a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a>, <a href="/entities/taylor-lorenz">Taylor Lorenz</a> reports that &quot;hundreds of workers at Condé Nast, the parent company of pretty much every major magazine from GQ to Vogue to The New Yorker to Vanity Fair, are on strike because they&#39;re also facing impending layoffs.&quot; The article cites this alongside the collapse of <a href="/entities/sports-illustrated">Sports Illustrated</a> and cuts at <a href="/entities/time-magazine">Time Magazine</a> as evidence that the magazine sector, like newspapers and digital media, is in structural decline.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/conde-nast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const condeNast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  condeNast as default
};
