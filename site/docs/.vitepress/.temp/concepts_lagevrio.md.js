import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lagevrio","description":"","frontmatter":{"title":"Lagevrio","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["covid-19","pharmaceuticals","molnupiravir","merck"],"sources":["raw/badlands-news-brief-3ae.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/lagevrio.md","filePath":"concepts/lagevrio.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/lagevrio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lagevrio" tabindex="-1">Lagevrio <a class="header-anchor" href="#lagevrio" aria-label="Permalink to &quot;Lagevrio&quot;">​</a></h1><p>Lagevrio is the COVID-19 antiviral pill developed by <a href="/entities/merck">Merck &amp; Co.</a> and designed to treat infection by altering the virus&#39;s genetic code.[1] In early 2023 the drug drew scrutiny after a preprint study linked its use to new, viable and spreading mutations of the virus.[1]</p><h2 id="mutation-findings" tabindex="-1">Mutation findings <a class="header-anchor" href="#mutation-findings" aria-label="Permalink to &quot;Mutation findings&quot;">​</a></h2><p>Researchers in the United States and at the Francis Crick Institute, Imperial College London and other UK institutions identified Lagevrio-linked mutations in viral samples from dozens of patients.[1] <a href="/entities/bloomberg">Bloomberg</a>&#39;s account of the study noted researcher concern that the drug might give rise to more contagious or more health-threatening variations of COVID-19.[1]</p><h2 id="reception-in-the-truth-community" tabindex="-1">Reception in the Truth Community <a class="header-anchor" href="#reception-in-the-truth-community" aria-label="Permalink to &quot;Reception in the Truth Community&quot;">​</a></h2><p><a href="/entities/badlands-media">Badlands Media</a> contributor <a href="/entities/ryan-delarme">Ryan DeLarme</a> characterized the result as the drug &quot;actually causing the virus to mutate in patients, thereby making the virus far more communicable and deadly,&quot; and questioned whether the effect was accidental or intentional.[1] The item ran as the lead entry in the February 3, 2023 <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Mutations, Laptops &amp; Chinese Balloons&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/lagevrio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lagevrio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lagevrio as default
};
