import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ali Sallabi","description":"","frontmatter":{"title":"Ali Sallabi","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["muslim-brotherhood","libya","abdelhakim-belhaj"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ali-sallabi.md","filePath":"entities/ali-sallabi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ali-sallabi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ali-sallabi" tabindex="-1">Ali Sallabi <a class="header-anchor" href="#ali-sallabi" aria-label="Permalink to &quot;Ali Sallabi&quot;">​</a></h1><p>Ali Sallabi is described in the Badlands Media article &quot;A Conflict of Interest&quot; as a Muslim Brotherhood preacher who played a key role in the release of <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a> from Libyan prison in 2009.</p><p>According to the article, Sallabi negotiated Belhaj&#39;s liberation with Gaddafi&#39;s son, Saif al-Islam, at a time when <a href="/entities/barack-obama">Barack Obama</a> had recently won the U.S. presidential election and Gaddafi still sought good relations with the new administration. The source claims that the Obama administration pressured Gaddafi to release Belhaj and other <a href="/entities/libyan-islamic-fighting-group">Libyan Islamic Fighting Group</a> members, and that Sallabi&#39;s involvement linked the Muslim Brotherhood directly to the covert operation that would later topple Gaddafi.</p><p>The article does not provide additional biographical detail about Sallabi but treats him as a critical connector between the Muslim Brotherhood, the Libyan regime, and the broader covert network the source associates with the <a href="/entities/cia">CIA</a> and U.S. foreign policy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ali-sallabi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aliSallabi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aliSallabi as default
};
