import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Business Roundtable","description":"","frontmatter":{"title":"Business Roundtable","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economy","corporate","surveys","labor-market"],"sources":["raw/badlands-news-brief-421.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/business-roundtable.md","filePath":"entities/business-roundtable.md","lastUpdated":null}');
const _sfc_main = { name: "entities/business-roundtable.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="business-roundtable" tabindex="-1">Business Roundtable <a class="header-anchor" href="#business-roundtable" aria-label="Permalink to &quot;Business Roundtable&quot;">​</a></h1><p>The Business Roundtable is an association of American chief executives best known for its quarterly CEO Economic Outlook Survey, a composite index of executive expectations for capital spending, hiring and sales over the coming six months.[1]</p><h2 id="september-2024-ceo-economic-outlook-survey" tabindex="-1">September 2024 CEO Economic Outlook Survey <a class="header-anchor" href="#september-2024-ceo-economic-outlook-survey" aria-label="Permalink to &quot;September 2024 CEO Economic Outlook Survey&quot;">​</a></h2><p>The survey released on September 18, 2024 depicted a softening labor market and expectations of declining consumer spending, landing in the same week that the <a href="/entities/federal-reserve">Federal Reserve</a> delivered a 50 basis-point rate cut.[1] The composite index fell five points to 79 — the first time that year it had dipped below its historical average of 83.[1]</p><p>The decline was driven chiefly by reduced hiring expectations and a sharp drop in anticipated sales. The sales subindex fell 13 points to 110, while the hiring subindex fell five points to 55; capital-investment plans improved slightly, with that subindex rising three points to 73.[1] Fewer than 30 percent of surveyed executives said they planned to cut headcount, a figure not far below the historical average, while 37 percent expected no change in workforce and 34 percent expected to increase hiring.[1]</p><p>Business Roundtable chief executive Joshua Bolten said in a statement that &quot;this is the second consecutive quarter in which CEOs have reported they are moderating their hiring plans,&quot; and framed the uptick in capital expenditure as a sign of continued near-term investment in equipment and technology that drives growth and productivity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;Iran Iran Iran!&#39; Is the New &#39;Russia Russia Russia!&#39;&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-421" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-421</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/business-roundtable.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const businessRoundtable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  businessRoundtable as default
};
