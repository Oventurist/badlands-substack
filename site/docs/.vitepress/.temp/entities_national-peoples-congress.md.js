import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"National People's Congress","description":"","frontmatter":{"title":"National People's Congress","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","legislature","government","beijing"],"sources":["raw/badlands-brief-884.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-peoples-congress.md","filePath":"entities/national-peoples-congress.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/national-peoples-congress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-people-s-congress" tabindex="-1">National People&#39;s Congress <a class="header-anchor" href="#national-people-s-congress" aria-label="Permalink to &quot;National People&#39;s Congress&quot;">​</a></h1><p>The National People&#39;s Congress (NPC) is the national legislature of the People&#39;s Republic of <a href="/entities/china">China</a> and the body through which the government enacts its legislative program.[1]</p><h2 id="_2026-session-ethnic-unity-law" tabindex="-1">2026 session: Ethnic Unity Law <a class="header-anchor" href="#_2026-session-ethnic-unity-law" aria-label="Permalink to &quot;2026 session: Ethnic Unity Law&quot;">​</a></h2><p>In March 2026 the NPC was expected to advance a proposed <a href="/concepts/ethnic-unity-law">Ethnic Unity Law</a> aimed at strengthening what the government calls national cohesion among China&#39;s 56 officially recognized ethnic groups.[1] The measure would formalize policies promoting ethnic integration and unity nationwide.[1]</p><p>Critics of the proposal argued that legislation moving through the NPC could codify pressure on minority groups to assimilate into Han Chinese cultural and political norms, particularly in regions with large minority populations, while human rights organizations warned it could expand existing programs affecting communities such as the <a href="/entities/uyghurs">Uyghurs</a> and Tibetans.[1] Chinese officials defended the bill as intended to promote unity, stability, and development in minority regions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;War Weaves &amp; Midterm Maxis&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-884" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-884</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-peoples-congress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalPeoplesCongress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalPeoplesCongress as default
};
