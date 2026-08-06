import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Justin Fairfax","description":"","frontmatter":{"title":"Justin Fairfax","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["virginia","democratic-party","lieutenant-governor","death"],"sources":["raw/badlands-brief-6fd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/justin-fairfax.md","filePath":"entities/justin-fairfax.md","lastUpdated":null}');
const _sfc_main = { name: "entities/justin-fairfax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justin-fairfax" tabindex="-1">Justin Fairfax <a class="header-anchor" href="#justin-fairfax" aria-label="Permalink to &quot;Justin Fairfax&quot;">​</a></h1><p>Justin Fairfax is a former Lieutenant Governor of Virginia who served under Governor <a href="/entities/ralph-northam">Ralph Northam</a>.[1]</p><h2 id="death" tabindex="-1">Death <a class="header-anchor" href="#death" aria-label="Permalink to &quot;Death&quot;">​</a></h2><p>Approximately three weeks before May 2026, Fairfax shot and killed his wife and then himself, according to reporting cited by Badlands.[1] Contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> described the killings as a terrible tragedy and noted that there did not appear to be much information, or any indication, connecting the deaths to a public corruption scandal.[1] He nonetheless flagged the episode as worth mentioning given contemporaneous federal actions against Virginia Democrats — including the FBI searches involving <a href="/entities/louise-lucas">L. Louise Lucas</a> — and the fact that the individuals involved knew one another and belonged to the same party.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Rugs the Zionists; FBI Raids the Virginia Democrats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/justin-fairfax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justinFairfax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justinFairfax as default
};
