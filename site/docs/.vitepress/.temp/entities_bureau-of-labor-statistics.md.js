import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bureau of Labor Statistics","description":"","frontmatter":{"title":"Bureau of Labor Statistics","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["government-agency","statistics","labor","economy"],"sources":["raw/a-time-to-strike.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/bureau-of-labor-statistics.md","filePath":"entities/bureau-of-labor-statistics.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bureau-of-labor-statistics.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bureau-of-labor-statistics" tabindex="-1">Bureau of Labor Statistics <a class="header-anchor" href="#bureau-of-labor-statistics" aria-label="Permalink to &quot;Bureau of Labor Statistics&quot;">​</a></h1><p>The Bureau of Labor Statistics (BLS) is the principal federal agency responsible for measuring labor market activity, working conditions, price changes and productivity in the United States. Within the Badlands Media corpus it functions as an authoritative data source invoked to establish baseline economic conditions rather than as a contested actor.</p><p>In <a href="/concepts/a-time-to-strike">A Time to Strike</a> (October 11, 2023), <a href="/entities/ashe-in-america">Ashe in America</a> quotes BLS Consumer Expenditure research to support the claim that &quot;Life in America requires two incomes.&quot; The passage reproduced from the agency&#39;s September 2020 Monthly Labor Review article states that CE data show dual-income households have been a majority among U.S. households for at least the last two decades, with the share fairly stable between 1998 and 2017 and ranging from 52 to 58 percent — where a dual-income household is defined as one in which one spouse works full time and the other works at least part time.</p><p>The article uses this finding, together with declining U.S. birth rates and the fragility of private and multiemployer pensions, to argue that the mid-century single-earner household invoked by striking <a href="/entities/united-auto-workers">United Auto Workers</a> members is no longer economically available, and that the strike wave&#39;s demands are therefore detached from measurable conditions.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bureau-of-labor-statistics.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bureauOfLaborStatistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bureauOfLaborStatistics as default
};
