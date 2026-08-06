import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Demand Progress","description":"","frontmatter":{"title":"Demand Progress","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["civil-liberties","privacy","surveillance","nonprofit"],"sources":["raw/badlands-news-brief-7a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/demand-progress.md","filePath":"entities/demand-progress.md","lastUpdated":null}');
const _sfc_main = { name: "entities/demand-progress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="demand-progress" tabindex="-1">Demand Progress <a class="header-anchor" href="#demand-progress" aria-label="Permalink to &quot;Demand Progress&quot;">​</a></h1><p>Demand Progress is a nonprofit advocacy organization active on civil liberties and government surveillance issues in the United States.[1]</p><h2 id="response-to-the-odni-data-broker-report" tabindex="-1">Response to the ODNI data-broker report <a class="header-anchor" href="#response-to-the-odni-data-broker-report" aria-label="Permalink to &quot;Response to the ODNI data-broker report&quot;">​</a></h2><p>The group&#39;s attorney Sean Vitka served as one of the most widely quoted critics of the declassified report, commissioned by Director of National Intelligence <a href="/entities/avril-haines">Avril Haines</a>, showing that federal agencies had been purchasing large volumes of personal information about Americans from third-party data brokers.[1] &quot;This report reveals what we feared most,&quot; Vitka said, adding that &quot;intelligence agencies are flouting the law and buying information about Americans that Congress and the Supreme Court have made clear the government should not have.&quot;[1]</p><p>The organization&#39;s position in the coverage was that the purchases relied on &quot;craven interpretations of aging laws&quot; to bypass privacy rights, at a time when prosecutors had increasingly ignored limits traditionally imposed on domestic surveillance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Defiant, Biden Protected &amp; Woke Worn&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/demand-progress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const demandProgress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  demandProgress as default
};
