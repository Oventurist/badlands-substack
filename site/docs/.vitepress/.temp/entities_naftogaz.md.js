import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Naftogaz","description":"","frontmatter":{"title":"Naftogaz","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["ukraine","energy","oil","gas","chevron"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/naftogaz.md","filePath":"entities/naftogaz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/naftogaz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="naftogaz" tabindex="-1">Naftogaz <a class="header-anchor" href="#naftogaz" aria-label="Permalink to &quot;Naftogaz&quot;">​</a></h1><p>Naftogaz is Ukraine&#39;s state-owned oil and gas company. The Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> cites it as the counterparty to $10 billion deals signed by <a href="/entities/chevron">chevron</a>, offered as the precedent for Western energy majors&#39; ambitions in <a href="/entities/iran">iran</a>.</p><p>The article uses the Ukrainian arrangement to explain the interest of Chevron, <a href="/entities/exxonmobil">Exxon</a>, <a href="/entities/bp">bp</a> and <a href="/entities/shell">shell</a> in sanctions relief: &quot;they basically wanted to do the same deal, only on a much larger scale, with Iran.&quot; As funders of the <a href="/entities/atlantic-council">atlantic-council</a>, the article argues, these firms could lobby the <a href="/entities/state-department">state-department</a>, the <a href="/entities/cia">cia</a> and the <a href="/entities/pentagon">pentagon</a> for policies that would open the Iranian market.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/naftogaz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naftogaz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  naftogaz as default
};
