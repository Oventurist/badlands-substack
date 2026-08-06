import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Al-Haq","description":"","frontmatter":{"title":"Al-Haq","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","west-bank","palestine","pflp","soros-funding"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/al-haq.md","filePath":"entities/al-haq.md","lastUpdated":null}');
const _sfc_main = { name: "entities/al-haq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="al-haq" tabindex="-1">Al-Haq <a class="header-anchor" href="#al-haq" aria-label="Permalink to &quot;Al-Haq&quot;">​</a></h1><p>Al-Haq is a nongovernmental organization based in the West Bank that has long been accused of ties to the <a href="/entities/popular-front-for-the-liberation-of-palestine">Popular Front for the Liberation of Palestine</a> (PFLP), an entity designated as a foreign terrorist organization by both the European Union and the United States.[1]</p><h2 id="open-society-funding" tabindex="-1">Open Society funding <a class="header-anchor" href="#open-society-funding" aria-label="Permalink to &quot;Open Society funding&quot;">​</a></h2><p>A September 2025 report by the <a href="/entities/capital-research-center">Capital Research Center</a> stated that the <a href="/entities/open-society-foundations">Open Society Foundations</a> had funneled more than $2.3 million into Al-Haq.[1] The report presented this grantmaking as evidence that the foundation&#39;s exposure to groups tied to terrorism or extremist violence was not confined to organizations operating inside the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/al-haq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alHaq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alHaq as default
};
