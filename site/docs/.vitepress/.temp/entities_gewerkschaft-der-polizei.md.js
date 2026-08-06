import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gewerkschaft der Polizei","description":"","frontmatter":{"title":"Gewerkschaft der Polizei","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","police","union","knife-crime"],"sources":["raw/badlands-news-brief-0ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gewerkschaft-der-polizei.md","filePath":"entities/gewerkschaft-der-polizei.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gewerkschaft-der-polizei.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gewerkschaft-der-polizei" tabindex="-1">Gewerkschaft der Polizei <a class="header-anchor" href="#gewerkschaft-der-polizei" aria-label="Permalink to &quot;Gewerkschaft der Polizei&quot;">​</a></h1><p>The Gewerkschaft der Polizei (GdP) is the German police union. In August 2024 the organization entered a national policy debate over knife crime when its chairman, <a href="/entities/jochen-kopelke">Jochen Kopelke</a>, urged Germany&#39;s federal government to consider paying rewards to people who surrender knives, including a year of Netflix in exchange for a banned butterfly knife.[1]</p><h2 id="knife-crime-advocacy" tabindex="-1">Knife-crime advocacy <a class="header-anchor" href="#knife-crime-advocacy" aria-label="Permalink to &quot;Knife-crime advocacy&quot;">​</a></h2><p>The union&#39;s leadership characterized knife crime as an epidemic enveloping German cities and pressed the federal left-wing administration to adopt unconventional measures.[1] The GdP position combined an amnesty for knife holders with material incentives intended to reach youths, on the reasoning that a surrender program without rewards would not attract participation.[1]</p><p>Existing German law prohibits possession of knives with blades of 12 cm or greater, but butterfly knives had become a favored weapon and knife offenses had risen sharply in the years preceding the proposal, which the union cited as evidence that the statutory approach alone was insufficient.[1] The initiative is covered in detail at <a href="/concepts/german-knife-amnesty-proposal">the German knife amnesty proposal</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Walz Cycle Consumes Itself as Tensions Pause&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gewerkschaft-der-polizei.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gewerkschaftDerPolizei = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gewerkschaftDerPolizei as default
};
