import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Die Linke","description":"","frontmatter":{"title":"Die Linke","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","political-parties","ukraine","nato"],"sources":["raw/badlands-news-brief-5f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/die-linke.md","filePath":"entities/die-linke.md","lastUpdated":null}');
const _sfc_main = { name: "entities/die-linke.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="die-linke" tabindex="-1">Die Linke <a class="header-anchor" href="#die-linke" aria-label="Permalink to &quot;Die Linke&quot;">​</a></h1><p>Die Linke (The Left) is a German left-wing political party represented in the Bundestag.[1]</p><h2 id="opposition-to-the-patriot-transfer-plan" tabindex="-1">Opposition to the Patriot transfer plan <a class="header-anchor" href="#opposition-to-the-patriot-transfer-plan" aria-label="Permalink to &quot;Opposition to the Patriot transfer plan&quot;">​</a></h2><p>In July 2025 the party&#39;s parliamentary leader, <a href="/entities/ulrich-thoden">Ulrich Thoden</a>, criticized the US plan to funnel <a href="/concepts/patriot-missile-system">Patriot</a> anti-aircraft systems to <a href="/entities/ukraine">Ukraine</a> through European <a href="/entities/nato">NATO</a> members, arguing that the scheme may create &quot;strong profit prospects&quot; for the American <a href="/concepts/military-industrial-complex">military-industrial complex</a> while doing nothing to pave the way toward ending the conflict between Moscow and Kiev.[1] Thoden suggested that the United States should supply Kiev with the systems on its own rather than force European NATO members either to pay for them or to further deplete their own dwindling arsenals.[1]</p><p>The party&#39;s objection stood in contrast to the position of German Chancellor <a href="/entities/friedrich-merz">Friedrich Merz</a>, who had already agreed to purchase several Patriot surface-to-air missile systems for Ukraine.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Double Comey Drama &amp; Magic Moon Soil&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/die-linke.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dieLinke = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dieLinke as default
};
