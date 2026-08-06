import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Susan Monarez","description":"","frontmatter":{"title":"Susan Monarez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cdc","public-health","trump-appointee","vaccines","hhs"],"sources":["raw/badlands-news-brief-7d4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/susan-monarez.md","filePath":"entities/susan-monarez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/susan-monarez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="susan-monarez" tabindex="-1">Susan Monarez <a class="header-anchor" href="#susan-monarez" aria-label="Permalink to &quot;Susan Monarez&quot;">​</a></h1><p>Susan Monarez is a public health official who served as Director of the <a href="/entities/centers-for-disease-control-and-prevention">Centers for Disease Control and Prevention</a> (CDC) as a <a href="/entities/donald-trump">Trump</a> appointee before being fired by Health and Human Services Secretary <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a> in 2025.[1]</p><p>Her dismissal became a central point of criticism during a contentious Senate hearing in early September 2025, where lawmakers pressed Kennedy over the firing as well as his removal of the full panel of the federal vaccine advisory board.[1] Democrats accused Kennedy of endangering the public by spreading misinformation and gutting evidence-based vaccine research, and the episode fed escalating calls for his impeachment or resignation — including from conservative commentator <a href="/entities/william-kristol">Bill Kristol</a>, who said &quot;I&#39;ve seen enough.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Funding Freezes, Russian Oil, &amp; Imminent Exposes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/susan-monarez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const susanMonarez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  susanMonarez as default
};
