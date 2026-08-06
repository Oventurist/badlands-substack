import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Post Millennial","description":"","frontmatter":{"title":"The Post Millennial","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-media","the-post-millennial","journalism"],"sources":["raw/badlands-news-brief-2e7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-post-millennial.md","filePath":"entities/the-post-millennial.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-post-millennial.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-post-millennial" tabindex="-1">The Post Millennial <a class="header-anchor" href="#the-post-millennial" aria-label="Permalink to &quot;The Post Millennial&quot;">​</a></h1><p>The Post Millennial is a conservative online news outlet whose reporting is periodically aggregated by <a href="/entities/badlands-media">Badlands Media</a> in its news briefs.[1]</p><h2 id="coverage-cited-by-badlands-media" tabindex="-1">Coverage cited by Badlands Media <a class="header-anchor" href="#coverage-cited-by-badlands-media" aria-label="Permalink to &quot;Coverage cited by Badlands Media&quot;">​</a></h2><p>In May 2023 the outlet reported that the <a href="/entities/food-and-drug-administration">US Food and Drug Administration</a> had approved the sale of genetically modified pork for supermarket shelves, drawing on Daily Mail coverage of the research.[1] The Post Millennial&#39;s account described how scientists at <a href="/entities/washington-state-university">Washington State University</a> had developed the altered pork using the gene-editing tool <a href="/concepts/crispr">CRISPR</a>, and quoted professor Jon Oatley on the project&#39;s stated goal of improving meat quality and livestock resilience in harsh environments.[1] The outlet&#39;s earlier reporting on genetically modified mosquitoes released in the Florida Keys was linked within the same article.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Russia&#39;s Retreat, Dominion&#39;s Domain &amp; Street &#39;Justice&#39;&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-post-millennial.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thePostMillennial = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thePostMillennial as default
};
