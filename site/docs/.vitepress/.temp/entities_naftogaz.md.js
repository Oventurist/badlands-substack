import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Naftogaz","description":"","frontmatter":{"title":"Naftogaz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","energy","state-company"],"sources":["raw/badlands-brief-6f4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/naftogaz.md","filePath":"entities/naftogaz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/naftogaz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="naftogaz" tabindex="-1">Naftogaz <a class="header-anchor" href="#naftogaz" aria-label="Permalink to &quot;Naftogaz&quot;">​</a></h1><p>Naftogaz is Ukraine&#39;s state energy company. Its former chief executive, <a href="/entities/sergii-koretskyi">Sergii Koretskyi</a>, was confirmed as Prime Minister of <a href="/entities/ukraine">Ukraine</a> by a 289–22 parliamentary vote in July 2026.[1] President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> cited Koretskyi&#39;s energy-sector experience as the decisive qualification as Ukraine prepared for another winter under continued Russian attacks on its infrastructure.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Illegal Psychological Warfare Campaigns &amp; Misprision of Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6f4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6f4</a></li></ol></div>`);
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
