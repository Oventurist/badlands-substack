import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Takings Clause","description":"","frontmatter":{"title":"Takings Clause","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","supreme-court","property-rights","constitution","taxation"],"sources":["raw/badlands-brief-b34.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/takings-clause.md","filePath":"concepts/takings-clause.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/takings-clause.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="takings-clause" tabindex="-1">Takings Clause <a class="header-anchor" href="#takings-clause" aria-label="Permalink to &quot;Takings Clause&quot;">​</a></h1><p>The <strong>Takings Clause</strong> of the Fifth Amendment prohibits the taking of private property for public use without just compensation.[1] A recurring question under the clause is how &quot;just compensation&quot; should be measured when a government body sells property it has seized, such as after a tax foreclosure.[1]</p><h2 id="pung-v-isabella-county-2026" tabindex="-1">Pung v. Isabella County (2026) <a class="header-anchor" href="#pung-v-isabella-county-2026" aria-label="Permalink to &quot;Pung v. Isabella County (2026)&quot;">​</a></h2><p>On June 23, 2026, the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> decided Pung v. Isabella County, Michigan (No. 25-95), holding that the baseline for measuring just compensation under the Takings Clause following a tax foreclosure sale is the price obtained at a fairly conducted public auction, rather than the property&#39;s hypothetical fair market value.[1] The ruling limits the surplus that former owners may recover from foreclosing counties by tying compensation to realized auction proceeds.[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> grouped the decision with the term&#39;s other opinions as reflecting a Court willing to interpret and apply enacted law rather than pursue preferred policy outcomes.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Old Guard Is Very Confused About What&#39;s Happening to Them&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b34" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b34</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/takings-clause.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const takingsClause = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  takingsClause as default
};
