import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dow Chemical","description":"","frontmatter":{"title":"Dow Chemical","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","corporation","consulting-client"],"sources":["raw/america-for-sale-part-2.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/dow-chemical.md","filePath":"entities/dow-chemical.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dow-chemical.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dow-chemical" tabindex="-1">Dow Chemical <a class="header-anchor" href="#dow-chemical" aria-label="Permalink to &quot;Dow Chemical&quot;">​</a></h1><p>The Dow Chemical Company is an American multinational chemical corporation. It appears in the Badlands Media essay <a href="/concepts/america-for-sale-part-2">America for Sale — Part 2</a> as the principal private client of <a href="/entities/declan-kelly">Declan Kelly</a> during the period in which he served as <a href="/entities/hillary-clinton">Hillary Clinton</a>&#39;s unpaid economic envoy to Northern Ireland.</p><p><em>Politico</em>, quoted in the article, reported that while reaching out to global corporations for Irish investment as special envoy, Kelly was simultaneously working as a private consultant for two of those corporations, earning about $2.4 million from Dow Chemical — &quot;a longtime client of his and one of the firms that participated in Clinton&#39;s Ireland initiative.&quot; Between August 2009 and January 2011, in the midst of his <a href="/entities/state-department">State Department</a> work, Dow paid Kelly that sum through <a href="/entities/fti-consulting">FTI Consulting</a>, the firm he had left in July 2009 under a two-year noncompete agreement that allowed him to keep consulting part-time for Dow and Coca-Cola.</p><p>Both Dow Chemical and Coca-Cola, the article notes, later became among the first and biggest accounts of <a href="/entities/teneo">Teneo</a>, the firm Kelly co-founded with <a href="/entities/doug-band">Doug Band</a> and <a href="/entities/paul-keary">Paul Keary</a> in 2011. The essay presents this continuity as evidence that Kelly&#39;s government post was used to build a commercial book of business rather than to serve the public.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-2" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dow-chemical.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dowChemical = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dowChemical as default
};
