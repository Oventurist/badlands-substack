import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Adrian Fontes","description":"","frontmatter":{"title":"Adrian Fontes","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","democrat","secretary-of-state","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/adrian-fontes.md","filePath":"entities/adrian-fontes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/adrian-fontes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="adrian-fontes" tabindex="-1">Adrian Fontes <a class="header-anchor" href="#adrian-fontes" aria-label="Permalink to &quot;Adrian Fontes&quot;">​</a></h1><p>Adrian Fontes is an Arizona Democrat who defeated Republican <a href="/entities/mark-finchem">Mark Finchem</a> in the 2022 election for <a href="/entities/arizona-secretary-of-state">Arizona Secretary of State</a>, the office that administers the state&#39;s elections. A former <a href="/entities/maricopa-county">Maricopa County</a> Recorder, he is treated in the Badlands Media corpus chiefly as a defendant in post-election litigation.</p><h2 id="named-in-the-finchem–zink-suit" tabindex="-1">Named in the Finchem–Zink suit <a class="header-anchor" href="#named-in-the-finchem–zink-suit" aria-label="Permalink to &quot;Named in the Finchem–Zink suit&quot;">​</a></h2><p>On December 9, 2022, the final day of the five-day contest window that followed certification of the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, Finchem and congressional candidate <a href="/entities/jeff-zink">Jeff Zink</a> filed a lawsuit seeking to overturn the November results. Fontes was named as Finchem&#39;s opponent, alongside Rep. <a href="/entities/ruben-gallego">Ruben Gallego</a> and outgoing Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a>. As summarized in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the substance of the complaint&#39;s allegations concerns Hobbs&#39;s conduct — the certification of tabulation machines, pressure on the Mohave and Cochise county boards of supervisors, her failure to recuse herself while running for governor, and her office&#39;s flagging of misinformation on a Twitter account in January 2021 — rather than any conduct attributed to Fontes himself.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/adrian-fontes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adrianFontes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  adrianFontes as default
};
