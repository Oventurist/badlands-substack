import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hess Corporation","description":"","frontmatter":{"title":"Hess Corporation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","oil","venezuela","mergers"],"sources":["raw/badlands-news-brief-763.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hess-corporation.md","filePath":"entities/hess-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hess-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hess-corporation" tabindex="-1">Hess Corporation <a class="header-anchor" href="#hess-corporation" aria-label="Permalink to &quot;Hess Corporation&quot;">​</a></h1><p>Hess Corporation is an American energy company whose Venezuelan and regional oil rights became the object of a major corporate legal fight in 2025.[1] Hess was acquired by <a href="/entities/citgo">Citgo</a>, which subsequently began pumping oil off the Venezuelan coast using the acquired assets.[1]</p><h2 id="exxon-litigation" tabindex="-1">Exxon litigation <a class="header-anchor" href="#exxon-litigation" aria-label="Permalink to &quot;Exxon litigation&quot;">​</a></h2><p><a href="/entities/exxonmobil">Exxon</a> claimed that it had a first-right-of-refusal agreement in place with Hess covering Hess&#39;s oil rights in <a href="/entities/venezuela">Venezuela</a> should those rights ever go on sale, and sued Citgo in an attempt to have them transferred.[1] Exxon already held an operational presence in the oil belt through licences issued by the neighbouring Guyanese government, and a favourable ruling would effectively have granted it a monopoly over what is described as the largest known oil reserve in the world.[1] Citgo and Hess successfully argued that Exxon&#39;s first right of refusal was inapplicable because Citgo was purchasing Hess as a company rather than acquiring its oil rights alone, and the judge denied Exxon&#39;s claim in July 2025.[1]</p><p>Within days of that judgment, President <a href="/entities/donald-trump">Donald Trump</a> issued an exemption to US sanctions on Venezuela permitting Citgo to import Venezuelan crude for refinement, a sequence Badlands commentary treated as unlikely to be coincidental.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Ice Maiden, A Command Overhaul, &amp; A Thrice Jewish President&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-763" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-763</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hess-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hessCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hessCorporation as default
};
