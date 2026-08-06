import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jake Hoffman","description":"","frontmatter":{"title":"Jake Hoffman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","republican-party","election-law","state-legislature"],"sources":["raw/badlands-news-brief-5b3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jake-hoffman.md","filePath":"entities/jake-hoffman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jake-hoffman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jake-hoffman" tabindex="-1">Jake Hoffman <a class="header-anchor" href="#jake-hoffman" aria-label="Permalink to &quot;Jake Hoffman&quot;">​</a></h1><p>Jake Hoffman is a Republican member of the Arizona state Senate and a leading legislative advocate of post-2020 election-integrity measures in the state.[1]</p><p>Hoffman sponsored <a href="/concepts/arizona-senate-bill-1695">Senate Bill 1695</a>, a 2023 measure aimed at combating voter fraud in Arizona, which was approved by the Senate Government Committee on February 16, 2023.[1] The bill would bar certification of an election in which voters were disenfranchised because election laws had been violated, and would require a complete redo of any such election in Arizona counties with more than one million residents.[1]</p><p>Badlands Media contributor <a href="/entities/justin-deschamps">Justin Deschamps</a> characterized the measure as a step in the right direction that nonetheless exposed a deeper problem — that a remedy so basic was not already standard policy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Election Laws &amp; Justice for the Exploited&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jake-hoffman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jakeHoffman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jakeHoffman as default
};
