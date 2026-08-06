import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Gas Tax Suspension Proposal","description":"","frontmatter":{"title":"Federal Gas Tax Suspension Proposal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["taxation","energy","fuel-prices","trump-administration",2026],"sources":["raw/badlands-brief-618.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/federal-gas-tax-suspension-proposal.md","filePath":"concepts/federal-gas-tax-suspension-proposal.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/federal-gas-tax-suspension-proposal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-gas-tax-suspension-proposal" tabindex="-1">Federal Gas Tax Suspension Proposal <a class="header-anchor" href="#federal-gas-tax-suspension-proposal" aria-label="Permalink to &quot;Federal Gas Tax Suspension Proposal&quot;">​</a></h1><p>The <strong>federal gas tax suspension proposal</strong> is a plan announced by President <a href="/entities/donald-trump">Donald Trump</a> in May 2026 to temporarily suspend the federal gasoline tax before gradually restoring it once fuel prices decline.[1]</p><p>Trump said on a Monday that he planned to suspend the tax &quot;for a period of time,&quot; and that it would be phased back in &quot;when gas goes down.&quot;[1] He made the comments during a telephone interview with CBS News chief White House correspondent Nancy Cordes.[1]</p><p>In the same interview Trump addressed <a href="/entities/iran">Iran</a>&#39;s latest response to the US peace proposal, saying Tehran had offered some concessions tied to its nuclear program but that the proposal still fell short: &quot;They made concessions, but not enough,&quot; he said, calling the response a &quot;very stupid proposal.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Triggering Summits &amp; Allegedly Fair Elections&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-618" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-618</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/federal-gas-tax-suspension-proposal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalGasTaxSuspensionProposal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalGasTaxSuspensionProposal as default
};
