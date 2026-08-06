import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barry Zulauf","description":"","frontmatter":{"title":"Barry Zulauf","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["intelligence","ombudsman","2020-election","china"],"sources":["raw/badlands-brief-e15.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/barry-zulauf.md","filePath":"entities/barry-zulauf.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barry-zulauf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barry-zulauf" tabindex="-1">Barry Zulauf <a class="header-anchor" href="#barry-zulauf" aria-label="Permalink to &quot;Barry Zulauf&quot;">​</a></h1><p>Barry Zulauf is an intelligence community analytic ombudsman known for a report submitted to the <a href="/entities/senate-intelligence-committee">Senate Intelligence Committee</a> concerning the handling of intelligence on foreign interference in the 2020 U.S. election.[1]</p><h2 id="findings-on-analyst-reluctance" tabindex="-1">Findings on analyst reluctance <a class="header-anchor" href="#findings-on-analyst-reluctance" aria-label="Permalink to &quot;Findings on analyst reluctance&quot;">​</a></h2><p>Zulauf&#39;s report concluded that some analysts appeared reluctant to elevate evidence tied to <a href="/entities/china">China</a> because of disagreements with <a href="/entities/donald-trump">Trump</a> administration policies.[1] The finding is cited alongside statements by former Director of National Intelligence <a href="/entities/john-ratcliffe">John Ratcliffe</a>, who said in early 2021 that intelligence analysts faced political pressure regarding assessments of Chinese interference efforts.[1]</p><p>The Zulauf report has been invoked as corroborating background for the later investigation launched by Director of National Intelligence <a href="/entities/tulsi-gabbard">Tulsi Gabbard</a> into allegations that agencies concealed foreign election threat evidence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Intel Treason &amp; Insider Trading&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e15" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e15</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barry-zulauf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barryZulauf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barryZulauf as default
};
