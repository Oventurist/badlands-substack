import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeff Asher","description":"","frontmatter":{"title":"Jeff Asher","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["crime-statistics","analysts","data"],"sources":["raw/badlands-news-brief-2e4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jeff-asher.md","filePath":"entities/jeff-asher.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeff-asher.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeff-asher" tabindex="-1">Jeff Asher <a class="header-anchor" href="#jeff-asher" aria-label="Permalink to &quot;Jeff Asher&quot;">​</a></h1><p><strong>Jeff Asher</strong> is a crime statistics expert whose analysis of 2025 data concluded that the United States was on pace for the largest one-year drop in murders the nation has ever recorded.[1]</p><p>Asher&#39;s analysis drew on the <a href="/concepts/real-time-crime-index">Real-Time Crime Index</a>, which compiles data from 570 law enforcement agencies and showed a nearly 20% decline in murders in 2025 relative to the same period in 2024.[1] He situated the fall in killings within a broader decrease in violent crime following the COVID-era spike; mass killings in the U.S. also fell in 2025 to their lowest level since 2006.[1] The database he used excludes manslaughter, self-defense, negligence and &quot;accidental killings&quot; from its statistics, and its figures ran through October pending the <a href="/entities/fbi">FBI</a>&#39;s official release.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Escalating Elections, Fragmented Forums, &amp; Merry Murder Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeff-asher.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeffAsher = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeffAsher as default
};
