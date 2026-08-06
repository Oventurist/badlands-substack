import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BaronHR","description":"","frontmatter":{"title":"BaronHR","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["staffing-agencies","immigration","labor-exploitation","warehouse"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/baronhr.md","filePath":"entities/baronhr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/baronhr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="baronhr" tabindex="-1">BaronHR <a class="header-anchor" href="#baronhr" aria-label="Permalink to &quot;BaronHR&quot;">​</a></h1><p>BaronHR is an American staffing agency identified in a November 2024 New York Times investigation as a supplier of undocumented migrant labor to warehouse and distribution operations.[1]</p><p>Several former corporate employees of the firm said BaronHR targeted undocumented immigrants because they were less likely to quit or speak up if mistreated.[1] The investigation described heinous working conditions, regular on-the-job injuries, and bouncing paychecks among the workers placed by such agencies.[1]</p><p>In 2017, when the first <a href="/entities/donald-trump">Trump</a> administration ratcheted up work-site inspections for undocumented workers, staffing agencies across the country received notices that federal agents would visit; around that time a BaronHR branch manager in Chula Vista ordered employees to throw away hundreds of employment verification documents known as I-9s.[1] Badlands commentary highlighted that no comparable inspections or crackdowns under Biden, Obama, or Bush were mentioned in the article, and argued the record showed Trump&#39;s administration alone attempting to crack down on the exploitation — prompting the criminal coverup behavior described.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/baronhr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const baronhr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  baronhr as default
};
