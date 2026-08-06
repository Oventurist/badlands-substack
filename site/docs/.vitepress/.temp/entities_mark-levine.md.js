import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark Levine","description":"","frontmatter":{"title":"Mark Levine","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","budget","comptroller"],"sources":["raw/badlands-brief-8db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mark-levine.md","filePath":"entities/mark-levine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mark-levine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mark-levine" tabindex="-1">Mark Levine <a class="header-anchor" href="#mark-levine" aria-label="Permalink to &quot;Mark Levine&quot;">​</a></h1><p>Mark Levine is the Comptroller of the City of New York, the municipality&#39;s independently elected fiscal watchdog.[1]</p><h2 id="fiscal-year-2027-budget-dispute" tabindex="-1">Fiscal year 2027 budget dispute <a class="header-anchor" href="#fiscal-year-2027-budget-dispute" aria-label="Permalink to &quot;Fiscal year 2027 budget dispute&quot;">​</a></h2><p>Levine responded critically to the preliminary $127 billion fiscal year 2027 budget released on February 17, 2026 by Mayor <a href="/entities/zohran-mamdani">Zohran Mamdani</a>, which proposed a 9.5 percent increase in property tax rates as a means of closing an inherited $5.4 billion deficit.[1] The comptroller characterized the property tax route as &quot;a pretty extreme option,&quot; signaling institutional resistance to what would be the city&#39;s first such rate increase in more than two decades.[1] As comptroller, Levine&#39;s assessment carries weight in the city&#39;s budget negotiations because his office audits agency spending and certifies the assumptions underlying the mayor&#39;s revenue projections.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Hunters Become the Hunted as Traitors Reveal Themselves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-8db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-8db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mark-levine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markLevine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markLevine as default
};
