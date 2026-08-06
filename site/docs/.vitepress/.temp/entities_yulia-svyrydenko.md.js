import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yulia Svyrydenko","description":"","frontmatter":{"title":"Yulia Svyrydenko","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","prime-minister","government"],"sources":["raw/badlands-brief-6f4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/yulia-svyrydenko.md","filePath":"entities/yulia-svyrydenko.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yulia-svyrydenko.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yulia-svyrydenko" tabindex="-1">Yulia Svyrydenko <a class="header-anchor" href="#yulia-svyrydenko" aria-label="Permalink to &quot;Yulia Svyrydenko&quot;">​</a></h1><p>Yulia Svyrydenko is a Ukrainian politician who served as Prime Minister of <a href="/entities/ukraine">Ukraine</a> until July 2026.[1] She was replaced when parliament voted 289–22 to confirm former <a href="/entities/naftogaz">Naftogaz</a> chief executive <a href="/entities/sergii-koretskyi">Sergii Koretskyi</a> as prime minister, part of a broader wartime government reshuffle by President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> that also included planned changes at the Defense Ministry and other senior posts.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Illegal Psychological Warfare Campaigns &amp; Misprision of Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6f4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6f4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yulia-svyrydenko.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yuliaSvyrydenko = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yuliaSvyrydenko as default
};
