import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trafigura","description":"","frontmatter":{"title":"Trafigura","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commodities","oil-trading","venezuela","corruption","bribery"],"sources":["raw/badlands-brief-577.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/trafigura.md","filePath":"entities/trafigura.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trafigura.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trafigura" tabindex="-1">Trafigura <a class="header-anchor" href="#trafigura" aria-label="Permalink to &quot;Trafigura&quot;">​</a></h1><p>Trafigura is one of the world&#39;s largest commodity trading houses. In January 2026 President <a href="/entities/donald-trump">Donald Trump</a> called on Trafigura and <a href="/entities/vitol">Vitol</a> to begin brokering sales of <a href="/entities/venezuela">Venezuelan</a> crude to potential buyers as the post-Maduro authorities in Caracas opened the country&#39;s oil sector to foreign capital.[1]</p><h2 id="legal-history" tabindex="-1">Legal history <a class="header-anchor" href="#legal-history" aria-label="Permalink to &quot;Legal history&quot;">​</a></h2><p>Trafigura was named, alongside Vitol, as a defendant in the lawsuit filed by <a href="/entities/nicolas-maduro">Nicolás Maduro</a> in both U.S. and Swiss courts in March 2018.[1] According to the Badlands Brief, Trafigura&#39;s former chief executive, identified as Mark Wainwright, was sentenced in a Swiss court in February 2025 to 32 months in prison after being found guilty of paying more than $5 billion in bribes to oil officials in Africa to secure contracts — conduct connected to the same 2018 litigation.[1]</p><p>Badlands commentary held that the resumption of Venezuelan oil brokerage through firms with this record could trip anti-money-laundering reporting requirements and generate a major financial scandal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;ICE Getting Boiled, Chinese Coup Chaos, &amp; Carney Bends The Knee&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-577" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-577</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trafigura.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trafigura = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trafigura as default
};
