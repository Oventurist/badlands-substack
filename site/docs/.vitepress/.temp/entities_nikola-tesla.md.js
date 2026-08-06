import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nikola Tesla","description":"","frontmatter":{"title":"Nikola Tesla","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["science","inventor","history","suppressed-technology"],"sources":["raw/badlands-brief-fa4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nikola-tesla.md","filePath":"entities/nikola-tesla.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nikola-tesla.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nikola-tesla" tabindex="-1">Nikola Tesla <a class="header-anchor" href="#nikola-tesla" aria-label="Permalink to &quot;Nikola Tesla&quot;">​</a></h1><p>Nikola Tesla was a Serbian-American inventor and electrical engineer who died in New York in 1943.[1] Upon his death, his papers were taken into federal custody, and the engineer <a href="/entities/john-g-trump">John G. Trump</a> — an uncle of President <a href="/entities/donald-trump">Donald Trump</a> — was tasked with reviewing some of them.[1]</p><h2 id="role-in-contemporary-technology-narratives" tabindex="-1">Role in contemporary technology narratives <a class="header-anchor" href="#role-in-contemporary-technology-narratives" aria-label="Permalink to &quot;Role in contemporary technology narratives&quot;">​</a></h2><p>Tesla&#39;s unaccounted-for research materials remain a recurring theme in alternative-media speculation about suppressed or classified technology. Badlands contributor <a href="/entities/jordan-sather">Jordan Sather</a> noted in June 2026 that some of the trunks of Tesla papers are still unaccounted for, and suggested that technologies rolled out by the Trump administration under the banner of <a href="/concepts/quantum-computing">quantum computing</a> might in fact draw on previously hidden capabilities.[1] The speculation followed Trump&#39;s reference to his uncle during the June 2026 quantum executive order signing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Contempt-able Congress &amp; Quantum Trolling&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fa4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fa4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nikola-tesla.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nikolaTesla = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nikolaTesla as default
};
