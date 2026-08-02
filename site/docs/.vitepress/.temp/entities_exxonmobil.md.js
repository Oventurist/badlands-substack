import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ExxonMobil","description":"","frontmatter":{"title":"ExxonMobil","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["energy","oil","lobbying","atlantic-council","blackrock"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/exxonmobil.md","filePath":"entities/exxonmobil.md","lastUpdated":null}');
const _sfc_main = { name: "entities/exxonmobil.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="exxonmobil" tabindex="-1">ExxonMobil <a class="header-anchor" href="#exxonmobil" aria-label="Permalink to &quot;ExxonMobil&quot;">​</a></h1><p>ExxonMobil, referred to in the source simply as Exxon, is an American oil and gas major listed in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> among the Western energy firms funding the <a href="/entities/atlantic-council">atlantic-council</a>.</p><p>The article groups Exxon with <a href="/entities/chevron">chevron</a>, <a href="/entities/bp">bp</a> and <a href="/entities/shell">shell</a> as companies that &quot;all donate to the Atlantic Council, and have a vested interest in the Iran deal.&quot; Through that funding, it argues, the energy majors gain influence over the <a href="/entities/state-department">state-department</a>, the <a href="/entities/cia">cia</a> and the <a href="/entities/pentagon">pentagon</a>, and can lobby for policies that would open <a href="/entities/iran">iran</a> to Western investment on a far larger scale than Chevron&#39;s earlier deals with <a href="/entities/naftogaz">naftogaz</a> in Ukraine.</p><p>The article also notes that <a href="/entities/blackrock">blackrock</a> holds considerable, if not majority, equity stakes in Exxon and its peers, tying the asset manager&#39;s interests — and those of BlackRock Investment Institute chairman <a href="/entities/tom-donilon">tom-donilon</a> — directly to the fate of the <a href="/concepts/joint-comprehensive-plan-of-action">JCPOA</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/exxonmobil.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exxonmobil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exxonmobil as default
};
