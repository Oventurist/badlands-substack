import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Johnny Gaudreau","description":"","frontmatter":{"title":"Johnny Gaudreau","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hockey","team-usa","nhl","memorial"],"sources":["raw/badlands-brief-959.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/johnny-gaudreau.md","filePath":"entities/johnny-gaudreau.md","lastUpdated":null}');
const _sfc_main = { name: "entities/johnny-gaudreau.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="johnny-gaudreau" tabindex="-1">Johnny Gaudreau <a class="header-anchor" href="#johnny-gaudreau" aria-label="Permalink to &quot;Johnny Gaudreau&quot;">​</a></h1><p>Johnny Gaudreau was an American ice hockey player who starred in the National Hockey League and for the United States national team before his death in 2024.[1] He and his brother were killed by a drunk driver while cycling in New Jersey that year.[1]</p><p>Badlands coverage of the <a href="/concepts/2026-winter-olympics-mens-hockey-final">2026 Olympic men&#39;s hockey final</a> noted that, but for his death, Gaudreau would have been on the gold medal-winning roster.[1] His parents attended the Olympics throughout the tournament, and his wife and children were brought onto the ice during the victory celebration while his jersey was paraded around the rink by his former teammates.[1] Writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> framed the tribute as evidence that the American team was driven by love as much as by competitive fire.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We Are the Champions of the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-959" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-959</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/johnny-gaudreau.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnnyGaudreau = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnnyGaudreau as default
};
