import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Open Market Committee","description":"","frontmatter":{"title":"Federal Open Market Committee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["federal-reserve","monetary-policy","interest-rates"],"sources":["raw/badlands-news-brief-2f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/federal-open-market-committee.md","filePath":"entities/federal-open-market-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/federal-open-market-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-open-market-committee" tabindex="-1">Federal Open Market Committee <a class="header-anchor" href="#federal-open-market-committee" aria-label="Permalink to &quot;Federal Open Market Committee&quot;">​</a></h1><p>The Federal Open Market Committee (FOMC) is the rate-setting body of the <a href="/entities/federal-reserve">Federal Reserve</a>, responsible for adjusting the federal funds benchmark rate and communicating the central bank&#39;s policy outlook.[1]</p><h2 id="september-2024-meeting" tabindex="-1">September 2024 meeting <a class="header-anchor" href="#september-2024-meeting" aria-label="Permalink to &quot;September 2024 meeting&quot;">​</a></h2><p>At its September 18, 2024 meeting the committee voted 11 to 1 to lower the benchmark rate by 50 basis points to a target range of 4.75%–5.0%, the first cut in more than four years and a larger move than all but a small minority of surveyed economists had anticipated.[1] Governor Miki Bowman cast the lone dissent, favoring a 25 basis point cut; it was the first dissent by a Fed governor since 2005.[1] The committee simultaneously lowered the rate path implied by its &quot;dot plot&quot; projections without materially revising growth or unemployment forecasts.[1]</p><p>The committee&#39;s statement added a pledge that it was &quot;strongly committed to supporting maximum employment&quot; alongside its 2% inflation objective, said future adjustments would depend on incoming data, the evolving outlook and the balance of risks, and noted that job gains &quot;have slowed&quot; while inflation &quot;remains somewhat elevated.&quot;[1] Critics, including <a href="/entities/zerohedge">ZeroHedge</a> and Badlands commentator <a href="/entities/burning-bright">Burning Bright</a>, questioned the timing of a crisis-scale cut delivered under an ostensibly apolitical mandate less than two months before the November 2024 election.[1] For fuller treatment see <a href="/concepts/september-2024-fed-rate-cut">September 2024 Federal Reserve Rate Cut</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Israel Strikes Again as The FED Pivots&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/federal-open-market-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalOpenMarketCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalOpenMarketCommittee as default
};
