import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chevron","description":"","frontmatter":{"title":"Chevron","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["energy","oil","lobbying","atlantic-council","ukraine"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/chevron.md","filePath":"entities/chevron.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chevron.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chevron" tabindex="-1">Chevron <a class="header-anchor" href="#chevron" aria-label="Permalink to &quot;Chevron&quot;">​</a></h1><p>Chevron is an American multinational energy corporation named in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as one of the Western oil majors with a vested interest in lifting sanctions on <a href="/entities/iran">iran</a>.</p><p>The article states that Chevron, along with <a href="/entities/exxonmobil">Exxon</a>, <a href="/entities/bp">British Petroleum</a> and <a href="/entities/shell">Royal Dutch Shell</a>, donates to the <a href="/entities/atlantic-council">atlantic-council</a>, and that through this funding the energy firms hold influence over the <a href="/entities/state-department">state-department</a>, the <a href="/entities/cia">cia</a> and the <a href="/entities/pentagon">pentagon</a>, enabling them to lobby for policies that would open Iran to Western investment.</p><p>As a precedent, the article cites Chevron&#39;s activity in Ukraine, where the company signed $10 billion deals with <a href="/entities/naftogaz">naftogaz</a>, Ukraine&#39;s state-owned oil and gas company. The firms &quot;basically wanted to do the same deal, only on a much larger scale, with Iran.&quot; The article further notes that <a href="/entities/blackrock">blackrock</a> holds considerable — if not majority — equity stakes in Chevron and its peers, all of which stood to gain tremendously from the <a href="/concepts/joint-comprehensive-plan-of-action">Iran Deal</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chevron.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chevron = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chevron as default
};
