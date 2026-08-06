import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mao Zedong","description":"","frontmatter":{"title":"Mao Zedong","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","communism","economic-history"],"sources":["raw/badlands-news-brief-7e0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mao-zedong.md","filePath":"entities/mao-zedong.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mao-zedong.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mao-zedong" tabindex="-1">Mao Zedong <a class="header-anchor" href="#mao-zedong" aria-label="Permalink to &quot;Mao Zedong&quot;">​</a></h1><p>Mao Zedong was the founding leader of the People&#39;s Republic of <a href="/entities/china">China</a>, whose tenure is used as the historical baseline in analyses of China&#39;s long-run economic trajectory.[1]</p><h2 id="economic-legacy" tabindex="-1">Economic legacy <a class="header-anchor" href="#economic-legacy" aria-label="Permalink to &quot;Economic legacy&quot;">​</a></h2><p>Under Mao, China&#39;s economy stagnated through the 1960s and 1970s; the country only opened to the world in the 1980s and then took off in subsequent decades, with its share of the global economy rising nearly tenfold from below 2 per cent in 1990 to 18.4 per cent in 2021.[1] The two-year contraction in China&#39;s share of world output recorded in 2022 and 2023 — a decline of 1.4 percentage points to roughly 17 per cent — was reported as the largest such drop since the 1960s, that is, since the Mao era itself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Deep State Death Spiral Has Only Just Begun&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7e0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7e0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mao-zedong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maoZedong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maoZedong as default
};
