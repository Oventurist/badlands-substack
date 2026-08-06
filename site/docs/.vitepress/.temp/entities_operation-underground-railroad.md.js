import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Operation Underground Railroad","description":"","frontmatter":{"title":"Operation Underground Railroad","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","child-trafficking","tim-ballard"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/operation-underground-railroad.md","filePath":"entities/operation-underground-railroad.md","lastUpdated":null}');
const _sfc_main = { name: "entities/operation-underground-railroad.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operation-underground-railroad" tabindex="-1">Operation Underground Railroad <a class="header-anchor" href="#operation-underground-railroad" aria-label="Permalink to &quot;Operation Underground Railroad&quot;">​</a></h1><p>Operation Underground Railroad (O.U.R.) is an anti-trafficking organisation founded by <a href="/entities/tim-ballard">Tim Ballard</a> and dedicated to rescuing children from sex trafficking operations.[1]</p><p>The organisation&#39;s work reached a mass audience through the 2023 film <a href="/concepts/sound-of-freedom">Sound of Freedom</a>, which is based on Ballard&#39;s life and stars <a href="/entities/jim-caviezel">Jim Caviezel</a>.[1] The film&#39;s unexpected commercial success — including becoming the first independent film since the start of the COVID-19 pandemic to reach $100 million at the North American box office, according to <a href="/entities/variety">Variety</a> — gave Operation Underground Railroad&#39;s cause a prominence its supporters attributed to grassroots demand rather than to industry promotion, since mainstream outlets such as Rolling Stone and Bloomberg News covered the film negatively.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/operation-underground-railroad.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const operationUndergroundRailroad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  operationUndergroundRailroad as default
};
