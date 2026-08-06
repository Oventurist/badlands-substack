import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Medi-Cal","description":"","frontmatter":{"title":"Medi-Cal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["healthcare","medicaid","california","immigration","budget"],"sources":["raw/badlands-news-brief-2e4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/medi-cal.md","filePath":"entities/medi-cal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/medi-cal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="medi-cal" tabindex="-1">Medi-Cal <a class="header-anchor" href="#medi-cal" aria-label="Permalink to &quot;Medi-Cal&quot;">​</a></h1><p><strong>Medi-Cal</strong> is California&#39;s <a href="/concepts/medicaid">Medicaid</a> program, administered by the state Department of Health Care Services.[1]</p><h2 id="end-of-coverage-for-illegal-immigrants" tabindex="-1">End of coverage for illegal immigrants <a class="header-anchor" href="#end-of-coverage-for-illegal-immigrants" aria-label="Permalink to &quot;End of coverage for illegal immigrants&quot;">​</a></h2><p>Under new guidance from state officials, many illegal immigrants in California became ineligible for Medi-Cal coverage beginning January 1, 2026.[1] The Department of Health Care Services announced the move in August and stated on its website that immigrants with &quot;unsatisfactory immigration status&quot; — a reference to illegal immigrants — would not be able to sign up for Medi-Cal as of that date.[1]</p><p>State officials attributed the change to federal policy. Assemblymember <a href="/entities/dawn-addis">Dawn Addis</a>, a San Luis Obispo Democrat who chairs the Assembly Budget Subcommittee on Health, said that &quot;federal cuts approved by Congress, Trump-era tariffs and ongoing attacks on our undocumented communities have created true fiscal strain for people in states like California,&quot; and that in response &quot;the legislature acted to protect care by minimizing and postponing reductions in coverage.&quot;[1] She added that the cost of the federal government&#39;s erosion of healthcare was extremely high, both in tens of millions of dollars to the state and in real health consequences for Californians.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Escalating Elections, Fragmented Forums, &amp; Merry Murder Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/medi-cal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mediCal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mediCal as default
};
