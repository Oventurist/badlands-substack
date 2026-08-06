import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ilya Sorokin","description":"","frontmatter":{"title":"Ilya Sorokin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hockey","nhl","russia","sports"],"sources":["raw/badlands-news-brief-364.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ilya-sorokin.md","filePath":"entities/ilya-sorokin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ilya-sorokin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ilya-sorokin" tabindex="-1">Ilya Sorokin <a class="header-anchor" href="#ilya-sorokin" aria-label="Permalink to &quot;Ilya Sorokin&quot;">​</a></h1><p>Ilya Sorokin is a Russian goaltender for the New York Islanders of the National Hockey League.[1]</p><h2 id="role-in-the-2025-nhl-scoring-record" tabindex="-1">Role in the 2025 NHL scoring record <a class="header-anchor" href="#role-in-the-2025-nhl-scoring-record" aria-label="Permalink to &quot;Role in the 2025 NHL scoring record&quot;">​</a></h2><p>On April 6, 2025, at UBS Arena in New York, Sorokin conceded the goal by fellow Russian <a href="/entities/alexander-ovechkin">Alexander Ovechkin</a> of the <a href="/entities/washington-capitals">Washington Capitals</a> that became the 895th of Ovechkin&#39;s career and set the all-time NHL record previously held by <a href="/entities/wayne-gretzky">Wayne Gretzky</a>.[1] The moment was celebrated by both American and Russian fans in the arena.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Terminations, Port Tensions, &amp; Terrifically Terrifying Trade Wars&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-364" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-364</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ilya-sorokin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ilyaSorokin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ilyaSorokin as default
};
