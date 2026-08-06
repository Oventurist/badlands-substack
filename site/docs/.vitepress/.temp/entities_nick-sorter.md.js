import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nick Sorter","description":"","frontmatter":{"title":"Nick Sorter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["independent-media","influencers","snap","journalism"],"sources":["raw/badlands-news-brief-42b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/nick-sorter.md","filePath":"entities/nick-sorter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nick-sorter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nick-sorter" tabindex="-1">Nick Sorter <a class="header-anchor" href="#nick-sorter" aria-label="Permalink to &quot;Nick Sorter&quot;">​</a></h1><p>Nick Sorter is an independent journalist and commentator active in online right-of-center media.[1]</p><h2 id="snap-influencer-payments-claim" tabindex="-1">SNAP influencer payments claim <a class="header-anchor" href="#snap-influencer-payments-claim" aria-label="Permalink to &quot;SNAP influencer payments claim&quot;">​</a></h2><p>In March 2025, amid a debate over proposals to ban the purchase of candy and soda with <a href="/concepts/snap">Supplemental Nutrition Assistance Program</a> benefits, Sorter and others pointed out that conservative influencers defending soda&#39;s eligibility were reportedly being offered upwards of $1,000 per post to promote the position on behalf of soda companies.[1] Commentary by <a href="/entities/jordan-sather">Jordan Sather</a> cited Sorter&#39;s observation alongside the note that Coca-Cola earns billions of dollars per year from soda purchased with SNAP funds, giving the industry a strong lobbying incentive, and that a cluster of influencers had posted in defense of the status quo at roughly the same time.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Overexposed Engagement Farmers &amp; Maple-Flavored Monarchs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nick-sorter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nickSorter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nickSorter as default
};
