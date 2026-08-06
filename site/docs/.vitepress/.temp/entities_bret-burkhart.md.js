import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bret Burkhart","description":"","frontmatter":{"title":"Bret Burkhart","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","radio","ice","immigration-enforcement"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bret-burkhart.md","filePath":"entities/bret-burkhart.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bret-burkhart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bret-burkhart" tabindex="-1">Bret Burkhart <a class="header-anchor" href="#bret-burkhart" aria-label="Permalink to &quot;Bret Burkhart&quot;">​</a></h1><p>Bret Burkhart is a radio host at <a href="/entities/kcbs-740-am">KCBS 740 AM</a>, a Bay Area station described as owned by billionaire <a href="/entities/george-soros">George Soros</a>.[1]</p><p>On January 26, 2025, Burkhart disclosed on air details about <a href="/entities/immigration-and-customs-enforcement">US Immigration and Customs Enforcement</a> operations in San Jose, California, including the types of unmarked vehicles used by undercover agents and the specific locations where they were present.[1] He cited updates from social media posts by the <a href="/entities/rapid-response-network">Rapid Response Network</a>, an organization opposing deportation efforts.[1] Reporting noted that the broadcast might have endangered the agents&#39; safety by potentially exposing their covert operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bret-burkhart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bretBurkhart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bretBurkhart as default
};
