import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Loral Corporation","description":"","frontmatter":{"title":"Loral Corporation","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["company","defense-contractor","satellites","china"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/loral-corporation.md","filePath":"entities/loral-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/loral-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="loral-corporation" tabindex="-1">Loral Corporation <a class="header-anchor" href="#loral-corporation" aria-label="Permalink to &quot;Loral Corporation&quot;">​</a></h1><p>Loral Corporation was an American aerospace and defense electronics firm active in commercial satellite manufacturing and launch services during the 1990s.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> places Loral at the center of the alleged transfer of American missile guidance expertise to the People&#39;s Republic of China. Quoting Buchal.com, the article reports that Loral&#39;s head <a href="/entities/bernard-schwartz">Bernard Schwartz</a>, &quot;a major donor to the DNC,&quot; accompanied Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a> on a 1994 trade mission to China, during which Brown arranged a meeting between Schwartz and a Chinese government official. That meeting, the source says, &quot;led to a transfer of American missile technology to the Chinese that is now the subject of a congressional investigation.&quot;</p><p>The article connects this to the <em>New York Times</em> reporting it cites elsewhere, in which the <a href="/entities/pentagon">Pentagon</a> found that the reliability of China&#39;s nuclear missiles was significantly advanced in 1996 after scientists working for American satellite companies supplied guidance-system expertise — the technology for orbiting a commercial satellite being similar to that which guides a long-range nuclear missile.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/loral-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loralCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  loralCorporation as default
};
