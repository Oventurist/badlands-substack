import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Party for Freedom (PVV)","description":"","frontmatter":{"title":"Party for Freedom (PVV)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["netherlands","political-party","populism","immigration","europe"],"sources":["raw/badlands-news-brief-3df.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/party-for-freedom.md","filePath":"entities/party-for-freedom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/party-for-freedom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="party-for-freedom-pvv" tabindex="-1">Party for Freedom (PVV) <a class="header-anchor" href="#party-for-freedom-pvv" aria-label="Permalink to &quot;Party for Freedom (PVV)&quot;">​</a></h1><p>The Party for Freedom (Partij voor de Vrijheid, PVV) is a Dutch populist political party led by <a href="/entities/geert-wilders">Geert Wilders</a>, routinely described in international media as &quot;far-right.&quot;[1]</p><h2 id="platform" tabindex="-1">Platform <a class="header-anchor" href="#platform" aria-label="Permalink to &quot;Platform&quot;">​</a></h2><p>The PVV has promised to ban mosques in the Netherlands and campaigns for a far more restrictive immigration policy, positions that account for much of the hostile coverage it receives.[1]</p><h2 id="_2023-breakthrough" tabindex="-1">2023 breakthrough <a class="header-anchor" href="#_2023-breakthrough" aria-label="Permalink to &quot;2023 breakthrough&quot;">​</a></h2><p>In the <a href="/concepts/2023-dutch-general-election">2023 Dutch parliamentary elections</a> the PVV came out on top, and was expected to win between 35 and 37 of the 150 seats in the Dutch House of Representatives, a sharp increase from the 16 seats it previously held.[1] Commentary carried by <a href="/entities/badlands-media">Badlands Media</a> placed the win within a broader pattern of gains by parties on the so-called far right across Europe, and argued that the &quot;far-right&quot; label had been stretched to cover anyone dissenting from mainstream positions on war, taxation, climate policy and gender ideology.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Media Spin Cycle Continues ... As We Defect&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3df" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3df</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/party-for-freedom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const partyForFreedom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  partyForFreedom as default
};
