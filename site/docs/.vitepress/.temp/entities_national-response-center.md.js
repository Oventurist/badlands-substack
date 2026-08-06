import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Response Center","description":"","frontmatter":{"title":"National Response Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["federal-agencies","hazardous-materials","incident-reporting"],"sources":["raw/badlands-news-brief-409.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-response-center.md","filePath":"entities/national-response-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-response-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-response-center" tabindex="-1">National Response Center <a class="header-anchor" href="#national-response-center" aria-label="Permalink to &quot;National Response Center&quot;">​</a></h1><p>The National Response Center (NRC) is the federal point of contact for reporting hazardous material and chemical release incidents.[1]</p><h2 id="_2023-ammonium-nitrate-incident-report" tabindex="-1">2023 ammonium nitrate incident report <a class="header-anchor" href="#_2023-ammonium-nitrate-incident-report" aria-label="Permalink to &quot;2023 ammonium nitrate incident report&quot;">​</a></h2><p>On May 10, 2023, <a href="/entities/dyno-nobel">Dyno Nobel</a> filed a report with the National Response Center concerning the disappearance of approximately 61,000 pounds of ammonium nitrate from a sealed railcar traveling from Cheyenne, Wyoming, to Saltdale, California.[1] The filing helped trigger parallel inquiries by the <a href="/entities/federal-railroad-administration">Federal Railroad Administration</a>, the <a href="/entities/california-public-utilities-commission">California Public Utilities Commission</a> and <a href="/entities/union-pacific">Union Pacific</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quid Pro Joe, Biden&#39;s Border &amp; Train Track Conspiracies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-409" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-409</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-response-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalResponseCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalResponseCenter as default
};
