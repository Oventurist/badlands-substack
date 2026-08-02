import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nvidia","description":"","frontmatter":{"title":"Nvidia","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["big-tech","ai","semiconductors","corporate"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nvidia.md","filePath":"entities/nvidia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nvidia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nvidia" tabindex="-1">Nvidia <a class="header-anchor" href="#nvidia" aria-label="Permalink to &quot;Nvidia&quot;">​</a></h1><p>Nvidia is an American semiconductor company whose graphics and accelerator hardware underpins most modern <a href="/concepts/artificial-intelligence">artificial intelligence</a> computation. In the Badlands corpus it appears as a newcomer to the top ranks of American capitalization and, notably, as an apparent exception to the pattern of big-tech accommodation with <a href="/entities/donald-trump">donald-trump</a>.</p><h2 id="market-position" tabindex="-1">Market position <a class="header-anchor" href="#market-position" aria-label="Permalink to &quot;Market position&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> lists Nvidia as the second-largest American company by market capitalization in 2025, behind <a href="/entities/apple-inc">Apple</a> and ahead of <a href="/entities/microsoft">microsoft</a>, <a href="/entities/alphabet-inc">Alphabet</a>, and <a href="/entities/amazon">amazon</a>. It does not appear in the essay&#39;s 2020, 2010, or 2000 rankings, making it the clearest single illustration of the article&#39;s observation that the 2025 top five are all AI big-tech companies while the 2020 five were pre-AI firms.</p><h2 id="the-missing-donation" tabindex="-1">The missing donation <a class="header-anchor" href="#the-missing-donation" aria-label="Permalink to &quot;The missing donation&quot;">​</a></h2><p>The essay notes that as of writing, Nvidia was the one major AI company absent from the list of firms donating one million dollars to Trump&#39;s inaugural fund — a list including Google, Microsoft, <a href="/entities/meta-platforms">Meta</a>, Amazon, Apple, and <a href="/entities/openai">openai</a>. Carlson allows that this could change but calls the omission strange, and asks: &quot;Is Nvidia not a part of Trump&#39;s future plans?&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nvidia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nvidia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nvidia as default
};
