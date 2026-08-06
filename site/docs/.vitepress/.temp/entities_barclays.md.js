import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barclays","description":"","frontmatter":{"title":"Barclays","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","finance","united-kingdom","epstein"],"sources":["raw/badlands-news-brief-6db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/barclays.md","filePath":"entities/barclays.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barclays.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barclays" tabindex="-1">Barclays <a class="header-anchor" href="#barclays" aria-label="Permalink to &quot;Barclays&quot;">​</a></h1><p>Barclays is a British multinational bank whose leadership became entangled in litigation surrounding <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a>.[1] Its chief executive, <a href="/entities/jes-staley">Jes Staley</a>, resigned in November 2021 after a preliminary investigation by United Kingdom regulators into his relationship with Epstein.[1]</p><h2 id="staley-litigation" tabindex="-1">Staley litigation <a class="header-anchor" href="#staley-litigation" aria-label="Permalink to &quot;Staley litigation&quot;">​</a></h2><p>In January 2023, documents lodged at a United States court in a lawsuit filed by one of Epstein&#39;s victims accused Staley, then 66, of having &quot;personally observ[ed] the sexual abuse of young women&quot; by Epstein.[1] The same lawsuit named <a href="/entities/jpmorgan-chase">JP Morgan</a>, where Staley worked in 2013 while Epstein was a private client of the firm.[1]</p><p>Commentary from <a href="/entities/badlands-media">Badlands Media</a> contributor <a href="/entities/jordan-sather">Jordan Sather</a> noted reporting from 2021 that United States financial regulators had examined emails between Epstein and Staley, some containing the cryptic phrase &quot;snow white,&quot; and argued that the episode vindicated researchers who had long described coded language used within alleged trafficking networks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Mostly Peaceful Riots and Billionaire Secrets&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barclays.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barclays = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barclays as default
};
