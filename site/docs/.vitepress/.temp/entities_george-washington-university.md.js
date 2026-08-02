import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"George Washington University","description":"","frontmatter":{"title":"George Washington University","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["university","muslim-students-association","infiltration","institution"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/george-washington-university.md","filePath":"entities/george-washington-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/george-washington-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="george-washington-university" tabindex="-1">George Washington University <a class="header-anchor" href="#george-washington-university" aria-label="Permalink to &quot;George Washington University&quot;">​</a></h1><p>George Washington University (GWU) is a private research university in Washington, D.C.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> cites GWU as the campus from which <a href="/entities/huma-abedin">Huma Abedin</a> entered the <a href="/entities/bill-clinton">Clinton</a> White House as a 19-year-old intern in 1996. The article treats her presence there as an illustration of the <a href="/entities/muslim-brotherhood">Muslim Brotherhood</a>&#39;s alleged university-based recruitment strategy rather than as coincidence.</p><p>Quoting PJMedia, the article states that in the mid-to-late 1990s, while she was an intern and an assistant editor at the <em><a href="/entities/journal-of-muslim-minority-affairs">Journal of Muslim Minority Affairs</a></em>, Abedin sat on the executive board of the <a href="/entities/muslim-students-association">Muslim Students Association</a> chapter at GWU, heading its &quot;Social Committee.&quot; It further reports that the GWU chapter&#39;s spiritual guide in 2001 was Al-Qaeda operative Anwar al Awlaki, who was then ministering to some of the eventual 9/11 hijackers. Within the article&#39;s framework, universities such as GWU are &quot;recruiting and training grounds for the infiltration of our government.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/george-washington-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgeWashingtonUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgeWashingtonUniversity as default
};
