import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Washington State University","description":"","frontmatter":{"title":"Washington State University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["washington-state-university","crispr","gene-editing","livestock","research"],"sources":["raw/badlands-news-brief-2e7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/washington-state-university.md","filePath":"entities/washington-state-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/washington-state-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="washington-state-university" tabindex="-1">Washington State University <a class="header-anchor" href="#washington-state-university" aria-label="Permalink to &quot;Washington State University&quot;">​</a></h1><p>Washington State University is an American public research university whose animal-science researchers developed the gene-edited pork approved for supermarket sale by the <a href="/entities/food-and-drug-administration">US Food and Drug Administration</a> in May 2023.[1]</p><h2 id="gene-edited-livestock-research" tabindex="-1">Gene-edited livestock research <a class="header-anchor" href="#gene-edited-livestock-research" aria-label="Permalink to &quot;Gene-edited livestock research&quot;">​</a></h2><p>Scientists at the university produced the altered pork using the gene-editing tool <a href="/concepts/crispr">CRISPR</a>, which takes DNA seen as more &quot;desirable&quot; and artificially injects it into other livestock.[1] The resulting product was to be sold as German-style sausages and was reported to provide adequate nutrition for human consumption.[1]</p><p>Professor Jon Oatley, who led the research, said the project&#39;s critical goal was to improve both the quality of meat and the ability of livestock to thrive in harsh environments — an outcome he argued would help increase protein sources in underdeveloped countries.[1]</p><h2 id="reception" tabindex="-1">Reception <a class="header-anchor" href="#reception" aria-label="Permalink to &quot;Reception&quot;">​</a></h2><p>The approval drew criticism from <a href="/entities/badlands-media">Badlands Media</a> contributor <a href="/entities/johnny-q">Johnny Q</a>, who warned that DNA modifications to livestock could not have been tested for long-term results and side effects, and urged consumers to support local farmers and exercise caution about what they purchase and consume.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Russia&#39;s Retreat, Dominion&#39;s Domain &amp; Street &#39;Justice&#39;&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/washington-state-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const washingtonStateUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  washingtonStateUniversity as default
};
