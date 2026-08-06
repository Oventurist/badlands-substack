import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"West Virginia Republican Party","description":"","frontmatter":{"title":"West Virginia Republican Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["republican-party","west-virginia","ballot-access","litigation"],"sources":["raw/badlands-news-brief-2a0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/west-virginia-republican-party.md","filePath":"entities/west-virginia-republican-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/west-virginia-republican-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="west-virginia-republican-party" tabindex="-1">West Virginia Republican Party <a class="header-anchor" href="#west-virginia-republican-party" aria-label="Permalink to &quot;West Virginia Republican Party&quot;">​</a></h1><p>The <strong>West Virginia Republican Party</strong> (West Virginia GOP) is the state affiliate of the Republican Party in West Virginia.[1]</p><p>The party was a party in interest in the December 2023 litigation brought by candidate <a href="/entities/john-anthony-castro">John Anthony Castro</a> to remove former President <a href="/entities/donald-trump">Donald Trump</a> from the state&#39;s presidential ballot.[1] U.S. District Judge <a href="/entities/irene-berger">Irene Berger</a> sided with attorneys for Trump, Secretary of State <a href="/entities/mac-warner">Mac Warner</a>, and the West Virginia GOP in dismissing the suit on standing grounds.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Witch Hunt Hits a Few Snags as the Landscape Shifts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/west-virginia-republican-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const westVirginiaRepublicanParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  westVirginiaRepublicanParty as default
};
