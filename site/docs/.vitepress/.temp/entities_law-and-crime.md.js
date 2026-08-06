import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Law & Crime","description":"","frontmatter":{"title":"Law & Crime","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","legal-journalism","court-coverage"],"sources":["raw/badlands-news-brief-34a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/law-and-crime.md","filePath":"entities/law-and-crime.md","lastUpdated":null}');
const _sfc_main = { name: "entities/law-and-crime.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="law-crime" tabindex="-1">Law &amp; Crime <a class="header-anchor" href="#law-crime" aria-label="Permalink to &quot;Law &amp; Crime&quot;">​</a></h1><p>Law &amp; Crime is a legal news outlet that covers courtroom proceedings and high-profile trials in the United States.[1]</p><p>Badlands Media cited Law &amp; Crime&#39;s live-trial coverage of the February 2023 bail hearing for FTX founder <a href="/entities/sam-bankman-fried">Sam Bankman-Fried</a>, in which Senior U.S. District Judge <a href="/entities/lewis-kaplan">Lewis Kaplan</a> pressed both prosecutors and defense counsel over the terms of a $250 million bond package.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Musk Investigated, Fauci Exposed &amp; Committees Engaged&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-34a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-34a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/law-and-crime.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lawAndCrime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lawAndCrime as default
};
