import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brittney Griner","description":"","frontmatter":{"title":"Brittney Griner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","prisoner-swap","sports"],"sources":["raw/badlands-news-brief-06e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brittney-griner.md","filePath":"entities/brittney-griner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brittney-griner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brittney-griner" tabindex="-1">Brittney Griner <a class="header-anchor" href="#brittney-griner" aria-label="Permalink to &quot;Brittney Griner&quot;">​</a></h1><p>Brittney Griner is an American WNBA player who was convicted on drug charges in Russia and released in a December 2022 prisoner swap with the United States.[1] Her exchange became a point of controversy because former U.S. Marine <a href="/entities/paul-whelan">Paul Whelan</a> was left behind and deprioritized in that deal, producing what Badlands commentary described as confusion and disappointment among American observers.[1]</p><p>Griner&#39;s case returned to public discussion in August 2024, when Russia agreed to release Whelan and Wall Street Journal reporter <a href="/entities/evan-gershkovich">Evan Gershkovich</a> in a larger multi-country prisoner exchange, closing the gap left by the 2022 arrangement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Electionception, Sovereign Alliance Digs &amp; Chick Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-06e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-06e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brittney-griner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brittneyGriner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brittneyGriner as default
};
