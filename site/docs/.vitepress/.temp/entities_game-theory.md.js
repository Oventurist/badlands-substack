import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Game Theory (show)","description":"","frontmatter":{"title":"Game Theory (show)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","broadcasting","show"],"sources":["raw/badlands-media-show-schedule-f0c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/game-theory.md","filePath":"entities/game-theory.md","lastUpdated":null}');
const _sfc_main = { name: "entities/game-theory.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="game-theory-show" tabindex="-1">Game Theory (show) <a class="header-anchor" href="#game-theory-show" aria-label="Permalink to &quot;Game Theory (show)&quot;">​</a></h1><p>Game Theory is a <a href="/entities/badlands-media">Badlands Media</a> program airing Thursdays at 12pm ET in the January 2023 schedule.[1]</p><h2 id="format-and-hosts" tabindex="-1">Format and hosts <a class="header-anchor" href="#format-and-hosts" aria-label="Permalink to &quot;Format and hosts&quot;">​</a></h2><p>The show is co-hosted by <a href="/entities/sean-morgan">Sean Morgan</a> and <a href="/entities/burning-bright">Burning Bright</a>, who take a macro view of national and international events through the lens of game theory and <a href="/concepts/fifth-generation-warfare">Fifth-Generation Warfare</a>, attempting to find the truth beneath the surface of reported events.[1] The analytical frame overlaps with Burning Bright&#39;s Sunday-night program <a href="/entities/defected">Defected</a>, which applies narrative warfare and game theory to current events.[1]</p><h2 id="distribution" tabindex="-1">Distribution <a class="header-anchor" href="#distribution" aria-label="Permalink to &quot;Distribution&quot;">​</a></h2><p>Live streams and replays air on the main Badlands Media <a href="/entities/rumble">Rumble</a> channel.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-f0c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-f0c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/game-theory.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gameTheory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gameTheory as default
};
