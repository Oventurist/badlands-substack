import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"German Galushchenko","description":"","frontmatter":{"title":"German Galushchenko","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","corruption","energy","justice-ministry"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/german-galushchenko.md","filePath":"entities/german-galushchenko.md","lastUpdated":null}');
const _sfc_main = { name: "entities/german-galushchenko.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="german-galushchenko" tabindex="-1">German Galushchenko <a class="header-anchor" href="#german-galushchenko" aria-label="Permalink to &quot;German Galushchenko&quot;">​</a></h1><p>German Galushchenko is a Ukrainian official who served as Justice Minister and previously oversaw the energy portfolio.[1]</p><p>In November 2025, Ukraine&#39;s <a href="/entities/national-anti-corruption-bureau-of-ukraine">National Anti-Corruption Bureau</a> and the Specialized Anti-Corruption Prosecutor&#39;s Office uncovered a $100 million corruption scheme involving the country&#39;s state-owned nuclear energy operator.[1] The scandal led to the resignations of Galushchenko, Energy Minister <a href="/entities/svetlana-grinchuk">Svetlana Grinchuk</a> and President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a>&#39;s chief of staff <a href="/entities/andriy-yermak">Andrey Yermak</a>.[1]</p><p>Ukrainian media reported in mid-February 2026 that Galushchenko had been detained while attempting to flee to Poland.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/german-galushchenko.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const germanGalushchenko = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  germanGalushchenko as default
};
