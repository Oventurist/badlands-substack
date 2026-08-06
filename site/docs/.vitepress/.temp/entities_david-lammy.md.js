import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Lammy","description":"","frontmatter":{"title":"David Lammy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","foreign-secretary","ukraine","diplomacy"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-lammy.md","filePath":"entities/david-lammy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-lammy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-lammy" tabindex="-1">David Lammy <a class="header-anchor" href="#david-lammy" aria-label="Permalink to &quot;David Lammy&quot;">​</a></h1><p>David Lammy is a British politician who served as Foreign Secretary of the United Kingdom in the government of Prime Minister <a href="/entities/keir-starmer">Keir Starmer</a>.[1]</p><p>In September 2024 Lammy travelled to Kyiv alongside U.S. Secretary of State <a href="/entities/antony-blinken">Antony Blinken</a> during a three-nation, Ukraine-focused European tour. The two diplomats heard repeated appeals from Ukrainian officials for permission to use Western-supplied weaponry for long-range strikes inside Russia, and pledged to carry those requests back to their respective leaders.[1] Blinken subsequently continued to Warsaw while Biden and Starmer prepared to meet in the United States, amid signs that both Washington and London were growing more receptive to loosening range restrictions.[1]</p><p>Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> responded that authorizing such strikes would mean <a href="/entities/nato">NATO</a> countries were &quot;at war&quot; with Russia, framing the discussions Lammy participated in as a potential inflection point in the conflict.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-lammy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidLammy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidLammy as default
};
