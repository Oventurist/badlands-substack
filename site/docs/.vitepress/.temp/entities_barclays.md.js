import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barclays","description":"","frontmatter":{"title":"Barclays","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["finance","british-banking"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/barclays.md","filePath":"entities/barclays.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barclays.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barclays" tabindex="-1">Barclays <a class="header-anchor" href="#barclays" aria-label="Permalink to &quot;Barclays&quot;">​</a></h1><p>Barclays is a British multinational universal bank headquartered in London. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, Barclays is identified as the firm that acquired Lehman Brothers&#39; North American operations after the investment bank&#39;s September 2008 bankruptcy, and as the employer of <a href="/entities/jeb-bush">jeb-bush</a> as an adviser following the collapse.</p><h2 id="acquisition-of-lehman-brothers" tabindex="-1">Acquisition of Lehman Brothers <a class="header-anchor" href="#acquisition-of-lehman-brothers" aria-label="Permalink to &quot;Acquisition of Lehman Brothers&quot;">​</a></h2><p>On September 15, 2008, Lehman Brothers filed for bankruptcy. Barclays subsequently acquired Lehman&#39;s North American investment-banking and trading divisions, along with its New York headquarters building. The acquisition was approved by a U.S. bankruptcy court and allowed Barclays to significantly expand its investment banking operations in the United States.</p><h2 id="jeb-bush-s-advisory-role" tabindex="-1">Jeb Bush&#39;s advisory role <a class="header-anchor" href="#jeb-bush-s-advisory-role" aria-label="Permalink to &quot;Jeb Bush&#39;s advisory role&quot;">​</a></h2><p>According to <a href="/entities/fox-business">fox-business</a>, Jeb Bush earned more than $14 million over approximately seven years as an adviser to both <a href="/entities/lehman-brothers">lehman-brothers</a> and, after its 2008 bankruptcy, Barclays. The article notes that Bush was involved in Lehman&#39;s final days, participating in &quot;Project Green&quot; and the related &quot;Project Verde&quot; effort to secure a bailout from <a href="/entities/carlos-slim">carlos-slim</a>. Bush&#39;s continued role at Barclays after the acquisition is cited as evidence of his deep integration into global financial networks.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barclays.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barclays = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barclays as default
};
