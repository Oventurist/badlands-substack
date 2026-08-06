import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"23andMe","description":"","frontmatter":{"title":"23andMe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["genomics","biotech","data-privacy","silicon-valley"],"sources":["raw/badlands-news-brief-5aa.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/23andme.md","filePath":"entities/23andme.md","lastUpdated":null}');
const _sfc_main = { name: "entities/23andme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_23andme" tabindex="-1">23andMe <a class="header-anchor" href="#_23andme" aria-label="Permalink to &quot;23andMe&quot;">​</a></h1><p>23andMe is a consumer genomics company founded and led by <a href="/entities/anne-wojcicki">Anne Wojcicki</a>.[1] The firm collects and analyzes customer DNA samples, giving it custody of large volumes of personal genetic information.</p><p>Badlands Media referenced 23andMe in its August 12, 2024 news brief while examining the Wojcicki family network following the death of <a href="/entities/youtube">YouTube</a> chief executive <a href="/entities/susan-wojcicki">Susan Wojcicki</a>.[1] The brief noted that Anne Wojcicki, Susan&#39;s sister, runs the genomics company and married <a href="/entities/google">Google</a> co-founder <a href="/entities/sergey-brin">Sergey Brin</a>, describing her as the sibling holding &quot;everyone&#39;s genetic material&quot; and framing the combination of Google&#39;s search infrastructure with mass genetic data collection as a component of an emergent shadow-government apparatus.[1] The brief also raised the question of why Susan Wojcicki, with immediate family members in &quot;cure-adjacent fields&quot; and effectively unlimited resources, nonetheless died of lung cancer at 56.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Deep State has a Rough Weekend&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5aa" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5aa</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/23andme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _23andme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _23andme as default
};
