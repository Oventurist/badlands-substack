import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Texas Supreme Court","description":"","frontmatter":{"title":"Texas Supreme Court","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","courts","elections","judiciary"],"sources":["raw/badlands-brief-174.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/texas-supreme-court.md","filePath":"entities/texas-supreme-court.md","lastUpdated":null}');
const _sfc_main = { name: "entities/texas-supreme-court.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="texas-supreme-court" tabindex="-1">Texas Supreme Court <a class="header-anchor" href="#texas-supreme-court" aria-label="Permalink to &quot;Texas Supreme Court&quot;">​</a></h1><p>The Texas Supreme Court is the highest civil court in the state of Texas and intervened in the administration of the <a href="/concepts/2026-texas-primary-elections">2026 Texas primary elections</a>.[1]</p><h2 id="_2026-primary-intervention" tabindex="-1">2026 primary intervention <a class="header-anchor" href="#_2026-primary-intervention" aria-label="Permalink to &quot;2026 primary intervention&quot;">​</a></h2><p>After voters in Dallas County reported being turned away or misdirected at polling locations under new rules requiring ballots to be cast at assigned precincts, a Dallas County judge ordered polling places to remain open beyond their scheduled closing time.[1] The Texas Supreme Court subsequently blocked that extension of voting hours.[1]</p><p>The ruling became a focal point of claims by Rep. <a href="/entities/jasmine-crockett">Jasmine Crockett</a> that voters had been &quot;disenfranchised&quot; during the primary, although no formal findings of election fraud were announced in connection with the episode.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Conflicts, Cartels, &amp; Clemency&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-174" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-174</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/texas-supreme-court.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const texasSupremeCourt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  texasSupremeCourt as default
};
