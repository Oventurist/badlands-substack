import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anwar al-Awlaki","description":"","frontmatter":{"title":"Anwar al-Awlaki","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","al-qaeda","cleric","muslim-students-association"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/anwar-al-awlaki.md","filePath":"entities/anwar-al-awlaki.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anwar-al-awlaki.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anwar-al-awlaki" tabindex="-1">Anwar al-Awlaki <a class="header-anchor" href="#anwar-al-awlaki" aria-label="Permalink to &quot;Anwar al-Awlaki&quot;">​</a></h1><p>Anwar al-Awlaki was an American-born Islamic cleric and <a href="/entities/al-qaeda">al-Qaeda</a> operative, known for his role as a spiritual guide to militants and for his ministry to several of the eventual September 11 hijackers.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> cites al-Awlaki twice, both times in connection with the <a href="/entities/muslim-students-association">Muslim Students Association</a>. <em>Newsweek</em>, quoted in the article, notes that critics pointed to <a href="/entities/huma-abedin">Huma Abedin</a>&#39;s service on the board of the MSA chapter at <a href="/entities/george-washington-university">George Washington University</a> which, &quot;a few years after she left, was advised by Al-Qaeda-affiliated cleric Anwar al-Awlaki.&quot;</p><p>PJMedia, also quoted, gives more detail: in 2001 the GWU chapter&#39;s spiritual guide &quot;was … Anwar al-Awlaki, the al-Qaeda operative who was then ministering to some of the eventual 9/11 suicide-hijackers.&quot; The same passage notes that al-Awlaki had himself led the MSA chapter at Colorado State University in the early 1990s, and cites Patrick Poole for the proposition that he was &quot;far from the only jihadist to hone his supremacist ideology in the MSA&#39;s friendly confines.&quot; The article uses this history to argue that MSA chapters served as incubators for both terrorism and governmental infiltration.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anwar-al-awlaki.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anwarAlAwlaki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anwarAlAwlaki as default
};
