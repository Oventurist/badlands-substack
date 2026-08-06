import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Elvis Amoroso","description":"","frontmatter":{"title":"Elvis Amoroso","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","elections","2024-venezuelan-presidential-election"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/elvis-amoroso.md","filePath":"entities/elvis-amoroso.md","lastUpdated":null}');
const _sfc_main = { name: "entities/elvis-amoroso.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="elvis-amoroso" tabindex="-1">Elvis Amoroso <a class="header-anchor" href="#elvis-amoroso" aria-label="Permalink to &quot;Elvis Amoroso&quot;">​</a></h1><p>Elvis Amoroso is the president of Venezuela&#39;s <a href="/entities/national-electoral-council">National Electoral Council</a>, the body that declared <a href="/entities/nicolas-maduro">Nicolás Maduro</a> the winner of the July 2024 presidential election.[1]</p><p>Amoroso attributed the delay in publishing updated results to &quot;massive attacks&quot; on the council&#39;s &quot;technological infrastructure.&quot;[1] Updated figures released on Friday, August 2, 2024, based on 96.87% of tally sheets, credited Maduro with 6.4 million votes and opposition candidate <a href="/entities/edmundo-gonzalez">Edmundo González</a> with 5.3 million.[1] An Associated Press analysis of nearly 24,000 opposition-published tally sheets — covering 79% of voting machines and 10.26 million votes decoded from QR codes — instead found González with 6.89 million votes and Maduro with 3.13 million, casting serious doubt on the official declaration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/elvis-amoroso.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elvisAmoroso = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elvisAmoroso as default
};
