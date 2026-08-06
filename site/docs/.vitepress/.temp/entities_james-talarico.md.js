import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"James Talarico","description":"","frontmatter":{"title":"James Talarico","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","democrats","us-senate","elections"],"sources":["raw/badlands-brief-174.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/james-talarico.md","filePath":"entities/james-talarico.md","lastUpdated":null}');
const _sfc_main = { name: "entities/james-talarico.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="james-talarico" tabindex="-1">James Talarico <a class="header-anchor" href="#james-talarico" aria-label="Permalink to &quot;James Talarico&quot;">​</a></h1><p>James Talarico is a Texas state representative and Democratic politician who won his party&#39;s nomination for the United States Senate seat from Texas in the <a href="/concepts/2026-texas-primary-elections">2026 Texas primary elections</a>.[1]</p><h2 id="_2026-senate-primary" tabindex="-1">2026 Senate primary <a class="header-anchor" href="#_2026-senate-primary" aria-label="Permalink to &quot;2026 Senate primary&quot;">​</a></h2><p>Talarico defeated Rep. <a href="/entities/jasmine-crockett">Jasmine Crockett</a> in a closely watched Democratic primary contest held on March 3, 2026.[1] With the nomination secured, he advanced to the general election for the seat then held by Republican Sen. <a href="/entities/john-cornyn">John Cornyn</a>, whose own renomination was unsettled: Cornyn was forced into a May 26 Republican runoff against Texas Attorney General <a href="/entities/ken-paxton">Ken Paxton</a>.[1]</p><p>Talarico&#39;s victory came in a primary cycle that <a href="/entities/badlands-media">Badlands Media</a> characterized as a broad revolt against incumbents and establishment-favored candidates in both parties, a reading that treated his defeat of the nationally prominent Crockett as evidence that Democratic power projections about the coming midterms were unreliable.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Conflicts, Cartels, &amp; Clemency&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-174" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-174</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/james-talarico.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamesTalarico = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamesTalarico as default
};
