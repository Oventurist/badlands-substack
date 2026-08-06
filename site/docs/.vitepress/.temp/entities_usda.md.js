import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Department of Agriculture","description":"","frontmatter":{"title":"United States Department of Agriculture","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["agencies","food-policy","snap","federal-government"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/usda.md","filePath":"entities/usda.md","lastUpdated":null}');
const _sfc_main = { name: "entities/usda.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-department-of-agriculture" tabindex="-1">United States Department of Agriculture <a class="header-anchor" href="#united-states-department-of-agriculture" aria-label="Permalink to &quot;United States Department of Agriculture&quot;">​</a></h1><p>The U.S. Department of Agriculture (USDA) is the federal agency that administers the <a href="/concepts/snap">Supplemental Nutrition Assistance Program</a>.[1]</p><p>The agency&#39;s gatekeeping role over SNAP rules became a point of contention in the 2025 food-policy debate: previous efforts by states including Minnesota, California and New York to restrict the purchase of junk food with SNAP benefits were rejected by the USDA.[1] Senator <a href="/entities/rand-paul">Rand Paul</a>&#39;s <a href="/concepts/nutritious-snap-act">Nutritious SNAP Act of 2025</a> was framed in part as a response to those rejections, aiming to restore state flexibility over the program and to respect state decisions to combat chronic disease.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/usda.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usda = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usda as default
};
