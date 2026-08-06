import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Movement for Black Lives","description":"","frontmatter":{"title":"Movement for Black Lives","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["activism","soros-funding","october-7","protest"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/movement-for-black-lives.md","filePath":"entities/movement-for-black-lives.md","lastUpdated":null}');
const _sfc_main = { name: "entities/movement-for-black-lives.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="movement-for-black-lives" tabindex="-1">Movement for Black Lives <a class="header-anchor" href="#movement-for-black-lives" aria-label="Permalink to &quot;Movement for Black Lives&quot;">​</a></h1><p>The Movement for Black Lives is an American activist coalition that received $18 million from the <a href="/entities/open-society-foundations">Open Society Foundations</a>, according to a September 2025 report by the <a href="/entities/capital-research-center">Capital Research Center</a>.[1]</p><h2 id="allegations-in-the-capital-research-report" tabindex="-1">Allegations in the Capital Research report <a class="header-anchor" href="#allegations-in-the-capital-research-report" aria-label="Permalink to &quot;Allegations in the Capital Research report&quot;">​</a></h2><p>The report described the Movement for Black Lives as a group that co-authored a radical guide glorifying Hamas&#39;s October 7 massacre and instructing activists in the use of false IDs, blockades, and economic disruption.[1] The $18 million grant total was among the largest single line items cited in the report&#39;s broader claim that Open Society had directed more than $80 million since 2016 to organizations tied to terrorism or extremist violence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/movement-for-black-lives.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const movementForBlackLives = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  movementForBlackLives as default
};
