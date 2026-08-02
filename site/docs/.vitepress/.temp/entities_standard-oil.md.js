import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Standard Oil","description":"","frontmatter":{"title":"Standard Oil","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["monopoly","antitrust","rockefeller","corporate-history"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"high"},"headers":[],"relativePath":"entities/standard-oil.md","filePath":"entities/standard-oil.md","lastUpdated":null}');
const _sfc_main = { name: "entities/standard-oil.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="standard-oil" tabindex="-1">Standard Oil <a class="header-anchor" href="#standard-oil" aria-label="Permalink to &quot;Standard Oil&quot;">​</a></h1><p>Standard Oil was the Rockefeller petroleum monopoly dissolved by order of the <a href="/entities/supreme-court-of-the-united-states">United States Supreme Court</a> in 1911. In the Badlands corpus it is invoked as the historical template for what might be done about contemporary corporate concentration.</p><h2 id="the-1911-breakup" tabindex="-1">The 1911 breakup <a class="header-anchor" href="#the-1911-breakup" aria-label="Permalink to &quot;The 1911 breakup&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> states that in 1911 the Rockefeller monopoly was broken up after the Supreme Court ruled that Standard Oil was in violation of the federal anti-trust laws, and that the company was divided into 34 separate entities.</p><h2 id="as-a-model-for-big-tech" tabindex="-1">As a model for big tech <a class="header-anchor" href="#as-a-model-for-big-tech" aria-label="Permalink to &quot;As a model for big tech&quot;">​</a></h2><p>The essay raises the breakup immediately after describing how top-heavy the American market has become — the top five companies holding 33% of the <a href="/concepts/sp-500">S&amp;P 500</a> weighting, and <a href="/entities/apple-inc">Apple</a> standing ten times larger than the twentieth-ranked firm. Carlson asks whether antitrust dissolution &quot;is this the path forward to limit the power and influence the top 1% of publicly traded American companies have on the American economy and society?&quot;</p><p>Among his forward-looking expectations, the article predicts that &quot;some mega corporations will be broken up into separate smaller companies,&quot; making the Standard Oil precedent a live element of the essay&#39;s prognosis rather than merely a historical aside.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/standard-oil.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const standardOil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  standardOil as default
};
