import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wael Jalaidan","description":"","frontmatter":{"title":"Wael Jalaidan","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","al-qaeda","terror-financing","muslim-students-association"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/wael-jalaidan.md","filePath":"entities/wael-jalaidan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wael-jalaidan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wael-jalaidan" tabindex="-1">Wael Jalaidan <a class="header-anchor" href="#wael-jalaidan" aria-label="Permalink to &quot;Wael Jalaidan&quot;">​</a></h1><p>Wael Jalaidan is described in the Badlands corpus as a co-founder of <a href="/entities/al-qaeda">al-Qaeda</a> and a former campus Islamic organizer in the United States.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a>, quoting PJMedia, states that in the 1980s Jalaidan ran the <a href="/entities/muslim-students-association">Muslim Students Association</a> chapter at the University of Arizona, and that he &quot;would soon go on to help <a href="/entities/osama-bin-laden">Osama bin Laden</a> found al-Qaeda.&quot; He is also said to have partnered with <a href="/entities/abdullah-omar-naseef">Abdullah Omar Naseef</a> — the patron of the <a href="/entities/huma-abedin">Abedin</a> family — to establish the <a href="/entities/rabita-trust">Rabita Trust</a>, which was formally designated a terrorist organization under U.S. law for funding al-Qaeda.</p><p>Jalaidan appears in the article alongside <a href="/entities/anwar-al-awlaki">Anwar al-Awlaki</a> as evidence for the claim, attributed to Patrick Poole, that al-Awlaki &quot;is far from the only jihadist to hone his supremacist ideology in the MSA&#39;s friendly confines.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wael-jalaidan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const waelJalaidan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  waelJalaidan as default
};
