import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oxy Vinyls","description":"","frontmatter":{"title":"Oxy Vinyls","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["chemicals","east-palestine","litigation","corporations"],"sources":["raw/badlands-news-brief-71f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/oxy-vinyls.md","filePath":"entities/oxy-vinyls.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oxy-vinyls.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oxy-vinyls" tabindex="-1">Oxy Vinyls <a class="header-anchor" href="#oxy-vinyls" aria-label="Permalink to &quot;Oxy Vinyls&quot;">​</a></h1><p>Oxy Vinyls is a chemical manufacturer named alongside the railcar lessor <a href="/entities/gatx-corporation">GATX Corp.</a> in <a href="/entities/norfolk-southern">Norfolk Southern</a>&#39;s attempt to recover part of the $600 million class-action settlement stemming from the 2023 <a href="/concepts/east-palestine-train-derailment">East Palestine, Ohio, derailment</a>.[1] The company manufactured vinyl chloride, the substance at the center of the derailment&#39;s chemical release.[1]</p><h2 id="contribution-trial" tabindex="-1">Contribution trial <a class="header-anchor" href="#contribution-trial" aria-label="Permalink to &quot;Contribution trial&quot;">​</a></h2><p>Trial proceedings opened in the week of March 31, 2025 to determine whether Oxy Vinyls and GATX would contribute to the settlement Norfolk Southern had already accepted.[1] US District Judge Benita Pearson, who had granted the settlement and a 27 percent attorney fee the previous year, presided over the case.[1] A verdict for Norfolk Southern would shift part of the financial burden onto the two companies without changing the total compensation owed, and Norfolk Southern would remain the liable party for the payout.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Orange Friday, Election Action, &amp; McKinsey&#39;s Gives Advice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-71f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-71f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oxy-vinyls.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oxyVinyls = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oxyVinyls as default
};
