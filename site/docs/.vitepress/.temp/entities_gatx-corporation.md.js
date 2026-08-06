import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GATX Corporation","description":"","frontmatter":{"title":"GATX Corporation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["rail","east-palestine","litigation","corporations"],"sources":["raw/badlands-news-brief-71f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gatx-corporation.md","filePath":"entities/gatx-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gatx-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gatx-corporation" tabindex="-1">GATX Corporation <a class="header-anchor" href="#gatx-corporation" aria-label="Permalink to &quot;GATX Corporation&quot;">​</a></h1><p>GATX Corporation is a railcar lessor and one of two companies named by <a href="/entities/norfolk-southern">Norfolk Southern</a> as it sought contribution toward the $600 million class-action settlement arising from the 2023 <a href="/concepts/east-palestine-train-derailment">East Palestine, Ohio, train derailment</a>.[1]</p><h2 id="contribution-trial" tabindex="-1">Contribution trial <a class="header-anchor" href="#contribution-trial" aria-label="Permalink to &quot;Contribution trial&quot;">​</a></h2><p>The week of March 31, 2025 marked the start of the trial to determine whether GATX and the chemical manufacturer Oxy Vinyls would pay Norfolk Southern back for the settlement, which the railroad had already accepted.[1] The settlement, along with a 27 percent attorney fee, had been granted the previous year by US District Judge Benita Pearson, who also supervised the contribution trial.[1]</p><p>The compensation sum owed to claimants would remain unchanged regardless of the outcome: if the jury ruled in favor of Norfolk Southern, GATX and Oxy Vinyls would reimburse the rail company, but Norfolk Southern would remain liable for the payout itself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Orange Friday, Election Action, &amp; McKinsey&#39;s Gives Advice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-71f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-71f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gatx-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatxCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatxCorporation as default
};
