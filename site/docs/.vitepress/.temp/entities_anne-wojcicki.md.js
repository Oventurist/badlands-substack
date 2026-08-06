import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anne Wojcicki","description":"","frontmatter":{"title":"Anne Wojcicki","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["23andme","genomics","silicon-valley","google"],"sources":["raw/badlands-news-brief-5aa.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/anne-wojcicki.md","filePath":"entities/anne-wojcicki.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anne-wojcicki.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anne-wojcicki" tabindex="-1">Anne Wojcicki <a class="header-anchor" href="#anne-wojcicki" aria-label="Permalink to &quot;Anne Wojcicki&quot;">​</a></h1><p>Anne Wojcicki is an American businesswoman, the founder and chief executive officer of the consumer genomics company <a href="/entities/23andme">23andMe</a>.[1] She is a sister of the former <a href="/entities/youtube">YouTube</a> chief executive <a href="/entities/susan-wojcicki">Susan Wojcicki</a> and the daughter of the Stanford physicist Stanley Wojcicki; a third sister, Janet, is a pediatrician and anthropologist.[1]</p><p>Anne Wojcicki married <a href="/entities/google">Google</a> co-founder <a href="/entities/sergey-brin">Sergey Brin</a>, a connection Badlands Media highlighted in its August 12, 2024 news brief when tracing the overlap between the founding circle of Google and the consumer-genetics industry — describing her as &quot;the sister with everyone&#39;s genetic material.&quot;[1] The brief presented this network of family, search-engine dominance and genomic data collection as part of what it called the foundation of &quot;dystopia&#39;s shadow government.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Deep State has a Rough Weekend&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5aa" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5aa</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anne-wojcicki.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anneWojcicki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anneWojcicki as default
};
