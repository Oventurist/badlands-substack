import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Serge Monast","description":"","frontmatter":{"title":"Serge Monast","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["journalist","canada","new-world-order","whistleblower"],"sources":["raw/ai-can-help-us-expose-the-nwo.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/serge-monast.md","filePath":"entities/serge-monast.md","lastUpdated":null}');
const _sfc_main = { name: "entities/serge-monast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="serge-monast" tabindex="-1">Serge Monast <a class="header-anchor" href="#serge-monast" aria-label="Permalink to &quot;Serge Monast&quot;">​</a></h1><p>Serge Monast was a Canadian journalist identified in the Badlands Media corpus as the man who leaked <a href="/concepts/toronto-protocols">the Toronto Protocols</a>, a French-language document set titled &quot;Les Protocoles de Toronto.&quot; According to the essay <a href="/concepts/ai-can-help-us-expose-the-nwo">AI Can Help Us Expose the NWO</a>, Monast&#39;s leak provided &quot;a document compiled by a clique of senior financiers who met in Canada in 1967 and then in 1985,&quot; a group that identified itself as the &quot;6.6.6.&quot;</p><p>The article emphasises Monast&#39;s own epistemic modesty about the material. As summarised by Brian Nugent, one of the best-known English translators of the text, &quot;Monast himself concluded that it is up to each individual reader to make their own mind up on whether to believe this document, by, he recommends, seeing if it matches the politics, and recent political history, of the last few years.&quot; <a href="/entities/justin-deschamps">Justin Deschamps</a> reports having applied that test repeatedly and having become increasingly convinced of the documents&#39; accuracy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/ai-can-help-us-expose-the-nwo" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/serge-monast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sergeMonast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sergeMonast as default
};
