import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harry Enten","description":"","frontmatter":{"title":"Harry Enten","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cnn","polling","data-analysis","media","immigration"],"sources":["raw/badlands-brief-eed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/harry-enten.md","filePath":"entities/harry-enten.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harry-enten.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harry-enten" tabindex="-1">Harry Enten <a class="header-anchor" href="#harry-enten" aria-label="Permalink to &quot;Harry Enten&quot;">​</a></h1><p>Harry Enten is a senior data analyst for <a href="/entities/cnn">CNN</a> who covers polling and electoral data.[1]</p><h2 id="immigration-polling-analysis-2026" tabindex="-1">Immigration polling analysis, 2026 <a class="header-anchor" href="#immigration-polling-analysis-2026" aria-label="Permalink to &quot;Immigration polling analysis, 2026&quot;">​</a></h2><p>In early 2026, Enten discussed polling on the network indicating that public trust on immigration and border security had shifted in favor of Republicans.[1] He said Americans currently trust Republicans more than Democrats to handle immigration issues, with a roughly five-point Republican advantage — a reversal from 2018, when Democrats led on the issue.[1] He further noted that the polling suggests Democrats occupy a weaker position on immigration now than they did during <a href="/entities/donald-trump">Donald Trump</a>&#39;s first term.[1]</p><p>Enten&#39;s analysis was cited alongside a <a href="/entities/reuters">Reuters</a>/Ipsos nationwide survey finding 61% of U.S. adults supported the goal of deporting unauthorized immigrants, including 92% of Republicans and 35% of Democrats, while 60% believed <a href="/entities/immigration-and-customs-enforcement">ICE</a> agents had overstepped in their enforcement actions and 63% of Democrats favored abolishing the agency.[1] Badlands coverage treated the segment as a mainstream-media admission that Democrats were &quot;tanking&quot; on the immigration narrative.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;WAR!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-eed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-eed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harry-enten.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harryEnten = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harryEnten as default
};
