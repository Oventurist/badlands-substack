import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Southern Command","description":"","frontmatter":{"title":"United States Southern Command","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pentagon","latin-america","panama","combatant-command"],"sources":["raw/badlands-news-brief-373.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-states-southern-command.md","filePath":"entities/united-states-southern-command.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-southern-command.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-southern-command" tabindex="-1">United States Southern Command <a class="header-anchor" href="#united-states-southern-command" aria-label="Permalink to &quot;United States Southern Command&quot;">​</a></h1><p>United States Southern Command (SOUTHCOM) is the US combatant command responsible for military operations in Central and South America and the Caribbean. In March 2025 it was tasked with developing military options related to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s stated goal of &quot;reclaiming&quot; the <a href="/entities/panama-canal">Panama Canal</a>.[1]</p><h2 id="panama-planning" tabindex="-1">Panama planning <a class="header-anchor" href="#panama-planning" aria-label="Permalink to &quot;Panama planning&quot;">​</a></h2><p>According to two US officials familiar with the planning, the <a href="/entities/white-house">White House</a> directed the US military to draw up options for increasing the American troop presence in Panama.[1] Southern Command developed potential plans ranging from partnering more closely with Panamanian security forces to the less likely option of US troops seizing the canal by force; officials said whether military force would be used depended on how far Panamanian security forces agreed to partner with the United States.[1] The administration&#39;s stated goal was to increase the US military presence in Panama in order to diminish China&#39;s influence there, particularly its access to the canal.[1] Both Panama and China denied any foreign interference in the 50-mile waterway, whose neutrality is enshrined in Panama&#39;s constitution.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Show Down &amp; British Spies for Palestine&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-373" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-373</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-southern-command.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesSouthernCommand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesSouthernCommand as default
};
