import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Miller Lite","description":"","frontmatter":{"title":"Miller Lite","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","beer","consumer-boycotts"],"sources":["raw/badlands-news-brief-617.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/miller-lite.md","filePath":"entities/miller-lite.md","lastUpdated":null}');
const _sfc_main = { name: "entities/miller-lite.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="miller-lite" tabindex="-1">Miller Lite <a class="header-anchor" href="#miller-lite" aria-label="Permalink to &quot;Miller Lite&quot;">​</a></h1><p>Miller Lite is an American light beer brand that gained market share in bars and restaurants during the 2023 collapse of <a href="/entities/bud-light">Bud Light</a> on-premise sales.[1]</p><h2 id="gains-during-the-bud-light-boycott" tabindex="-1">Gains during the Bud Light boycott <a class="header-anchor" href="#gains-during-the-bud-light-boycott" aria-label="Permalink to &quot;Gains during the Bud Light boycott&quot;">​</a></h2><p>Point-of-sale data collected by the hospitality platform Union across thousands of high-volume venues showed Miller Lite sales rising 21 percent in the three months ending June 30, 2023, while Bud Light sales fell 34 percent over the same period.[1] Union chief marketing officer Layne Cox said that although Constellation Brands&#39; Modelo had unseated Bud Light at retail, in on-premise accounts &quot;guests are now spending more on Miller Lite than Bud Light,&quot; and that domestic beer brands generally were the principal beneficiaries of the <a href="/concepts/bud-light-boycott">Bud Light boycott</a> triggered by the brand&#39;s partnership with <a href="/entities/dylan-mulvaney">Dylan Mulvaney</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media - &quot;Badlands News Brief: Biden Crime Cascade, Woke Collapse &amp; Establishment Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-617" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-617</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/miller-lite.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const millerLite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  millerLite as default
};
