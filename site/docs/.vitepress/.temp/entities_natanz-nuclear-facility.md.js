import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Natanz Nuclear Facility","description":"","frontmatter":{"title":"Natanz Nuclear Facility","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iran","nuclear","israel-iran-conflict",2024],"sources":["raw/badlands-news-brief-4b3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/natanz-nuclear-facility.md","filePath":"entities/natanz-nuclear-facility.md","lastUpdated":null}');
const _sfc_main = { name: "entities/natanz-nuclear-facility.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="natanz-nuclear-facility" tabindex="-1">Natanz Nuclear Facility <a class="header-anchor" href="#natanz-nuclear-facility" aria-label="Permalink to &quot;Natanz Nuclear Facility&quot;">​</a></h1><p>The Natanz nuclear facility is <a href="/entities/iran">Iran</a>&#39;s principal uranium enrichment site, located in <a href="/entities/isfahan">Isfahan</a> province in the center of the country.[1]</p><h2 id="april-2024-israeli-strike" tabindex="-1">April 2024 Israeli Strike <a class="header-anchor" href="#april-2024-israeli-strike" aria-label="Permalink to &quot;April 2024 Israeli Strike&quot;">​</a></h2><p>Natanz&#39;s location made it the implicit reference point of the reported Israeli strike of April 18–19, 2024, when three large explosions were heard in Isfahan south of Tehran.[1] CNN reported that two US officials said <a href="/entities/israel">Israel</a> had indicated it would not attack nuclear targets and that Washington had not &quot;green lit&quot; the operation.[1] Iran, for its part, told Reuters that its nuclear facilities remained unharmed.[1]</p><p>An unconfirmed report held that the IRGC stated Iran would target Israeli nuclear sites in any counterattack, a threat that framed the strike as a potential threshold moment in the escalation between the two states.[1] Badlands commentators treated the overall exchange as a scripted, token affair rather than a genuine attempt at destroying nuclear infrastructure, an interpretation reinforced by the rapid rebound in global markets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Israel Goes Hot (or Not?) as the Info War Accelerates&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/natanz-nuclear-facility.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const natanzNuclearFacility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  natanzNuclearFacility as default
};
