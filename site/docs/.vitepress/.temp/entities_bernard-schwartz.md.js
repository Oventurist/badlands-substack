import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bernard Schwartz","description":"","frontmatter":{"title":"Bernard Schwartz","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","businessman","defense-contractor","campaign-finance"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bernard-schwartz.md","filePath":"entities/bernard-schwartz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bernard-schwartz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bernard-schwartz" tabindex="-1">Bernard Schwartz <a class="header-anchor" href="#bernard-schwartz" aria-label="Permalink to &quot;Bernard Schwartz&quot;">​</a></h1><p>Bernard Schwartz was the head of <a href="/entities/loral-corporation">Loral Corporation</a> and, according to the sources cited in the Badlands corpus, a major donor to the <a href="/entities/democratic-national-committee">Democratic National Committee</a> during the 1990s.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> identifies Schwartz as the private-sector counterpart to Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a> in the China technology-transfer episode. Quoting Buchal.com, the article states that Schwartz accompanied Brown on a 1994 Commerce Department trade mission to China, that Brown &quot;set up a meeting between Schwartz and a Chinese government official,&quot; and that &quot;[t]his meeting led to a transfer of American missile technology to the Chinese that is now the subject of a congressional investigation.&quot;</p><p>The pairing of Schwartz&#39;s DNC donations with his access to a government trade mission is offered by the article as its clearest illustration of the essay&#39;s thesis that under <a href="/entities/bill-clinton">Bill Clinton</a> &quot;EVERYTHING WAS FOR SALE.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bernard-schwartz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bernardSchwartz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bernardSchwartz as default
};
