import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"James Donato","description":"","frontmatter":{"title":"James Donato","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","antitrust","litigation"],"sources":["raw/badlands-news-brief-040.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/james-donato.md","filePath":"entities/james-donato.md","lastUpdated":null}');
const _sfc_main = { name: "entities/james-donato.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="james-donato" tabindex="-1">James Donato <a class="header-anchor" href="#james-donato" aria-label="Permalink to &quot;James Donato&quot;">​</a></h1><p>James Donato is a United States District Judge based in San Francisco who presided over the remedies phase of the antitrust lawsuit brought by <a href="/entities/epic-games">Epic Games</a> against <a href="/entities/google">Google</a>.[1]</p><p>Donato oversaw proceedings after a San Francisco jury found in 2023 that Google had unlawfully stifled competition through its control of Android app distribution and payments, and was weighing proposed reforms to the Google Play store in 2024.[1] In August 2024 the <a href="/entities/federal-trade-commission">Federal Trade Commission</a> filed an amicus brief with his court arguing that judges &quot;may order whatever relief is necessary to restore the competition eliminated by the illegal conduct&quot; and urging him to focus on enabling competitor entry into the market.[1] Donato was scheduled to resume hearing evidence from the companies that week.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Regime is Totally Winning Amidst Continued Meltdown&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-040" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-040</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/james-donato.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamesDonato = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamesDonato as default
};
