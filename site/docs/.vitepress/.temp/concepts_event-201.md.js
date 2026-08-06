import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Event 201","description":"","frontmatter":{"title":"Event 201","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["pandemic","simulation","covid-19","usaid","biosecurity"],"sources":["raw/badlands-news-brief-306.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/event-201.md","filePath":"concepts/event-201.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/event-201.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="event-201" tabindex="-1">Event 201 <a class="header-anchor" href="#event-201" aria-label="Permalink to &quot;Event 201&quot;">​</a></h1><p><strong>Event 201</strong> was a pandemic simulation exercise focused on how to respond to a coronavirus outbreak, held in October 2019.[1] It is frequently cited in alternative-media analysis because of its proximity in time to the onset of the Covid-19 pandemic.</p><h2 id="usaid-funding-allegation" tabindex="-1">USAID funding allegation <a class="header-anchor" href="#usaid-funding-allegation" aria-label="Permalink to &quot;USAID funding allegation&quot;">​</a></h2><p>In December 2025, Major General <a href="/entities/aleksey-rtishchev">Aleksey Rtishchev</a>, head of Russia&#39;s Nuclear, Biological and Chemical Protection Troops, alleged that the U.S. Agency for International Development (<a href="/entities/usaid">USAID</a>) had provided funding for Event 201.[1] &quot;I would like to note that these exercises were held in October 2019... shortly before the start of the Covid-19 pandemic,&quot; he said.[1]</p><p>The claim was made in the course of broader Russian allegations that USAID may have been the civilian cover for pharmaceutical testing on Ukrainians at biological laboratories in Ukraine, an arrangement Rtishchev described as using civilian agencies and non-governmental organizations rather than military agencies to preserve secrecy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Truckloads of Proof, Holiday Intifada, &amp; Europe Must Swallow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-306" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-306</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/event-201.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const event201 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  event201 as default
};
