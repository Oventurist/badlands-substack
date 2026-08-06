import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fidelity Investments","description":"","frontmatter":{"title":"Fidelity Investments","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","asset-management","philanthropy"],"sources":["raw/badlands-brief-579.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fidelity-investments.md","filePath":"entities/fidelity-investments.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fidelity-investments.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fidelity-investments" tabindex="-1">Fidelity Investments <a class="header-anchor" href="#fidelity-investments" aria-label="Permalink to &quot;Fidelity Investments&quot;">​</a></h1><p>Fidelity Investments is a major American asset manager. In Badlands coverage of May 1, 2026, Fidelity was reported — alongside <a href="/entities/vanguard-group">Vanguard Group</a> — to have paused charitable contributions to the <a href="/entities/southern-poverty-law-center">Southern Poverty Law Center</a> following a federal indictment involving an individual allegedly connected to that organization.[1]</p><h2 id="splc-funding-pause" tabindex="-1">SPLC funding pause <a class="header-anchor" href="#splc-funding-pause" aria-label="Permalink to &quot;SPLC funding pause&quot;">​</a></h2><p>The move was described as signaling reputational-risk concerns among major financial institutions, particularly amid increased scrutiny over the destinations of corporate philanthropy.[1] While the SPLC itself had not been charged as an organization, the association prompted a reassessment by donors wary of legal and public-relations fallout.[1] The coverage suggested broader implications, as large asset managers increasingly face pressure to justify both their political neutrality and their charitable affiliations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Two Cartels, Imminent Indictments, &amp; A French Nun&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-579" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-579</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fidelity-investments.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fidelityInvestments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fidelityInvestments as default
};
