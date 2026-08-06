import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sony","description":"","frontmatter":{"title":"Sony","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","television","litigation","entertainment"],"sources":["raw/badlands-news-brief-520.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sony.md","filePath":"entities/sony.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sony.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sony" tabindex="-1">Sony <a class="header-anchor" href="#sony" aria-label="Permalink to &quot;Sony&quot;">​</a></h1><p><strong>Sony</strong> is a multinational entertainment and electronics conglomerate whose television arm produces the syndicated game shows <a href="/entities/jeopardy">&quot;Jeopardy!&quot;</a> and <a href="/entities/wheel-of-fortune">&quot;Wheel of Fortune&quot;</a>.[1]</p><h2 id="distribution-rights-litigation-against-cbs" tabindex="-1">Distribution rights litigation against CBS <a class="header-anchor" href="#distribution-rights-litigation-against-cbs" aria-label="Permalink to &quot;Distribution rights litigation against CBS&quot;">​</a></h2><p>Sony sued <a href="/entities/cbs">CBS</a> in October 2024, alleging that it was owed money from the two studios&#39; past distribution deals and that CBS had breached its contract by setting up licensing deals in Australia and other overseas markets.[1] CBS countersued in November, arguing that its contract clearly granted it distribution rights to the two series in perpetuity, and in February 2025 obtained a temporary restraining order after Sony moved to take over distribution rights that same month.[1]</p><p>On April 10, 2025, a Los Angeles Superior Court judge backed Sony in the dispute. Judge Kevin Brazile wrote in his order that &quot;the Court believes that Sony had the right, in its discretion, to terminate the distribution agreements in August 2024.&quot;[1] CBS Media Ventures said it planned to appeal the decision immediately.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> described the outcome — which some outlets called &quot;shocking&quot; — as the latest entry in a long CBS legal losing streak and &quot;the end of an era.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Indian iPhones, A Sovereign Bromance, &amp; Allegedly Real IDs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-520" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-520</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sony.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sony = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sony as default
};
