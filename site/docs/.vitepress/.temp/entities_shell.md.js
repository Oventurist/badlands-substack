import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shell","description":"","frontmatter":{"title":"Shell","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["energy","oil","lobbying","atlantic-council","blackrock"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/shell.md","filePath":"entities/shell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/shell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shell" tabindex="-1">Shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;Shell&quot;">​</a></h1><p>Shell, referred to in the source as Royal Dutch Shell, is an Anglo-Dutch energy major listed in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> among the Western oil companies underwriting the <a href="/entities/atlantic-council">atlantic-council</a>.</p><p>Together with <a href="/entities/chevron">chevron</a>, <a href="/entities/exxonmobil">Exxon</a> and <a href="/entities/bp">British Petroleum</a>, Shell is described as donating to the Council and having &quot;a vested interest in the Iran deal.&quot; The article contends that as funders of the Council these firms exercise influence over the <a href="/entities/state-department">state-department</a>, the <a href="/entities/cia">cia</a> and the <a href="/entities/pentagon">pentagon</a>, and can lobby for policies that would open <a href="/entities/iran">iran</a> — replicating, on a much larger scale, Chevron&#39;s $10 billion arrangements with <a href="/entities/naftogaz">naftogaz</a> in Ukraine. <a href="/entities/blackrock">blackrock</a> is said to hold considerable, if not majority, equity stakes in Shell and the other majors.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/shell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shell as default
};
