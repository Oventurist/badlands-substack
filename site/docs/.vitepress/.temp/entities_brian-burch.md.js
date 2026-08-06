import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brian Burch","description":"","frontmatter":{"title":"Brian Burch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["catholic-church","vatican","diplomacy","trump-administration"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brian-burch.md","filePath":"entities/brian-burch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brian-burch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brian-burch" tabindex="-1">Brian Burch <a class="header-anchor" href="#brian-burch" aria-label="Permalink to &quot;Brian Burch&quot;">​</a></h1><p>Brian Burch is the head of the right-wing Catholic advocacy group <a href="/entities/catholicvote">CatholicVote</a> and was named by President-elect <a href="/entities/donald-trump">Donald Trump</a> as his pick for United States ambassador to the Vatican.[1]</p><p>Burch is a critic of <a href="/entities/pope-francis">Pope Francis</a>, and his selection was reported as standing in stark contrast to the Pope&#39;s near-simultaneous appointment of Trump critic <a href="/entities/robert-mcelroy">Robert McElroy</a> as archbishop of Washington, D.C. CatholicVote, the organization Burch leads, rallied Catholic support for Trump during the 2024 election.[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> treated the paired appointments as part of a broader realignment among the &quot;city states&quot; of Washington, D.C., the City of London, and Vatican City in the weeks before Inauguration Day.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brian-burch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brianBurch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brianBurch as default
};
