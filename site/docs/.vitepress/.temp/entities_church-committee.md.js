import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Church Committee","description":"","frontmatter":{"title":"Church Committee","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["congress","oversight","intelligence","media-manipulation"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"high"},"headers":[],"relativePath":"entities/church-committee.md","filePath":"entities/church-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/church-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="church-committee" tabindex="-1">Church Committee <a class="header-anchor" href="#church-committee" aria-label="Permalink to &quot;Church Committee&quot;">​</a></h1><p>The Church Committee was a United States congressional committee, led by Senator Frank Church, that investigated the American intelligence agencies in 1975. In the Badlands corpus it functions as the documentary precedent underwriting claims of covert intelligence influence over private American institutions.</p><h2 id="the-1975-hearings" tabindex="-1">The 1975 hearings <a class="header-anchor" href="#the-1975-hearings" aria-label="Permalink to &quot;The 1975 hearings&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> states that in 1975 it was discovered through the Church Committee that the <a href="/entities/cia">Central Intelligence Agency</a> had manipulated and controlled the American media since 1960, and possibly earlier. The essay describes the committee as grilling CIA Director <a href="/entities/william-colby">william-colby</a> under oath, and credits those hearings with revealing the existence of <a href="/concepts/operation-mockingbird">Operation Mockingbird</a> — the placement of agency assets inside media companies.</p><h2 id="significance-in-the-corpus" tabindex="-1">Significance in the corpus <a class="header-anchor" href="#significance-in-the-corpus" aria-label="Permalink to &quot;Significance in the corpus&quot;">​</a></h2><p>The committee&#39;s findings are used in the article as the historical anchor for a forward-looking argument: if the CIA controlled Hollywood, the music industry, television, radio, books, magazines, newspapers, and broadcast news before the internet, then the arrival of the internet in the 1990s created a control problem the agency would have had strong motive to solve by creating or capturing search engines and social media platforms.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/church-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const churchCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  churchCommittee as default
};
