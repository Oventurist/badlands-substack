import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ali Bongo","description":"","frontmatter":{"title":"Ali Bongo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["gabon","africa","coup","dynastic-rule"],"sources":["raw/badlands-news-brief-2e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ali-bongo.md","filePath":"entities/ali-bongo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ali-bongo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ali-bongo" tabindex="-1">Ali Bongo <a class="header-anchor" href="#ali-bongo" aria-label="Permalink to &quot;Ali Bongo&quot;">​</a></h1><p>Ali Bongo was the president of <a href="/entities/gabon">Gabon</a> until soldiers seized power in the central African OPEC member in late August 2023, four days after disputed presidential elections.[1]</p><h2 id="_2023-election-and-ouster" tabindex="-1">2023 election and ouster <a class="header-anchor" href="#_2023-election-and-ouster" aria-label="Permalink to &quot;2023 election and ouster&quot;">​</a></h2><p>Bongo had sought through the August 26, 2023 vote to extend his family&#39;s 56-year hold on power in the former French colony.[1] The opposition described the election as fraudulent.[1] Army officers subsequently appeared on Gabonese state television to announce that they had cancelled the vote and dissolved the country&#39;s institutions, according to BBC and Agence France-Presse reporting relayed by Bloomberg.[1] Gabon&#39;s dollar bonds fell on the news.[1]</p><p>The takeover, if it held, would have been the ninth in sub-Saharan Africa in three years and followed <a href="/concepts/2023-niger-coup">the coup in Niger</a> the previous month, part of a wave that Bloomberg traced to economic malaise and weak governance.[1] Badlands commentators including <a href="/entities/ashe-in-america">Ashe in America</a> and <a href="/entities/burning-bright">Burning Bright</a> read the end of the Bongo dynasty as part of a broader unwinding of French and Western influence across West and Central Africa.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Rise and Fall of the Warmongers ... And More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ali-bongo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aliBongo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aliBongo as default
};
