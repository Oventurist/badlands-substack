import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rosatom","description":"","frontmatter":{"title":"Rosatom","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["russia","nuclear","uranium","state-owned"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/rosatom.md","filePath":"entities/rosatom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rosatom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rosatom" tabindex="-1">Rosatom <a class="header-anchor" href="#rosatom" aria-label="Permalink to &quot;Rosatom&quot;">​</a></h1><p>Rosatom is the Russian state nuclear energy corporation. In the Badlands Media essay <a href="/concepts/america-for-sale-part-3">America for Sale — Part 3</a> it appears as the acquirer of <a href="/entities/uranium-one">Uranium One</a> and therefore of roughly one-fifth of United States uranium production capacity.</p><p>The purchase was executed through Rosatom&#39;s subsidiary ARMZ. As the article notes, the <a href="/entities/nuclear-regulatory-commission">Nuclear Regulatory Commission</a> announced in a November 2010 press release that ARMZ &quot;had been approved to take ownership of the Uranium One mining firm and its American assets,&quot; while simultaneously declaring that &quot;no uranium produced at either facility may be exported.&quot; The Russians assumed control gradually in three separate transactions between 2009 and 2013.</p><p>Because uranium is treated as a strategic asset with national security implications, the sale required approval from a committee of United States government agencies, among them the <a href="/entities/state-department">State Department</a> under <a href="/entities/hillary-clinton">Hillary Clinton</a>. The article argues that the March 2009 &quot;Russian Reset&quot; was staged in part to make such an approval politically possible, quoting Q drop #48&#39;s question about whether the reset provided &quot;clearance/pathway to complete the U1 deal.&quot;</p><p>The Hill&#39;s reporting, cited in the essay, states that the NRC deliberately avoided issuing Rosatom a direct export license because doing so &quot;would have raised red flags inside a Congress already suspicious of the deal,&quot; and instead amended the license of the trucking firm <a href="/entities/rsb-logistics-services">RSB Logistics Services Inc.</a> to permit shipments of Uranium One yellowcake to Canada and ultimately Europe.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rosatom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rosatom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rosatom as default
};
