import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Loretta Biggs","description":"","frontmatter":{"title":"Loretta Biggs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-judge","north-carolina","voter-id"],"sources":["raw/badlands-brief-bdc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/loretta-biggs.md","filePath":"entities/loretta-biggs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/loretta-biggs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="loretta-biggs" tabindex="-1">Loretta Biggs <a class="header-anchor" href="#loretta-biggs" aria-label="Permalink to &quot;Loretta Biggs&quot;">​</a></h1><p>Loretta Biggs is a United States District Judge in North Carolina best known for her rulings on the state&#39;s photo voter identification law.[1]</p><h2 id="voter-id-reversal" tabindex="-1">Voter ID reversal <a class="header-anchor" href="#voter-id-reversal" aria-label="Permalink to &quot;Voter ID reversal&quot;">​</a></h2><p>Biggs had previously blocked North Carolina&#39;s voter ID requirement ahead of the 2020 election, but in a 2026 ruling she upheld the law, reversing her earlier position and allowing the requirement to remain in place before the <a href="/concepts/2026-midterm-elections">2026 midterms</a>.[1] She held that voting rights groups had failed to prove the law was intentionally discriminatory — plaintiffs had argued it would disproportionately affect Black and Latino voters — and said existing precedent required the court to defer to the legislature&#39;s stated intent.[1] Her reversal followed the US Court of Appeals for the Fourth Circuit overturning her earlier injunction and a separate decision by the North Carolina Supreme Court upholding the law.[1] The episode is covered at <a href="/concepts/north-carolina-voter-id-law">North Carolina voter ID law</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Reversed Rulings &amp; Reasonable Regimes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bdc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bdc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/loretta-biggs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lorettaBiggs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lorettaBiggs as default
};
